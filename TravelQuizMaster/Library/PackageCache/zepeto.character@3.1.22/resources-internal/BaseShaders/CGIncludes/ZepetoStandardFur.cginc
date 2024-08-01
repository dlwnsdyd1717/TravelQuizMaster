
//#include "ZepetoStandardFurLighting.cginc"
//#include "UnityPBSLighting.cginc"
#include "ToneMapping.cginc"

	half4		_Color;

	sampler2D	_MainTex;

	sampler2D   _BumpMap;
	half        _BumpScale;

    half        _Shininess;
    sampler2D   _SpecGlossMap;
    
	sampler2D   _MetallicGlossMap;
	half        _Metallic;
	
	half		_Glossiness;
	half		_GlossMapScale;
	half		_GlossMapBias;

	sampler2D	_FurMap;
	half		_FurAo;
	half		_FurLength;
	half4		_FurAoColor;
	half		_FurDensity;
	half4		_Gravity;
	half		_EdgeDensity;

	half4		_RimColor;
	half		_RimPower;
	half		_RimLightMode;

	struct Input
	{
		half2 uv_MainTex;
		half2 uv_BumpMap;
		half2 uv_FurMap;
		half3 viewDir;
		float3 worldNormal; INTERNAL_DATA
	}; 

	inline half3 GetRimLight(half3 viewDir, half3 normal,half3 albedo)
	{
		float rim = saturate(abs(dot(normalize(viewDir), normal)));
		// //handle rim light
		half3 emission = 0;
		if (_RimLightMode != 0) {				
			if (_RimLightMode == 3)
				emission = _RimColor.rgb * pow (1 - rim, _RimPower);
			else if (_RimLightMode == 2)
				emission = UNITY_LIGHTMODEL_AMBIENT.rgb * pow (1 - rim, _RimPower);
			else
				emission = albedo * pow (1 - rim, _RimPower);      	
		}
		return emission;
	}

void vert (inout appdata_full v, out Input o)
	{
		UNITY_INITIALIZE_OUTPUT(Input,o);
		const half spacing = 0.05;

		half4 FurControl = tex2Dlod(_FurMap, half4(o.uv_MainTex.xy,0,0)); //Fur mask offset

		half tangentSign = v.tangent.w * unity_WorldTransformParams.w;
		half3 N = normalize(v.normal);
		half3 T = normalize(v.tangent.xyz);
		half3 B = normalize(cross(N, T) * tangentSign);
		float3x3 TBN = float3x3(T, B, N);
		TBN = transpose(TBN); //Tangent

		fixed3 nm = UnpackNormal(tex2Dlod(_BumpMap, half4(o.uv_BumpMap.xy,0,0)));
		half3 tnormal = nm * half3(_BumpScale, _BumpScale, 1);
		half3 worldNormal = mul(TBN, tnormal); //normal

		half3 displacement = mul(unity_WorldToObject, _Gravity.xyz * pow(FUR_OFFSET * 1.5, 3) * _FurLength).xyz; 
		worldNormal.xyz += displacement * FUR_OFFSET * FurControl.b;
		half3 n = normalize(worldNormal) * FUR_OFFSET * spacing * _FurLength * FurControl.g; //Gravity

		half3 wpos = v.vertex.xyz + n; //fur offset
		v.vertex.xyz = wpos;
	}
