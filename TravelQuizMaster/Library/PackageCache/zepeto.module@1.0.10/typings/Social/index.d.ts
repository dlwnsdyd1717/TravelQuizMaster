//# signature=ZEPETO.Module.Social#6f34a5c7204c2cdc2977c0e5352e934e#0.0.4
// @ts-nocheck
declare module 'ZEPETO.Module.Social' {

    import * as System from 'System';
    import * as ZEPETO_Module from 'ZEPETO.Module';
    import * as ZEPETO_World_Gui from 'ZEPETO.World.Gui';
    import * as UnityEngine_Events from 'UnityEngine.Events';
    import * as UnityEngine from 'UnityEngine';
        
    /**
     * The `SocialService` implements social functionalities within ZEPETO World.
     * This service enables players to access social data, such as user's following relationships.
     * And provides the capability to send direct messages to other players.
     */
    class SocialService extends System.Object {
        /**
         * This asynchronous method retrieves the local player's list of followers.
         * @param $nextPageToken Page token. When calling this method for the first time, set this parameter to `null`.
         * @returns A `BaseRequest` object. When the asynchronous process is complete, you can access the `MyFollowerListResponse` object by the `responseData` property.
         */
        public static GetMyFollowerListAsync($nextPageToken?: string):ZEPETO_Module.BaseRequest$1<MyFollowerListResponse>;
        /**
         * This asynchronous method retrieves the local player's following list.
         * @param $nextPageToken Page token. When calling this method for the first time, set this parameter to `null`.
         * @returns A `BaseRequest` object. When the asynchronous process is complete, you can access the `MyFollowingListResponse` object by the `responseData` property.
         */
        public static GetMyFollowingListAsync($nextPageToken?: string):ZEPETO_Module.BaseRequest$1<MyFollowingListResponse>;
        /**
         * This asynchronous method retrieves follow information from multiple users.
         * @param $userIds IDs of users whose follow lists are to be searched.
         * @returns A `BaseRequest` object. When the asynchronous process is complete, you can access the `UserFollowInfoListResponse` object by the `responseData` property.
         */
        public static GetUserFollowInfoAsync($userIds: string[]):ZEPETO_Module.BaseRequest$1<UserFollowInfoListResponse>;
        /**
         * This asynchronous method retrieves follow information from a user.
         * @param $userId ID of the user whose follow lists are to be searched.
         * @returns A `BaseRequest` object. When the asynchronous process is complete, you can access the `UserFollowInfoResponse` object by the `responseData` property.
         */
        public static GetUserFollowInfoAsync($userId: string):ZEPETO_Module.BaseRequest$1<UserFollowInfoResponse>;
        /**
         * This asynchronous method retrieves the following relationship information between the local player and a user.
         * @param $userId ID of the user whose follow status is to be searched.
         * @returns A `BaseRequest` object. When the asynchronous process is complete, you can access the `UserFollowStatusResponse` object by the `responseData` property.
         */
        public static GetUserFollowStatusAsync($userId: string):ZEPETO_Module.BaseRequest$1<UserFollowStatusResponse>;
        /**
         * Invokes a popup to send direct messages to users.
         * @param $sendMessage The body of the message to send. If it is blank or empty, the transmission will fail.
         * @param $userIds List of user IDs for potential recipients. If the `users` parameter is omitted, the recipient selection interface is automatically populated with users from the sender's follow/following list.
         * @param $onComplete Callback function to be called when message sending is completed or canceled.
         */
        public static OpenPopupDirectMessage($sendMessage: string, $userIds?: string[], $onComplete?: System.Action$1<DirectMessagePopupState>):void;
        
                    
    }
    /**
     * The `MyFollowerListResponse` class provides the information of local player's follower list.
     */
    class MyFollowerListResponse extends ZEPETO_Module.PlayBaasResponse {
        /**
         * Number of users that follow the local player.
         */
        public userCount: number;
        /**
         * Information of the users that follow the local player.
         */
        public users: UserInfo[];
        /**
         * The `nextPageToken` is included in the response when numerous items are available, allowing retrieval of the subsequent follower list. When no items remain, `nextPageToken` is set to null.
         */
        public nextPageToken: string;
        
                    
    }
    /**
     * The `MyFollowingListResponse` class provides the API call result and the local player's following list information.
     */
    class MyFollowingListResponse extends ZEPETO_Module.PlayBaasResponse {
        /**
         * Number of users the local player is following.
         */
        public userCount: number;
        /**
         * Information of the users that the local player is following.
         */
        public users: UserInfo[];
        /**
         * Information of the users that the local player has bookmarked.
         */
        public bookMarkUsers: UserInfo[];
        /**
         * The `nextPageToken` is included in the response when numerous items are available, allowing retrieval of the subsequent following list. When no items remain, `nextPageToken` is set to null.
         */
        public nextPageToken: string;
        
                    
    }
    /**
     * The `UserFollowInfoListResponse` class provides the API call result and the users' following information list.
     */
    class UserFollowInfoListResponse extends ZEPETO_Module.BaseResponse {
        /**
         * Array of the users' following information list.
         */
        public users: UserFollowInfo[];
        
                    
    }
    /**
     * The `UserFollowInfoResponse` class provides the API call result and the user's following information list.
     */
    class UserFollowInfoResponse extends ZEPETO_Module.BaseResponse {
        /**
         * Array of the user's following information list.
         */
        public user: UserFollowInfo;
        
                    
    }
    /**
     * The `UserFollowStatusResponse` class provides the API call result and the information indicating whether a specified user is in a following relationship with the local player.
     */
    class UserFollowStatusResponse extends ZEPETO_Module.PlayBaasResponse {
        /**
         * Specified user's following relationship with the local player.
         */
        public status: FollowStatus;
        
                    
    }
    /**
     * Enumerates states for direct message popup.
     */
    enum DirectMessagePopupState { 
	/**
	 * When the popup is manually closed or if the sending fails.
	 */
	Cancel = 0, 
	/**
	 * When the send request is completed and it closes.
	 */
	SendComplete = 1 }
    
