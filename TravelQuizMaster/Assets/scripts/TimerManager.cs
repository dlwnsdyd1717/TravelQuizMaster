using UnityEngine;
using System;
using UnityEngine.UI;
using System.Collections;

public class TimerManager : MonoBehaviour
{
    public UIManager uiManager;

    private Coroutine currentTimer;

    // 퀴즈 타이머 시작 (15초)
    public void StartQuizTimer(System.Action onTimeUp)
    {
        if (currentTimer != null) StopCoroutine(currentTimer);
        currentTimer = StartCoroutine(RunTimer(15f, onTimeUp));
    }

    // 해설 타이머 시작 (15초)
    public void StartExplanationTimer(System.Action onTimeUp)
    {
        if (currentTimer != null) StopCoroutine(currentTimer);
        currentTimer = StartCoroutine(RunTimer(15f, onTimeUp));
    }

    // 오브젝트 변경 타이머 시작 (2초)
    public void StartObjectChangeTimer(System.Action onTimeUp)
    {
        if (currentTimer != null) StopCoroutine(currentTimer);
        currentTimer = StartCoroutine(RunTimer(2f, onTimeUp));
    }

    // 타이머 코루틴
    private IEnumerator RunTimer(float duration, System.Action onTimeUp)
    {
        float timeLeft = duration;
        while (timeLeft > 0f)
        {
            timeLeft -= Time.deltaTime;
            uiManager.UpdateTimerText(timeLeft);
            yield return null;
        }

        onTimeUp.Invoke(); // 타이머가 종료되면 호출
    }
}
