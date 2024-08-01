// Upgrade NOTE: replaced '_LightMatrix0' with 'unity_WorldToLight'

// Upgrade NOTE: replaced '_LightMatrix0' with 'unity_WorldToLight'

#ifndef TOON_BASE
#define TOON_BASE

    #include "UnityCG.cginc"
    #include "AutoLight.cginc"
    #include "ToneMapping.cginc"
    #include "UnityPBSLighting.cginc"

    struct appdata
    {
        float4 vertex : POSITION;
        float3 normal : NORMAL;
        float2 uv : TEXCOORD0;
        float3 uv2 : TEXCOORD1;
        
    };

    struct v2f
    {
        float4 pos : SV_POSITION;
        float3 worldPos : TEXCOORD1;
        float2 uv : TEXCOORD0;
        float2 uv2 : TEXCOORD3;
        half3 normal: TEXCOORD7;
        half3 ambient : TEXCOORD8;
        SHADOW_COORDS(9)//SHADOW
        UNITY_FOG_COORDS(10)//FOG
    };

    sampler2D _MainTex;
    float4 _MainTex_ST;
    sampler2D _BrushTex;
    float4 _BrushTex_ST;     
    sampler2D _EmissionMap;
    sampler2D _ThresholdTex;
    sampler2D _MaskTex;

    half _ShadowThreshold, _ShadowSmooth, _ReflectThreshold, _ReflectSmooth, _FresnelThreshold, _FresnelSmooth, _SpecularThreshold, _SpecularSmooth;
    half _Unlit_Intensity, _Cutoff, _DirectionalFresnel, _ShadowBrushStrength, _SpecBrushStrength, _RimBrushStrength, _UVSec;
    half4 _ShadowColor, _ReflectColor, _EmissionColor, _Color, _SpecularColor, _FresnelColor;
    
    v2f vert (appdata v)
    {
        v2f o = (v2f) 0;
        o.pos = UnityObjectToClipPos(v.vertex);
        o.normal = UnityObjectToWorldNormal(v.normal);
        o.worldPos = mul(unity_ObjectToWorld, v.vertex);
        

        o.uv = TRANSFORM_TEX(v.uv, _MainTex);
        o.uv2 = TRANSFORM_TEX(((_UVSec == 0) ? v.uv : v.uv2), _BrushTex);

        #if UNITY_SHOULD_SAMPLE_SH
        
            o.ambient += max(0, (ShadeSH9(float4(o.normal, 1))));
        #else
        
            o.ambient = 0;
        
        #endif

        TRANSFER_SHADOW(o);
        UNITY_TRANSFER_FOG(o, o.pos);

        return o;
    }


    half LinearStep(half minValue, half maxValue, half In)
    {
        return saturate((In - minValue + 1e-4h)/max(1e-4h,(maxValue - minValue)));
    }

    
    half4 frag (v2f i) : SV_Target
    {
        half4 c = tex2D(_MainTex, i.uv) * _Color;
        #if defined(_ALPHATEST_ON)
        clip (c.a - _Cutoff);
        #endif
        
        half4 brush = tex2D(_BrushTex, i.uv2);
        half4 threshold = tex2D(_ThresholdTex, i.uv);
        half4 mask = tex2D(_MaskTex, i.uv);

        half3 lightDir = normalize(_WorldSpaceLightPos0.xyz);
        half3 viewDir = normalize(_WorldSpaceCameraPos - i.worldPos.xyz);
        half3 Normal = normalize(i.normal);

        half NdotL = dot(Normal, lightDir);
        half HalfNdotL = NdotL * 0.5 + 0.5;

        half shadowThreshold = threshold - 0.5;
        half lightingMask = mask.g;
        half rimLightMask = mask.b;
        
        half attenuation = SHADOW_ATTENUATION(i);
 
//        half halfLambert = (HalfNdotL + lerp(0, shadowThreshold, saturate(HalfNdotL))) * lerp(0.5, brush, _ShadowBrushStrength) * 2;
        half halfLambert = (shadowThreshold * HalfNdotL + HalfNdotL) * lerp(0.5, brush, _ShadowBrushStrength) * 2;

        half smoothShadow = LinearStep(_ShadowThreshold - _ShadowSmooth, _ShadowThreshold + _ShadowSmooth, halfLambert);
        half3 ShadowColor = lerp(_ShadowColor.rgb, 1, smoothShadow * attenuation);

        half smoothReflect = LinearStep( _ReflectThreshold - _ReflectSmooth, _ReflectThreshold + _ReflectSmooth, halfLambert);
        half3 ReflectColor = lerp(_ReflectColor.rgb , ShadowColor , smoothReflect);

        //half smoothBase = LinearStep( 0, 0, halfLambert);
        half smoothBase = step(0, halfLambert);
        half3 BaseColor = lerp(1 , ReflectColor , smoothBase);

        half3 radiance = BaseColor;
        
        half3 diff = lerp(min(1, _LightColor0.rgb), _LightColor0.rgb, smoothShadow);
        
        half3 ambient = i.ambient;
        half3 c1 = c * (diff + ambient);
        half3 c2 = c;
        c.rgb = lerp(c1, c2, _Unlit_Intensity);

        half rim = 1 - saturate(dot(viewDir, Normal));

        #if defined(SPECULAR_ON)
            half specular = 0;
            specular = saturate(dot(reflect(-lightDir, Normal), viewDir) + shadowThreshold) * attenuation;
            specular *= lerp(0.5, brush, _SpecBrushStrength) * 2;
            specular = LinearStep((1 - _SpecularThreshold) - _SpecularSmooth, (1 - _SpecularThreshold) + _SpecularSmooth, specular);
            half3 SpecularColor = specular * lightingMask * _SpecularColor * lerp(_LightColor0.rgb, 1, _Unlit_Intensity);
            c.rgb += SpecularColor * specular;
        #endif

        c.rgb *= radiance;

        #ifdef RIMLIGHT_ON
            half fresnelTerm = 0;
            half3 fresnel = 0;
            rim *= lerp(0.5, brush, _RimBrushStrength) * 2;
            fresnelTerm = LinearStep((1 - _FresnelThreshold) - _FresnelSmooth, (1 - _FresnelThreshold) + _FresnelSmooth, rim);
            fresnelTerm *= lerp(1.0, smoothShadow * attenuation, _DirectionalFresnel);
            fresnel = fresnelTerm * _FresnelColor * rimLightMask;
            c.rgb += fresnel;
        #endif
                
        c.rgb += tex2D(_EmissionMap, i.uv) * _EmissionColor;

        UNITY_APPLY_FOG(i.fogCoord, c);//FOG
        #if defined(_ALPHABLEND_ON) || defined(_ALPHAPREMULTIPLY_ON)
        #else
            c.a = 1.0;
        #endif
        #ifdef COLORGRADING_OFF
        return c;
        #else
        return c = ApplyColorGrading(c);
        #endif

}
#endif
