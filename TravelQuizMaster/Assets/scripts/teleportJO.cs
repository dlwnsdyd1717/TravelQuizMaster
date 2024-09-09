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
            else if (gameObject.name == "telCS_landmark")
            {
                SceneManager.LoadScene("ChinaShanghai_landmark");
            }
            else if (gameObject.name == "telCS_culture")
            {
                SceneManager.LoadScene("ChinaShanghai_culture");
            }
            else if (gameObject.name == "telCS_food")
            {
                SceneManager.LoadScene("ChinaShanghai_food");
            }
            else if (gameObject.name == "telCS_traffic")
            {
                SceneManager.LoadScene("ChinaShanghai_traffic");
            }

            // ��Ʈ�� �ٳ� �̵�
            else if (gameObject.name == "telVD_landmark")
            {
                SceneManager.LoadScene("VietnamDanang_landmark");
            }
            else if (gameObject.name == "telVD_culture")
            {
                SceneManager.LoadScene("VietnamDanang_culture");
            }
            else if (gameObject.name == "telVD_food")
            {
                SceneManager.LoadScene("VietnamDanang_food");
            }
            else if (gameObject.name == "telVD_traffic")
            {
                SceneManager.LoadScene("VietnamDanang_traffic");
            }
            else
            {
                return;
            }
            
        }
    }
}
