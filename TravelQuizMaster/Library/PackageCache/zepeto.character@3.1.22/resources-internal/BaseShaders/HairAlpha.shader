Shader "ZEPETO/BuiltIn/HairAlpha"
{
	Properties 
	{
		[Enum(UnityEngine.Rendering.CullMode)] _Culling ("Culling", Float) = 2
        [Space(30)]
        
        _MainTex ("Diffuse (RGB) Alpha (A)", 2D) = "white" {}
		_Color ("Main Color", Color) = (1,1,1,1)
		_Cutoff ("Alpha Cut-Off", range(0, 1)) = 0.95
		_NormalTex ("Normal Map", 2D) = "bump" {}
		_NormalPower ("NormalPower", range(0, 5)) = 0.75
		_SpecularTex ("Specular (R) Spec Shift (G) Spec Mask (B)", 2D) = "gray" {}
		
		
		[Space][Space][Space][Space][Space]
		_BridgeTex ("BridgeTex", 2D) = "black" {}
		[Space][Space][Space][Space][Space]

		_SpecularMultiplier ("Specular Multiplier", float) = 10.0
		_SpecularColor ("Specular Color", Color) = (1,1,1,1)
		_SpecularMultiplier2 ("Secondary Specular Multiplier", float) = 10.0
		_SpecularColor2 ("Secondary Specular Color", Color) = (1,1,1,1)
		_PrimaryShift ( "Specular Primary Shift", float) = -0.01
		_SecondaryShift ( "Specular Secondary Shift", float) = -0.28

		[HideInInspector]_LogLut ("_LogLut", 2D)  = "white" {}		
	


	}

	SubShader
	{ 
		Tags { "RenderType" = "Opaque"  "Queue" = "Geometry+1"  "RequireOption" = "SoftVegetation" }

		Blend Off
		ZWrite on
		Cull [_Culling]

		CGPROGRAM
		#pragma surface surf Hair vertex:vert finalcolor:tonemapping
		#pragma target 3.0
		
		#include "CGIncludes/ZepetoHairAlpha.cginc"

		void surf (Input IN, inout SurfaceOutputHair o)
		{
			surf_base(IN, o);
			if(o.Alpha < _Cutoff) {   
				clip(-1.0); 
			}
			
		}

		ENDCG

		Tags { "RenderType" = "Transparent"  "Queue" = "Transparent"  "RequireOption" = "SoftVegetation" }

		Blend SrcAlpha OneMinusSrcAlpha
		ZWrite off
		Cull [_Culling]

		CGPROGRAM
		#pragma surface surf Hair vertex:vert alpha:fade finalcolor:tonemapping
		#pragma target 3.0
		
		#include "CGIncludes/ZepetoHairAlpha.cginc"

		void surf (Input IN, inout SurfaceOutputHair o)
		{
            fixed4 albedo = tex2D(_MainTex, IN.uv_MainTex);
            surf_base(IN, o);
            {

            }
            o.Alpha = albedo.a;
		}

		ENDCG
        // Alpha
        pass {                
            Name "ALPHA_WRITER"
            Blend One OneMinusSrcAlpha
            ColorMask A
            CGPROGRAM
                #pragma vertex vert
                #pragma fragment frag
                #include "UnityCG.cginc"
       
                struct appdata_t {
                    float4 vertex : POSITION;
                    float4 color : COLOR;
                    float2 texcoord : TEXCOORD0;
                };       
                struct v2f {
                    float4 vertex : SV_POSITION;
                    fixed4 color : COLOR;
                    float2 texcoord : TEXCOORD0;
                };
    
                sampler2D _MainTex;
                float4 _MainTex_ST;
                fixed4 _Color;
    
                v2f vert (appdata_t v)
                {
                    v2f o;
                    o.vertex = UnityObjectToClipPos(v.vertex);
                    o.color = v.color;
                    o.texcoord = TRANSFORM_TEX(v.texcoord, _MainTex);
                    return o;
                }                           
                fixed4 frag (v2f i) : SV_Target
                {
                    return _Color * tex2D(_MainTex, i.texcoord);
                }
            ENDCG                                
        }

        

	}
	FallBack "Mobile/VertexLit"
}