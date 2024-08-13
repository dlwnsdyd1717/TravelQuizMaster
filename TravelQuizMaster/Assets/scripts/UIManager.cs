using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class UIManager : MonoBehaviour
{
    public Text questionText; // ���� �ؽ�Ʈ
    public Text feedbackText; // ����/���� �ǵ�� �ؽ�Ʈ
    public Text explanationText; // �ؼ� �ؽ�Ʈ
    public Text timerText; // Ÿ�̸� �ؽ�Ʈ
    public Text questionProgressText; // ���� ���� ���� ���� �ؽ�Ʈ
    public Text endScreenText; // ���� ���� �ؽ�Ʈ

    // ���� �ؽ�Ʈ ������Ʈ
    public void UpdateQuestionText(string text)
    {
        questionText.text = text;
    }

    // Ÿ�̸� �ؽ�Ʈ ������Ʈ
    public void UpdateTimerText(float time)
    {
        timerText.text = time.ToString("F1");
    }

    // ����/���� �ǵ�� �ؽ�Ʈ �����ֱ�
    public void ShowFeedback(string feedback)
    {
        feedbackText.text = feedback;
        feedbackText.gameObject.SetActive(true);
    }

    // �ؼ� �ؽ�Ʈ �����ֱ�
    public void ShowExplanation(string explanation)
    {
        explanationText.text = explanation;
        explanationText.gameObject.SetActive(true);
    }

    // �ؼ� �ؽ�Ʈ �����
    public void HideExplanation()
    {
        explanationText.gameObject.SetActive(false);
    }

    // ���� ���� ȭ�� �����ֱ�
    public void ShowEndScreen()
    {
        endScreenText.gameObject.SetActive(true);
    }

    // ���� ���� ���� �ؽ�Ʈ ������Ʈ
    public void UpdateProgress(int currentQuestion, int totalQuestions)
    {
        questionProgressText.text = $"Question {currentQuestion}/{totalQuestions}";
    }
}
