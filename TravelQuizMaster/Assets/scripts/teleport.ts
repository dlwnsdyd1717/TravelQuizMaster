import { Collider, Vector3, Quaternion } from 'UnityEngine';
import { ZepetoCharacter, ZepetoPlayer, ZepetoPlayers } from 'ZEPETO.Character.Controller';
import { ZepetoScriptBehaviour } from 'ZEPETO.Script';

export default class Teleport extends ZepetoScriptBehaviour {

    private zepetoCharacter: ZepetoCharacter;


    Start() {
        // ������ ������ ĳ���� ��ü�� ����
        ZepetoPlayers.instance.OnAddedLocalPlayer.AddListener(() => {
            this.zepetoCharacter = ZepetoPlayers.instance.LocalPlayer.zepetoPlayer.character;
        });
    }

    OnTriggerEnter(collider: Collider) {

        // �浹�� ������Ʈ�� �±װ� "Player" ���� Ȯ���ϰ� �´ٸ� �̵���Ű�� �ڵ�
        if (this.zepetoCharacter.tag == "Player") {

            // ������ ĳ���Ͱ� �ε�ģ ���� ������Ʈ �̸��� teleportation1(�Ϻ�-����ī)�̸� �� ��ǥ [Vector3(20, 5, -15)]�� �̵�
            if (this.gameObject.name == "teleportation1") {
                this.zepetoCharacter.Teleport(new Vector3(20, 20, 40), Quaternion.identity);
            }
            // ������ ĳ���Ͱ� �ε�ģ ���� ������Ʈ �̸��� teleportation2(�߱�-������)�̸� �� ��ǥ [Vector3(0, 5, -15)]�� �̵�
            else if (this.gameObject.name == "teleportation2") {
                this.zepetoCharacter.Teleport(new Vector3(0, 20, 40), Quaternion.identity);
            }
            // ������ ĳ���Ͱ� �ε�ģ ���� ������Ʈ �̸��� teleportation1(��Ʈ��-�ٳ�)�̸� �� ��ǥ [Vector3(-20, 5, -15)]�� �̵�
            else if (this.gameObject.name == "teleportation3") {
                this.zepetoCharacter.Teleport(new Vector3(-20, 20, 40), Quaternion.identity);
            }
            // �� �ܿ� ������Ʈ (�̵��� ���� �ִ� ó������ ���ƿ��� ����)�� �ε�ġ�� ���� ó�� ��ǥ [Vector3(0, 0, 0)]�� �̵�
            else {
                this.zepetoCharacter.Teleport(new Vector3(0, 0, 0), Quaternion.identity);
            }
        }
                
    }
}
