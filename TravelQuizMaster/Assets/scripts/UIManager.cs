using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class UIManager : MonoBehaviour
{
    public Text questionText; // 문제 텍스트
    public Text feedbackText; // 정답/오답 피드백 텍스트
    public Text explanationText; // 해설 텍스트
    public Text timerText; // 타이머 텍스트
    public Text questionProgressText; // 현재 문제 진행 상태 텍스트
    public Text endScreenText; // 퀴즈 종료 텍스트

    // 문제 텍스트 업데이트
    public void UpdateQuestionText(string text)
    {
        questionText.text = text;
    }

    // 타이머 텍스트 업데이트
    public void UpdateTimerText(float time)
    {
        timerText.text = time.ToString("F1");
    }

    // 정답/오답 피드백 텍스트 보여주기
    public void ShowFeedback(string feedback)
    {
        feedbackText.text = feedback;
        feedbackText.gameObject.SetActive(true);
    }

    // 해설 텍스트 보여주기
    public void ShowExplanation(string explanation)
    {
        explanationText.text = explanation;
        explanationText.gameObject.SetActive(true);
    }

    // 해설 텍스트 숨기기
    public void HideExplanation()
    {
        explanationText.gameObject.SetActive(false);
    }

    // 퀴즈 종료 화면 보여주기
    public void ShowEndScreen()
    {
        endScreenText.gameObject.SetActive(true);
    }

    // 문제 진행 상태 텍스트 업데이트
    public void UpdateProgress(int currentQuestion, int totalQuestions)
    {
        questionProgressText.text = $"Question {currentQuestion}/{totalQuestions}";
    }
}
