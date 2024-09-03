using UnityEngine;
using UnityEngine.UI;
using System.Collections;

public class UIManager : MonoBehaviour
{
    // UI ��ҵ�
    public Text quizText;                 // ���� �� �ؼ� �ؽ�Ʈ
    public Text timerText;                // Ÿ�̸� �ؽ�Ʈ (15->0)
    public Text answerTexts;              // ���� ���� �ؽ�Ʈ
    public Text roundText;                // ���� ���� ���� �� ������ (���� ����/10)
    //public Image[] staistaminaHeart;      // ü�� �̹���(3��)
    //public Button OButton;                // ���� O ���� ��ư
    //public Button Xbutton;                // ���� X ���� ��ư

    // Ÿ�̸� ���� ����
    private float quizTimeRemaining;

    // ���� �ؽ�Ʈ�� ������Ʈ�ϴ� �Լ�
    public void UpdateQuestionText(string text)
    {
        quizText.text = text; // ���� �Ǵ� �ؼ��� ǥ��
    }

    // ���� ���� �ؽ�Ʈ�� ������Ʈ�ϴ� �Լ�
    public void UpdateFeedbackText(string text)
    {
        answerTexts.text = text;    // ���� ���� Ÿ�ӿ��� ���θ� ǥ��
    }

    // Ÿ�̸� �ؽ�Ʈ�� ������Ʈ�ϴ� �Լ�
    public void UpdateTimerText(int seconds)
    {
        timerText.text = seconds.ToString(); // ���� �ð� �����͸� ǥ��
    }

    // ���� ���� �� �ؽ�Ʈ�� ������Ʈ�ϴ� �Լ�
    public void UpdateRemainingQuestionsText(int remainingQuestions)
    {
        roundText.text = remainingQuestions.ToString() + " ����"; // ���� ���� �� �����͸� ǥ��
    }


    // ���� Ÿ�̸Ӹ� �����ϴ� �Լ�
    public void StartQuizTimer(int duration, System.Action onTimeUp)
    {
        quizTimeRemaining = duration;
        StartCoroutine(TimerCoroutine(onTimeUp, quizTimeRemaining));
    }

    // Ÿ�̸� �ڷ�ƾ
    private IEnumerator TimerCoroutine(System.Action onTimeUp, float timeRemaining)
    {
        while (timeRemaining > 0)
        {
            timeRemaining -= Time.deltaTime;
            UpdateTimerText(Mathf.CeilToInt((int)timeRemaining)); // Ÿ�̸� ������Ʈ
            yield return null;
        }
        timeRemaining = 0;
        UpdateTimerText(0); // Ÿ�̸� �Ϸ�
        onTimeUp?.Invoke();
    }

}
