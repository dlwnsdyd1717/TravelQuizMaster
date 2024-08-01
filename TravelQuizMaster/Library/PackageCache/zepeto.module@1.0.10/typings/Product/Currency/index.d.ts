//# signature=ZEPETO.Product#1339a9858a47d928d277d807e4220d72#0.0.4
// @ts-nocheck
declare module 'ZEPETO.Currency' {

    import * as System from 'System';
    import * as ZEPETO_Product from 'ZEPETO.Product';
    import * as System_Collections_Generic from 'System.Collections.Generic';
        
    /**
     * Balance information for a specific currency.
     */
    class BalanceRecord extends System.Object {
        /**
         * ID of the in-World currency. Set to an empty string for ZEPETO’s official currency (ZEM).
         */
        public currencyId: string;
        /**
         * Player's balance for the currency.
         */
        public quantity: bigint;
        
        public constructor();
        
                    
    }
    /**
     * The `BalanceResponse` class provides the API call result and the balance information.
     */
    class BalanceResponse extends ZEPETO_Product.ProductBaseResponse {
        /**
         * Balance information.
         */
        public currency: BalanceRecord;
        
        public constructor();
        
                    
    }
    /**
     * The `BalanceListResponse` class provides the API call result and the balance information list.
     */
    class BalanceListResponse extends ZEPETO_Product.ProductBaseResponse {
        /**
         * Collection mapping in-World currency IDs to the player's balance for each currency.
         */
        public currencies: System_Collections_Generic.Dictionary$2<string, bigint>;
        
        public constructor();
        
                    
    }
    /**
     * `CurrencyService` manages operations associated with ZEPETO World currencies.
     * This service enables players to check their balances for both the official ZEPETO currency (ZEM) and in-World currencies.
     */
    class CurrencyService extends System.Object {
        
        public constructor();
        /**
         * This asynchronous method retrieves the balance information for every defined in-World currency.
         * @returns A `BaseRequest` object. When the asynchronous process is complete, you can access the `BalanceListResponse` object by the `responseData` property.
         */
        public static GetUserCurrencyBalancesAsync():ZEPETO_Product.BaseRequest$1<BalanceListResponse>;
        /**
         * This asynchronous method retrieves the balance for a specific in-World currency based on the provided currency ID.
         * @param $currencyId ID of the currency to fetch
         * @returns A `BaseRequest` object. When the asynchronous process is complete, you can access the `BalanceResponse` object by the `responseData` property.
         */
        public static GetUserCurrencyBalanceAsync($currencyId: string):ZEPETO_Product.BaseRequest$1<BalanceResponse>;
        /**
         * This asynchronous method retrieves the balance for ZEPETO’s official currency (ZEM).
         * @returns A `OfficialCurrencyBalanceRequest` object. When the asynchronous process is complete, you can access the `BalanceResponse` object by the `responseData` property.
         */
        public static GetOfficialCurrencyBalanceAsync():ZEPETO_Product.OfficialCurrencyBalanceRequest;
        
                    
    }
    /**
     * The error code specifies the reason for the failure of currency-related requests.
     */
    enum CurrencyError { 
	/**
	 * Error: Unknown error.
	 */
	Unknown = -1, 
	/**
	 * Error: Errors related to network issues, including disconnections or unstable connections.
	 */
	NetworkError = 0 }
    
}
declare module 'System' {

        
    
    interface Object {
        
                    
    }
    
    interface String extends Object {
        
                    
    }
    
    interface Int64 extends ValueType {
        
                    
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
    
    type Action = () => void;
    var Action: {new (func: () => void): Action;}
    
    interface Boolean extends ValueType {
        
                    
    }
    
    interface Array extends Object {
        
                    
    }
    
}
declare module 'ZEPETO.Product' {

    import * as System from 'System';
    import * as PlayBaas_Http from 'PlayBaas.Http';
        
    /**
     * Base class for product-related response classes.
     */
    class ProductBaseResponse extends BaseResponse {
        /**
         * Retrieves the error code for a failed product request.
         */
        public get ErrorCode(): ProductError;
        
        public constructor();
        
                    
    }
    /**
     * Base class for response classes.
     */
    class BaseResponse extends System.Object {
        /**
         * Represents the success status of the request. Set to true upon successful completion.
         */
        public isSuccess: boolean;
        /**
         * Describes the result of the request.
         */
        public message: string;
        
        public constructor();
        
                    
    }
    /**
     * Represents an asynchronous request for retrieving the balance for ZEPETO’s official currency (ZEM).
     */
    class OfficialCurrencyBalanceRequest extends BaseRequest$1<ZEPETO_Currency.BalanceResponse> {
        
                    
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
    
