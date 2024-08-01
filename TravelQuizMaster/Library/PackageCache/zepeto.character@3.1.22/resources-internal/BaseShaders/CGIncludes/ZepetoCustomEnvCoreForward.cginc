// Unity built-in shader source. Copyright (c) 2016 Unity Technologies. MIT license (see license.txt)

#ifndef ZEPETO_CUSTOM_ENV_CORE_FORWARD_INCLUDED
#define ZEPETO_CUSTOM_ENV_CORE_FORWARD_INCLUDED

#if defined(UNITY_NO_FULL_STANDARD_SHADER)
#   define UNITY_STANDARD_SIMPLE 1
#endif

#include "UnityStandardConfig.cginc"
#include "ToneMapping.cginc"
#include "ZepetoCustomEnvIllumination.cginc"

#if UNITY_STANDARD_SIMPLE
    #include "ZepetoStandardCoreForwardSimple.cginc"
    half4 fragForwardBaseSimpleInternalGrading (VertexOutputBaseSimple i)
    {
        UNITY_APPLY_DITHER_CROSSFADE(i.pos.xy);

        FragmentCommonData s = FragmentSetupSimple(i);

        UnityLight mainLight = MainLightSimple(i, s);

        #if !defined(LIGHTMAP_ON) && defined(_NORMALMAP)
        half ndotl = saturate(dot(s.tangentSpaceNormal, i.tangentSpaceLightDir));
        #else
        half ndotl = saturate(dot(s.normalWorld, mainLight.dir));
        #endif

        //we can't have worldpos here (not enough interpolator on SM 2.0) so no shadow fade in that case.
        half shadowMaskAttenuation = UnitySampleBakedOcclusion(i.ambientOrLightmapUV, 0);
        half realtimeShadowAttenuation = SHADOW_ATTENUATION(i);
        half atten = UnityMixRealtimeAndBakedShadows(realtimeShadowAttenuation, shadowMaskAttenuation, 0);

        half occlusion = Occlusion(i.tex.xy);
        half rl = dot(REFLECTVEC_FOR_SPECULAR(i, s), LightDirForSpecular(i, mainLight));

        UnityGI gi = FragmentGI (s, occlusion, i.ambientOrLightmapUV, atten, mainLight);
    #if _CUSTOM_SPEC_ENV
        gi.indirect.specular = Custom_GlossyEnvironment(s.reflUVW, s.smoothness, occlusion);    
    #endif
        half3 attenuatedLightColor = gi.light.color * ndotl;

        half3 c = BRDF3_Indirect(s.diffColor, s.specColor, gi.indirect, PerVertexGrazingTerm(i, s), PerVertexFresnelTerm(i));
        c += BRDF3DirectSimple(s.diffColor, s.specColor, s.smoothness, rl) * attenuatedLightColor;
        c += Emission(i.tex.xy);

        UNITY_APPLY_FOG(i.fogCoord, c);
#if defined(_COLORGRADING_OFF)
        return OutputForward (half4(c, 1), s.alpha);
#else
        return ApplyColorGrading(OutputForward (half4(c, 1), s.alpha));
#endif
    }

    half4 fragForwardAddSimpleInternalGrading (VertexOutputForwardAddSimple i)
    {
        UNITY_APPLY_DITHER_CROSSFADE(i.pos.xy);

        FragmentCommonData s = FragmentSetupSimpleAdd(i);

        half3 c = BRDF3DirectSimple(s.diffColor, s.specColor, s.smoothness, dot(REFLECTVEC_FOR_SPECULAR(i, s), i.lightDir));

        #if SPECULAR_HIGHLIGHTS // else diffColor has premultiplied light color
        c *= _LightColor0.rgb;
        #endif

        UNITY_LIGHT_ATTENUATION(atten, i, s.posWorld)
        c *= atten * saturate(dot(LightSpaceNormal(i, s), i.lightDir));

        UNITY_APPLY_FOG_COLOR(i.fogCoord, c.rgb, half4(0,0,0,0)); // fog towards black in additive pass
#if defined(_COLORGRADING_OFF)
        return OutputForward (half4(c, 1), s.alpha);
#else
        return ApplyColorGrading(OutputForward (half4(c, 1), s.alpha));
#endif
    }
    VertexOutputBaseSimple vertBase (VertexInput v) { return vertForwardBaseSimple(v); }
    VertexOutputForwardAddSimple vertAdd (VertexInput v) { return vertForwardAddSimple(v); }
    half4 fragBase (VertexOutputBaseSimple i) : SV_Target { return fragForwardBaseSimpleInternalGrading(i); }
    half4 fragAdd (VertexOutputForwardAddSimple i) : SV_Target { return fragForwardAddSimpleInternalGrading(i); }
