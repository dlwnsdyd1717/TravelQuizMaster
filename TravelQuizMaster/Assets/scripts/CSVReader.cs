using System.Collections.Generic;
using UnityEngine;
using System.IO;

public class CSVReader : MonoBehaviour
{
    // ������ ���� ������ ��� ����ü
    public struct Question
    {
        public string questionText;    // ���� ����
        public string explanation;     // �ؼ� ����
        public bool isCorrect;         // ���� ����
    }

    // CSV ���Ͽ��� ������ �о���� �Լ�
    public static List<Question> Read(string filePath)
    {
        List<Question> questions = new List<Question>();

        // CSV ������ �� �پ� �о��
        string[] lines = File.ReadAllLines(filePath);

        foreach (string line in lines)
        {
            string[] fields = line.Split(',');

            // ������ �ؼ�, ���� ���θ� ����ü�� ����
            Question question = new Question
            {
                questionText = fields[0],      // ù ��° �ʵ�: ���� ����
                explanation = fields[1],       // �� ��° �ʵ�: �ؼ� ����
                isCorrect = filePath.Contains("O")  // ���� �̸��� O�� ������ �������� ó��
            };

            questions.Add(question);
        }

        return questions;
    }
}