    interface CurrencyCache extends System.Object {
        
                    
    }
    /**
     * Product information.
     */
    interface ProductRecord extends System.Object {
        
                    
    }
    /**
     * The error code specifies the reason for the failure of product-related requests.
     */
    enum ProductError { 
	/**
	 * Error: Unknown error.
	 */
	Unknown = -1, 
	/**
	 * Error: Errors related to network issues, including disconnections or unstable connections.
	 */
	NetworkError = 0, 
	/**
	 * Error: Request is canceled by the user.
	 */
	UserCanceled = 1, 
	/**
	 * Error: Invalid product metadata in the request.
	 */
	ProductRefreshResponseError = 2, 
	/**
	 * Error: Failed to retrieve one or more item information in the item product package.
	 */
	ItemPackageProductsResponseError = 3, 
	/**
	 * Error: Failed to retrieve the on or more currency information in the currency product package.
	 */
	IAPCardError = 4, 
	/**
	 * Error: Product price mismatch.
	 */
	ProductPriceChanged = 4001, 
	/**
	 * Error: Product is already purchased.
	 */
	ProductAlreadyPurchased = 4002, 
	/**
	 * Error: Insufficient ZEPETO’s official currency (ZEM) balance for the purchase.
	 */
	BalanceOfficialCurrencyNotEnough = 4003, 
	/**
	 * Error: Insufficient in-World currency balance for the purchase.
	 */
	BalanceUserCurrencyNotEnough = 4004, 
	/**
	 * Error: Product is not active.
	 */
	ProductNotActive = 4005, 
	/**
	 * Error: Player's user ID differs from the World creator's user ID.
	 * This error only occurs in the development environment using the Unity editor.
	 */
	InvalidCreator = 4006 }
    
}
declare module 'System.Collections.Generic' {

    import * as System from 'System';
    import * as System_Runtime_Serialization from 'System.Runtime.Serialization';
    import * as RootNamespace from 'RootNamespace';
        
    
    class Dictionary$2<TKey,TValue> extends System.Object {
        
        public get Comparer(): IEqualityComparer$1<TKey>;
        
        public get Count(): number;
        
        public get Keys(): Dictionary$2.KeyCollection<TKey, TValue>;
        
        public get Values(): Dictionary$2.ValueCollection<TKey, TValue>;
        
        public constructor();
        
        public constructor($capacity: number);
        
        public constructor($comparer: IEqualityComparer$1<TKey>);
        
        public constructor($capacity: number, $comparer: IEqualityComparer$1<TKey>);
        
        public get_Item($key: TKey):TValue;
        
        public set_Item($key: TKey, $value: TValue):void;
        
        public Add($key: TKey, $value: TValue):void;
        
        public Clear():void;
        
        public ContainsKey($key: TKey):boolean;
        
        public ContainsValue($value: TValue):boolean;
        
        public GetEnumerator():Dictionary$2.Enumerator<TKey, TValue>;
        
        public GetObjectData($info: System_Runtime_Serialization.SerializationInfo, $context: System_Runtime_Serialization.StreamingContext):void;
        
        public OnDeserialization($sender: any):void;
        
        public Remove($key: TKey):boolean;
        
        public TryGetValue($key: TKey, $value: $Ref<TValue>):boolean;
        
                    
    }
    
    interface IEqualityComparer$1<T> {
        
                    
    }
    
    interface IDictionary$2<TKey,TValue> {
        
                    
    }
    
    interface KeyValuePair$2<TKey,TValue> extends System.ValueType {
        
                    
    }
    
    interface IEnumerable$1<T> {
        
                    
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
     * Two argument version of UnityEvent.
     */
    interface UnityEvent$2<T0,T1> extends UnityEventBase {
        
                    
    }
    /**
     * A zero argument persistent callback that can be saved with the Scene.
     */
    class UnityEvent extends UnityEventBase {
        /**
         * Constructor.
         */
        public constructor();
        /**
         * Add a non persistent listener to the UnityEvent.
         * @param $call Callback function.
         */
        public AddListener($call: UnityAction):void;
        /**
         * Remove a non persistent listener from the UnityEvent.
         * @param $call Callback function.
         */
        public RemoveListener($call: UnityAction):void;
        /**
         * Invoke all registered callbacks (runtime and persistent).
         */
        public Invoke():void;
        
                    
    }
    /**
     * Zero argument delegate used by UnityEvents.
     */
    type UnityAction = () => void;
    var UnityAction: {new (func: () => void): UnityAction;}
    
}
declare module 'System.Collections.Generic.Dictionary$2' {

    import * as System from 'System';
        
    
    interface KeyCollection<TKey,TValue> extends System.Object {
        
                    
    }
    
    interface ValueCollection<TKey,TValue> extends System.Object {
        
                    
    }
    
    interface Enumerator<TKey,TValue> extends System.ValueType {
        
                    
    }
    
}
declare module 'System.Runtime.Serialization' {

    import * as System from 'System';
        
    
    interface SerializationInfo extends System.Object {
        
                    
    }
    
    interface StreamingContext extends System.ValueType {
        
                    
    }
    
}

