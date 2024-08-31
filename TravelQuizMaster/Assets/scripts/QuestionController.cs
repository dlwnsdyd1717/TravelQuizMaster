using UnityEngine;
using System.Collections.Generic;
using System.IO;
using UnityEngine.SceneManagement;

public class QuestionController : MonoBehaviour
{
    public TimerManager timerManager;
    public UIManager uiManager;
    public CSVReader csvReader;
    public selectButton selectButtons;

    private List<CSVReader.Question> questions;
    private CSVReader.Question currentQuestion;
    private int currentQuestionIndex = 0; // ���� 10������ ��� ����Ǿ����� Ȯ���ϱ� ���� ����
    private int correctAnswers = 0;
    public string playerChoice = ""; // �÷��̾� ������ �����ϴ� ����
    private bool isAnswered = false;

    private void Start()
    {
        LoadQuestions();
        StartQuiz();
    }

    private void LoadQuestions()
    {
        string filePath = Path.Combine(Application.streamingAssetsPath, "osaka_culture_O.csv"); // ���� ���� ��� ����
        int numberOfQuestions = 10; // ������ ���� ����

        // ������ �о�ͼ� �������� ����, ������ ������ŭ ��ȯ
        questions = csvReader.ReadQuestions(filePath, numberOfQuestions);
    }

    private void StartQuiz()
    {
        if (currentQuestionIndex < questions.Count) // ��� ���� ��
        {
            isAnswered = false;
            playerChoice = "";
            currentQuestion = questions[currentQuestionIndex];
            uiManager.UpdateQuestionText(currentQuestion.questionText);
            timerManager.StartQuizTimer();
        }
        else                                        // ��� ����
        {
            SceneManager.LoadScene("Rounge");
        }
    }

    // �÷��̾ ���� �������� �� ȣ��Ǵ� �Լ�
    public void SetPlayerAnswer(bool selectedO)
    {
        if (!isAnswered)
        {
            selectButtons.checkButton(); // O�� �����ߴ��� X�� �����ߴ��� ����
            isAnswered = true; // ���� ���õ��� ǥ��
        }
    }

    // ������ Ȯ���ϰ� �ǵ���� UI�� �����ϴ� �Լ�
    public void CheckAnswer()
    {
        bool isCorrect = (playerChoice == currentQuestion.correctAnswer);
        uiManager.UpdateFeedbackText(isCorrect); // ���� ���� �ؽ�Ʈ ������Ʈ
        if (isCorrect)
        {
            correctAnswers++;
        }
        timerManager.StartExplanationTimer();
    }

    // ���� Ÿ�̸Ӱ� ����Ǿ��� �� ȣ��Ǵ� �Լ�
    public void OnQuizTimeUp()
    {
        if (!isAnswered)
        {
            playerChoice = "None"; // ������ �������� ���� ���
        }
        CheckAnswer();
    }

    // �ؼ� Ÿ�̸Ӱ� ����Ǿ��� �� ȣ��Ǵ� �Լ�
    public void OnExplanationTimeUp()
    {
        timerManager.StartObjectChangeTimer();
    }

    // ������Ʈ ���� Ÿ�̸Ӱ� ����Ǿ��� �� ȣ��Ǵ� �Լ�
    public void OnObjectChangeTimeUp()
    {
        currentQuestionIndex++;
        StartQuiz();
    }
}
