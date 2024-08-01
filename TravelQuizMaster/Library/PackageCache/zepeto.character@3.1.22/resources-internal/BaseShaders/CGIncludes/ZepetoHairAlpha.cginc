#ifndef __HAIR__
#define __HAIR__


    sampler2D _MainTex, _SpecularTex, _NormalTex, _BridgeTex;
    float _SpecularMultiplier, _SpecularMultiplier2, _PrimaryShift, _SecondaryShift, _Cutoff, _RimPower, _TintPower, _NormalPower;
    fixed4 _SpecularColor, _Color, _SpecularColor2;

    // auto calculate
    fixed4 _RimColor, _TintColor;

    #include "ToneMapping.cginc"
    

    struct SurfaceOutputHair
    {
        fixed3 Albedo;
        fixed3 Normal;
        fixed3 Emission;
        half Specular;
        fixed SpecShift;
        fixed Alpha;
        fixed SpecMask;
        half3 tangent_input; 
    };

    struct Input
    {
        float2 uv_MainTex;
        float2 uv_SpecularTex;
        float2 uv_NormalTex;
        float2 uv_BridgeTex;
        half3 tangent_input;
        float3 viewDir;
    };


    void vert(inout appdata_full i, out Input o)
    { 
        UNITY_INITIALIZE_OUTPUT(Input, o); 
        o.tangent_input = UnityObjectToWorldDir(i.tangent.xyz);
    }


    inline half3 ShiftTangent ( half3 T, half3 N, half shift)
    {
        half3 shiftedT = T+ shift * N;
        return normalize( shiftedT);
    }

    half StrandSpecular ( half3 T, half3 V, half3 L, half exponent)
    {
        half3 H = normalize ( L + V );
        half dotTH = dot ( T, H );
        half sinTH = sqrt ( 1 - dotTH * dotTH);
        half dirAtten = smoothstep( -1, 0, dotTH );
        return dirAtten * pow(sinTH, exponent);
    }

    half3 rgb2hsv(half3 c) {
        half4 K = half4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
        half4 p = lerp(half4(c.bg, K.wz), half4(c.gb, K.xy), step(c.b, c.g));
        half4 q = lerp(half4(p.xyw, c.r), half4(c.r, p.yzx), step(p.x, c.r));

        half d = q.x - min(q.w, q.y);
        half e = 1.0e-10;
        return half3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);
    }

    half3 hsv2rgb(half3 c) {
        c = float3(c.x, clamp(c.yz, 0.0, 1.0));
        half4 K = half4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
        half3 p = abs(frac(c.xxx + K.xyz) * 6.0 - K.www);
        return c.z * lerp(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
    }

    inline fixed4 GetSafeColor() {

        fixed4 _SafeColor = _Color;
        
        _SafeColor.rgb = rgb2hsv(_SafeColor.rgb);      
        _SafeColor.z =  max( min(_SafeColor.z,1.0), 0.2);
        _SafeColor.rgb = hsv2rgb(_SafeColor.rgb);
        
        return _SafeColor;

    }

    void surf_base (Input IN, inout SurfaceOutputHair o)
    {
        fixed4 _SafeColor = GetSafeColor();

        fixed4 baseColor = tex2D(_MainTex, IN.uv_MainTex) * _SafeColor;
		fixed4 baseTex = tex2D(_MainTex, IN.uv_MainTex);
		fixed4 birdgeTex = tex2D(_BridgeTex, IN.uv_BridgeTex);
		birdgeTex.rgb = birdgeTex.rgb * baseTex * 1.1;
        fixed4 albedo = lerp(baseColor, birdgeTex, birdgeTex.a);
        o.Albedo = lerp(albedo, birdgeTex, birdgeTex.a);
        o.Alpha = baseTex.a;
        fixed3 spec = tex2D(_SpecularTex, IN.uv_SpecularTex).rgb;
        o.Specular = spec.r;
        o.SpecShift = spec.g;
        o.SpecMask = spec.b;  
        o.tangent_input = IN.tangent_input ;

        half3 rim = half3(0.077, 0.055, 0.04);

        o.Emission = half3(0.016, 0.006, 0.0015);


        fixed3 n = UnpackNormal( tex2D(_NormalTex, IN.uv_NormalTex));
        o.Normal = float3(n.x * _NormalPower, n.y * _NormalPower, n.z);

    
    }

    inline fixed4 LightingHair (SurfaceOutputHair s, fixed3 lightDir, fixed3 viewDir, fixed atten)
    {
        fixed4 _SafeColor = GetSafeColor();
        half NdotL = saturate(dot(s.Normal, lightDir));

        half shiftTex = s.SpecShift - .5;
        half3 T = -normalize(cross( s.Normal, s.tangent_input));

        half3 t1 = ShiftTangent ( T, s.Normal, _PrimaryShift + shiftTex );
        half3 t2 = ShiftTangent ( T, s.Normal, _SecondaryShift + shiftTex );

        half3 diff = saturate ( lerp ( .25, 1, NdotL));
        diff = diff * _SafeColor ;

        half3 spec =  _SpecularColor * StrandSpecular(t1, viewDir, lightDir, _SpecularMultiplier);
        spec = spec +  _SpecularColor2 * s.SpecMask * StrandSpecular ( t2, viewDir, lightDir, _SpecularMultiplier2) ;

        fixed4 c;
        c.rgb = ((diff + spec) * s.Albedo * atten * 2 * _LightColor0.rgb * NdotL);
        c.a = s.Alpha; 

        return c;
    }

    void tonemapping (Input IN, SurfaceOutputHair o, inout fixed4 color) {
        color = ApplyColorGrading(color);
    }
#endif // __HAIR__
