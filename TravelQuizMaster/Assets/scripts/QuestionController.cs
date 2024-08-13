using System.Collections.Generic;
using UnityEngine;

// Question ����ü�� ���������� ����
[System.Serializable]
public struct Question
{
    public string questionText;    // ���� ����
    public string explanation;     // �ؼ� ����
    public bool isCorrect;         // ���� ����
}

public class QuestionController : MonoBehaviour
{
    public UIManager uiManager; // UI ���� ��ũ��Ʈ ����
    public TimerManager timerManager; // Ÿ�̸� ���� ��ũ��Ʈ ����

    private List<Question> questions; // ���� ���
    private int currentQuestionIndex = 0; // ���� ���� �ε���
    private bool playerAnswer; // �÷��̾��� ���� (true: O, false: X)
    private bool isAnswerSubmitted = false; // ���� ���� ����

    private const int numberOfQuestions = 10; // ������ ���� ��

    private void Start()
    {
        // CSV ���Ͽ��� ��� �ҷ���
        questions = new List<Question>();
        questions.AddRange(ReadCSV("O.csv", true));  // O.csv���� ������ ������
        questions.AddRange(ReadCSV("X.csv", false)); // X.csv���� ������ ������

        // ���� ����� ����
        questions = ShuffleList(questions);

        // 10���� ������ ����
        questions = questions.GetRange(0, Mathf.Min(numberOfQuestions, questions.Count));

        // ù ��° ���� ���
        LoadNextQuestion();
    }

    // CSV ������ �о Question ����Ʈ�� ��ȯ
    private List<Question> ReadCSV(string filePath, bool isCorrect)
    {
        List<Question> questions = new List<Question>();
        string[] lines = System.IO.File.ReadAllLines(Application.streamingAssetsPath + "/" + filePath);

        foreach (string line in lines)
        {
            string[] fields = line.Split(',');

            // ������ ������� ���� ��츸 �߰�
            if (fields.Length >= 2)
            {
                Question question = new Question
                {
                    questionText = fields[0],      // ù ��° �ʵ�: ���� ����
                    explanation = fields[1],       // �� ��° �ʵ�: �ؼ� ����
                    isCorrect = isCorrect          // ���� ����
                };

                questions.Add(question);
            }
        }

        return questions;
    }

    // �÷��̾��� ���� ������ ����
    public void SetPlayerAnswer(bool answer)
    {
        playerAnswer = answer;
        isAnswerSubmitted = true; // ���� ����Ǿ����� ǥ��
    }

    // ���� ������ �ε�
    private void LoadNextQuestion()
    {
        if (currentQuestionIndex < questions.Count)
        {
            uiManager.UpdateQuestionText(questions[currentQuestionIndex].questionText);
            uiManager.UpdateProgress(currentQuestionIndex + 1, questions.Count); // ���� ���� ���� ������Ʈ
            isAnswerSubmitted = false;

            // ���� Ÿ�̸� ����
            timerManager.StartQuizTimer(OnQuizTimeUp);
        }
        else
        {
            EndQuiz(); // ��� ������ Ǯ���� ���
        }
    }

    // ���� Ÿ�̸� ���� �� ȣ��
    private void OnQuizTimeUp()
    {
        CheckAnswer(); // ���� Ȯ��
        uiManager.ShowExplanation(questions[currentQuestionIndex].explanation);

        // �ؼ� Ÿ�̸� ����
        timerManager.StartExplanationTimer(OnExplanationTimeUp);
    }

    // ���� Ȯ��
    private void CheckAnswer()
    {
        if (isAnswerSubmitted)
        {
            if (playerAnswer == questions[currentQuestionIndex].isCorrect)
            {
                uiManager.ShowFeedback("Correct!");
            }
            else
            {
                uiManager.ShowFeedback("Wrong!");
            }
        }
        else
        {
            uiManager.ShowFeedback("Time's up! Wrong!");
        }
    }

    // �ؼ� Ÿ�̸� ���� �� ȣ��
    private void OnExplanationTimeUp()
    {
        currentQuestionIndex++; // ���� ������ �̵�
        uiManager.HideExplanation();
        timerManager.StartObjectChangeTimer(OnObjectChangeTimeUp); // ������Ʈ ���� Ÿ�̸� ����
    }

    // ������Ʈ ���� Ÿ�̸� ���� �� ȣ��
    private void OnObjectChangeTimeUp()
    {
        LoadNextQuestion(); // ���� ���� �ε�
    }

    // ���� ����
    private void EndQuiz()
    {
        uiManager.ShowEndScreen(); // ���� ���� ȭ�� ���
    }

    // ����Ʈ ����
    private List<Question> ShuffleList(List<Question> list)
    {
        for (int i = 0; i < list.Count; i++)
        {
            Question temp = list[i];
            int randomIndex = Random.Range(i, list.Count);
            list[i] = list[randomIndex];
            list[randomIndex] = temp;
        }
        return list;
    }
}