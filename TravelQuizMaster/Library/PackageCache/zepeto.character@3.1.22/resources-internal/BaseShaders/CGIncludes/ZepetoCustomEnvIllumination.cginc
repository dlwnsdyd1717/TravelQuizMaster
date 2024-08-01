// Unity built-in shader source. Copyright (c) 2016 Unity Technologies. MIT license (see license.txt)

#ifndef ZEPETO_CUSTOM_ENV_ILLUMINATION_INCLUDED
#define ZEPETO_CUSTOM_ENV_ILLUMINATION_INCLUDED

// Functions sampling light environment data (lightmaps, light probes, reflection probes), which is then returned as the UnityGI struct.

//#include "ZepetoImageBasedLighting.cginc"
//#include "UnityStandardUtils.cginc"
//#include "UnityShadowLibrary.cginc"
#include "UnityCG.cginc"
#include "UnityStandardBRDF.cginc"
#include "HLSLSupport.cginc"

#if _CUSTOM_SPEC_ENV
// INPUT

half        _EnvRotation;
UNITY_DECLARE_TEXCUBE(_EnvCubeMap);
//sampler2D   _EnvPanoramicMap;
//samplerCUBE _EnvCube;
half4       _EnvEmitColor;

// 

inline float2 ToRadialCoords(float3 coords, half rotation)
{
    float3 normalizedCoords = normalize(coords);
    float latitude = acos(normalizedCoords.y);
    float longitude = atan2(normalizedCoords.z, normalizedCoords.x);
    float2 sphereCoords = float2(longitude, latitude) * float2(0.5/UNITY_PI, 1.0/UNITY_PI);
    sphereCoords.x += rotation / 360;
    return sphereCoords;
}

inline float3 GetCustomEnv(sampler2D customEnv, half3 reflDir, half envRotation, half envMipmap)
{
    half4 coordi;
    coordi.xy = ToRadialCoords(normalize(reflDir), envRotation);
    coordi.z = 0;
    coordi.w = envMipmap;
    
    half4 tex = tex2Dlod (customEnv, coordi);
    return tex.rgb * _EnvEmitColor;
}

float3 RotateAroundYInDegrees (float3 vertex, float degrees)
{
    float alpha = degrees * UNITY_PI / 180.0;
    float sina, cosa;
    sincos(alpha, sina, cosa);
    float2x2 m = float2x2(cosa, -sina, sina, cosa);
    return float3(mul(m, vertex.xz), vertex.y).xzy;
}

inline float3 GetCustomEnv(UNITY_ARGS_TEXCUBE(customEnv), half3 reflDir, half envRotation, half envMipmap)
{
    float3 rdir = RotateAroundYInDegrees(reflDir, envRotation);
    half4 tex = UNITY_SAMPLE_TEXCUBE_LOD(customEnv, rdir, envMipmap);
    return tex.rgb * _EnvEmitColor;
}

//-----

inline half3 Custom_GlossyEnvironment (half3 reflUVW, half smoothness, half occlusion)
{
    half roughness = SmoothnessToPerceptualRoughness(smoothness);
    
    half3 specular;
#ifdef _GLOSSYREFLECTIONS_OFF
    specular = unity_IndirectSpecColor.rgb;
#else

    half perceptualRoughness = roughness /* perceptualRoughness */ ;
    
    // MM: came up with a surprisingly close approximation to what the #if 0'ed out code above does.
    perceptualRoughness = perceptualRoughness*(1.7 - 0.7*perceptualRoughness);
    half mip = perceptualRoughness * 6; // UNITY_SPECCUBE_LOD_STEPS    
    //#if _CUBE_ENV_OFF
    //specular = GetCustomEnv(_EnvPanoramicMap, reflUVW, _EnvRotation, mip);
    //#else
    specular = GetCustomEnv(UNITY_PASS_TEXCUBE(_EnvCubeMap), reflUVW, _EnvRotation, mip);
    //#endif
    
#endif

    return specular * occlusion;    
}



#endif


#endif // ZEPETO_CUSTOM_ENV_ILLUMINATION_INCLUDED
