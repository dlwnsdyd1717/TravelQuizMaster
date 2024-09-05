import { ZepetoScriptBehaviour } from 'ZEPETO.Script';
import { SpawnInfo, ZepetoPlayers, LocalPlayer, ZepetoCharacter } from 'ZEPETO.Character.Controller';
import { WorldService } from 'ZEPETO.World';
import { Quaternion, Vector3 } from 'UnityEngine';

export default class CharacterController extends ZepetoScriptBehaviour {

    private zepetoCharacter: ZepetoCharacter;

    Start() {
        // Set Character Spawn Position 생성된 캐릭터 위치
        const spawnInfo = new SpawnInfo();
        spawnInfo.position = new Vector3(0, 2, -2.5);
        // Set Character Spawn Rotation 생성된 캐릭터의 방향
        spawnInfo.rotation = Quaternion.Euler(0, 180, 0);

        // Grab the user id specified from logging into zepeto through the editor.
        ZepetoPlayers.instance.CreatePlayerWithUserId(WorldService.userId, spawnInfo, true);
        ZepetoPlayers.instance.OnAddedLocalPlayer.AddListener(() => {
            const player: LocalPlayer = ZepetoPlayers.instance.LocalPlayer;
            this.zepetoCharacter = ZepetoPlayers.instance.LocalPlayer.zepetoPlayer.character;

            // 생성된 제페토 캐릭터의 유니티 테그 "Player"로 설정
            // 제페토 캐릭터를 이동시킬때 오브젝트 충돌 대상으로 지정하기 위해서 설정함
            this.zepetoCharacter.gameObject.tag = "Player"
        });
    }
}