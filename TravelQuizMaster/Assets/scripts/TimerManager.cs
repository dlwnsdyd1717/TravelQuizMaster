using UnityEngine;
using System;
using UnityEngine.UI;
using System.Collections;

public class TimerManager : MonoBehaviour
{
    public UIManager uiManager;

    private Coroutine currentTimer;

    // ���� Ÿ�̸� ���� (15��)
    public void StartQuizTimer(System.Action onTimeUp)
    {
        if (currentTimer != null) StopCoroutine(currentTimer);
        currentTimer = StartCoroutine(RunTimer(15f, onTimeUp));
    }

    // �ؼ� Ÿ�̸� ���� (15��)
    public void StartExplanationTimer(System.Action onTimeUp)
    {
        if (currentTimer != null) StopCoroutine(currentTimer);
        currentTimer = StartCoroutine(RunTimer(15f, onTimeUp));
    }

    // ������Ʈ ���� Ÿ�̸� ���� (2��)
    public void StartObjectChangeTimer(System.Action onTimeUp)
    {
        if (currentTimer != null) StopCoroutine(currentTimer);
        currentTimer = StartCoroutine(RunTimer(2f, onTimeUp));
    }

    // Ÿ�̸� �ڷ�ƾ
    private IEnumerator RunTimer(float duration, System.Action onTimeUp)
    {
        float timeLeft = duration;
        while (timeLeft > 0f)
        {
            timeLeft -= Time.deltaTime;
            uiManager.UpdateTimerText(timeLeft);
            yield return null;
        }

        onTimeUp.Invoke(); // Ÿ�̸Ӱ� ����Ǹ� ȣ��
    }
}
