//# signature=ZEPETO.Module#f77f624f4122c0bedd5fd27875138a32#0.0.4
// @ts-nocheck
declare module 'ZEPETO.Module' {

    import * as System from 'System';
    import * as UnityEngine from 'UnityEngine';
    import * as PlayBaas_Http from 'PlayBaas.Http';
        
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
     * Response class containing a `Texture2D` value.
     */
    class TextureResponse extends BaseResponse {
        /**
         * `Texture2D` value.
         */
        public texture: UnityEngine.Texture2D;
        
                    
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
    
    class AssetResponse extends BaseResponse {
        
        public asset: any;
        
                    
    }
    
    class Asset extends System.Object {
        
        public id: string;
        
        public GetContentAsync():BaseRequest$1<AssetResponse>;
        
                    
    }
    
}
declare module 'System' {

    import * as System_Reflection from 'System.Reflection';
        
    
    interface Object {
        
                    
    }
    
    interface Boolean extends ValueType {
        
                    
    }
    
    interface ValueType extends Object {
        
                    
    }
    
    interface String extends Object {
        
                    
    }
    
    interface Enum extends ValueType {
        
                    
    }
    
    interface Int32 extends ValueType {
        
                    
    }
    
    type Action$1<T> = (obj: T) => void;
    
    interface Void extends ValueType {
        
                    
    }
    
    type MulticastDelegate = (...args:any[]) => any;
    var MulticastDelegate: {new (func: (...args:any[]) => any): MulticastDelegate;}
    
    interface Delegate extends Object {
        
                    
    }
    
    interface Type extends System_Reflection.MemberInfo {
        
                    
    }
    
    interface Array extends Object {
        
                    
    }
    
}
declare module 'UnityEngine' {

    import * as System from 'System';
        
    /**
     * Class that represents textures in C# code.
     */
    interface Texture2D extends Texture {
        
                    
    }
    /**
     * Base class for Texture handling.
     */
    interface Texture extends Object {
        
                    
    }
    /**
     * Base class for all objects Unity can reference.
     */
    interface Object extends System.Object {
        
                    
    }
    /**
     * Base class for custom yield instructions to suspend coroutines.
     */
    interface CustomYieldInstruction extends System.Object {
        
                    
    }
    
}
declare module 'PlayBaas.Http' {

    import * as UnityEngine from 'UnityEngine';
        
    
    interface BaseAPIRequest extends UnityEngine.CustomYieldInstruction {
        
                    
    }
    
    enum RequestMethod { Get = 0, Post = 1, Put = 2, Delete = 3 }
    
}
declare module 'ZEPETO.Module.Content' {

    import * as System from 'System';
    import * as ZEPETO_Module from 'ZEPETO.Module';
    import * as Zepeto from 'Zepeto';
        
    /**
     * ZEPETO shop item.
     */
    class Item extends System.Object {
        /**
         * Item code.
         */
        public id: string;
        /**
         * Item property.
         */
        public property: Zepeto.ZepetoPropertyFlag;
        /**
         * Indicates whether the item can be purchased using ZEM currency.
         * If `true`, the item is purchased with ZEM; if `false`, it's purchased with coins.
         */
        public isZem: boolean;
        /**
         * Item price.
         */
        public price: number;
        /**
         * This asynchronous method retrieves the item's thumbnail texture.
         * @returns A `BaseRequest` object. When the asynchronous process is complete, you can access the `TextureResponse` object by the `responseData` property.
         */
        public GetThumbnailAsync():ZEPETO_Module.BaseRequest$1<ZEPETO_Module.TextureResponse>;
        /**
         * This asynchronous method retrieves the item badge texture.
         * @returns A `BaseRequest` object. When the asynchronous process is complete, you can access the `TextureResponse` object by the `responseData` property.
         */
        public GetBadgeAsync():ZEPETO_Module.BaseRequest$1<ZEPETO_Module.TextureResponse>;
        
                    
    }
    
}
declare module 'Zepeto' {

        
    
    enum ZepetoPropertyFlag { None = 0, Skin = 1, SkinTone = 2, SkinDetail = 3, Face = 4, Eye = 5, EyeLens = 6, Eyebrow = 7, Beard = 8, Mustache = 9, EyeShadow = 10, EyeLiner = 11, EyeLash = 12, Blusher = 13, Nose = 14, Mouth = 15, Lips = 16, Hair = 17, ClothesGlasses = 18, ClothesTop = 19, ClothesBottom = 20, ClothesShoes = 21, ClothesDress = 22, Background = 23, RoomWallpaper = 24, RoomFloor = 25, RoomBottom = 26, RoomTopLeft = 27, RoomTopRight = 28, RoomMiddleLeft = 29, RoomMiddleRight = 30, Point = 31, Freckles = 32, FaceHair = 33, DoubleEyelid = 34, NailArt = 35, ClothesSocks = 36, ClothesGlove = 37, AccessoryBracelet = 38, AccessoryNecklace = 39, AccessoryEarring = 40, AccessoryRing = 41, AccessoryHeadwear = 42, AccessoryPiercing = 43, BoothBackground = 44, LUT = 45, AccessoryMask = 46, FacePainting = 47, AccessoryBag = 48, AccessoryWing = 49, ClothesCape = 50, ClothesExtra = 51, MannequinFace = 52, WrinkleForehead = 53, WrinkleEye = 54, WrinkleMouth = 55, DoubleEyelidBottom = 56, WrinkleMongo = 57, AccessoryTail = 58, AccessoryEffect = 59, ClothesDeform = 60, HairExtensions = 61, MakeupSet = 62, FaceContouring = 63, BaseModel = 64, CreatorLens = 65, BaseDeformer = 66 }
    
}
declare module 'System.Reflection' {

    import * as System from 'System';
        
    
    interface MemberInfo extends System.Object {
        
                    
    }
    
}

