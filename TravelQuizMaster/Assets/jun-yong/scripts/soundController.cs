using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class soundController : MonoBehaviour
{
    private AudioSource audioSource;
    private GameObject BGM;

    private void Start()
    {
        BGM = GameObject.Find("BGM");
        audioSource = BGM.GetComponent<AudioSource>();
    }
    public void soundOnOff()
    {        
        if (audioSource.isPlaying)
        {
            audioSource.Stop();
        }
        else
        {
            audioSource.Play();
        }
    }

    
}
