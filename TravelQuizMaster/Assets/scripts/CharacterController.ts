import { ZepetoScriptBehaviour } from 'ZEPETO.Script';
import { SpawnInfo, ZepetoPlayers, LocalPlayer, ZepetoCharacter } from 'ZEPETO.Character.Controller';
import { WorldService } from 'ZEPETO.World';
import { Quaternion, Vector3 } from 'UnityEngine';

export default class CharacterController extends ZepetoScriptBehaviour {

    private zepetoCharacter: ZepetoCharacter;

    Start() {
        // Set Character Spawn Position ������ ĳ���� ��ġ
        const spawnInfo = new SpawnInfo();
        spawnInfo.position = new Vector3(0, 2, -2.5);
        // Set Character Spawn Rotation ������ ĳ������ ����
        spawnInfo.rotation = Quaternion.Euler(0, 180, 0);

        // Grab the user id specified from logging into zepeto through the editor.
        ZepetoPlayers.instance.CreatePlayerWithUserId(WorldService.userId, spawnInfo, true);
        ZepetoPlayers.instance.OnAddedLocalPlayer.AddListener(() => {
            const player: LocalPlayer = ZepetoPlayers.instance.LocalPlayer;
            this.zepetoCharacter = ZepetoPlayers.instance.LocalPlayer.zepetoPlayer.character;

            // ������ ������ ĳ������ ����Ƽ �ױ� "Player"�� ����
            // ������ ĳ���͸� �̵���ų�� ������Ʈ �浹 ������� �����ϱ� ���ؼ� ������
            this.zepetoCharacter.gameObject.tag = "Player"
        });
    }
}