using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class selectButton : MonoBehaviour
{
    public QuestionController questionController;

    public void checkButton()
    {
        if (Input.GetButtonDown("OButton"))
        {
            questionController.playerChoice = "O";
        } 
        else if(Input.GetButtonDown("XButton"))
        {
            questionController.playerChoice = "X";
        }
        else
        {
            questionController.playerChoice = "";
        }
    }
}
