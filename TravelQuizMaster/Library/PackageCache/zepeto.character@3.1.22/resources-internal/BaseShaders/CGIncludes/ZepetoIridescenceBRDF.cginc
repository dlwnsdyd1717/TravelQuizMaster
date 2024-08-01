// Unity built-in shader source. Copyright (c) 2016 Unity Technologies. MIT license (see license.txt)

#ifndef ZEPETO_IRIDESCENCE_BRDF_INCLUDED
#define ZEPETO_IRIDESCENCE_BRDF_INCLUDED

#include "UnityStandardBRDF.cginc"

#ifdef _IRIDESCENCE

// INPUT
half _Iridescence;
half _IridescenceThickness;
sampler2D _IridescenceThicknessMap;
float4 _IridescenceThicknessMap_ST;
half4 _IridescenceThicknessRemap;
half _IridescneceEta2;
half _IridescneceEta3;
half _IridescneceKappa3;
half _IridescneceAngleScale;

// CORE
half SampleIridescenceThickness(float2 uv)
{
    half iridescenceThickness = 0;

    #ifdef _IRIDESCENCE_THICKNESSMAP
    iridescenceThickness = tex2D(_IridescenceThicknessMap, TRANSFORM_TEX(uv, _IridescenceThicknessMap)).r;
    iridescenceThickness = _IridescenceThicknessRemap.x + iridescenceThickness * (_IridescenceThicknessRemap.y - _IridescenceThicknessRemap.x);
    #else
    iridescenceThickness = _IridescenceThickness;
    #endif

    return iridescenceThickness;
}

// BRDF
inline float sqr(float x) { return x * x; }
inline float2 sqr(float2 x) { return x * x; }

// Fresnel equations for dielectric/dielectric interfaces.
void fresnelDielectric(in float ct1, in float n1, in float n2,
    out float2 R, out float2 phi) {

    float st1 = (1 - ct1 * ct1); // Sinus theta1 'squared'
    float nr = n1 / n2;

    if (sqr(nr) * st1 > 1) { // Total reflection

        R = float2(1, 1);
        phi = 2.0 * atan(float2(-sqr(nr) * sqrt(st1 - 1.0 / sqr(nr)) / ct1,
            -sqrt(st1 - 1.0 / sqr(nr)) / ct1));
    }
    else {   // Transmission & Reflection

        float ct2 = sqrt(1 - sqr(nr) * st1);
        float2 r = float2((n2 * ct1 - n1 * ct2) / (n2 * ct1 + n1 * ct2),
            (n1 * ct1 - n2 * ct2) / (n1 * ct1 + n2 * ct2));
        phi.x = (r.x < 0.0) ? UNITY_PI : 0.0;
        phi.y = (r.y < 0.0) ? UNITY_PI : 0.0;
        R = sqr(r);
    }
}

// Fresnel equations for dielectric/conductor interfaces.
void fresnelConductor(in float ct1, in float n1, in float n2, in float k,
    out float2 R, out float2 phi) {
    R = 0;
    phi = 0;
    if (k == 0) { // use dielectric formula to avoid numerical issues
        fresnelDielectric(ct1, n1, n2, R, phi);
        return;
    }

    float A = sqr(n2) * (1 - sqr(k)) - sqr(n1) * (1 - sqr(ct1));
    float B = sqrt(sqr(A) + sqr(2 * sqr(n2) * k));
    float U = sqrt((A + B) / 2.0);
    float V = sqrt((B - A) / 2.0);

    R.y = (sqr(n1 * ct1 - U) + sqr(V)) / (sqr(n1 * ct1 + U) + sqr(V));
    phi.y = atan2(2 * n1 * V * ct1, sqr(U) + sqr(V) - sqr(n1 * ct1)) + UNITY_PI;

    R.x = (sqr(sqr(n2) * (1 - sqr(k)) * ct1 - n1 * U) + sqr(2 * sqr(n2) * k * ct1 - n1 * V))
        / (sqr(sqr(n2) * (1 - sqr(k)) * ct1 + n1 * U) + sqr(2 * sqr(n2) * k * ct1 + n1 * V));
    phi.x = atan2(2 * n1 * sqr(n2) * ct1 * (2 * k * U - (1 - sqr(k)) * V), sqr(sqr(n2) * (1 + sqr(k)) * ct1) - sqr(n1) * (sqr(U) + sqr(V)));
}

