//# signature=ZEPETO.Module.Teleport#4e9a555946464affadffc04a3ac34181#0.0.4
// @ts-nocheck
declare module 'ZEPETO.Module.Teleport' {

    import * as System from 'System';
        
    
    class TeleportService extends System.Object {
        
        public static MoveToWorld($worldId: string, $onError: System.Action$1<string>):void;
        
        public static MoveToRoom($roomId: string):void;
        
        public static MoveToUniqueRoom($ownerId: string):void;
        
                    
    }
    
}
declare module 'System' {

        
    
    interface Object {
        
                    
    }
    
    interface String extends Object {
        
                    
    }
    
    type Action$1<T> = (obj: T) => void;
    
    interface Void extends ValueType {
        
                    
    }
    
    interface ValueType extends Object {
        
                    
    }
    
    type MulticastDelegate = (...args:any[]) => any;
    var MulticastDelegate: {new (func: (...args:any[]) => any): MulticastDelegate;}
    
    interface Delegate extends Object {
        
                    
    }
    
    type Action$2<T1,T2> = (arg1: T1, arg2: T2) => void;
    
    interface Array extends Object {
        
                    
    }
    
}

