import {ZepetoScriptBehaviour} from 'ZEPETO.Script'
import {TotalCountCellView} from 'ZEPETO.Module.Social'
import {Text} from 'UnityEngine.UI'


export default class FollowTotalCountCellView extends ZepetoScriptBehaviour {

    public viewTotalCount: Text;

    Awake() {
        const totalCountCellView = this.GetComponent<TotalCountCellView>();

        if (!totalCountCellView) return;
        
        totalCountCellView.onActivated.AddListener(() => {
            this.viewTotalCount.text = totalCountCellView.textCount;
        });

    }

}