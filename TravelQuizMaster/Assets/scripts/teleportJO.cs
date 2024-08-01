using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class teleportJO : MonoBehaviour
{


    private void OnTriggerEnter(Collider other)
    {
        if (other.CompareTag("Player"))
        {
            if(gameObject.name == "telJO")
            {
                SceneManager.LoadScene("JepenOsaka");
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
