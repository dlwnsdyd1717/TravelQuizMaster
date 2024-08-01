using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class TimerManager : MonoBehaviour
{
    private float timeCount;                            // 실시간으로 줄어드는 시간 초 값을 가지는 변수
    private const float QuizTimeLimit = 15.0f;          // 퀴즈 푸는 제한 시간
    private const float CheckTimeLimit = 15.0f;         // 퀴즈 해설 제한 시간
    private const float RelocationTime = 2.0f;          // 오브젝트 변경 시간

}
