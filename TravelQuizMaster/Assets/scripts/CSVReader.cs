using System.Collections.Generic;
using System.IO;
using UnityEngine;

public class CSVReader : MonoBehaviour
{
    public class Question
    {
        public string questionText;   // ���� �ؽ�Ʈ
        public string correctAnswer;  // ���� ("O" �Ǵ� "X")

        public Question(string questionText, string correctAnswer)
        {
            this.questionText = questionText;
            this.correctAnswer = correctAnswer;
        }
    }

    public List<Question> ReadQuestions(string filePath, int questionCount)
    {
        List<Question> questions = new List<Question>();
        string[] lines = File.ReadAllLines(filePath); // CSV ������ ��� ���� �о����

        foreach (string line in lines)
        {
            string correctAnswer = filePath[filePath.Length - 5].ToString().ToUpper(); // ���ϸ��� ������ ���ڸ� �������� ����
            questions.Add(new Question(line, correctAnswer)); // �� ���� ����� �߰�
        }

        // ����Ʈ�� �������� ����
        questions = ShuffleList(questions);

        // ������ ������ŭ ��ȯ
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
