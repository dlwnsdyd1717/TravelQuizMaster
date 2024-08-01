// Upgrade NOTE: replaced '_LightMatrix0' with 'unity_WorldToLight'

// Upgrade NOTE: replaced '_LightMatrix0' with 'unity_WorldToLight'

#ifndef TOON_OUTLINE
#define TOON_OUTLINE

 #include "UnityCG.cginc"
 #include "AutoLight.cginc"
 #include "ToneMapping.cginc"
 #include "UnityPBSLighting.cginc"

    static const float ipFov = atan(1.0f / unity_CameraProjection._m11 ) * 2;
    static const float3 scale = float3(length(unity_ObjectToWorld._m00_m10_m20),length(unity_ObjectToWorld._m01_m11_m21),length(unity_ObjectToWorld._m02_m12_m22));

    half _Outline, _OutlineColorBlend;
    half4 _OutlineColor, _Color;
    half _Cutoff, _UseOutline, _Unlit_Intensity;
    half _UseTangent;


    struct appdata
        {
            float4 vertex : POSITION;
            float2 uv : TEXCOORD0;
            float3 tangent : TANGENT;
            float3 normal : NORMAL;
        };

    struct v2f
        {
            float4 vertex : SV_POSITION;
            float2 uv : TEXCOORD0;
            float3 normal : NORMAL;
            half3 ambient : TEXCOORD1;
            UNITY_FOG_COORDS(2)
        };
        
        sampler2D _MainTex;
        sampler2D _MaskTex;
        float4 _MainTex_ST;

        v2f vert (appdata v)
        {
            v2f o = (v2f) 0;
            half4 outlineThreshold = tex2Dlod(_MaskTex, half4(v.uv.xy,0,0));
            float distance = -UnityObjectToViewPos(v.vertex).z;
            distance = min(2, distance) * ipFov;
            o.normal = normalize(lerp(v.normal, v.tangent, _UseTangent));
            v.vertex += float4(o.normal * _Outline * outlineThreshold.r * distance / scale, 0);
            o.vertex = UnityObjectToClipPos(v.vertex);
            o.uv = TRANSFORM_TEX(v.uv, _MainTex);

            #if UNITY_SHOULD_SAMPLE_SH
                o.ambient += max(0, (ShadeSH9(float4(o.normal, 1))));
            #else
                o.ambient = 0;
            #endif
            
            
            UNITY_TRANSFER_FOG(o, o.vertex);

            return o;
        }
        
        fixed4 frag (v2f i) : SV_Target
        {
            #ifdef Outline_OFF
            discard;
            #endif
                 
            half4 c = tex2D(_MainTex, i.uv) * _Color;
            half4 outlineColor = half4(_OutlineColor.rgb, tex2D(_MainTex, i.uv).a * _OutlineColor.a);
            half3 ambient = i.ambient;
            c = lerp(c, outlineColor, _OutlineColorBlend);
            
            half3 c1 = c.rgb * (min(1, _LightColor0) + ambient);
            half3 c2 = c.rgb;
            c.rgb = lerp(c1, c2, _Unlit_Intensity);
            
            #if defined(_ALPHATEST_ON)
            clip (c.a - _Cutoff);
            #endif
            
            UNITY_APPLY_FOG(i.fogCoord, c);
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
