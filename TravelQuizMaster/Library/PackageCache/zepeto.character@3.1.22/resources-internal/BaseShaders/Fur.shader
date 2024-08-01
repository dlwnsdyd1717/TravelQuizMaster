Shader "ZEPETO/BuiltIn/Fur" 
{
	Properties 
	{
        _Color("Color", Color) = (1,1,1,1)
        _MainTex("Albedo (RGB)", 2D) = "white" {}
		
        _Glossiness("Smoothness", Range(0.0, 1.0)) = 0.5
        _GlossMapScale("Smoothness Scale", Range(0.0, 1.0)) = 1.0
        _GlossMapBias("Smoothness Bias", Range(-1.0, 1.0)) = 0.0
		
        [Gamma] _Metallic("Metallic", Range(0.0, 1.0)) = 0.0
        _MetallicGlossMap("Metallic", 2D) = "white" {}
				
		_BumpScale("Normal Power", Float) = 1.0
		[Normal]_BumpMap("Normal Map", 2D) = "bump" {}

        _FurMap("Fur Map(R : Fur Density, G : Fur Mask, B : Fur Stiffness)", 2D) = "white" {}
        _FurLength("Fur Length", range(0, 1)) = 0.5
		_FurDensity("Fur Density", Range (1, 10)) = 3
		_Gravity("Gravity", Vector) = (0.0, -0.5, 0.0, 0.0)
        _FurAoColor("FurAoColor", Color) = (0.5, 0.5, 0.5)
        _FurAo("FurAo", Range(0, 1)) = 0.5
		_EdgeDensity("Edge Density", Range(0, 1)) = 0.5

      	[HDR]_RimColor("Rim Color", Color) = (0,0,1,0.0)
      	_RimPower("Rim Power", Range(0.5,8.0)) = 2.0
        [ToggleOff(RIMLIGHT_DIRECTIONALFRESNEL_OFF)] _DirectionalFresnel("Directional Fresnel", int) = 0
        
        [ToggleOff(COLORGRADING_OFF)]_ColorGrading("Color Grading", Float) = 1
		[HideInInspector] _RimLightMode ("__rimlightmode", Float) = 0.0
        [HideInInspector]_LogLut ("_LogLut", 2D)  = "white" {}	
		
        [Enum(UnityEngine.Rendering.CullMode)]_Culling ("Culling", Float) = 2
	}
	
	SubShader {	
		ZWrite On
		Tags { "Queue" = "Geometry" "RenderType" = "Opaque" "IgnoreProjector"="True"}
		Blend Off		
		LOD 200
        Cull [_Culling]

		CGPROGRAM
		#pragma surface surf Standard fullforwardshadows exclude_path:deferred nolightmap nometa vertex:vert finalcolor:tonemapping
		#pragma target 3.0
		#pragma shader_feature_local_fragment COLORGRADING_OFF //Colorgrading
        #pragma shader_feature_local_fragment RIMLIGHT_DIRECTIONALFRESNEL_OFF //DIRECTIONALFRESNEL
        #define FUR_OFFSET 0.0
 		#include "CGIncludes/ZepetoStandardFur.cginc"	
		ENDCG
		
		ZWrite Off
		Tags { "Queue" = "Transparent" "RenderType" = "Transparent" "IgnoreProjector"="True"}
        Blend SrcAlpha OneMinusSrcAlpha, One OneMinusSrcAlpha
		LOD 200
        Cull [_Culling]
		
		CGPROGRAM
		#pragma surface surf Standard keepalpha fullforwardshadows exclude_path:deferred nolightmap nometa vertex:vert finalcolor:tonemapping
		#pragma target 3.0
		#pragma shader_feature_local_fragment COLORGRADING_OFF //Colorgrading
        #pragma shader_feature_local_fragment RIMLIGHT_DIRECTIONALFRESNEL_OFF //DIRECTIONALFRESNEL
        #define FUR_OFFSET 0.18
 		#include "CGIncludes/ZepetoStandardFur.cginc"	
		ENDCG

		CGPROGRAM
		#pragma surface surf Standard keepalpha fullforwardshadows exclude_path:deferred nolightmap nometa vertex:vert finalcolor:tonemapping
		#pragma target 3.0
		#pragma shader_feature_local_fragment COLORGRADING_OFF //Colorgrading
        #pragma shader_feature_local_fragment RIMLIGHT_DIRECTIONALFRESNEL_OFF //DIRECTIONALFRESNEL
        #define FUR_OFFSET 0.34
 		#include "CGIncludes/ZepetoStandardFur.cginc"
		ENDCG

		CGPROGRAM
		#pragma surface surf Standard keepalpha fullforwardshadows exclude_path:deferred nolightmap nometa vertex:vert finalcolor:tonemapping
		#pragma target 3.0
		#pragma shader_feature_local_fragment COLORGRADING_OFF //Colorgrading
        #pragma shader_feature_local_fragment RIMLIGHT_DIRECTIONALFRESNEL_OFF //DIRECTIONALFRESNEL
        #define FUR_OFFSET 0.48
 		#include "CGIncludes/ZepetoStandardFur.cginc"
		ENDCG
		
		CGPROGRAM
		#pragma surface surf Standard keepalpha fullforwardshadows exclude_path:deferred nolightmap nometa vertex:vert finalcolor:tonemapping
		#pragma target 3.0
		#pragma shader_feature_local_fragment COLORGRADING_OFF //Colorgrading
        #pragma shader_feature_local_fragment RIMLIGHT_DIRECTIONALFRESNEL_OFF //DIRECTIONALFRESNEL
        #define FUR_OFFSET 0.6
 		#include "CGIncludes/ZepetoStandardFur.cginc"
		ENDCG

		CGPROGRAM
		#pragma surface surf Standard keepalpha fullforwardshadows exclude_path:deferred nolightmap nometa vertex:vert finalcolor:tonemapping
		#pragma target 3.0
		#pragma shader_feature_local_fragment COLORGRADING_OFF //Colorgrading
        #pragma shader_feature_local_fragment RIMLIGHT_DIRECTIONALFRESNEL_OFF //DIRECTIONALFRESNEL
        #define FUR_OFFSET 0.7
 		#include "CGIncludes/ZepetoStandardFur.cginc"	
		ENDCG

		CGPROGRAM
		#pragma surface surf Standard keepalpha fullforwardshadows exclude_path:deferred nolightmap nometa vertex:vert finalcolor:tonemapping
		#pragma target 3.0
		#pragma shader_feature_local_fragment COLORGRADING_OFF //Colorgrading
        #pragma shader_feature_local_fragment RIMLIGHT_DIRECTIONALFRESNEL_OFF //DIRECTIONALFRESNEL
        #define FUR_OFFSET 0.78
 		#include "CGIncludes/ZepetoStandardFur.cginc"	
		ENDCG
	} 
	
	FallBack "VertexLit"
    CustomEditor "ZepetoStandardFurGUI"
}