    interface CreateFeedResponse extends ZEPETO_Module.PlayBaasResponse {
        
                    
    }
    /**
     * User information.
     */
    class UserInfo extends System.Object {
        /**
         * Unique user handle, typically presented with the `@` symbol.
         */
        public zepetoId: string;
        /**
         * Internal user identifier.
         */
        public userId: string;
        /**
         * User's display name.
         */
        public name: string;
        /**
         * Indicates whether this is an official account.
         */
        public isOfficialAccount: boolean;
        /**
         * User account type.
         */
        public accountType: UserAccountType;
        /**
         * Following relationship with the local player.
         */
        public followStatus: FollowStatus;
        /**
         * This asynchronous method retrieves the thumbnail of user profile.
         * @returns A `BaseRequest` object. When the asynchronous process is complete, you can access the `TextureResponse` object by the `responseData` property.
         */
        public GetProfileThumbnailAsync():ZEPETO_Module.BaseRequest$1<ZEPETO_Module.TextureResponse>;
        /**
         * This asynchronous method retrieves the badge image from a user's profile if the user is a Greeter or a Creator account.
         * @returns A `BaseRequest` object. When the asynchronous process is complete, you can access the `TextureResponse` object by the `responseData` property.
         */
        public GetBadgeImageAsync():ZEPETO_Module.BaseRequest$1<ZEPETO_Module.TextureResponse>;
        
                    
    }
    /**
     * Following information of a user.
     */
    class UserFollowInfo extends UserInfo {
        /**
         * Number of users being followed by the account.
         */
        public followingCount: number;
        /**
         * Number of followers for the account.
         */
        public followerCount: number;
        
                    
    }
    /**
     * Enum representing the user account type.
     */
    enum UserAccountType { 
	/**
	 * Common user.
	 */
	Default = 0, 
	/**
	 * Account designated for the Greeter program, designed to assist new users.
	 */
	Greeter = 1 }
    /**
     * Represents the following relationship with the local player.
     */
    class FollowStatus extends System.Object {
        /**
         * Indicates whether the user is a follower of local player.
         */
        public isFollower: boolean;
        /**
         * Indicates whether the local player is following the user.
         */
        public isFollowing: boolean;
        
                    
    }
    /**
     * Class for the official friends list popup.
     */
    class FollowCellView extends ZEPETO_World_Gui.EnhancedScrollerCellView {
        /**
         * Returns the localized text label to be displayed on the follow button within the official friends list popup.
         * The text is automatically translated into the language, matching the device settings.
         */
        public get textFollowButton(): string;
        /**
         * Returns the localized text label to be displayed on the following button within the official friends list popup.
         * The text is automatically translated into the language, matching the device settings.
         */
        public get textFollowingButton(): string;
        /**
         * Returns the height of the user info cell view.
         */
        public get cellHeight(): number;
        /**
         * Returns the event called when the official friends list popup is created.
         */
        public get onCreated(): UnityEngine_Events.UnityEvent;
        /**
         * Returns the event called when the official friends list popup is deactivated.
         */
        public get onDeactivated(): UnityEngine_Events.UnityEvent;
        /**
         * Returns the event called when the official friends list popup is activated.
         */
        public get onActivated(): UnityEngine_Events.UnityEvent;
        
                    
    }
    /**
     * Class for UI elements that displays friend information in official friends list popup.
     */
    class UserInfoCellView extends FollowCellView {
        /**
         * Returns the user information displayed on the UI.
         */
        public get userInfo(): UserInfo;
        /**
         * Returns the account's user name displayed in UI.
         */
        public get textName(): string;
        
                    
    }
    /**
     * Class for displaying the total number of friends in the official friends list popup.
     */
    class TotalCountCellView extends FollowCellView {
        /**
         * Returns the localized text for the total number of friends.
         * The text is automatically translated into the language, matching the device settings.
         */
        public get textCount(): string;
        
                    
    }
    
