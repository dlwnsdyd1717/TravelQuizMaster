using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class DontDestroy : MonoBehaviour
{
    // BGM이 달려있는 게임오브젝트를 파괴하지 않기 위해 만든 변수
    private static DontDestroy instance = null;

    void Awake()
    {
         // 변수가 null인지 확인
         if (instance == null)
         {
             instance = this;                // 변수에 저장
             DontDestroyOnLoad(gameObject);  // 스크립트가 연결된 게임오브젝트를 파괴하지 않는 함수 호출
         }
         else
         {
             Destroy(gameObject); // 중복된 오브젝트는 파괴
         }
    }
}