// XYZ to CIE 1931 RGB color space (using neutral E illuminant)
static const half3x3 XYZ_TO_RGB = half3x3(2.3706743, -0.5138850, 0.0052982, -0.9000405, 1.4253036, -0.0146949, -0.4706338, 0.0885814, 1.0093968);


// Depolarization functions for natural light
inline float depol(float2 polV) { return 0.5 * (polV.x + polV.y); }
inline float3 depolColor(float3 colS, float3 colP) { return 0.5 * (colS + colP); }

// Evaluation XYZ sensitivity curves in Fourier space
float3 evalSensitivity(float opd, float shift) {

    // Use Gaussian fits, given by 3 parameters: val, pos and var
    float phase = 2 * UNITY_PI * opd * 1.0e-6;
    float3 val = float3(5.4856e-13, 4.4201e-13, 5.2481e-13);
    float3 pos = float3(1.6810e+06, 1.7953e+06, 2.2084e+06);
    float3 var = float3(4.3278e+09, 9.3046e+09, 6.6121e+09);
    float3 xyz = val * sqrt(2.0 * UNITY_PI * var) * cos(pos * phase + shift) * exp(-var * phase * phase);
    xyz.x += 9.7470e-14 * sqrt(2.0 * UNITY_PI * 4.5282e+09) * cos(2.2399e+06 * phase + shift) * exp(-4.5282e+09 * phase * phase);
    return xyz / 1.0685e-7;
}

// Evaluate the reflectance for a thin-film layer on top of a dielectric medum
// Based on the paper [LAURENT 2017] A Practical Extension to Microfacet Theory for the Modeling of Varying Iridescence
half3 ThinFilmIridescence(float thickness, float eta_2, float eta_3, float kappa_3 , float cosTheta1)
{
    float eta_1 = 1.0; // Air on top, no coat.
    
    // iridescenceThickness unit is micrometer for this equation here. Mean 0.5 is 500nm.
    float Dinc = 2 * eta_2 * thickness;

    // Force eta_2 -> eta_1 when Dinc -> 0.0
    eta_2 = lerp(eta_1, eta_2, smoothstep(0.0, 0.03, Dinc));
    
    float cosTheta2 = sqrt(1.0 - sqr(eta_1 / eta_2) * (1 - sqr(cosTheta1)));

    // First interface
    float2 R12, phi12;
    fresnelDielectric(cosTheta1, eta_1, eta_2, R12, phi12);
    float2 R21 = R12;
    float2 T121 = float2(1.0, 1.0) - R12;
    float2 phi21 = float2(UNITY_PI, UNITY_PI) - phi12;

    // Second interface
    float2 R23, phi23;
    fresnelConductor(cosTheta2, eta_2, eta_3, kappa_3, R23, phi23);

    // Phase shift
    float OPD = Dinc * cosTheta2;
    float2 phi2 = phi21 + phi23;

    // Compound terms
    float3 I = float3(0, 0, 0);
    float2 R123 = clamp(R12 * R23, 1e-5, 0.9999);
    float2 r123 = sqrt(R123);
    float2 Rs = sqr(T121) * R23 / (float2(1.0, 1.0) - R123);

    // Reflectance term for m=0 (DC term amplitude)
    float2 C0 = R12 + Rs;
    float3 S0 = evalSensitivity(0.0, 0.0);
    I += depol(C0) * S0;

    // Reflectance term for m>0 (pairs of diracs)
    float2 Cm = Rs - T121;

    [unroll(3)]
    for (int m = 1; m <= 3; ++m)
    {
        Cm *= r123;
        float3 SmS = 2.0 * evalSensitivity(m * OPD, m * phi2.x);
        float3 SmP = 2.0 * evalSensitivity(m * OPD, m * phi2.y);
        I += depolColor(Cm.x * SmS, Cm.y * SmP);
    }

    // Convert back to RGB reflectance
    I = max(mul(I, XYZ_TO_RGB), float3(0.0, 0.0, 0.0));

    return I;
}

