//# signature=ZEPETO.Module.Text#1a1cd3c1c0955e6bcfe8aeaf0247408c#0.0.4
// @ts-nocheck
declare module 'ZEPETO.Module.Text' {

    import * as ZEPETO_Module from 'ZEPETO.Module';
    import * as System from 'System';
        
    
    class FilterStringResponse extends ZEPETO_Module.PlayBaasResponse {
        
        public isApproved: boolean;
        
        public get filteredText(): string;
        
        public constructor();
        
                    
    }
    
    class TextService extends System.Object {
        
        public static FilterStringAsync($originText: string):ZEPETO_Module.BaseRequest$1<FilterStringResponse>;
        
                    
    }
    
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
declare module 'System' {

        
    
    interface Object {
        
                    
    }
    
    interface String extends Object {
        
                    
    }
    
    interface Boolean extends ValueType {
        
                    
    }
    
    interface ValueType extends Object {
        
                    
    }
    
    type Action$1<T> = (obj: T) => void;
    
    interface Void extends ValueType {
        
                    
    }
    
    type MulticastDelegate = (...args:any[]) => any;
    var MulticastDelegate: {new (func: (...args:any[]) => any): MulticastDelegate;}
    
    interface Delegate extends Object {
        
                    
    }
    
    interface Enum extends ValueType {
        
                    
    }
    
    interface Int32 extends ValueType {
        
                    
    }
    
    interface Array extends Object {
        
                    
    }
    
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

