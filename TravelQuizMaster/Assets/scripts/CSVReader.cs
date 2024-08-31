using System.Collections.Generic;
using System.IO;
using UnityEngine;

public class CSVReader : MonoBehaviour
{
    public class Question
    {
        public string questionText;   // 질문 텍스트
        public string correctAnswer;  // 정답 ("O" 또는 "X")

        public Question(string questionText, string correctAnswer)
        {
            this.questionText = questionText;
            this.correctAnswer = correctAnswer;
        }
    }

    public List<Question> ReadQuestions(string filePath, int questionCount)
    {
        List<Question> questions = new List<Question>();
        string[] lines = File.ReadAllLines(filePath); // CSV 파일의 모든 줄을 읽어들임

        foreach (string line in lines)
        {
            string correctAnswer = filePath[filePath.Length - 5].ToString().ToUpper(); // 파일명의 마지막 글자를 정답으로 설정
            questions.Add(new Question(line, correctAnswer)); // 각 줄을 퀴즈로 추가
        }

        // 리스트를 무작위로 섞음
        questions = ShuffleList(questions);

        // 지정된 개수만큼 반환
        return questions.GetRange(0, Mathf.Min(questionCount, questions.Count));
    }

    private List<Question> ShuffleList(List<Question> list)
    {
        System.Random rng = new System.Random();
        int n = list.Count;
        while (n > 1)
        {
            n--;
            int k = rng.Next(n + 1);
            Question value = list[k];
            list[k] = list[n];
            list[n] = value;
        }
        return list;
    }
}