// BRDF1_Unity_PBS 에 Iridescence 추가버전
half4 BDRFIridescence(half3 diffColor, half3 specColor, half oneMinusReflectivity, half smoothness,
    float3 normal, float3 viewDir,
    UnityLight light, UnityIndirect gi,float thickness)
{
    float perceptualRoughness = SmoothnessToPerceptualRoughness (smoothness);
    float3 halfDir = Unity_SafeNormalize (float3(light.dir) + viewDir);

    half nv = abs(dot(normal, viewDir));
    float nl = saturate(dot(normal, light.dir));
    float nh = saturate(dot(normal, halfDir));
    half lh = saturate(dot(light.dir, halfDir));
    
    // Diffuse term
    half diffuseTerm = DisneyDiffuse(nv, nl, lh, perceptualRoughness) * nl;

    // Specular term
    half roughness = PerceptualRoughnessToRoughness(perceptualRoughness);
#if UNITY_BRDF_GGX
    // GGX with roughtness to 0 would mean no specular at all, using max(roughness, 0.002) here to match HDrenderloop roughtness remapping.
    roughness = max(roughness, 0.002);
    float V = SmithJointGGXVisibilityTerm (nl, nv, roughness);
    float D = GGXTerm (nh, roughness);
#else
    // Legacy
    half V = SmithBeckmannVisibilityTerm (nl, nv, roughness);
    half D = NDFBlinnPhongNormalizedTerm (nh, PerceptualRoughnessToSpecPower(perceptualRoughness));
#endif
    
    thickness *= lerp(nv, 1, _IridescneceAngleScale);
    half3 I = ThinFilmIridescence(thickness, _IridescneceEta2, _IridescneceEta3, _IridescneceKappa3 , lh);
    half3 specularTerm = D * V * I * UNITY_PI;

#   ifdef UNITY_COLORSPACE_GAMMA
    specularTerm = sqrt(max(1e-4h, specularTerm));
#   endif
    
    specularTerm = max(0, specularTerm * nl);
#if defined(_SPECULARHIGHLIGHTS_OFF)
    specularTerm = 0.0;
#endif

    // surfaceReduction = Int D(NdotH) * NdotH * Id(NdotL>0) dH = 1/(roughness^2+1)
    half surfaceReduction;
#   ifdef UNITY_COLORSPACE_GAMMA
    surfaceReduction = 1.0-0.28*roughness*perceptualRoughness;      // 1-0.28*x^3 as approximation for (1/(x^4+1))^(1/2.2) on the domain [0;1]
#   else
    surfaceReduction = 1.0 / (roughness*roughness + 1.0);           // fade \in [0.5;1]
#   endif

// To provide true Lambert lighting, we need to be able to kill specular completely.
    specularTerm *= any(specColor) ? 1.0 : 0.0;

    float3 reflDir = Unity_SafeNormalize(reflect (-viewDir, normal));
    float3 vtanDir = Unity_SafeNormalize(reflDir + viewDir);
    float glcosTheta1 = dot(vtanDir, reflDir);
    half3 giI = ThinFilmIridescence(thickness, _IridescneceEta2, _IridescneceEta3, _IridescneceKappa3 , glcosTheta1);
    
    half grazingTerm = saturate(smoothness + (1-oneMinusReflectivity));
    half3 color = diffColor * (gi.diffuse + light.color * diffuseTerm)
                  + specularTerm * light.color * FresnelTerm (specColor, lh)
                  + surfaceReduction * gi.specular * FresnelLerp (specColor * giI, grazingTerm, giI);
    
    return half4(color, 1);
}
#endif

#endif // ZEPETO_IRIDESCENCE_BRDF_INCLUDED
