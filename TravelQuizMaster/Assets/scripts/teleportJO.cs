using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class teleportJO : MonoBehaviour
{


    private void OnTriggerEnter(Collider other)
    {

        if (other.CompareTag("Player"))                           // 플레이어 캐릭터가 만약
        {
            if(gameObject.name == "telJOlandmark")                // 일본 오사카 "랜드마크" 게임오브젝트에 부딪친다면
            {
                SceneManager.LoadScene("JepenOsaka_landmark");    // 일본 오사카 "랜드마크" 퀴즈 맵으로 이동한다.->
            }
            else if (gameObject.name == "telJOculture")           // 일본 오사카 "문화" 게임오브젝트에 부딪친다면
            {
                SceneManager.LoadScene("JepenOsaka_culture");     // 일본 오사카 "문화" 퀴즈 맵으로 이동한다.->
            }
            else if (gameObject.name == "telJOfood")              // 일본 오사카 "음식" 게임오브젝트에 부딪친다면
            {
                SceneManager.LoadScene("JepenOsaka_food");        // 일본 오사카 "음식" 퀴즈 맵으로 이동한다.->
            }
            else if (gameObject.name == "telJOtraffic")           // 일본 오사카 "교통" 게임오브젝트에 부딪친다면
            {
                SceneManager.LoadScene("JepenOsaka_traffic");     // 일본 오사카 "교통" 퀴즈 맵으로 이동한다.->
            }
            else if (gameObject.name == "telCS"){
                SceneManager.LoadScene("ChinaShanghai");
            }
            else if (gameObject.name == "telVD")
            {
                SceneManager.LoadScene("VietnamDanang");
            }
            else
            {
                return;
            }
            
        }
    }
}
