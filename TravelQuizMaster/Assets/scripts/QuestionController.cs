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
    private int currentQuestionIndex = 0; // 퀴즈 10문제가 모두 진행되었는지 확인하기 위한 변수
    private int correctAnswers = 0;
    public string playerChoice = ""; // 플레이어 선택을 저장하는 변수
    private bool isAnswered = false;

    private void Start()
    {
        LoadQuestions();
        StartQuiz();
    }

    private void LoadQuestions()
    {
        string filePath = Path.Combine(Application.streamingAssetsPath, "osaka_culture_O.csv"); // 문제 파일 경로 설정
        int numberOfQuestions = 10; // 출제할 문제 개수

        // 문제를 읽어와서 무작위로 섞고, 지정된 개수만큼 반환
        questions = csvReader.ReadQuestions(filePath, numberOfQuestions);
    }

    private void StartQuiz()
    {
        if (currentQuestionIndex < questions.Count) // 퀴즈가 진행 중
        {
            isAnswered = false;
            playerChoice = "";
            currentQuestion = questions[currentQuestionIndex];
            uiManager.UpdateQuestionText(currentQuestion.questionText);
            timerManager.StartQuizTimer();
        }
        else                                        // 퀴즈가 종료
        {
            SceneManager.LoadScene("Rounge");
        }
    }

    // 플레이어가 답을 선택했을 때 호출되는 함수
    public void SetPlayerAnswer(bool selectedO)
    {
        if (!isAnswered)
        {
            selectButtons.checkButton(); // O를 선택했는지 X를 선택했는지 설정
            isAnswered = true; // 답이 선택됨을 표시
        }
    }

    // 정답을 확인하고 피드백을 UI에 전달하는 함수
    public void CheckAnswer()
    {
        bool isCorrect = (playerChoice == currentQuestion.correctAnswer);
        uiManager.UpdateFeedbackText(isCorrect); // 정답 여부 텍스트 업데이트
        if (isCorrect)
        {
            correctAnswers++;
        }
        timerManager.StartExplanationTimer();
    }

    // 퀴즈 타이머가 종료되었을 때 호출되는 함수
    public void OnQuizTimeUp()
    {
        if (!isAnswered)
        {
            playerChoice = "None"; // 정답을 선택하지 않은 경우
        }
        CheckAnswer();
    }

    // 해설 타이머가 종료되었을 때 호출되는 함수
    public void OnExplanationTimeUp()
    {
        timerManager.StartObjectChangeTimer();
    }

    // 오브젝트 변경 타이머가 종료되었을 때 호출되는 함수
    public void OnObjectChangeTimeUp()
    {
        currentQuestionIndex++;
        StartQuiz();
    }
}