    class FollowUIActionHandler extends UnityEngine.MonoBehaviour {
        
        public userId: string;
        
        public isFollowing: boolean;
        
        public constructor();
        
        public add_onChangedState($value: System.Action$2<string, boolean>):void;
        
        public remove_onChangedState($value: System.Action$2<string, boolean>):void;
        
        public SetStatusAsync($userId: string):ZEPETO_Module.BaseRequest$1<UserFollowStatusResponse>;
        
        public onChangedState;
        
                    
    }
    
}
declare module 'System' {

        
    
    interface Object {
        
                    
    }
    
    interface String extends Object {
        
                    
    }
    
    interface Void extends ValueType {
        
                    
    }
    
    interface ValueType extends Object {
        
                    
    }
    
    interface Enum extends ValueType {
        
                    
    }
    
    type Action$1<T> = (obj: T) => void;
    
    type MulticastDelegate = (...args:any[]) => any;
    var MulticastDelegate: {new (func: (...args:any[]) => any): MulticastDelegate;}
    
    interface Delegate extends Object {
        
                    
    }
    
    interface Int32 extends ValueType {
        
                    
    }
    
    interface Array extends Object {
        
                    
    }
    
    interface Boolean extends ValueType {
        
                    
    }
    
    type Action$2<T1,T2> = (arg1: T1, arg2: T2) => void;
    
}
declare module 'ZEPETO.Module' {

    import * as System from 'System';
    import * as PlayBaas_Http from 'PlayBaas.Http';
        
