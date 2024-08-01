//# signature=ZEPETO.Product#8578ef6d9985ab902c13da282f5a6fdf#0.0.4
// @ts-nocheck
declare module 'ZEPETO.Inventory' {

    import * as ZEPETO_Product from 'ZEPETO.Product';
    import * as System from 'System';
    import * as PlayBaas_Http from 'PlayBaas.Http';
        
    /**
     * The `InventoryListResponse` class provides the API call result and the product inventory information list.
     */
    class InventoryListResponse extends ZEPETO_Product.ProductBaseResponse {
        /**
         * List of product inventory information.
         */
        public products: InventoryRecord[];
        
        public constructor();
        
                    
    }
    /**
     * Inventory product information.
     */
    class InventoryRecord extends System.Object {
        /**
         * Product ID.
         */
        public productId: string;
        /**
         * Quantity of the product.
         */
        public quantity: bigint;
        /**
         * Date and time when the product was added to the inventory.
         */
        public createdAt: Date;
        /**
         * Date and time when the product information was last updated.
         */
        public updatedAt: Date;
        
        public constructor();
        
                    
    }
    /**
     * The `InventoryResponse` class provides the API call result and the retrieved inventory product information.
     */
    class InventoryResponse extends ZEPETO_Product.ProductBaseResponse {
        /**
         * Inventory product information.
         */
        public product: InventoryRecord;
        
        public constructor();
        
                    
    }
    /**
     * `InventoryService` manages operations associated with the player's in-World product inventory.
     */
    class InventoryService extends System.Object {
        
        public constructor();
        /**
         * This asynchronous method retrieves the player's inventory product information list.
         * @returns A `BaseRequest` object. When the asynchronous process is complete, you can access the `InventoryListResponse` object by the `responseData` property.
         */
        public static GetListAsync():ZEPETO_Product.BaseRequest$1<InventoryListResponse>;
        /**
         * This asynchronous method retrieves the player's inventory product information based on the provided product ID.
         * @param $productId ID of the product to fetch.
         * @returns A `BaseRequest` object. When the asynchronous process is complete, you can access the `InventoryResponse` object by the `responseData` property.
         */
        public static GetAsync($productId: string):ZEPETO_Product.BaseRequest$1<InventoryResponse>;
        /**
         * This asynchronous method checks the existence of a product in the player's inventory.
         * @param $productId ID of the product to check.
         * @returns A `CheckInventoryRequest` object. When the asynchronous process is complete, you can access the `CheckInventoryResponse` object by the `responseData` property.
         */
        public static HasAsync($productId: string):CheckInventoryRequest;
        
                    
    }
    /**
     * Class for checking the existence of a specific product in a user's inventory.
     */
    class CheckInventoryRequest extends PlayBaas_Http.BaseAPIRequest {
        /**
         * Response data of CheckInventoryResponse.
         */
        public responseData: CheckInventoryResponse;
        
                    
    }
    /**
     * Class representing the response for checking the existence of a product in the inventory.
     */
    class CheckInventoryResponse extends ZEPETO_Product.ProductBaseResponse {
        /**
         * A boolean value that indicates whether a specific product exists in the user's inventory.
         */
        public isExist: boolean;
        
        public constructor();
        
                    
    }
    /**
     * The error code specifies the reason for the failure of inventory-related requests.
     */
    enum InventoryError { 
	/**
	 * Error: Unknown error.
	 */
	Unknown = -1, 
	/**
	 * Error: Errors related to network issues, including disconnections or unstable connections.
	 */
	NetworkError = 0 }
    
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
    
    interface Array extends Object {
        
                    
    }
    
    interface String extends Object {
        
                    
    }
    
    interface Int64 extends ValueType {
        
                    
    }
    
    interface ValueType extends Object {
        
                    
    }
    
    interface DateTime extends ValueType {
        
                    
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
    
    interface Boolean extends ValueType {
        
                    
    }
    
    interface Int32 extends ValueType {
        
                    
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

