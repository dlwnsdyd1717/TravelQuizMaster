//# signature=ZEPETO.Module.Shop#e685866f3e445da9a3d89aadc01ae97d#0.0.4
// @ts-nocheck
declare module 'ZEPETO.Module.Shop' {

    import * as System from 'System';
    import * as ZEPETO_Module from 'ZEPETO.Module';
    import * as ZEPETO_Module_Content from 'ZEPETO.Module.Content';
    import * as UnityEngine_Events from 'UnityEngine.Events';
        
    /**
     * `ShopService` enables operations connected to the ZEPETO shop within the World.
     * This service lets players access shop information, such as thumbnail images of owned or wish-listed items, and send gifts to other players.
     */
    class ShopService extends System.Object {
        /**
         * This asynchronous method retrieves the thumbnail of an item.
         * @param $itemCode Item Code
         * @returns A `BaseRequest` object. When the asynchronous process is complete, you can access the `TextureResponse` object by the `responseData` property.
         */
        public static DownloadItemThumbnail($itemCode: string):ZEPETO_Module.BaseRequest$1<ZEPETO_Module.TextureResponse>;
        /**
         * This method retrieves the item category information from the ZEPETO shop inventory of the local player's user account.
         * @returns A `BaseRequest` object. When the asynchronous process is complete, you can access the `CategoryResponse` object by the `responseData` property.
         */
        public static GetMyCategoryAsync():ZEPETO_Module.BaseRequest$1<CategoryResponse>;
        /**
         * This asynchronous method retrieves the item list for each item category.
         * @param $itemKeyword Item category.
         * @param $pageToken Page token. When calling this method for the first time, set this parameter to `null`.
         * @returns  A `BaseRequest` object. When the asynchronous process is complete, you can access the `ContentItemListResponse` object by the `responseData` property.
         */
        public static GetMyContentItemListAsync($itemKeyword: ItemKeyword, $pageToken?: string):ZEPETO_Module.BaseRequest$1<ContentItemListResponse>;
        /**
         * This asynchronous method retrieves the item information.
         * @param $itemId Item Code.
         * @returns A `BaseRequest` object. When the asynchronous process is complete, you can access the `ContentItemResponse` object by the `responseData` property.
         */
        public static GetContentItemAsync($itemId: string):ZEPETO_Module.BaseRequest$1<ContentItemResponse>;
        /**
         * This asynchronous method retrieves the item list from the ZEPETO shop wish list of the local player's user account.
         * @returns A `BaseRequest` object. When the asynchronous process is complete, you can access the `ContentItemListResponse` object by the `responseData` property.
         */
        public static GetMyWishContentItemListAsync():ZEPETO_Module.BaseRequest$1<ContentItemListResponse>;
        /**
         * This method opens a gifting popup.
         * @param $itemCode Item code.
         * @param $targetUserId User ID of the gift recipient. Please note that this is not a ZEPETO ID.
         * @param $backgroundType Background type to be used for gift notification popup.
         * @param $giftMessage Message to be sent along with the gift. An empty string is allowed.
         * @param $onComplete Callback function to handle the `ItemGiftResponse` upon completion of gifting.
         * @param $onFailure Callback function for error handling.
         */
        public static ShowGiftPopup($itemCode: string, $targetUserId: string, $backgroundType: GiftBackgroundType, $giftMessage?: string, $onComplete?: System.Action$1<ItemGiftResponse>, $onFailure?: System.Action$1<ZEPETO_Module.ErrorCode>):void;
        
                    
    }
    /**
     * The `CategoryResponse` class provides the API call result and the ZEPETO shop item category information.
     */
    class CategoryResponse extends ZEPETO_Module.BaseResponse {
        /**
         * ZEPETO shop item category information.
         */
        public category: CategoryInfo;
        
                    
    }
    /**
     * The `ContentItemListResponse` class provides the API call result and the retrieved item list.
     */
    class ContentItemListResponse extends ZEPETO_Module.PlayBaasResponse {
        /**
         * Item List.
         */
        public items: ZEPETO_Module_Content.Item[];
        /**
         * The `nextPageToken` is included in the response when numerous items are available, allowing retrieval of the subsequent item list.
         * When no items remain, `nextPageToken` is set to null.
         */
        public nextPageToken: string;
        
                    
    }
    /**
     * Item category.
     */
    enum ItemKeyword { 
	/**
	 * All
	 */
	all = 0, 
	/**
	 * Hair
	 */
	hair = 1, 
	/**
	 * Dress
	 */
	onepiece = 2, 
	/**
	 * Top
	 */
	top = 3, 
	/**
	 * All
	 */
	outwear = 4, 
	/**
	 * Pants
	 */
	pants = 5, 
	/**
	 * Skirt
	 */
	skirt = 6, 
	/**
	 * Socks
	 */
	socks = 7, 
	/**
	 * Footwear
	 */
	footwear = 8, 
	/**
	 * Headwear
	 */
	headwear = 9, 
	/**
	 * Eyewear
	 */
	eyewear = 10, 
	/**
	 * Jewelry
	 */
	jewelry = 11, 
	/**
	 * Makeup
	 */
	makeup = 12, 
	/**
	 * Accessory
	 */
	accessory = 13, 
	/**
	 * Body Type
	 */
	bodyfigure = 14, 
	/**
	 * Special Bodysuit
	 */
	animal = 15, 
	/**
	 * None
	 */
	none = 16 }
    /**
     * The `ContentItemResponse` class provides the API call result and the item information.
     */
    class ContentItemResponse extends ZEPETO_Module.PlayBaasResponse {
        /**
         * Item.
         */
        public item: ZEPETO_Module_Content.Item;
        
                    
    }
    /**
     * Background type to be used for gift notification popup.
     */
    enum GiftBackgroundType { 
	/**
	 * Purple
	 */
	Type01 = 1, 
	/**
	 * Blue
	 */
	Type02 = 2, 
	/**
	 * Orange
	 */
	Type03 = 3, 
	/**
	 * Green
	 */
	Type04 = 4 }
    /**
     * The `ItemGiftResponse` class provides the result of item gifting.
     */
    class ItemGiftResponse extends PurchaseBaseResponse {
        /**
         * Remaining ZEM balance in the local player's user account after completing gifting.
         */
        public zem: number;
        /**
         * Remaining coin balance in the local player's user account after completing gifting.
         */
        public coin: number;
        