    /**
     * Base class for playbaas-related response classes.
     */
    class PlayBaasResponse extends BaseResponse {
        
                    
    }
    /**
     * Base class for response classes.
     */
    class BaseResponse extends System.Object {
        /**
         * Represents the success status of the request.
         * Set to `true` upon successful completion.
         */
        public isSuccess: boolean;
        /**
         * Describes the result of the request.
         */
        public message: string;
        
                    
    }
    /**
     * `BaseRequest` class that accepts a generic `TResponse` type as the response data.
     * @typeParam TResponse Type of response data.
     */
    class BaseRequest$1<TResponse> extends PlayBaas_Http.BaseAPIRequest {
        /**
         * Response data of the generic `TResponse` type.
         */
        public get responseData(): TResponse;
        
                    
    }
    /**
     * Response class containing a `Texture2D` value.
     */
    interface TextureResponse extends BaseResponse {
        
                    
    }
    /**
     * The error code specifies the reason for the execution failure.
     */
    enum ErrorCode { 
	/**
	 * Error: Unknown error.
	 */
	Unknown = -1, 
	/**
	 * Error: Errors related to network issues, including disconnections or unstable connections.
	 */
	NetworkError = 0, IAPFail = 1, IAPUserCancel = 2, LoginRequire = 3, 
	/**
	 * Error: Item price has changed.
	 */
	PriceChanged = 37021, 
	/**
	 * Error: The recipient already possesses the item.
	 */
	AlreadyPurchased = 37001, 
	/**
	 * Error: Inactive or discontinued item.
	 */
	NotActiveItem = 33101, 
	/**
	 * Error: Invalid item.
	 */
	InvalidItem = 37017, 
	/**
	 * Error: Attempting to send to oneself, which is prohibited.
	 */
	NotAllowedSelf = 37013, 
	/**
	 * Error: Attempting to send using a guest user account, which is prohibited.
	 */
	SendUserIsGuest = 37011, 
	/**
	 * Error: Attempting to send to a non-existent user.
	 */
	TargetUserIsNotExist = 31002, 
	/**
	 * Error: Attempting to send using a user account created within the last 30 days, which is prohibited.
	 */
	AccountAgeInsufficient = 37010, 
	/**
	 * Error: The message contains inappropriate content.
	 */
	MessageBadWords = 37012, 
	/**
	 * Error: Insufficient balance for the purchase.
	 */
	NotEnoughBalance = 33204, 
	/**
	 * Error: The recipient refuses to receive the gift.
	 */
	TargetUserRefused = 37018, 
	/**
	 * Error: Unable to complete gifting as the recipient currently possesses the item due to a recent transaction.
	 */
	PurchaseConflict = 10604, 
	/**
	 * Error: Attempting to send the same message within 10 seconds.
	 */
	RepeatMessage = 8001, 
	/**
	 * Error: Invalid message format; empty, contains only a space, or exceeds 1000 characters.
	 */
	InvalidSendMessage = 2001 }
    
}
declare module 'PlayBaas.Http' {

    import * as UnityEngine from 'UnityEngine';
        
    
    interface BaseAPIRequest extends UnityEngine.CustomYieldInstruction {
        
                    
    }
    
    enum RequestMethod { Get = 0, Post = 1, Put = 2, Delete = 3 }
    
}
declare module 'UnityEngine' {

    import * as System from 'System';
        
    /**
     * Base class for custom yield instructions to suspend coroutines.
     */
    interface CustomYieldInstruction extends System.Object {
        
                    
    }
    /**
     * MonoBehaviour is the base class from which every Unity script derives.
     */
    interface MonoBehaviour extends Behaviour {
        
                    
    }
    /**
     * Behaviours are Components that can be enabled or disabled.
     */
    interface Behaviour extends Component {
        
                    
    }
    /**
     * Base class for everything attached to GameObjects.
     */
    interface Component extends Object {
        
                    
    }
    /**
     * Base class for all objects Unity can reference.
     */
    interface Object extends System.Object {
        
                    
    }
    
}
declare module 'System.Collections.Generic' {

    import * as System from 'System';
        
    
    interface List$1<T> extends System.Object {
        
                    
    }
    
    interface Dictionary$2<TKey,TValue> extends System.Object {
        
                    
    }
    
}
declare module 'ZEPETO.World.Gui' {

    import * as UnityEngine from 'UnityEngine';
        
    /**
     * This is the base class that all cell views should derive from
     */
    interface EnhancedScrollerCellView extends UnityEngine.MonoBehaviour {
        
                    
    }
    
}
declare module 'UnityEngine.Events' {

    import * as System from 'System';
        
    /**
     * A zero argument persistent callback that can be saved with the Scene.
     */
    interface UnityEvent extends UnityEventBase {
        
                    
    }
    /**
     * Abstract base class for UnityEvents.
     */
    interface UnityEventBase extends System.Object {
        
                    
    }
    /**
     * Two argument version of UnityEvent.
     */
    class UnityEvent$2<T0,T1> extends UnityEventBase {
        
        public constructor();
        
        public AddListener($call: UnityAction$2<T0, T1>):void;
        
        public RemoveListener($call: UnityAction$2<T0, T1>):void;
        
        public Invoke($arg0: T0, $arg1: T1):void;
        
                    
    }
    
    type UnityAction$2<T0,T1> = (arg0: T0, arg1: T1) => void;
    
}
declare module 'UnityEngine.EventSystems' {

    import * as System from 'System';
        
    
    interface PointerEventData extends BaseEventData {
        
                    
    }
    
    interface BaseEventData extends AbstractEventData {
        
                    
    }
    
    interface AbstractEventData extends System.Object {
        
                    
    }
    
}

