using UnityEngine;
using UnityEngine.UI;
using System.Collections;

public class UIManager : MonoBehaviour
{
    // UI 요소들
    public Text quizText;                 // 문제 및 해설 텍스트
    public Text timerText;                // 타이머 텍스트 (15->0)
    public Text answerTexts;              // 정답 여부 텍스트
    public Text roundText;                // 남은 퀴즈 문제 수 데이터 (현재 라운드/10)
    //public Image[] staistaminaHeart;      // 체력 이미지(3개)
    //public Button OButton;                // 퀴즈 O 선택 버튼
    //public Button Xbutton;                // 퀴즈 X 선택 버튼

    // 타이머 상태 변수
    private float quizTimeRemaining;

    // 문제 텍스트를 업데이트하는 함수
    public void UpdateQuestionText(string text)
    {
        quizText.text = text; // 문제 또는 해설을 표시
    }

    // 정답 여부 텍스트를 업데이트하는 함수
    public void UpdateFeedbackText(string text)
    {
        answerTexts.text = text;    // 정답 오답 타임오버 여부만 표시
    }

    // 타이머 텍스트를 업데이트하는 함수
    public void UpdateTimerText(int seconds)
    {
        timerText.text = seconds.ToString(); // 남은 시간 데이터만 표시
    }

    // 남은 문제 수 텍스트를 업데이트하는 함수
    public void UpdateRemainingQuestionsText(int remainingQuestions)
    {
        roundText.text = remainingQuestions.ToString() + " 라운드"; // 남은 문제 수 데이터만 표시
    }


    // 퀴즈 타이머를 시작하는 함수
    public void StartQuizTimer(int duration, System.Action onTimeUp)
    {
        quizTimeRemaining = duration;
        StartCoroutine(TimerCoroutine(onTimeUp, quizTimeRemaining));
    }

    // 타이머 코루틴
    private IEnumerator TimerCoroutine(System.Action onTimeUp, float timeRemaining)
    {
        while (timeRemaining > 0)
        {
            timeRemaining -= Time.deltaTime;
            UpdateTimerText(Mathf.CeilToInt((int)timeRemaining)); // 타이머 업데이트
            yield return null;
        }
        timeRemaining = 0;
        UpdateTimerText(0); // 타이머 완료
        onTimeUp?.Invoke();
    }

}
