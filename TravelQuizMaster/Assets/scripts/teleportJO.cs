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

            // 일본 오사카 이동
            if(gameObject.name == "telJO_landmark")                // 일본 오사카 "랜드마크" 게임오브젝트에 부딪친다면
            {
                SceneManager.LoadScene("JepenOsaka_landmark");    // 일본 오사카 "랜드마크" 퀴즈 맵으로 이동한다.->
            }
            else if (gameObject.name == "telJO_culture")           // 일본 오사카 "문화" 게임오브젝트에 부딪친다면
            {
                SceneManager.LoadScene("JepenOsaka_culture");     // 일본 오사카 "문화" 퀴즈 맵으로 이동한다.->
            }
            else if (gameObject.name == "telJO_food")              // 일본 오사카 "음식" 게임오브젝트에 부딪친다면
            {
                SceneManager.LoadScene("JepenOsaka_food");        // 일본 오사카 "음식" 퀴즈 맵으로 이동한다.->
            }
            else if (gameObject.name == "telJO_traffic")           // 일본 오사카 "교통" 게임오브젝트에 부딪친다면
            {
                SceneManager.LoadScene("JepenOsaka_traffic");     // 일본 오사카 "교통" 퀴즈 맵으로 이동한다.->
            }

            // 중국 상하이 이동
            else if (gameObject.name == "telCS_landmark")
            {
                SceneManager.LoadScene("ChinaShanghai_landmark");
            }
            else if (gameObject.name == "telCS_culture")
            {
                SceneManager.LoadScene("ChinaShanghai_culture");
            }
            else if (gameObject.name == "telCS_food")
            {
                SceneManager.LoadScene("ChinaShanghai_food");
            }
            else if (gameObject.name == "telCS_traffic")
            {
                SceneManager.LoadScene("ChinaShanghai_traffic");
            }

            // 베트남 다낭 이동
            else if (gameObject.name == "telVD_landmark")
            {
                SceneManager.LoadScene("VietnamDanang_landmark");
            }
            else if (gameObject.name == "telVD_culture")
            {
                SceneManager.LoadScene("VietnamDanang_culture");
            }
            else if (gameObject.name == "telVD_food")
            {
                SceneManager.LoadScene("VietnamDanang_food");
            }
            else if (gameObject.name == "telVD_traffic")
            {
                SceneManager.LoadScene("VietnamDanang_traffic");
            }
            else
            {
                return;
            }
            
        }
    }
}
