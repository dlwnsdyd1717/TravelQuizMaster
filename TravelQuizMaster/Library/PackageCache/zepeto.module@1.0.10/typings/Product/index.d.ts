//# signature=ZEPETO.Product#c5b965724a7acbb620ece0251bed9e1c#0.0.4
// @ts-nocheck
declare module 'ZEPETO.Product' {

    import * as System from 'System';
    import * as PlayBaas_Http from 'PlayBaas.Http';
    import * as UnityEngine from 'UnityEngine';
    import * as UnityEngine_Events from 'UnityEngine.Events';
        
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
     * The `ProductListResponse` class provides the API call result and the retrieved product information list.
     */
    class ProductListResponse extends ProductBaseResponse {
        /**
         * List of product information.
         */
        public products: ProductRecord[];
        
        public constructor();
        
                    
    }
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
     * The `ProductResponse` class provides the API call result and the retrieved product information.
     */
    class ProductResponse extends ProductBaseResponse {
        /**
         * Product information.
         */
        public product: ProductRecord;
        
        public constructor();
        
                    
    }
    /**
     * The `ProductResponse` class provides the API call result and the purchase information.
     */
    class PurchaseResponse extends ProductBaseResponse {
        /**
         * User ID of the player performed the purchase.
         */
        public userId: string;
        /**
         * ID of the purchased in-World product.
         */
        public productId: string;
        /**
         * Price of the purchased in-World product.
         */
        public price: number;
        /**
         * Receipt ID for the purchase.
         */
        public receiptId: string;
        /**
         * Date and time when the in-World product was purchased.
         */
        public purchasedAt: Date;
        
        public constructor();
        
                    
    }
    /**
     * The `CurrencyListResponse` class provides the API call result and the currency information list.
     */
    class CurrencyListResponse extends ProductBaseResponse {
        /**
         * List of currency information.
         */
        public currencies: CurrencyRecord[];
        
        public constructor();
        
                    
    }
    /**
     * The `CurrencyResponse` class provides the API call result and the currency information.
     */
    class CurrencyResponse extends ProductBaseResponse {
        /**
         * Currency information.
         */
        public currency: CurrencyRecord;
        
        public constructor();
        
                    
    }
    /**
     * Product information.
     */
    class ProductRecord extends System.Object {
        /**
         * Product ID.
         */
        public productId: string;
        /**
         * Product name.
         */
        public name: string;
        /**
         * Product price.
         */
        public price: number;
        /**
         * Indicates whether the user has purchased the product, applicable only for non-consumable products.
         */
        public isPurchased: boolean;
        /**
         * Items included in the product if `ProductType` is `ItemPackage`.
         */
        public itemPackageUnits: ItemPackageUnitRecord[];
        /**
         * Currencies included in the product if `ProductType` is `CurrencyPackage`.
         */
        public currencyPackageUnits: CurrencyPackageUnitRecord[];
        /**
         * Returns the `ProductType` of the product.
         */
        public get ProductType(): ProductType;
        /**
         * Returns the `PurchaseType` of the product.
         */
        public get PurchaseType(): PurchaseType;
        /**
         * Returns the `ProductStatus` of the product.
         */
        public get ProductStatus(): ProductStatus;
        /**
         * Returns the type of currency used for purchasing the product.
         */
        public get CurrencyType(): CurrencyType;
        /**
         * Returns the ID of the currency used for purchasing the product.
         */
        public get currencyId(): string;
        /**
         * Returns the name of the currency used for purchasing the product.
         */
        public get currencyName(): string;
        
        public constructor();
        /**
         * Returns the image of the currency used for purchasing the product.
         */
        public GetCurrencySprite():UnityEngine.Sprite;
        
                    
    }
    /**
     * Currency information.
     */
    class CurrencyRecord extends System.Object {
        /**
         * Currency ID.
         */
        public currencyId: string;
        /**
         * Currency name.
         */
        public name: string;
        /**
         * Indicates whether the currency is ZEPETO’s official currency (ZEM) or an in-World currency.
         */
        public isOfficialCurrency: boolean;
        
        public constructor();
        
                    
    }
    /**
     * Details of individual products included in the item product package.
     */
    class ItemPackageUnitRecord extends System.Object {
        /**
         * Product ID.
         */
        public productId: string;
        /**
         * Item name.
         */
        public itemName: string;
        /**
         * Item quantity.
         */
        public quantity: bigint;
        
        public constructor();
        
                    
    }
    /**
     * Details of individual currencies included in the currency product package.
     */
    class CurrencyPackageUnitRecord extends System.Object {
        /**
         * Currency ID.
         */
        public currencyId: string;
        /**
         * Currency name.
         */
        public currencyName: string;
        /**
         * Currency quantity.
         */
        public quantity: bigint;
        
