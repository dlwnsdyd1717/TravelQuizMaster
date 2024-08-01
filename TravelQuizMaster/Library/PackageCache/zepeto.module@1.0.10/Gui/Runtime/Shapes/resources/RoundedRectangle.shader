Shader "Shape/Rounded Rectangle"
{
	Properties
	{				
		[PerRendererData]_MainTex ("Base (RGB)", 2D) = "white" {}
		[PerRendererData]_IconTex ("Icon (RGB)", 2D) = "white" {}
	
		_Radius("Radius", Vector) = (0,0,0,0)
		_FillAmount("Fill Amount", float) = 1
		_LineWeight("Line Weight", float) = 0
		_LineColor("Line Color", Color) = (1,1,1,1)
		_PixelWorldScale("Pixel world scale", float) = 1
		// required for UI.Mask
		_StencilComp ("Stencil Comparison", Float) = 8
		_Stencil ("Stencil ID", Float) = 0
		_StencilOp ("Stencil Operation", Float) = 0
		_StencilWriteMask ("Stencil Write Mask", Float) = 255
		_StencilReadMask ("Stencil Read Mask", Float) = 255
		
		_ColorMask ("Color Mask", Float) = 15

		[MaterialToggle(PREMULTIPLIED_ON)] _IsRim("[PREMULTIPLIED_ON]", float) = 0
        [Toggle(UNITY_UI_ALPHACLIP)] _UseUIAlphaClip ("Use Alpha Clip", Float) = 0

	}
	SubShader
	{
		Tags
		{ 
			"Queue"="Transparent" 
			"IgnoreProjector"="True" 
			"RenderType"="Transparent" 
			"PreviewType"="Plane"
			"CanUseSpriteAtlas"="True"
		}
		
		Stencil
		{
			Ref [_Stencil]
			Comp [_StencilComp]
			Pass [_StencilOp] 
			ReadMask [_StencilReadMask]
			WriteMask [_StencilWriteMask]
		}

		Cull Off
		Lighting Off
		ZWrite Off
		ZTest [unity_GUIZTestMode]
		Blend One OneMinusSrcAlpha
		ColorMask [_ColorMask]
		
		Pass
		{
			CGPROGRAM
			#pragma vertex vert
			#pragma fragment frag
			//#pragma exclude_renderers gles3 metal d3d11_9x xbox360 xboxone ps3 ps4 psp2 
			#pragma multi_compile PREMULTIPLIED_OFF PREMULTIPLIED_ON
			#pragma multi_compile ICON_OFF ICON_ON
            #pragma multi_compile FILLED_TYPE_ALPHA FILLED_TYPE_ON FILLED_TYPE_CIRCLE FILLED_TYPE_HORIZONTAL FILLED_TYPE_VERTICAL
			
            #pragma multi_compile __ UNITY_UI_CLIP_RECT
            #pragma multi_compile __ UNITY_UI_ALPHACLIP

			#include "UnityCG.cginc"
			#include "UnityUI.cginc"
			
			//#pragma target 3.0
			
			struct appdata_t
			{
				float4 vertex   : POSITION;
				float4 color    : COLOR;
				float2 texcoord : TEXCOORD0;
			};

			struct v2f
			{
				float4 vertex   : POSITION;
				fixed4 color    : COLOR;
				half2 texcoord  : TEXCOORD0;				
				float4 worldPosition : TEXCOORD1;
				half2 uv  : TEXCOORD2;
				half2 size  : TEXCOORD3;
				half4 radius  : TEXCOORD4;
				
				half3 borderCoord : TEXCOORD5;
			};
			
			fixed4 _TextureSampleAdd;
			
			float4 _ClipRect;
			

			half _PixelWorldScale;
			half4 _Radius;
			half _LineWeight;
			half _FillAmount;

			half4 _LineColor;

			sampler2D _MainTex;
			float4 _MainTex_ST;

			#if ICON_ON
			sampler2D _IconTex;
			#endif
			

			v2f vert(appdata_t IN){
				v2f OUT;
				OUT.worldPosition = IN.vertex;
				OUT.vertex = UnityObjectToClipPos(OUT.worldPosition);

				half2 texcoord = fmod(IN.texcoord,10.0);
				half2 size = (IN.texcoord - texcoord) / 10.0;

				OUT.uv = texcoord;

				
				OUT.texcoord = texcoord * size;
				OUT.size = size;

				// fix radius
				fixed4 vec = max(_Radius,0);
				float scaleFactor = min(size.x/(vec.x+vec.y),size.x/(vec.z+vec.w));
				scaleFactor = min( scaleFactor,size.y/(vec.x+vec.w));
				scaleFactor = min(min(scaleFactor, size.y/(vec.z+vec.y)),1);
				OUT.radius = vec * scaleFactor;

				
				if(_LineWeight>0){
					half2 halfSize = (size * 0.5);
					half2 pixel = (1.0 / halfSize) * (_LineWeight );					
					half l = (_LineWeight+1/_PixelWorldScale)/2;
					OUT.borderCoord = half3((((OUT.uv - 0.5) * (1 / (1.0 - pixel))) + 0.5) * size, l);
				}

				#ifdef UNITY_HALF_TEXEL_OFFSET
					OUT.vertex.xy += (_ScreenParams.zw-1.0)*float2(-1,1);
				#endif
				OUT.color = IN.color*(1+_TextureSampleAdd);

				return OUT;
			}

			//more optmised version without dynamic branching
			half visible(half2 pos,half4 r, half2 size){
				half4 p = half4(pos,size - pos);
				half v = min(min(min(p.x,p.y),p.z),p.w);
				bool4 b = bool4(all(p.xw<r[0]),all(p.zw<r[1]),all(p.zy<r[2]),all(p.xy<r[3]));
				half4 vis = r-half4(length(p.xw-r[0]),length(p.zw-r[1]),length(p.zy-r[2]),length(p.xy-r[3]));
				half4 foo = min(b*max(vis,0),v)+(1-b)*v;
				v = any(b)*min(min(min(foo.x,foo.y),foo.z),foo.w)+v*(1-any(b));
				return v;
			}

			fixed4 frag (v2f IN) : SV_Target
			{
				float2 uv = ((IN.uv - 0.5) * _MainTex_ST.xy) + 0.5;
				half4 color = tex2D(_MainTex, uv);

				#ifdef PREMULTIPLIED_ON
					color.rgb /= color.a;
				#endif

				color *= IN.color;

                #ifdef FILLED_TYPE_ALPHA
                color.a *= _FillAmount;
                #endif
				
				if(_LineWeight>0){

					half4 lineColor = _LineColor;

					half l = IN.borderCoord.z;
					float v = visible(IN.borderCoord,IN.radius,IN.size);
					color.a *= saturate(v * _PixelWorldScale);

					v = visible(IN.texcoord,IN.radius,IN.size);
					lineColor.a *= saturate((l-distance(v,l))*_PixelWorldScale) * IN.color.a;										

					if(color.a > 0) {
						color.a = color.a * (1.0 - lineColor.a) + lineColor.a;
						color.rgb = (color.rgb * (1.0 - lineColor.a) + lineColor.rgb * lineColor.a); 
					}
					else {
						color = lineColor;
					}
					
				}
				else {				
					color.a *= saturate(visible(IN.texcoord,IN.radius,IN.size) * _PixelWorldScale);					
				}

			
				#if ICON_ON
					if(IN.size.x < 10 || IN.size.y < 10) {
						fixed2 iconUV = IN.uv;
						fixed4 iconColor = tex2D (_IconTex, iconUV).a * IN.color;					
						color.a = color.a * (1.0 - iconColor.a) + iconColor.a;
						color.rgb = (color.rgb * (1.0 - iconColor.a) + iconColor.rgb ) ;
					}
					
				#endif
				color.rgb *= color.a;

                #ifdef UNITY_UI_CLIP_RECT
				color *= UnityGet2DClipping(IN.worldPosition.xy, _ClipRect);
				#endif
				
                #ifdef UNITY_UI_ALPHACLIP
				clip (color.a - 0.001);
				#endif

                // implementation for UI Effect like UGUI (FilledType Progress Rendering)
                #ifdef FILLED_TYPE_CIRCLE
                float filled_circle_amount = (atan2( -(IN.uv.x * 2.0 - 1.0 ), -(IN.uv.y * 2.0 - 1.0)) / UNITY_PI)/ 2 + 0.5;
                if(filled_circle_amount >= _FillAmount)
                    color = half4(0,0,0,0);
                #elif FILLED_TYPE_HORIZONTAL
                float filled_h_amount = IN.uv.x;
                if(filled_h_amount > _FillAmount)
                    color = half4(0,0,0,0);
                #elif FILLED_TYPE_VERTICAL
                float filled_v_amount = IN.uv.y;
                if(filled_v_amount > _FillAmount)
                    color = half4(0,0,0,0);
                #endif

                return color;
            }
			ENDCG
		}
	}
}

