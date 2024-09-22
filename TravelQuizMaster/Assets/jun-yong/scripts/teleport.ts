import { Collider, Vector3, Quaternion } from 'UnityEngine';
import { ZepetoCharacter, ZepetoPlayer, ZepetoPlayers } from 'ZEPETO.Character.Controller';
import { ZepetoScriptBehaviour } from 'ZEPETO.Script';

export default class Teleport extends ZepetoScriptBehaviour {

    private zepetoCharacter: ZepetoCharacter;


    Start() {
        // 접속한 제페토 캐릭터 객체를 저장
        ZepetoPlayers.instance.OnAddedLocalPlayer.AddListener(() => {
            this.zepetoCharacter = ZepetoPlayers.instance.LocalPlayer.zepetoPlayer.character;
        });
    }

    OnTriggerEnter(collider: Collider) {

        // 충돌한 오브젝트의 태그가 "Player" 인지 확인하고 맞다면 이동시키는 코드
        if (this.zepetoCharacter.tag == "Player") {

            // 제페토 캐릭터가 부딪친 게임 오브젝트 이름이 teleportation1(일본-오사카)이면 그 좌표 [Vector3(20, 5, -15)]로 이동
            if (this.gameObject.name == "teleportation1") {
                this.zepetoCharacter.Teleport(new Vector3(20, 20, 40), Quaternion.identity);
            }
            // 제페토 캐릭터가 부딪친 게임 오브젝트 이름이 teleportation2(중국-상하이)이면 그 좌표 [Vector3(0, 5, -15)]로 이동
            else if (this.gameObject.name == "teleportation2") {
                this.zepetoCharacter.Teleport(new Vector3(0, 20, 40), Quaternion.identity);
            }
            // 제페토 캐릭터가 부딪친 게임 오브젝트 이름이 teleportation1(베트남-다낭)이면 그 좌표 [Vector3(-20, 5, -15)]로 이동
            else if (this.gameObject.name == "teleportation3") {
                this.zepetoCharacter.Teleport(new Vector3(-20, 20, 40), Quaternion.identity);
            }
            // 그 외에 오브젝트 (이동한 곳에 있는 처음으로 돌아오는 워프)에 부딪치면 제일 처음 좌표 [Vector3(0, 0, 0)]로 이동
            else {
                this.zepetoCharacter.Teleport(new Vector3(0, 0, 0), Quaternion.identity);
            }
        }
                
    }
}