        public constructor();
        
                    
    }
    
    interface PurchaseBaseResponse extends ZEPETO_Module.PlayBaasResponse {
        
                    
    }
    
    interface CoordiListResponse extends ZEPETO_Module.BaseResponse {
        
                    
    }
    
    interface ItemResponse extends ZEPETO_Module.BaseResponse {
        
                    
    }
    /**
     * ZEPETO shop item category information.
     */
    class CategoryInfo extends System.Object {
        /**
         * The localized display name of the shop inventory tab.
         */
        public displayName: string;
        /**
         * Item category list under the inventory tab.
         */
        public categories: Category[];
        
                    
    }
    /**
     * Item category.
     */
    class Category extends System.Object {
        /**
         * The localized display name of the item category.
         */
        public displayName: string;
        /**
         * Enum representing the item category.
         */
        public keyword: ItemKeyword;
        
                    
    }
    
    class ShopDelegate extends System.Object {
        
        public static OnOpenPopup: UnityEngine_Events.UnityEvent$1<ItemRequestType>;
        
        public static OnClosePopup: UnityEngine_Events.UnityEvent$1<ItemRequestType>;
        
        public static OnClickConfirm: UnityEngine_Events.UnityEvent;
        
        public constructor();
        
                    
    }
    
    enum ItemRequestType { Purchase = 0, Gift = 1 }
    
}
declare module 'System' {

        
    
    interface Object {
        
                    
    }
    
    interface String extends Object {
        
                    
    }
    
    interface Enum extends ValueType {
        
                    
    }
    
    interface ValueType extends Object {
        
                    
    }
    
    interface Void extends ValueType {
        
                    
    }
    
    type Action$1<T> = (obj: T) => void;
    
    type MulticastDelegate = (...args:any[]) => any;
    var MulticastDelegate: {new (func: (...args:any[]) => any): MulticastDelegate;}
    
    interface Delegate extends Object {
        
                    
    }
    
    interface Boolean extends ValueType {
        
                    
    }
    
    interface Array extends Object {
        
                    
    }
    
    interface Int32 extends ValueType {
        
                    
    }
    
}
declare module 'ZEPETO.Module' {

    import * as System from 'System';
    import * as PlayBaas_Http from 'PlayBaas.Http';
        
    /**
     * Response class containing a `Texture2D` value.
     */
    interface TextureResponse extends BaseResponse {
        
                    
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
     * Base class for playbaas-related response classes.
     */
    class PlayBaasResponse extends BaseResponse {
        
                    
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
    
}
declare module 'ZEPETO.Module.Content' {

    import * as System from 'System';
        
    /**
     * ZEPETO shop item.
     */
    interface Item extends System.Object {
        
                    
    }
    
}
declare module 'UnityEngine.Events' {

    import * as System from 'System';
        
    /**
     * One argument version of UnityEvent.
     */
    interface UnityEvent$1<T0> extends UnityEventBase {
        
                    
    }
    /**
     * Abstract base class for UnityEvents.
     */
    interface UnityEventBase extends System.Object {
        
                    
    }
    /**
     * A zero argument persistent callback that can be saved with the Scene.
     */
    interface UnityEvent extends UnityEventBase {
        
                    
    }
    
}

