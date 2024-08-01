Shader "ZEPETO/BuiltIn/Toon" {
    Properties
    {
        [Enum(UnityEngine.Rendering.CullMode)] _Culling ("Culling", Float) = 2

        _MainTex("Albedo (RGB)", 2D) = "white" {}
        _Color("Color", Color) = (1, 1, 1, 1)
        _Cutoff("Alpha Cutoff", Range(0, 1)) = 0.5
        _Unlit_Intensity("Unlit_Intensity", Range(0, 1)) = 0.5

        [Header(Stylized Diffuse)]

        _ThresholdTex("Threshold", 2D) = "gray"{}
        _MaskTex("Mask Texture", 2D) = "white"{}

        [Toggle(Outline_OFF)]_OutlineOff("Outline Off", Float) = 0
        [Enum(Normal,0,Tangent,1)]_UseTangent("Use Tangent", Float) = 0
        _Outline("Outline Width", Range(0, 0.01)) = 0.0012
        _OutlineColor("Outline Color", COLOR) = (0, 0, 0, 1)
        _OutlineColorBlend("Outline Color Blend", Range(0, 1)) = 0.4

        _ShadowColor("Shadow Color", Color) = (0, 0, 0, 1)
        _ShadowThreshold("Shadow Threshold", Range(0, 1)) = 0
        _ShadowSmooth("Shadow Smooth", Range(0, 0.5)) = 0
        
        _ReflectColor("Reflect Color", Color) = (0.25, 0.25, 0.25, 1)
        _ReflectThreshold("Reflect Threshold", Range(0, 1)) = 0
        _ReflectSmooth("Reflect Smooth", Range(0, 0.5)) = 0

        [Toggle(SPECULAR_ON)]_SpecularFlag("Use Specular Highlight", Float) = 0

        [HDR]_SpecularColor("Specular Color", Color) = (1, 1, 1, 1)
        _SpecularThreshold("Specular Threshold", Range(0, 1)) = 0
        _SpecularSmooth("Specular Smooth", Range(0, 0.5)) = 0        
        
        [Toggle(RIMLIGHT_ON)]_rimFlag("Use Rim Light", Float) = 0
        [Enum(None,0,Masked,1)] _DirectionalFresnel("Directional Fresnel", Float) = 0
        _FresnelThreshold("Fresnel Threshold", Range(0, 1)) = 0
        _FresnelSmooth("Fresnel Smooth", Range(0, 0.5) ) = 0
        [HDR]_FresnelColor("FresnelColor", Color) = (1, 1, 1, 1)

        [Header(Brush Texture)]
        _BrushTex("Brush Texture", 2D) = "gray"{}
        [Enum(UV0,0,UV1,1)] _UVSec ("UV Set for secondary textures", Float) = 0

        _ShadowBrushStrength("Shadow Brush Strength", Range(0, 1)) = 0.5
        _SpecBrushStrength("Spec Brush Strength", Range(0, 1)) = 0.5
        _RimBrushStrength("Rim Brush Strength", Range(0, 1)) = 0.5

        _EmissionMap("Emission Map", 2D) = "black" {}
        [HDR]_EmissionColor("Emission Color", Color) = (0, 0, 0)

        // Blending state
        [HideInInspector] _Mode ("__mode", Float) = 0.0
        [HideInInspector] _SrcBlend ("__src", Float) = 1.0
        [HideInInspector] _DstBlend ("__dst", Float) = 0.0
        [HideInInspector] _ZWrite ("__zw", Float) = 1.0        

        [ToggleOff(COLORGRADING_OFF)]_ColorGrading("Color Grading", Float) = 1
        [HideInInspector]_LogLut ("_LogLut", 2D)  = "white" {}
    }   
    
    SubShader
    {        
        Pass
        {     
        Tags { "LightMode" = "ForwardBase" }
        Blend [_SrcBlend] [_DstBlend], One OneMinusSrcAlpha
        ZWrite [_ZWrite]
        Cull [_Culling]
        CGPROGRAM        
        #pragma vertex vert
        #pragma fragment frag
        #pragma target 3.0
        #pragma multi_compile_fwdbase
        #pragma multi_compile_fog //FOG
        //#pragma multi_compile DIRECTIONAL POINT SPOT
        
        #pragma shader_feature_local RIMLIGHT_ON //RIMLIGHT
        #pragma shader_feature_local SPECULAR_ON //Specular
        #pragma shader_feature_local _ _ALPHATEST_ON _ALPHABLEND_ON _ALPHAPREMULTIPLY_ON
        #pragma shader_feature_local_fragment COLORGRADING_OFF //Colorgrading
        #include  "CGIncludes/ToonBase.cginc"
        ENDCG
        }

        Pass
        {
        Tags { "LightMode" = "ForwardAdd" }
        Blend [_SrcBlend] One
        Cull [_Culling]
        Fog { Color (0,0,0,0) } // in additive pass fog should be black
        ZWrite Off
        ZTest LEqual
        CGPROGRAM        
        #pragma vertex vert
        #pragma fragment frag
        #pragma target 3.0
        #pragma multi_compile_fwdadd
        #pragma multi_compile_fog //FOG
    
        #pragma shader_feature_local SPECULAR_ON //Specular
        #pragma shader_feature_local _ _ALPHATEST_ON _ALPHABLEND_ON _ALPHAPREMULTIPLY_ON
	
        #define PSS_ENABLE_DIRECTLIGHT 1

        #include "UnityCG.cginc"
        #include "AutoLight.cginc"
        #include "CGIncludes/ToneMapping.cginc"
        #include "UnityPBSLighting.cginc"
        #include "CGIncludes/ToonAdd.cginc"
        ENDCG
        }

        Pass 
        {
        Tags { "LightMode" = "ForwardBase" }
        Cull Front
        Blend [_SrcBlend] [_DstBlend], One OneMinusSrcAlpha
        ZWrite On
        CGPROGRAM
        #pragma vertex vert
        #pragma fragment frag
        
        #pragma multi_compile_fwdbase
        #pragma multi_compile_fog //FOG
        #pragma shader_feature_local Outline_OFF //OUTLINE Off
        #pragma shader_feature_local _ _ALPHATEST_ON _ALPHABLEND_ON _ALPHAPREMULTIPLY_ON
        #pragma target 3.0
        #include "CGIncludes/ToonOutline.cginc"
        ENDCG
        }

    
    UsePass "Legacy Shaders/VertexLit/SHADOWCASTER"

    }
    FallBack "VertexLit"
    CustomEditor "ZepetoStandardToonGUI"    
}