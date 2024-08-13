using System.Collections.Generic;
using UnityEngine;
using System.IO;

public class CSVReader : MonoBehaviour
{
    // 문제와 정답 정보를 담는 구조체
    public struct Question
    {
        public string questionText;    // 문제 내용
        public string explanation;     // 해설 내용
        public bool isCorrect;         // 정답 여부
    }

    // CSV 파일에서 문제를 읽어오는 함수
    public static List<Question> Read(string filePath)
    {
        List<Question> questions = new List<Question>();

        // CSV 파일을 한 줄씩 읽어옴
        string[] lines = File.ReadAllLines(filePath);

        foreach (string line in lines)
        {
            string[] fields = line.Split(',');

            // 문제와 해설, 정답 여부를 구조체에 담음
            Question question = new Question
            {
                questionText = fields[0],      // 첫 번째 필드: 문제 내용
                explanation = fields[1],       // 두 번째 필드: 해설 내용
                isCorrect = filePath.Contains("O")  // 파일 이름에 O가 있으면 정답으로 처리
            };

            questions.Add(question);
        }

        return questions;
    }
}
