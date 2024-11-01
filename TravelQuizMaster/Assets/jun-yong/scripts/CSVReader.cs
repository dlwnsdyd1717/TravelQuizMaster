using System.Collections.Generic;
using System.IO;
using UnityEngine;

public class CSVReader : MonoBehaviour
{
    public TextAsset csvFileO;  // O 정답이 있는 CSV 파일
    public TextAsset csvFileX;  // X 정답이 있는 CSV 파일
    private List<QuizData> quizList = new List<QuizData>();  // 모든 퀴즈 데이터를 저장할 리스트

    // 유니티의 Awake() 메서드는 객체가 생성될 때 호출됩니다. 
    // 여기서는 두 개의 CSV 파일을 로드합니다.
    void Awake()
    {
        LoadCSV(csvFileO);  // O 정답을 가진 CSV 파일 로드
        LoadCSV(csvFileX);  // X 정답을 가진 CSV 파일 로드
    }

    // 주어진 CSV 파일을 읽고 퀴즈 데이터를 리스트에 추가하는 메서드
    private void LoadCSV(TextAsset csvFile)
    {
        // 파일 이름의 끝이 'O'인지 'X'인지 확인하여 정답을 설정
        string answerKey = csvFile.name.EndsWith("O") ? "O" : "X";

        // CSV 파일 내용을 줄 단위로 읽기 위해 StringReader 사용
        StringReader reader = new StringReader(csvFile.text);

        // 파일의 끝까지 한 줄씩 읽어들임
        while (reader.Peek() > -1)
        {
            string line = reader.ReadLine();  // 한 줄 읽기
            var data = line.Split(',');  // CSV 형식에서 각 필드를 분리

            // 퀴즈 데이터를 저장할 새로운 객체 생성
            QuizData quizData = new QuizData();
            quizData.Question = data[0];  // 첫 번째 필드는 문제 텍스트
            quizData.Explanation = data[1];  // 두 번째 필드는 해설 텍스트
            quizData.Answer = answerKey;  // 파일 이름에 따라 정답 설정 (O 또는 X)

            quizList.Add(quizData);  // 생성된 퀴즈 데이터를 리스트에 추가
        }
    }

    // 퀴즈 리스트에서 랜덤으로 지정된 수(count)의 문제를 선택하여 반환하는 메서드
    // 기본값으로 10문제를 설정
    public List<QuizData> GetRandomQuizzes(int count = 10)
    {
        List<QuizData> randomQuizzes = new List<QuizData>();  // 선택된 문제를 담을 리스트
        List<int> usedIndexes = new List<int>();  // 이미 선택된 문제의 인덱스를 저장하여 중복 방지

        // 요청된 수만큼 랜덤 문제를 선택
        while (randomQuizzes.Count < count && quizList.Count > usedIndexes.Count)
        {
            int randomIndex = Random.Range(0, quizList.Count);  // 랜덤한 인덱스 생성

            // 해당 인덱스가 이미 선택되지 않았다면
            if (!usedIndexes.Contains(randomIndex))
            {
                randomQuizzes.Add(quizList[randomIndex]);  // 랜덤 문제를 리스트에 추가
                usedIndexes.Add(randomIndex);  // 사용된 인덱스를 기록
            }
        }

        return randomQuizzes;  // 선택된 문제 리스트 반환
    }
}
[System.Serializable]
public class QuizData
{
    public string Question;  // 문제 텍스트를 저장
    public string Explanation;  // 해설 텍스트를 저장
    public string Answer;  // 정답 (O 또는 X)을 저장
}
