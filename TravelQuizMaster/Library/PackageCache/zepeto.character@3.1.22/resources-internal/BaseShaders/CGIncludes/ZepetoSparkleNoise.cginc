// Unity built-in shader source. Copyright (c) 2016 Unity Technologies. MIT license (see license.txt)

#ifndef ZEPETO_SPARKLE_NOISE_INCLUDED
#define ZEPETO_SPARKLE_NOISE_INCLUDED

// sparkle
sampler2D   _NoiseMap;
half        _NoiseIntensity;
half        _NoiseConcentration;
half        _NoiseSize;
half        _NoiseDensity;

half3 noise( in half2 x )
{
    return tex2D( _NoiseMap, x ).xyz;
}

half3 computeSparkle(float2 uv, float3 c, float3 l, float3 n, float3 v)
{
    #define NOISE_TEXTURE_SIZE 128.0
    half3 h = normalize(l + v);

    // to do : vertex shader에서 하도록
    half scale = exp2(-_NoiseSize) * 997.0 + 0.1414;
    // 유효숫자 개수가 부족하여 precision이 높아야 될연산.
    float2 coord = float2(floor(uv*scale))/scale;        
    half3 aniso = noise(coord*NOISE_TEXTURE_SIZE) * 2.0 - 1.0;
    half ah = abs(dot(h,aniso));
    half nh = abs(dot(n,h));
    half q = exp2((-.9 + _NoiseDensity)*3.5);
    nh = pow( nh, q * _NoiseConcentration );
    nh *= pow( max(0,1.-ah + ah*_NoiseDensity), 150.0 );
    half3 glints = c*nh*((_NoiseDensity)*_NoiseIntensity);
    return glints;
}

#endif // ZEPETO_SPARKLE_NOISE_INCLUDED
