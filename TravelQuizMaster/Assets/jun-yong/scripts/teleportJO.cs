using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class teleportJO : MonoBehaviour
{


    private void OnTriggerEnter(Collider other)
    {

        if (other.CompareTag("Player"))                           // �÷��̾� ĳ���Ͱ� ����
        {

            // �Ϻ� ����ī �̵�
            if(gameObject.name == "telJO_landmark")                // �Ϻ� ����ī "���帶ũ" ���ӿ�����Ʈ�� �ε�ģ�ٸ�
            {
                SceneManager.LoadScene("JepenOsaka_landmark");    // �Ϻ� ����ī "���帶ũ" ���� ������ �̵��Ѵ�.->
            }
            else if (gameObject.name == "telJO_culture")           // �Ϻ� ����ī "��ȭ" ���ӿ�����Ʈ�� �ε�ģ�ٸ�
            {
                SceneManager.LoadScene("JepenOsaka_culture");     // �Ϻ� ����ī "��ȭ" ���� ������ �̵��Ѵ�.->
            }
            else if (gameObject.name == "telJO_food")              // �Ϻ� ����ī "����" ���ӿ�����Ʈ�� �ε�ģ�ٸ�
            {
                SceneManager.LoadScene("JepenOsaka_food");        // �Ϻ� ����ī "����" ���� ������ �̵��Ѵ�.->
            }
            else if (gameObject.name == "telJO_traffic")           // �Ϻ� ����ī "����" ���ӿ�����Ʈ�� �ε�ģ�ٸ�
            {
                SceneManager.LoadScene("JepenOsaka_traffic");     // �Ϻ� ����ī "����" ���� ������ �̵��Ѵ�.->
            }

            // �߱� ������ �̵�
            else if (gameObject.name == "telCS_landmark")           // �߱� ������ "���帶ũ" ���ӿ�����Ʈ�� �ε�ģ�ٸ�
            {
                SceneManager.LoadScene("ChinaShanghai_landmark");   // �߱� ������ "���帶ũ" ���� ������ �̵� ->
            }
            else if (gameObject.name == "telCS_culture")            // �߱� ������ "��ȭ" ���ӿ�����Ʈ�� �ε�ģ�ٸ�
            {
                SceneManager.LoadScene("ChinaShanghai_culture");    // �߱� ������ "��ȭ" ���� ������ �̵� ->
            }
            else if (gameObject.name == "telCS_food")               // �߱� ������ "����" ���ӿ�����Ʈ�� �ε�ģ�ٸ�
            {
                SceneManager.LoadScene("ChinaShanghai_food");       // �߱� ������ "����" ���� ������ �̵� ->
            }
            else if (gameObject.name == "telCS_traffic")            // �߱� ������ "��������" ���� ������Ʈ�� �ε�ģ�ٸ�
            {
                SceneManager.LoadScene("ChinaShanghai_traffic");    // �߱� ������ "�������" ���� ������ �̵� ->
            }

            // ��Ʈ�� �ٳ� �̵�
            else if (gameObject.name == "telVD_landmark")           // ��Ʈ�� �ٳ� "���帶ũ" ���ӿ�����Ʈ�� �ε�ģ�ٸ�
            {
                SceneManager.LoadScene("VietnamDanang_landmark");   // ��Ʈ�� �ٳ� "���帶ũ" ���� ������ �̵� ->
            }
            else if (gameObject.name == "telVD_culture")            // ��Ʈ�� �ٳ� "��ȭ" ���ӿ�����Ʈ�� �ε�ģ�ٸ�
            {
                SceneManager.LoadScene("VietnamDanang_culture");    // ��Ʈ�� �ٳ� "��ȭ" ���� ������ �̵� ->
            }
            else if (gameObject.name == "telVD_food")               // ��Ʈ�� �ٳ� "����" ���ӿ�����Ʈ�� �ε�ģ�ٸ�
            {
                SceneManager.LoadScene("VietnamDanang_food");       // ��Ʈ�� �ٳ� "����" ���� ������ �̵� ->
            }
            else if (gameObject.name == "telVD_traffic")            // ��Ʈ�� �ٳ� "�������" ���ӿ�����Ʈ�� �ε�ģ�ٸ�
            {
                SceneManager.LoadScene("VietnamDanang_traffic");    // ��Ʈ�� �ٳ� "�������" ���� ������ �̵� ->
            }
            else
            {
                return;                                             // �̿� ���� �̵����� �ʴ´�.
            }
            
        }
    }
}
