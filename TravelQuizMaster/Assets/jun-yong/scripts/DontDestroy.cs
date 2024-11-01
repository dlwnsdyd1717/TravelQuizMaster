using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class DontDestroy : MonoBehaviour
{
    // BGM�� �޷��ִ� ���ӿ�����Ʈ�� �ı����� �ʱ� ���� ���� ����
    private static DontDestroy instance = null;

    void Awake()
    {
         // ������ null���� Ȯ��
         if (instance == null)
         {
             instance = this;                // ������ ����
             DontDestroyOnLoad(gameObject);  // ��ũ��Ʈ�� ����� ���ӿ�����Ʈ�� �ı����� �ʴ� �Լ� ȣ��
         }
         else
         {
             Destroy(gameObject); // �ߺ��� ������Ʈ�� �ı�
         }
    }
}
