Shader "ZEPETO/BuiltIn/Eye"
{
    Properties
    {
        _MainTex ("EyeTex(RGB) ColorMask(A)", 2D) = "Black" {}
        [HideInInspector]_EmitTex ("ReflectTex(RGB)", 2D) = "Black" {}
                
        [Space][Space]
        [Header(Eye Color Custom Right)]
        _Color ("IrisColor", color) = (1, 1, 1)
        
        [Space][Space]
		[MaterialToggle(ODD_EYE)] _Odd("OddColor", float) = 0
        [Header(Eye Color Custom Left)]
		_IrisColorL ("IrisColor", color) = (1, 1, 1)
    	[MaterialToggle(ON_REFL)] _OnReflection("Reflection", float) = 0
        }
    SubShader
    {
		Tags { "RenderType" = "Opaque"  "Queue" = "Geometry" }
		Blend Off
		ZWrite on

        CGPROGRAM
        // Physically based Standard lighting model, and enable shadows on all light types
        #pragma surface surf Lambert exclude_path:deferred nolightmap nometa nofog noforwardadd noshadow novertexlights
        
		#pragma multi_compile_local __ ODD_EYE
        #pragma multi_compile_local __ ON_REFL

        struct Input
        {
            float2 uv_MainTex;
			float3 viewDir;
        	// 반사 처리를 위해
			float3 worldRefl; INTERNAL_DATA
        };

        // Add instancing support for this shader. You need to check 'Enable Instancing' on materials that use the shader.
        // See https://docs.unidty3d.com/Manual/GPUInstancing.html for more information about instancing.
        // #pragma instancing_options assumeuniformscaling
        UNITY_INSTANCING_BUFFER_START(Props)
        sampler2D _MainTex;
        sampler2D _EmitTex;
		#define _IrisColorR _Color
        half3 _IrisColorR, _IrisColorL;
        UNITY_INSTANCING_BUFFER_END(Props)

        void surf (Input IN, inout SurfaceOutput o)
        {
        	half2 originalEyeUV = abs(IN.uv_MainTex % 1.0);			// 0~1로 노멀라이징됨
        	half4 c = tex2D(_MainTex, originalEyeUV * 2.0 - 0.5);
        	half cw = 1 - c.a;
            o.Albedo = c.rgb - cw + (_IrisColorR * cw * 2.0);
        	#if ODD_EYE			
			if(IN.uv_MainTex.y < 0) {
				o.Albedo = c.rgb - cw + (_IrisColorL * cw * 2.0);
			}
        	#endif  
            // Metallic and smoothness come from slider variables
            o.Alpha = 1.0;

        	// 반사처리 try => 안하는게 나을듯
        	
        	#if ON_REFL
        	// 현재 zepeto 캐릭터의 u, v방향은  -localy, -localx 방향이다. 이방향으로 텍스쳐를 살짝밀어준다.
        	float dist = distance(originalEyeUV, 0.5);
				dist = saturate(1- (dist * 1.9));
        	half3 r = UnityWorldToObjectDir(IN.worldRefl) * 0.85 * 0.85;
        	float2 reflectionUV = (half2(r.y,-r.x) ) * 0.7 + 0.3 + dist * 0.05;
        	half nv = dot(o.Normal, IN.viewDir);
        	// 기존 reflect power => mul 반영
        	r = tex2D(_EmitTex, reflectionUV).r * (nv * nv * nv + 0.25) * (0.35);
			o.Emission = r * r;
			#endif        	
        	
        }
        ENDCG
    }
    FallBack "Diffuse"
}
