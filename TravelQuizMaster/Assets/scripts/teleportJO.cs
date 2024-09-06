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
            if(gameObject.name == "telJOlandmark")                // �Ϻ� ����ī "���帶ũ" ���ӿ�����Ʈ�� �ε�ģ�ٸ�
            {
                SceneManager.LoadScene("JepenOsaka_landmark");    // �Ϻ� ����ī "���帶ũ" ���� ������ �̵��Ѵ�.->
            }
            else if (gameObject.name == "telJOculture")           // �Ϻ� ����ī "��ȭ" ���ӿ�����Ʈ�� �ε�ģ�ٸ�
            {
                SceneManager.LoadScene("JepenOsaka_culture");     // �Ϻ� ����ī "��ȭ" ���� ������ �̵��Ѵ�.->
            }
            else if (gameObject.name == "telJOfood")              // �Ϻ� ����ī "����" ���ӿ�����Ʈ�� �ε�ģ�ٸ�
            {
                SceneManager.LoadScene("JepenOsaka_food");        // �Ϻ� ����ī "����" ���� ������ �̵��Ѵ�.->
            }
            else if (gameObject.name == "telJOtraffic")           // �Ϻ� ����ī "����" ���ӿ�����Ʈ�� �ε�ģ�ٸ�
            {
                SceneManager.LoadScene("JepenOsaka_traffic");     // �Ϻ� ����ī "����" ���� ������ �̵��Ѵ�.->
            }
            else if (gameObject.name == "telCS"){
                SceneManager.LoadScene("ChinaShanghai");
            }
            else if (gameObject.name == "telVD")
            {
                SceneManager.LoadScene("VietnamDanang");
            }
            else
            {
                return;
            }
            
        }
    }
}
