using UnityEngine;
using System.Collections.Generic;
using System.IO;
using UnityEngine.SceneManagement;

public class QuestionController : MonoBehaviour
{
    public TimerManager timerManager;
    public UIManager uiManager;
    public CSVReader csvReader;

    private List<QuizData> selectedQuizzes;  // 선택된 퀴즈 문제들을 저장할 리스트

    private int currentQuestionIndex = 0; // 퀴즈 10문제가 모두 진행되었는지 확인하기 위한 변수
    private int correctAnswers = 0;     // 플레이어의 정답 횟수를 저장하는 변수
    public string playerChoice = "";    // 플레이어 선택을 저장하는 변수
    private bool isAnswered = false;    // 플레이어가 정답을 선택 여부를 저장하는 변수
    private int roundCount = 1;         // 진행중인 라운드 수 변수
    private int helth = 3;              // 플레이어 체력
    private GameObject[] imageObject = new GameObject[3];  //체력 이미지

    // 맵 시작
    private void Start()
    {
        LoadQuestions();   // 문제 불러오기
        uiManager.UpdateRemainingQuestionsText(roundCount);  // 퀴즈 라운드 정정
        uiManager.answerTexts.text = "퀴즈 스타트!";         // 이동 시작하면 나오는 메세지
        Invoke("StartQuiz", 2f);                             // 2초 대기후 퀴즈 시작

        // 체력 이미지 게임 오브젝트 1차원 리스트 배열로 저장----
        for(int i = 1; i <= 3; i++)
        {
            string imagename = "heart" + i.ToString();
            imageObject[i-1] = GameObject.Find(imagename);
        }
    }

    // 퀴즈 문제 불러오기
    private void LoadQuestions()
    {
        // QuizLoader를 통해 10개의 랜덤 퀴즈 문제를 선택
        selectedQuizzes = csvReader.GetRandomQuizzes();  // 10개의 랜덤 퀴즈를 선택
    }

    // 퀴즈 시작
    public void StartQuiz()
    {
        isAnswered = false;
        if (helth <= 0) // 체력 3개가 모두 사용되었는지 비교
        {
            uiManager.timerText.gameObject.SetActive(false);
            uiManager.quizText.gameObject.SetActive(false);
            uiManager.answerTexts.gameObject.SetActive(true);
            uiManager.answerTexts.text = "-GAME OVER-";
            Invoke("QuizEnd", 1.5f);  // 퀴즈 종료 함수 호출
            return;
        }
        if (currentQuestionIndex < selectedQuizzes.Count) // 1라운드부터 10라운드까지 진행하면서 비교
        {
            answerTextsOff();   // 정답 오답 등의 텍스트 안 보이게 하기
            QuestionStart();    // 퀴즈 문제 시작(등장?)
        }
        else
        {
            QuizEnd();  // 3초 후 퀴즈 종료 함수 호출
        }
    }
    // 퀴즈 종료
    private void QuizEnd()
    {
        SceneManager.LoadScene("Rounge");   // 퀴즈 맵에서 라운지 맵으로 이동
        CancelInvoke("QuizEnd");            // Invoke 종료
    }

    // 퀴즈 문제 시작
    private void QuestionStart()
    {
        playerChoice = "";      // 퀴즈 게임 플레이어의 O,X선택 초기화
        uiManager.UpdateQuestionText(selectedQuizzes[currentQuestionIndex].Question); // UI 문제 해설 텍스트에 문제 출력
        uiManager.UpdateRemainingQuestionsText(roundCount);         // UI 라운드 텍스트에 현재 라운드 출력
        timerManager.StartQuizTimer();                              // 퀴즈 시간 타이머 호출(시작)
    }
    

    // 퀴즈 타이머가 종료되었을 때 호출되는 함수
    public void OnQuizTimeUp()
    {
        QuestionEnd();             // 퀴즈 문제 종료 함수 호출
    }

    // 퀴즈 문제가 종료 되었을때 호출 되는 함수
    public void QuestionEnd()
    {
        timerManager.StartExplanationTimer();               // 해설 타이머 호출(시작)
        uiManager.UpdateQuestionText(selectedQuizzes[currentQuestionIndex].Explanation); // UI 문제 해설 텍스트에 해설 출력
        CheckAnswer();                                      // 퀴즈 정답 확인
        uiManager.answerTexts.gameObject.SetActive(true);   // 퀴즈 정답 오답 텍스트 보이게 함
        Invoke("answerTextsOff", 3f);                       // 3초 후 퀴즈 정답 오답 텍스트 안 보이게 함
    }

    // 퀴즈 해설이 종료 되었을 때 호출 되는 함수
    public void commentaryEnd()
    {
        roundCount++;           // 라운드 +1
        currentQuestionIndex++; // 문제 인덱스 +1
        StartQuiz();            // 퀴즈 시작 호출(반복)
    }


    // 정답을 확인하고 피드백을 UI에 전달하는 함수
    public void CheckAnswer()
    {
        bool isCorrect = (playerChoice == selectedQuizzes[currentQuestionIndex].Answer);
        if (!isAnswered)           // 퀴즈 플레이어가 정답 선택했는지 확인
        {
            uiManager.UpdateFeedbackText("시간이 오버 되었습니다!");  // 정답을 선택하지 않은 경우
            helth--;    // 체력 -1
            imageObject[helth].gameObject.SetActive(false);     // 체력 이미지 게임 오브젝트 하나씩 줄이기
            return;
        }
        if (isCorrect)
        {
            uiManager.UpdateFeedbackText("정답입니다!"); // 정답 여부 텍스트 업데이트
            correctAnswers++;   // 플레이어의 정답 횟수 +1
        }
        else
        {
            uiManager.UpdateFeedbackText("정답이 아닙니다!"); // 문제를 
            helth--;    // 체력 -1
            imageObject[helth].gameObject.SetActive(false);     // 체력 이미지 게임 오브젝트 하나씩 줄이기
        }
    }

    // 퀴즈 시작 정답 오답 안 보이게 하는 함수
    private void answerTextsOff()
    {
        uiManager.answerTexts.gameObject.SetActive(false);  // 정답 오답 안 보이게 하기
    }

    // O 버튼 UI를 플레이어가 눌렀을떄 호출되는 함수
    public void OButtonPress()
    {
        isAnswered = true;  // 플레이어가 퀴즈에 참여함
        playerChoice = "O"; // 플레이어의 정답 결정을 O로 함
    }
    // X 버튼 UI를 플레이어가 눌렀을떄 호출되는 함수
    public void XButtonPress()
    {
        isAnswered = true;  // 플레이어가 퀴즈에 참여함
        playerChoice = "X"; // 플레이어가 정답 결정을 X로 함
    }
}
