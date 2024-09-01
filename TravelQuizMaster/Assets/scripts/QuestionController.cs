using UnityEngine;
using System.Collections.Generic;
using System.IO;
using UnityEngine.SceneManagement;

public class QuestionController : MonoBehaviour
{
    public TimerManager timerManager;
    public UIManager uiManager;
    public CSVReader csvReader;

    private List<QuizData> selectedQuizzes;  // ���õ� ���� �������� ������ ����Ʈ

    private int currentQuestionIndex = 0; // ���� 10������ ��� ����Ǿ����� Ȯ���ϱ� ���� ����
    private int correctAnswers = 0;     // �÷��̾��� ���� Ƚ���� �����ϴ� ����
    public string playerChoice = "";    // �÷��̾� ������ �����ϴ� ����
    private bool isAnswered = false;    // �÷��̾ ������ ���� ���θ� �����ϴ� ����
    private int roundCount = 1;         // �������� ���� �� ����
    private int helth = 3;              // �÷��̾� ü��
    private GameObject[] imageObject = new GameObject[3];  //ü�� �̹���

    // �� ����
    private void Start()
    {
        LoadQuestions();   // ���� �ҷ�����
        uiManager.UpdateRemainingQuestionsText(roundCount);  // ���� ���� ����
        uiManager.answerTexts.text = "���� ��ŸƮ!";         // �̵� �����ϸ� ������ �޼���
        Invoke("StartQuiz", 2f);                             // 2�� ����� ���� ����

        // ü�� �̹��� ���� ������Ʈ 1���� ����Ʈ �迭�� ����----
        for(int i = 1; i <= 3; i++)
        {
            string imagename = "heart" + i.ToString();
            imageObject[i-1] = GameObject.Find(imagename);
        }
    }

    // ���� ���� �ҷ�����
    private void LoadQuestions()
    {
        // QuizLoader�� ���� 10���� ���� ���� ������ ����
        selectedQuizzes = csvReader.GetRandomQuizzes();  // 10���� ���� ��� ����
    }

    // ���� ����
    public void StartQuiz()
    {
        isAnswered = false;
        if (helth <= 0) // ü�� 3���� ��� ���Ǿ����� ��
        {
            uiManager.timerText.gameObject.SetActive(false);
            uiManager.quizText.gameObject.SetActive(false);
            uiManager.answerTexts.gameObject.SetActive(true);
            uiManager.answerTexts.text = "-GAME OVER-";
            Invoke("QuizEnd", 1.5f);  // ���� ���� �Լ� ȣ��
            return;
        }
        if (currentQuestionIndex < selectedQuizzes.Count) // 1������� 10������� �����ϸ鼭 ��
        {
            answerTextsOff();   // ���� ���� ���� �ؽ�Ʈ �� ���̰� �ϱ�
            QuestionStart();    // ���� ���� ����(����?)
        }
        else
        {
            QuizEnd();  // 3�� �� ���� ���� �Լ� ȣ��
        }
    }
    // ���� ����
    private void QuizEnd()
    {
        SceneManager.LoadScene("Rounge");   // ���� �ʿ��� ����� ������ �̵�
        CancelInvoke("QuizEnd");            // Invoke ����
    }

    // ���� ���� ����
    private void QuestionStart()
    {
        playerChoice = "";      // ���� ���� �÷��̾��� O,X���� �ʱ�ȭ
        uiManager.UpdateQuestionText(selectedQuizzes[currentQuestionIndex].Question); // UI ���� �ؼ� �ؽ�Ʈ�� ���� ���
        uiManager.UpdateRemainingQuestionsText(roundCount);         // UI ���� �ؽ�Ʈ�� ���� ���� ���
        timerManager.StartQuizTimer();                              // ���� �ð� Ÿ�̸� ȣ��(����)
    }
    

    // ���� Ÿ�̸Ӱ� ����Ǿ��� �� ȣ��Ǵ� �Լ�
    public void OnQuizTimeUp()
    {
        QuestionEnd();             // ���� ���� ���� �Լ� ȣ��
    }

    // ���� ������ ���� �Ǿ����� ȣ�� �Ǵ� �Լ�
    public void QuestionEnd()
    {
        timerManager.StartExplanationTimer();               // �ؼ� Ÿ�̸� ȣ��(����)
        uiManager.UpdateQuestionText(selectedQuizzes[currentQuestionIndex].Explanation); // UI ���� �ؼ� �ؽ�Ʈ�� �ؼ� ���
        CheckAnswer();                                      // ���� ���� Ȯ��
        uiManager.answerTexts.gameObject.SetActive(true);   // ���� ���� ���� �ؽ�Ʈ ���̰� ��
        Invoke("answerTextsOff", 3f);                       // 3�� �� ���� ���� ���� �ؽ�Ʈ �� ���̰� ��
    }

    // ���� �ؼ��� ���� �Ǿ��� �� ȣ�� �Ǵ� �Լ�
    public void commentaryEnd()
    {
        roundCount++;           // ���� +1
        currentQuestionIndex++; // ���� �ε��� +1
        StartQuiz();            // ���� ���� ȣ��(�ݺ�)
    }


    // ������ Ȯ���ϰ� �ǵ���� UI�� �����ϴ� �Լ�
    public void CheckAnswer()
    {
        bool isCorrect = (playerChoice == selectedQuizzes[currentQuestionIndex].Answer);
        if (!isAnswered)           // ���� �÷��̾ ���� �����ߴ��� Ȯ��
        {
            uiManager.UpdateFeedbackText("�ð��� ���� �Ǿ����ϴ�!");  // ������ �������� ���� ���
            helth--;    // ü�� -1
            imageObject[helth].gameObject.SetActive(false);     // ü�� �̹��� ���� ������Ʈ �ϳ��� ���̱�
            return;
        }
        if (isCorrect)
        {
            uiManager.UpdateFeedbackText("�����Դϴ�!"); // ���� ���� �ؽ�Ʈ ������Ʈ
            correctAnswers++;   // �÷��̾��� ���� Ƚ�� +1
        }
        else
        {
            uiManager.UpdateFeedbackText("������ �ƴմϴ�!"); // ������ 
            helth--;    // ü�� -1
            imageObject[helth].gameObject.SetActive(false);     // ü�� �̹��� ���� ������Ʈ �ϳ��� ���̱�
        }
    }

    // ���� ���� ���� ���� �� ���̰� �ϴ� �Լ�
    private void answerTextsOff()
    {
        uiManager.answerTexts.gameObject.SetActive(false);  // ���� ���� �� ���̰� �ϱ�
    }

    // O ��ư UI�� �÷��̾ �������� ȣ��Ǵ� �Լ�
    public void OButtonPress()
    {
        isAnswered = true;  // �÷��̾ ��� ������
        playerChoice = "O"; // �÷��̾��� ���� ������ O�� ��
    }
    // X ��ư UI�� �÷��̾ �������� ȣ��Ǵ� �Լ�
    public void XButtonPress()
    {
        isAnswered = true;  // �÷��̾ ��� ������
        playerChoice = "X"; // �÷��̾ ���� ������ X�� ��
    }
}
