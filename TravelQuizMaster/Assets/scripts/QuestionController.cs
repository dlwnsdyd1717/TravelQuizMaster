using System.Collections.Generic;
using UnityEngine;

// Question 구조체를 독립적으로 정의
[System.Serializable]
public struct Question
{
    public string questionText;    // 문제 내용
    public string explanation;     // 해설 내용
    public bool isCorrect;         // 정답 여부
}

public class QuestionController : MonoBehaviour
{
    public UIManager uiManager; // UI 관리 스크립트 참조
    public TimerManager timerManager; // 타이머 관리 스크립트 참조

    private List<Question> questions; // 퀴즈 목록
    private int currentQuestionIndex = 0; // 현재 퀴즈 인덱스
    private bool playerAnswer; // 플레이어의 선택 (true: O, false: X)
    private bool isAnswerSubmitted = false; // 정답 제출 여부

    private const int numberOfQuestions = 10; // 출제할 문제 수

    private void Start()
    {
        // CSV 파일에서 퀴즈를 불러옴
        questions = new List<Question>();
        questions.AddRange(ReadCSV("O.csv", true));  // O.csv에서 정답을 가져옴
        questions.AddRange(ReadCSV("X.csv", false)); // X.csv에서 오답을 가져옴

        // 퀴즈 목록을 섞음
        questions = ShuffleList(questions);

        // 10개의 문제만 선택
        questions = questions.GetRange(0, Mathf.Min(numberOfQuestions, questions.Count));

        // 첫 번째 퀴즈 출력
        LoadNextQuestion();
    }

    // CSV 파일을 읽어서 Question 리스트를 반환
    private List<Question> ReadCSV(string filePath, bool isCorrect)
    {
        List<Question> questions = new List<Question>();
        string[] lines = System.IO.File.ReadAllLines(Application.streamingAssetsPath + "/" + filePath);

        foreach (string line in lines)
        {
            string[] fields = line.Split(',');

            // 문제가 비어있지 않을 경우만 추가
            if (fields.Length >= 2)
            {
                Question question = new Question
                {
                    questionText = fields[0],      // 첫 번째 필드: 문제 내용
                    explanation = fields[1],       // 두 번째 필드: 해설 내용
                    isCorrect = isCorrect          // 정답 여부
                };

                questions.Add(question);
            }
        }

        return questions;
    }

    // 플레이어의 정답 선택을 저장
    public void SetPlayerAnswer(bool answer)
    {
        playerAnswer = answer;
        isAnswerSubmitted = true; // 답이 제출되었음을 표시
    }

    // 다음 문제를 로드
    private void LoadNextQuestion()
    {
        if (currentQuestionIndex < questions.Count)
        {
            uiManager.UpdateQuestionText(questions[currentQuestionIndex].questionText);
            uiManager.UpdateProgress(currentQuestionIndex + 1, questions.Count); // 문제 진행 상태 업데이트
            isAnswerSubmitted = false;

            // 퀴즈 타이머 시작
            timerManager.StartQuizTimer(OnQuizTimeUp);
        }
        else
        {
            EndQuiz(); // 모든 문제를 풀었을 경우
        }
    }

    // 퀴즈 타이머 종료 시 호출
    private void OnQuizTimeUp()
    {
        CheckAnswer(); // 정답 확인
        uiManager.ShowExplanation(questions[currentQuestionIndex].explanation);

        // 해설 타이머 시작
        timerManager.StartExplanationTimer(OnExplanationTimeUp);
    }

    // 정답 확인
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

    // 해설 타이머 종료 시 호출
    private void OnExplanationTimeUp()
    {
        currentQuestionIndex++; // 다음 문제로 이동
        uiManager.HideExplanation();
        timerManager.StartObjectChangeTimer(OnObjectChangeTimeUp); // 오브젝트 변경 타이머 시작
    }

    // 오브젝트 변경 타이머 종료 시 호출
    private void OnObjectChangeTimeUp()
    {
        LoadNextQuestion(); // 다음 퀴즈 로드
    }

    // 퀴즈 종료
    private void EndQuiz()
    {
        uiManager.ShowEndScreen(); // 퀴즈 종료 화면 출력
    }

    // 리스트 섞기
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