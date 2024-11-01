using System.Collections.Generic;
using System.IO;
using UnityEngine;

public class CSVReader : MonoBehaviour
{
    public TextAsset csvFileO;  // O ������ �ִ� CSV ����
    public TextAsset csvFileX;  // X ������ �ִ� CSV ����
    private List<QuizData> quizList = new List<QuizData>();  // ��� ���� �����͸� ������ ����Ʈ

    // ����Ƽ�� Awake() �޼���� ��ü�� ������ �� ȣ��˴ϴ�. 
    // ���⼭�� �� ���� CSV ������ �ε��մϴ�.
    void Awake()
    {
        LoadCSV(csvFileO);  // O ������ ���� CSV ���� �ε�
        LoadCSV(csvFileX);  // X ������ ���� CSV ���� �ε�
    }

    // �־��� CSV ������ �а� ���� �����͸� ����Ʈ�� �߰��ϴ� �޼���
    private void LoadCSV(TextAsset csvFile)
    {
        // ���� �̸��� ���� 'O'���� 'X'���� Ȯ���Ͽ� ������ ����
        string answerKey = csvFile.name.EndsWith("O") ? "O" : "X";

        // CSV ���� ������ �� ������ �б� ���� StringReader ���
        StringReader reader = new StringReader(csvFile.text);

        // ������ ������ �� �پ� �о����
        while (reader.Peek() > -1)
        {
            string line = reader.ReadLine();  // �� �� �б�
            var data = line.Split(',');  // CSV ���Ŀ��� �� �ʵ带 �и�

            // ���� �����͸� ������ ���ο� ��ü ����
            QuizData quizData = new QuizData();
            quizData.Question = data[0];  // ù ��° �ʵ�� ���� �ؽ�Ʈ
            quizData.Explanation = data[1];  // �� ��° �ʵ�� �ؼ� �ؽ�Ʈ
            quizData.Answer = answerKey;  // ���� �̸��� ���� ���� ���� (O �Ǵ� X)

            quizList.Add(quizData);  // ������ ���� �����͸� ����Ʈ�� �߰�
        }
    }

    // ���� ����Ʈ���� �������� ������ ��(count)�� ������ �����Ͽ� ��ȯ�ϴ� �޼���
    // �⺻������ 10������ ����
    public List<QuizData> GetRandomQuizzes(int count = 10)
    {
        List<QuizData> randomQuizzes = new List<QuizData>();  // ���õ� ������ ���� ����Ʈ
        List<int> usedIndexes = new List<int>();  // �̹� ���õ� ������ �ε����� �����Ͽ� �ߺ� ����

        // ��û�� ����ŭ ���� ������ ����
        while (randomQuizzes.Count < count && quizList.Count > usedIndexes.Count)
        {
            int randomIndex = Random.Range(0, quizList.Count);  // ������ �ε��� ����

            // �ش� �ε����� �̹� ���õ��� �ʾҴٸ�
            if (!usedIndexes.Contains(randomIndex))
            {
                randomQuizzes.Add(quizList[randomIndex]);  // ���� ������ ����Ʈ�� �߰�
                usedIndexes.Add(randomIndex);  // ���� �ε����� ���
            }
        }

        return randomQuizzes;  // ���õ� ���� ����Ʈ ��ȯ
    }
}
[System.Serializable]
public class QuizData
{
    public string Question;  // ���� �ؽ�Ʈ�� ����
    public string Explanation;  // �ؼ� �ؽ�Ʈ�� ����
    public string Answer;  // ���� (O �Ǵ� X)�� ����
}
