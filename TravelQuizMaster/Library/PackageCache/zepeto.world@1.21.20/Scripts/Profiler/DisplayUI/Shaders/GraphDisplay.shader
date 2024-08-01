Shader "ZEPETO/RuntimeProfiler/GraphDisplay"
{
    Properties
    {
        [PerRendererData] _MainTex("Sprite Texture", 2D) = "white" {}
        _Color("Tint Color", Color) = (1,1,1,1)

        [Header(Graph colors)]
        _GraphColorStage1("Graph Stage1 Color", Color) = (1, 1, 1, 1)
        _GraphColorStage2("Graph Stage2 Color", Color) = (1, 1, 1, 1)
        _GraphColorStage3("Graph Stage3 Color", Color) = (1, 1, 1, 1)
        _GraphColorStage4("Graph Stage4 Color", Color) = (1, 1, 1, 1)
        _GraphColorStage5("Graph Stage5 Color", Color) = (1, 1, 1, 1)
    }
		
	SubShader
    {
        Tags
        {
            "Queue"="Transparent" 
        	"PreviewType"="Plane"
            "IgnoreProjector"="True" 
            "RenderType"="Transparent" 
        }
        
        Cull Off
        Lighting Off
        ZTest Off
        ZWrite Off
        Blend One OneMinusSrcAlpha
        
        Pass
        {
            Name "Default"
            CGPROGRAM

            #pragma vertex vert
            #pragma fragment frg

            #include "UnityCG.cginc"

            fixed4 _Color;
            uniform float _GraphValues_Length = 60;
 
            uniform float _GraphColorStage1Values[60];
            uniform float _GraphColorStage2Values[60];
            uniform float _GraphColorStage3Values[60];
            uniform float _GraphColorStage4Values[60];
            uniform float _GraphColorStage5Values[60];
             
            fixed4 _GraphColorStage1;
            fixed4 _GraphColorStage2;
            fixed4 _GraphColorStage3;
            fixed4 _GraphColorStage4;
            fixed4 _GraphColorStage5;
            
            struct data_t
            {
                float4 vertex: POSITION;
                float4 color: COLOR;
                float2 texcoord: TEXCOORD0;
            };

            struct vtof
            {
                float4 vertex: SV_POSITION;
                float4 color: COLOR;
                float2 texcoord: TEXCOORD0;
            };

            vtof vert(data_t Input)
            {
                vtof Output;
                Output.vertex = UnityObjectToClipPos(Input.vertex);
                Output.color = Input.color * _Color;
                Output.texcoord = Input.texcoord;
                return Output;
            }

            bool checkYPos(float stage, float y)
            {
	            return stage > 0 && y < stage;
            }
            
            fixed4 getGraphStage(float2 texcoord, fixed4 srcColor)
            {
               float graphStage1 = _GraphColorStage1Values[floor(texcoord.x * _GraphValues_Length)];
               float graphStage2 = _GraphColorStage2Values[floor(texcoord.x * _GraphValues_Length)];
               float graphStage3 = _GraphColorStage3Values[floor(texcoord.x * _GraphValues_Length)];
               float graphStage4 = _GraphColorStage4Values[floor(texcoord.x * _GraphValues_Length)];
               float graphStage5 = _GraphColorStage5Values[floor(texcoord.x * _GraphValues_Length)];

               srcColor.a = 1;
               if (checkYPos(graphStage1, texcoord.y))
			   {
           	   		srcColor *= _GraphColorStage1;
			   }
			   else if (checkYPos(graphStage2, texcoord.y))
			   {
			   		srcColor *= _GraphColorStage2;
			   }
			   else if (checkYPos(graphStage3, texcoord.y))
			   {
			   		srcColor *= _GraphColorStage3;
			   }
			   else if (checkYPos(graphStage4, texcoord.y))
			   {
			   		srcColor *= _GraphColorStage4;
			   }
			   else if (checkYPos(graphStage5, texcoord.y))
			   {
					srcColor *= _GraphColorStage5;
			   }
			   else
			   {
			   		srcColor = fixed4(0, 0, 0, 0.3);
			   }
            	return srcColor;
            }
            
           fixed4 frg(vtof Input): SV_Target
           {
           	   fixed4 graphColor = getGraphStage(Input.texcoord, Input.color);
           	   return graphColor;
           }


           ENDCG
        }
    }
}