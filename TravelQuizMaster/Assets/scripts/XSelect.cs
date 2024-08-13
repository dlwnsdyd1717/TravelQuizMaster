using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class XSelect : MonoBehaviour
{
    public QuestionController questionController; // 문제 컨트롤러를 참조

    private void OnTriggerEnter(Collider other)
    {
        if (other.CompareTag("Player"))           // 부딪친 오브젝트 태그가 플레이어일때
        {
            questionController.SetPlayerAnswer(false); // 플레이어가 X를 선택 -> false (오답)
        }
    }
}
