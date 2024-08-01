// Unity built-in shader source. Copyright (c) 2016 Unity Technologies. MIT license (see license.txt)

#ifndef ZEPETO_CLOTH_BRDF_INCLUDED
#define ZEPETO_CLOTH_BRDF_INCLUDED

#include "UnityStandardBRDF.cginc"

#ifdef _CLOTH

// INPUT
half3 _SheenColorFactor;
sampler2D _SheenColorMap;
half _SheenRoughnessFactor;
sampler2D _SheenRoughnessMap;

// CORE
half3 SampleSheenColor(float2 uv)
{
    //#ifdef _CLOTH_MAP
    return tex2D(_SheenColorMap, uv).rgb * _SheenColorFactor;
    //#else
    //return _SheenColorFactor;
    //#endif
}

half SampleSeenRoughness(float2 uv)
{
    //#ifdef _CLOTH_ROUGHNESS_MAP
    return tex2D(_SheenRoughnessMap, uv).r * _SheenRoughnessFactor;
    //#else
    //return _SheenRoughnessFactor;
    //#endif
}

// BRDF

float CharlieD(float roughness, float ndoth)
{
    float r = max(1e-4f, roughness);
    float rcpR  = 1.0 / r;
    float cos2h = ndoth * ndoth;
    float sin2h = 1.0 - cos2h;
    return (2.0 + rcpR) * pow(sin2h, rcpR * 0.5) * 0.5;
}

float lamda(float x, float alphaG)
{
    float oneMinusAlphaSq = (1.0 - alphaG) * (1.0 - alphaG);
    float a = lerp(21.5473, 25.3245, oneMinusAlphaSq);
    float b = lerp(3.82987, 3.32435, oneMinusAlphaSq);
    float c = lerp(0.19823, 0.16801, oneMinusAlphaSq);
    float d = lerp(-1.97760, -1.27393, oneMinusAlphaSq);
    float e = lerp(-4.32054, -4.85967, oneMinusAlphaSq);
    return a / (1.0 + b * pow(x, c)) + d * x + e;
}

float lambdaSheen(float cosTheta, float alphaG)
{
    return abs(cosTheta) < 0.5 ? exp(lamda(cosTheta, alphaG)) : exp(2.0 * lamda(0.5, alphaG) - lamda(1.0 - cosTheta, alphaG));
}

float CharlieV(float roughness, float ndotv, float ndotl)
{
    return 1. / ((1. + lambdaSheen(ndotv, roughness) + lambdaSheen(ndotl, roughness)) * (4. * ndotv * ndotl));
}

float AshikhminV(float ndotv, float ndotl)
{
    return 1. / max(1e-4f, (4. * (ndotl + ndotv - ndotl * ndotv)));
}

half4 BRDFCloth(half3 diffColor, half3 specColor, half oneMinusReflectivity, half smoothness,
    float3 normal, float3 viewDir,
    UnityLight light, UnityIndirect gi,
    half3 sheenColor, half sheenRoughness)
{
    float3 halfDir = Unity_SafeNormalize (float3(light.dir) + viewDir);

    half nl = saturate(dot(normal, light.dir));
    float nh = saturate(dot(normal, halfDir));
    half nv = saturate(dot(normal, viewDir));
    
    // Specular term
    half perceptualRoughness = sheenRoughness;
    half roughness = PerceptualRoughnessToRoughness(perceptualRoughness);

    float sheenD = CharlieD(roughness, nh);
    float sheenV = AshikhminV(nv, nl);

    // surfaceReduction = Int D(NdotH) * NdotH * Id(NdotL>0) dH = 1/(realRoughness^2+1)

    // 1-0.28*x^3 as approximation for (1/(x^4+1))^(1/2.2) on the domain [0;1]
    // 1-x^3*(0.6-0.08*x)   approximation for 1/(x^4+1)
#ifdef UNITY_COLORSPACE_GAMMA
    half surfaceReduction = 0.28;
#else
    half surfaceReduction = (0.6-0.08*perceptualRoughness);
#endif

    surfaceReduction = 1.0 - roughness*perceptualRoughness*surfaceReduction;

    half grazingTerm = saturate(smoothness + (1-oneMinusReflectivity));
    half3 color =   (diffColor + sheenD * sheenV * specColor * sheenColor) * light.color * nl
                    + gi.diffuse * diffColor
                    + surfaceReduction * gi.specular * FresnelLerpFast (specColor, grazingTerm, nv);

    return half4(color, 1);
}


half4 BRDFCloth2(half3 diffColor, half3 specColor, half oneMinusReflectivity, half smoothness,
    float3 normal, float3 viewDir,
    UnityLight light, UnityIndirect gi,
    half3 sheenColor, half sheenRoughness)
{
    float3 halfDir = Unity_SafeNormalize (float3(light.dir) + viewDir);
    float3 reflDir = reflect (viewDir, normal);

    half nl = saturate(dot(normal, light.dir));
    float nh = saturate(dot(normal, halfDir));
    half nv = saturate(dot(normal, viewDir));
    //float lh = saturate(dot(light.dir, halfDir));

    float sR = sheenRoughness * sheenRoughness;
    float sheenD = CharlieD(sR, nh);
    float sheenV = AshikhminV(nv, nl);

    //half sheenVisibility = 1 / (4 * (nl + nv - nl * nv));
    
    half2 rlPow4AndFresnelTerm = Pow4 (float2(dot(reflDir, light.dir), 1-nv));  // use R.L instead of N.H to save couple of instructions
    half rlPow4 = rlPow4AndFresnelTerm.x; // power exponent must match kHorizontalWarpExp in NHxRoughness() function in GeneratedTextures.cpp
    half fresnelTerm = rlPow4AndFresnelTerm.y;

    half grazingTerm = saturate(smoothness + (1-oneMinusReflectivity));

    half3 diffuse = diffColor;
    half3 specular = (sheenD * sheenV);
    half3 color = diffuse + specular;
    color *= light.color * nl;
    color += + BRDF3_Indirect(diffColor, specColor, gi, grazingTerm, fresnelTerm);
    
    return half4(color,1);
}

#endif

#endif // ZEPETO_CLOTH_BRDF_INCLUDED
