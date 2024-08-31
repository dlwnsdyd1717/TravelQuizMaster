using UnityEngine;
using System.Collections;

public class TimerManager : MonoBehaviour
{
    // ������ Ÿ�̸� ���� �ð��� �����ϴ� ������
    public int quizTimeLimit = 15;             // ���� �ð� ���� (��)
    public int explanationTimeLimit = 15;      // ���� �ð� ���� (��)
    public int objectChangeTimeLimit = 2;      // ������Ʈ ���� �ð� ���� (��)

    // ���� ���� ���� Ÿ�̸� �ڷ�ƾ�� �����ϱ� ���� ����
    private IEnumerator currentTimerCoroutine;

    // ���� Ÿ�̸Ӹ� �����ϴ� �޼���
    public void StartQuizTimer()
    {
        // quizTimeLimit�� OnQuizTimeUp �ݹ��� �̿��� Ÿ�̸� ����
        StartTimer(quizTimeLimit, OnQuizTimeUp);
    }

    // ���� Ÿ�̸Ӹ� �����ϴ� �޼���
    public void StartExplanationTimer()
    {
        // explanationTimeLimit�� OnExplanationTimeUp �ݹ��� �̿��� Ÿ�̸� ����
        StartTimer(explanationTimeLimit, OnExplanationTimeUp);
    }

    // ������Ʈ ���� Ÿ�̸Ӹ� �����ϴ� �޼���
    public void StartObjectChangeTimer()
    {
        // objectChangeTimeLimit�� OnObjectChangeTimeUp �ݹ��� �̿��� Ÿ�̸� ����
        StartTimer(objectChangeTimeLimit, OnObjectChangeTimeUp);
    }

    // Ÿ�̸Ӹ� �����ϴ� �޼���
    // duration: Ÿ�̸� ���� �ð� (��)
    // onTimeUp: Ÿ�̸Ӱ� ������ �� ȣ��� �ݹ� �޼���
    private void StartTimer(int duration, System.Action onTimeUp)
    {
        // ���� ������ ���� ���̴� Ÿ�̸� �ڷ�ƾ�� �ִٸ� ����
        if (currentTimerCoroutine != null)
        {
            StopCoroutine(currentTimerCoroutine);
        }
        // �� Ÿ�̸� �ڷ�ƾ�� �����ϰ� ���� ����
        currentTimerCoroutine = TimerCoroutine(duration, onTimeUp);
        StartCoroutine(currentTimerCoroutine);
    }

    // Ÿ�̸� �ڷ�ƾ
    // duration: Ÿ�̸� ���� �ð� (��)
    // onTimeUp: Ÿ�̸Ӱ� ������ �� ȣ��� �ݹ� �޼���
    private IEnumerator TimerCoroutine(int duration, System.Action onTimeUp)
    {
        // ���� �ð��� ����
        float timeRemaining = duration;
        // �ð��� ���� �ִ� ���� �ݺ�
        while (timeRemaining > 0)
        {
            // Time.deltaTime�� ����Ͽ� �ð��� �������� ����
            timeRemaining -= Time.deltaTime;
            // �� �������� �ǳʶ�
            yield return null;
        }
        // �ð��� �� �Ǹ� �ݹ� �޼��带 ȣ��
        onTimeUp?.Invoke();
    }

    // ���� �ð��� ������ �� ȣ��Ǵ� �޼���
    private void OnQuizTimeUp()
    {
        // QuestionController�� ã�Ƽ� OnQuizTimeUp �޼��� ȣ��
        FindObjectOfType<QuestionController>()?.OnQuizTimeUp();
    }

    // ���� �ð��� ������ �� ȣ��Ǵ� �޼���
    private void OnExplanationTimeUp()
    {
        // QuestionController�� ã�Ƽ� OnExplanationTimeUp �޼��� ȣ��
        FindObjectOfType<QuestionController>()?.OnExplanationTimeUp();
    }

    // ������Ʈ ���� �ð��� ������ �� ȣ��Ǵ� �޼���
    private void OnObjectChangeTimeUp()
    {
        // QuestionController�� ã�Ƽ� OnObjectChangeTimeUp �޼��� ȣ��
        FindObjectOfType<QuestionController>()?.OnObjectChangeTimeUp();
    }
}