#else
    #include "ZepetoStandardCore.cginc"
    half4 fragForwardBaseInternalGrading(VertexOutputForwardBase i)
    {
        UNITY_APPLY_DITHER_CROSSFADE(i.pos.xy);

        FRAGMENT_SETUP(s)

        UNITY_SETUP_INSTANCE_ID(i);
        UNITY_SETUP_STEREO_EYE_INDEX_POST_VERTEX(i);

        UnityLight mainLight = MainLight();
        UNITY_LIGHT_ATTENUATION(atten, i, s.posWorld);

        half occlusion = Occlusion(i.tex.xy);
        UnityGI gi = FragmentGI(s, occlusion, i.ambientOrLightmapUV, atten, mainLight);
#if _CUSTOM_SPEC_ENV
        half3 reflUVW = reflect(-s.eyeVec, s.normalWorld);
        gi.indirect.specular = Custom_GlossyEnvironment(reflUVW, s.smoothness, occlusion);
#endif
        half4 c = UNITY_BRDF_PBS(s.diffColor, s.specColor, s.oneMinusReflectivity, s.smoothness, s.normalWorld, -s.eyeVec,
                                      gi.light, gi.indirect);
        c.rgb += Emission(i.tex.xy);

        UNITY_EXTRACT_FOG_FROM_EYE_VEC(i);
        UNITY_APPLY_FOG(_unity_fogCoord, c.rgb);
        
#if defined(_COLORGRADING_OFF)
        return OutputForward(c, s.alpha);
#else
        return ApplyColorGrading(OutputForward(c, s.alpha));
#endif
    }

    half4 fragForwardAddInternalGrading (VertexOutputForwardAdd i)
    {
        UNITY_APPLY_DITHER_CROSSFADE(i.pos.xy);

        UNITY_SETUP_STEREO_EYE_INDEX_POST_VERTEX(i);

        FRAGMENT_SETUP_FWDADD(s)

        UNITY_LIGHT_ATTENUATION(atten, i, s.posWorld)
        UnityLight light = AdditiveLight (IN_LIGHTDIR_FWDADD(i), atten);
        UnityIndirect noIndirect = ZeroIndirect ();

        half4 c = UNITY_BRDF_PBS(s.diffColor, s.specColor, s.oneMinusReflectivity, s.smoothness, s.normalWorld, -s.eyeVec, light, noIndirect);

        UNITY_EXTRACT_FOG_FROM_EYE_VEC(i);
        UNITY_APPLY_FOG_COLOR(_unity_fogCoord, c.rgb, half4(0,0,0,0)); // fog towards black in additive pass


#if defined(_COLORGRADING_OFF)
        return OutputForward(c, s.alpha);
#else
        return ApplyColorGrading(OutputForward(c, s.alpha));
#endif
    }

    VertexOutputForwardBase vertBase(VertexInput v) { return vertForwardBase(v); }
    VertexOutputForwardAdd vertAdd(VertexInput v) { return vertForwardAdd(v); }
    half4 fragBase(VertexOutputForwardBase i) : SV_Target { return fragForwardBaseInternalGrading(i); }
    half4 fragAdd(VertexOutputForwardAdd i) : SV_Target { return fragForwardAddInternalGrading(i); }
#endif



#endif // ZEPETO_CUSTOM_ENV_CORE_FORWARD_INCLUDED