        public constructor();
        
                    
    }
    /**
     * Enum representing the product type.
     */
    enum ProductType { 
	/**
	 * Single-item product.
	 */
	Item = 0, 
	/**
	 * Item product package, including multiple items.
	 */
	ItemPackage = 1, 
	/**
	 * Currency product package, including multiple currencies.
	 */
	CurrencyPackage = 2 }
    /**
     * Enum representing the product purchase type.
     */
    enum PurchaseType { 
	/**
	 * Consumable product.
	 */
	Consumable = 0, 
	/**
	 * Non-consumable product.
	 */
	NonConsumable = 1 }
    /**
     * Enum representing the product status.
     */
    enum ProductStatus { 
	/**
	 * Active state.
	 */
	Active = 0, 
	/**
	 * Inactive state.
	 */
	InActive = 1, 
	/**
	 * Forbidden state due to expiration of use.
	 */
	Forbidden = 2 }
    /**
     * Enum representing the currency type.
     */
    enum CurrencyType { 
	/**
	 * ZEPETO’s official currency (ZEM)
	 */
	OfficialCurrency = 0, 
	/**
	 * In-World currency.
	 */
	UserCurrency = 1 }
    /**
     * `ProductService` manages operations associated with in-World products.
     * Players can access in-World product information and perform purchases through this service.
     */
    class ProductService extends System.Object {
        /**
         * Event triggered upon a successful in-World product purchase.
         * Listeners can be added, receiving `ProductRecord` (the purchased product information) and `PurchaseResponse` (the purchase result information) instances as arguments.
         */
        public static OnPurchaseCompleted: UnityEngine_Events.UnityEvent$2<ProductRecord, PurchaseResponse>;
        /**
         * Event triggered upon a failed in-World product purchase.
         * Listeners can be added, receiving `ProductRecord` (product information in the attempted purchase) and `PurchaseResponse` (the unsuccessful purchase result information) instances as arguments.
         */
        public static OnPurchaseFailed: UnityEngine_Events.UnityEvent$2<ProductRecord, ProductBaseResponse>;
        
        public constructor();
        /**
         * This asynchronous method retrieves the in-World product list based on provided product IDs.
         * @param $productIds IDs of the products to fetch.
         * @returns A `BaseRequest` object. When the asynchronous process is complete, you can access the `ProductListResponse` object by the `responseData` property.
         */
        public static GetProductsAsync(...productIds: string[]):BaseRequest$1<ProductListResponse>;
        /**
         * This asynchronous method retrieves the in-World product information based on the provided product ID.
         * @param $productId ID of the product to fetch.
         * @returns A `BaseRequest` object. When the asynchronous process is complete, you can access the `ProductResponse` object by the `responseData` property.
         */
        public static GetProductAsync($productId: string):BaseRequest$1<ProductResponse>;
        /**
         * This asynchronous method performs a purchase to the in-World product based on provided product information.
         * @param $product `ProductRecord` instance of the product to purchase.
         * @param $reason Explanation for the purchase.
         * @returns A `BaseRequest` object. When the asynchronous process is complete, you can access the `PurchaseResponse` object by the `responseData` property.
         */
        public static PurchaseProductAsync($product: ProductRecord, $reason?: string):BaseRequest$1<PurchaseResponse>;
        /**
         * This asynchronous method performs a purchase to the in-World product based on the provided product ID.
         * @param $productId ID of the product to purchase.
         * @param $reason Explanation for the purchase.
         * @returns A `BaseRequest` object. When the asynchronous process is complete, you can access the `PurchaseResponse` object by the `responseData` property.
         */
        public static PurchaseProductAsync($productId: string, $reason?: string):BaseRequest$1<PurchaseResponse>;
        /**
         * Asynchronous method to get a list of currencies.
         * Upon completion, the list of currencies is obtained, and you can access the `CurrencyListResponse` object through the `responseData` property.
         */
        public static GetCurrenciesAsync():BaseRequest$1<CurrencyListResponse>;
        /**
         * This asynchronous method retrieves the in-World currency information based on the provided product ID.
         * @param $currencyId ID of the currency to fetch.
         * @returns A `BaseRequest` object. When the asynchronous process is complete, you can access the `CurrencyResponse` object by the `responseData` property.
         */
        public static GetCurrencyAsync($currencyId: string):BaseRequest$1<CurrencyResponse>;
        /**
         * This method opens the in-World product purchase UI.
         * @param $product `ProductRecord` instance of the product to purchase.
         */
        public static OpenPurchaseUI($product: ProductRecord):void;
        
                    
    }
    
    interface ProductCache extends System.Object {
        
                    
    }
    
    interface VersionResponse extends ProductBaseResponse {
        
                    
    }
    /**
     * Class managing the functionality of an in-World product purchase button.
     */
    class ProductPurchaseButton extends UnityEngine.MonoBehaviour {
        /**
         * Gets the ID of the in-World product available for purchase.
         */
        public get productId(): string;
        /**
         * Retrieves the in-World product information associated with the `productId`.
         */
        public get product(): ProductRecord;
        
        public constructor();
        /**
         * Sets the ID of an in-World product available for purchase using this button.
         * @param $productId Product ID.
         */
        public SetProductId($productId: string):void;
        
                    
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
declare module 'System' {

        
    
    interface Object {
        
                    
    }
    
    interface Boolean extends ValueType {
        
                    
    }
    
    interface ValueType extends Object {
        
                    
    }
    
    interface String extends Object {
        
                    
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
    
    interface Array extends Object {
        
                    
    }
    
    interface Int32 extends ValueType {
        
                    
    }
    
    interface DateTime extends ValueType {
        
                    
    }
    
    interface Int64 extends ValueType {
        
                    
    }
    
    type Action = () => void;
    var Action: {new (func: () => void): Action;}
    
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
     * Represents a Sprite object for use in 2D gameplay.
     */
    interface Sprite extends Object {
        
                    
    }
    /**
     * Base class for all objects Unity can reference.
     */
    interface Object extends System.Object {
        
                    
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
    
}
declare module 'UnityEngine.Events' {

    import * as System from 'System';
        
    /**
     * Two argument version of UnityEvent.
     */
    class UnityEvent$2<T0,T1> extends UnityEventBase {
        
        public constructor();
        
        public AddListener($call: UnityAction$2<T0, T1>):void;
        
        public RemoveListener($call: UnityAction$2<T0, T1>):void;
        
        public Invoke($arg0: T0, $arg1: T1):void;
        
                    
    }
    /**
     * Abstract base class for UnityEvents.
     */
    interface UnityEventBase extends System.Object {
        
                    
    }
    
    type UnityAction$2<T0,T1> = (arg0: T0, arg1: T1) => void;
    
}