void surf (Input IN, inout SurfaceOutputStandard o)
	{
		half4 color = tex2D(_MainTex, IN.uv_MainTex) * _Color;
		half4 FurDensity = tex2D(_FurMap, IN.uv_FurMap * _FurDensity);
		half4 EdgeDensity = tex2D(_FurMap, IN.uv_FurMap * (_FurDensity - (_EdgeDensity * _FurDensity * 0.9)));
		half4 Density = lerp(EdgeDensity, FurDensity, saturate(dot(o.Normal, IN.viewDir)));
		half4 FurMask = tex2D(_FurMap, IN.uv_MainTex);
		
		if (color.a <= 0 || Density.r * FurMask.g < FUR_OFFSET)
		{
			discard;
		}

		o.Albedo = color.rgb;

		half3 nm = UnpackScaleNormal(tex2D(_BumpMap, IN.uv_BumpMap), _BumpScale);
		o.Normal = normalize(nm * half3(lerp(0.5, Density.r, _FurLength), lerp(0.5, Density.r, _FurLength), 1) * half3(2, 2, 1));

		half FurAo = _FurAo * pow(_FurLength, 0.4);
		
		half occ = lerp(1, saturate(_FurAoColor + (1 - FurMask.g)), FurAo * pow((1 - FUR_OFFSET), 3));
		o.Albedo *= occ;

		half2 mg;
		//#ifdef _METALLICGLOSSMAP
		//	mg = tex2D(_MetallicGlossMap, IN.custom_MainTex_uv).ra;
		//	mg.g = mg.g * _GlossMapScale + _GlossMapBias;
		//#else
		//	mg.r = _Metallic;
		//	mg.g = _Glossiness;		
		//#endif
		mg = tex2D(_MetallicGlossMap, IN.uv_MainTex).ra;
		mg.r *= _Metallic;
		mg.g = mg.g * _Glossiness * _GlossMapScale + _GlossMapBias;

		o.Metallic = mg.r;
		
		o.Smoothness = mg.g;
		o.Smoothness *= occ;
		
		half3 normal = normalize(o.Normal);
		half3 emission = GetRimLight(IN.viewDir, normal, o.Albedo);

		o.Emission = emission;
		#if !defined(RIMLIGHT_DIRECTIONALFRESNEL_OFF)
		o.Emission *= saturate(dot(WorldNormalVector (IN, o.Normal).rgb, _WorldSpaceLightPos0.xyz));
		#endif
		
		o.Alpha = 0.8 - FUR_OFFSET;
	}
	
	void surfSpecular (Input IN, inout SurfaceOutputStandardSpecular o)
	{
		half4 color = tex2D(_MainTex, IN.uv_MainTex) * _Color;
		half4 FurDensity = tex2D(_FurMap, IN.uv_FurMap * _FurDensity);
		half4 EdgeDensity = tex2D(_FurMap, IN.uv_FurMap * (_FurDensity - (_EdgeDensity * _FurDensity * 0.9)));
		half4 Density = lerp(EdgeDensity, FurDensity, saturate(dot(o.Normal, IN.viewDir)));
		half4 FurMask = tex2D(_FurMap, IN.uv_MainTex);
		
		if (color.a <= 0 || Density.r * FurMask.g < FUR_OFFSET)
		{
			discard;
		}

		o.Albedo = color.rgb;

		half3 nm = UnpackScaleNormal(tex2D(_BumpMap, IN.uv_BumpMap), _BumpScale);
		o.Normal = normalize(nm * half3(lerp(0.5, Density.r, _FurLength), lerp(0.5, Density.r, _FurLength), 1) * half3(2, 2, 1));

		half FurAo = _FurAo * pow(_FurLength, 0.4);
		half occ = lerp(1, saturate(_FurAoColor + (1 - FurMask.g)), FurAo * pow((1 - FUR_OFFSET), 3));
		o.Albedo *= occ;

        half4 sg;
        sg = tex2D(_SpecGlossMap, IN.uv_MainTex);
        sg.rgb *= _SpecColor.rgb * _Shininess;
        sg.a = sg.a * _Glossiness * _GlossMapScale + _GlossMapBias;

		o.Specular = sg.rgb;
		o.Specular *= occ;

		o.Smoothness = sg.a;
		o.Smoothness *= occ;

        half3 normal = normalize(o.Normal);
		half3 emission = GetRimLight(IN.viewDir, normal, o.Albedo);

		o.Emission = emission;
		#if !defined(RIMLIGHT_DIRECTIONALFRESNEL_OFF)
		o.Emission *= saturate(dot(WorldNormalVector (IN, o.Normal).rgb, _WorldSpaceLightPos0.xyz));
		#endif
		
		o.Alpha = 0.8 - FUR_OFFSET;
	}
	
void tonemapping (Input IN, SurfaceOutputStandard o, inout fixed4 color)
	{
		#if defined(COLORGRADING_OFF)
		color;
		#else
		color = ApplyColorGrading(color);
		#endif
	}
	
void tonemappingSpecular (Input IN, SurfaceOutputStandardSpecular o, inout fixed4 color)
	{
		#if defined(COLORGRADING_OFF)
		color;
		#else
		color = ApplyColorGrading(color);
		#endif
	}