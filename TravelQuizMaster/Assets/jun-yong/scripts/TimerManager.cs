using UnityEngine;
using System.Collections;

public class TimerManager : MonoBehaviour
{
    // 각각의 타이머 제한 시간을 설정하는 변수들
    public int quizTimeLimit = 15;             // 퀴즈 시간 제한 (초)
    public int explanationTimeLimit = 15;      // 설명 시간 제한 (초)

    // 현재 실행 중인 타이머 코루틴을 저장하기 위한 변수
    private IEnumerator currentTimerCoroutine;

    public UIManager uiManager;

    // 퀴즈 타이머를 시작하는 메서드
    public void StartQuizTimer()
    {
        // quizTimeLimit과 OnQuizTimeUp 콜백을 이용해 타이머 시작
        StartTimer(quizTimeLimit, OnQuizTimeUp);
    }

    // 설명 타이머를 시작하는 메서드
    public void StartExplanationTimer()
    {
        // explanationTimeLimit과 OnExplanationTimeUp 콜백을 이용해 타이머 시작
        StartTimer(explanationTimeLimit, OnExplanationTimeUp);
    }

    // 타이머를 시작하는 메서드
    // duration: 타이머 지속 시간 (초)
    // onTimeUp: 타이머가 끝났을 때 호출될 콜백 메서드
    private void StartTimer(int duration, System.Action onTimeUp)
    {
        // 만약 이전에 실행 중이던 타이머 코루틴이 있다면 중지
        if (currentTimerCoroutine != null)
        {
            StopCoroutine(currentTimerCoroutine);
        }
        // 새 타이머 코루틴을 시작하고 참조 저장
        currentTimerCoroutine = TimerCoroutine(duration, onTimeUp);
        StartCoroutine(currentTimerCoroutine);
    }

    // 타이머 코루틴
    // duration: 타이머 지속 시간 (초)
    // onTimeUp: 타이머가 끝났을 때 호출될 콜백 메서드
    private IEnumerator TimerCoroutine(int duration, System.Action onTimeUp)
    {
        // 남은 시간을 설정
        float timeRemaining = duration;
        // 시간이 남아 있는 동안 반복
        while (timeRemaining > 0)
        {
            // Time.deltaTime을 사용하여 시간이 지나도록 설정
            int i = (int)timeRemaining;
            uiManager.timerText.text = i.ToString();
            timeRemaining -= Time.deltaTime;
            
            // 한 프레임을 건너뜀
            yield return null;
        }
        // 시간이 다 되면 콜백 메서드를 호출
        onTimeUp?.Invoke();
       
    }

    // 퀴즈 시간이 끝났을 때 호출되는 메서드
    private void OnQuizTimeUp()
    {

        // QuestionController를 찾아서 QuestionEnd 메서드 호출
        FindObjectOfType<QuestionController>()?.QuestionEnd();
    }

    // 설명 시간이 끝났을 때 호출되는 메서드
    private void OnExplanationTimeUp()
    {
        // QuestionController를 찾아서 OnExplanationTimeUp 메서드 호출
        FindObjectOfType<QuestionController>()?.commentaryEnd();
    }
}