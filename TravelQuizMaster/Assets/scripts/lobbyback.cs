using UnityEngine.SceneManagement;
using UnityEngine;

public class lobbyback : MonoBehaviour
{
    public void ComebackLobby(string lobby)
    {
        SceneManager.LoadScene(lobby);
    }
}
