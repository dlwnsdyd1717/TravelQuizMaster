import {ZepetoScriptBehaviour} from 'ZEPETO.Script'
import {
    UserInfoCellView,
    UserAccountType,
    UserInfo,
    FollowUIActionHandler
} from 'ZEPETO.Module.Social'
import {RawImage, Text }from 'UnityEngine.UI'
import * as UnityEngine from 'UnityEngine'
import {Mathf, Time, WaitForEndOfFrame, GameObject} from 'UnityEngine'
import * as System from "System";


export default class FollowUserInfoCellView extends ZepetoScriptBehaviour {

    public viewName: Text;
    public viewProfile: RawImage;
    
    public viewBadge: RawImage;

    public viewFollow : GameObject;
    public viewFollowing : GameObject;
    public btnFollow: FollowUIActionHandler;

    private _coDownloadProfile: UnityEngine.Coroutine;
    private _coDownloadBadge: UnityEngine.Coroutine;
    private _coAlphaTween: UnityEngine.Coroutine;
    
    
    Awake() {
        
        const userInfoCellView = this.GetComponent<UserInfoCellView>();

        if (null === userInfoCellView) return;

        userInfoCellView.onActivated.AddListener(() =>
            this.SetUI(userInfoCellView, () => this.AlphaTween(this.viewProfile, 0, 1, 0.3)));

        userInfoCellView.onDeactivated.AddListener(() => {
            
            if (this._coDownloadProfile != null) {
                this.StopCoroutine(this._coDownloadProfile);
                this._coDownloadProfile = null;
            }

            if (this._coAlphaTween != null) {
                this.StopCoroutine(this._coAlphaTween);
                this._coAlphaTween = null;
            }

            let color = this.viewProfile.color;
            color.a = 1;
            this.viewProfile.color = color;
            this.viewProfile.texture = null;
            
        });
        
    }

    
    Start()
    {
        const userInfoCellView = this.GetComponent<UserInfoCellView>();

        if (null === userInfoCellView) return;
        
        this.viewFollow.GetComponentInChildren<Text>().text = userInfoCellView.textFollowButton;
        this.viewFollowing.GetComponentInChildren<Text>().text = userInfoCellView.textFollowingButton;
        
    }

    private SetUI(userInfoCellView: UserInfoCellView, callback: System.Action) {
        
        const userInfo = userInfoCellView.userInfo;
        
        if (userInfo === null) return;
        
        this.viewName.text = userInfoCellView.textName;
        this.viewProfile.GetComponent<UnityEngine.RectTransform>().sizeDelta = new UnityEngine.Vector2(userInfoCellView.cellHeight, userInfoCellView.cellHeight);
        
        this.btnFollow.userId = userInfo.userId;
        this.btnFollow.isFollowing = userInfo.followStatus.isFollowing;
        
        // Data를 포함하여 UI 까지 함께 Set할 경우 사용
        // this.btnFollow.SetStatusAsync(userInfo.userId);
        
        // Follow ClickAction UI Initialize
        this.viewFollowing.SetActive(userInfo.followStatus.isFollowing);
        this.viewFollow.SetActive(false === userInfo.followStatus.isFollowing);
        
       
        //Follow ClickAction UI Refreshing
        this.btnFollow.onChangedState += (userId : string, isFollowing : boolean)=>{
            this.viewFollowing.SetActive(isFollowing);
            this.viewFollow.SetActive(false === isFollowing);
        }

        this.DownloadBadgeAsync(userInfo);
        this.DownloadProfileThumbnailAsync(userInfo, callback);
    }
    
    private DownloadProfileThumbnailAsync(userInfo: UserInfo, callback: System.Action = null) {
        if (this._coDownloadProfile) {
            this.StopCoroutine(this._coDownloadProfile);
            this._coDownloadProfile = null;
        }

        this._coDownloadProfile = this.StartCoroutine(this.coDownloadProfileThumbnail(userInfo, callback));
    }

    private DownloadBadgeAsync(userInfo: UserInfo) {
        if (this._coDownloadProfile) {
            this.StopCoroutine(this._coDownloadProfile);
            this._coDownloadProfile = null;
        }

        this._coDownloadBadge = this.StartCoroutine(this.coDownloadBadge(userInfo));
    }

    private AlphaTween(imgTarget: RawImage, srcValue: number, dstValue: number, duration: number, callback: System.Action = null) {
        if (this._coAlphaTween) {
            this.StopCoroutine(this._coAlphaTween);
            this._coAlphaTween = null;
        }

        this._coAlphaTween = this.StartCoroutine(this.coAlphaTween(imgTarget, srcValue, dstValue, duration, callback));
    }

    
    private* coDownloadProfileThumbnail(userInfo: UserInfo, callback: System.Action = null) {
        const request = userInfo.GetProfileThumbnailAsync();
        yield new UnityEngine.WaitUntil(() => false == request.keepWaiting);

        if (request.responseData.isSuccess) {
            this.viewProfile.texture = request.responseData.texture;
        }

        if (null !== callback) callback();

        this._coDownloadProfile = null;
    }

    private* coDownloadBadge(userInfo: UserInfo) {
        const request = userInfo.GetBadgeImageAsync();
        if(null == request){
            this.viewBadge.gameObject.SetActive(false);
            return;
        }
        
        yield new UnityEngine.WaitUntil(() => false == request.keepWaiting);

        if (request.responseData.isSuccess && null != request.responseData.texture) {
            this.viewBadge.texture = request.responseData.texture;
            this.viewBadge.gameObject.SetActive(true);
        }else{
            this.viewBadge.gameObject.SetActive(false);
        }

        this._coDownloadBadge = null;
    }

    private* coAlphaTween(imgTarget: RawImage, srcValue: number, dstValue: number, duration: number, callback: System.Action = null) {
        let color = imgTarget.color;
        color.a = srcValue;
        imgTarget.color = color;

        let startTime = Time.time;

        while (true) {
            let time = Mathf.Clamp01((Time.time - startTime) / duration);
            color.a = Mathf.Lerp(srcValue, dstValue, time);
            imgTarget.color = color;

            if (time >= 1) {
                break;
            }

            yield new WaitForEndOfFrame();
        }

        color.a = dstValue;
        imgTarget.color = color;

        if (null !== callback) callback();

        this._coAlphaTween = null;
    }

}