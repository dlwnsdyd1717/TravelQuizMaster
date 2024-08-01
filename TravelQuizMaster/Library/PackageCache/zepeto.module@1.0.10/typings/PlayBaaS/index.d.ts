//# signature=PlayBaas.Http#bbdc3a9072acbb77819caae6871b521c#0.0.4
// @ts-nocheck
declare module 'PlayBaas.Http' {

    import * as UnityEngine from 'UnityEngine';
    import * as System from 'System';
        
    
    class BaseAPIRequest extends UnityEngine.CustomYieldInstruction {
        
        public get keepWaiting(): boolean;
        
                    
    }
    
}
declare module 'UnityEngine' {

    import * as System from 'System';
        
    /**
     * Base class for custom yield instructions to suspend coroutines.
     */
    interface CustomYieldInstruction extends System.Object {
        
                    
    }
    
}
declare module 'System' {

        
    
    interface Object {
        
                    
    }
    
    interface Boolean extends ValueType {
        
                    
    }
    
    interface ValueType extends Object {
        
                    
    }
    
    interface Void extends ValueType {
        
                    
    }
    
    interface String extends Object {
        
                    
    }
    
    interface Byte extends ValueType {
        
                    
    }
    
    interface Array extends Object {
        
                    
    }
    
}

