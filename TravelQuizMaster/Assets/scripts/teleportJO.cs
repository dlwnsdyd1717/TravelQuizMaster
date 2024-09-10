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
            else if (gameObject.name == "telCS_landmark")           // 중국 상하이 "랜드마크" 게임오브젝트에 부딪친다면
            {
                SceneManager.LoadScene("ChinaShanghai_landmark");   // 중국 상하이 "랜드마크" 퀴즈 맵으로 이동 ->
            }
            else if (gameObject.name == "telCS_culture")            // 중국 상하이 "문화" 게임오브젝트에 부딪친다면
            {
                SceneManager.LoadScene("ChinaShanghai_culture");    // 중국 상하이 "문화" 퀴즈 맵으로 이동 ->
            }
            else if (gameObject.name == "telCS_food")               // 중국 상하이 "음식" 게임오브젝트에 부딪친다면
            {
                SceneManager.LoadScene("ChinaShanghai_food");       // 중국 상하이 "음식" 퀴즈 맵으로 이동 ->
            }
            else if (gameObject.name == "telCS_traffic")            // 중국 상하이 "교툥수단" 게임 오브젝트에 부딪친다면
            {
                SceneManager.LoadScene("ChinaShanghai_traffic");    // 중국 상하이 "교통수단" 퀴즈 맵으로 이동 ->
            }

            // 베트남 다낭 이동
            else if (gameObject.name == "telVD_landmark")           // 베트남 다낭 "랜드마크" 게임오브젝트에 부딪친다면
            {
                SceneManager.LoadScene("VietnamDanang_landmark");   // 베트남 다낭 "랜드마크" 퀴즈 맵으로 이동 ->
            }
            else if (gameObject.name == "telVD_culture")            // 베트남 다낭 "문화" 게임오브젝트에 부딪친다면
            {
                SceneManager.LoadScene("VietnamDanang_culture");    // 베트남 다낭 "문화" 퀴즈 맵으로 이동 ->
            }
            else if (gameObject.name == "telVD_food")               // 베트남 다낭 "음식" 게임오브젝트에 부딪친다면
            {
                SceneManager.LoadScene("VietnamDanang_food");       // 베트남 다낭 "음식" 퀴즈 맵으로 이동 ->
            }
            else if (gameObject.name == "telVD_traffic")            // 베트남 다낭 "교통수단" 게임오브젝트에 부딪친다면
            {
                SceneManager.LoadScene("VietnamDanang_traffic");    // 베트남 다낭 "교통수단" 퀴즈 맵으로 이동 ->
            }
            else
            {
                return;                                             // 이외 값은 이동하지 않는다.
            }
            
        }
    }
}
