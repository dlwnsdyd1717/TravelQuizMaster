using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class OSelect : MonoBehaviour
{
    public QuestionController questionController; // ���� ��Ʈ�ѷ��� ����

    private void OnTriggerEnter(Collider other)
    {
        if (other.CompareTag("Player"))           // �ε�ģ ������Ʈ �±װ� �÷��̾��϶�
        {
            questionController.SetPlayerAnswer(true); // �÷��̾ O�� ���� -> true (����)
        }
    }
}
