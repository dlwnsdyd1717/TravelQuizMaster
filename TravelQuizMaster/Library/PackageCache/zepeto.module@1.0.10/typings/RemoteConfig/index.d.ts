//# signature=Zepeto.RemoteConfig#0504cacd83fcf34942a4a44435e1380a#0.0.4
// @ts-nocheck
declare module 'ZEPETO.Remote.Config' {

    import * as System from 'System';
        
    
    class RemoteConfig extends System.Object {
        
        public static add_FetchEvent($value: System.Action$1<Newtonsoft_Json_Linq.JObject>):void;
        
        public static remove_FetchEvent($value: System.Action$1<Newtonsoft_Json_Linq.JObject>):void;
        
        public static StartConfigurationSession():void;
        
        public static StopConfigurationSession():void;
        
        public static Clear():void;
        
        public static FetchEvent;
        
                    
    }
    
}
declare module 'System' {

        
    
    interface Object {
        
                    
    }
    
    interface Void extends ValueType {
        
                    
    }
    
    interface ValueType extends Object {
        
                    
    }
    
    type Action$1<T> = (obj: T) => void;
    
    type MulticastDelegate = (...args:any[]) => any;
    var MulticastDelegate: {new (func: (...args:any[]) => any): MulticastDelegate;}
    
    interface Delegate extends Object {
        
                    
    }
    
    interface Array extends Object {
        
                    
    }
    
}
declare module 'Newtonsoft.Json.Linq' {

    import * as System from 'System';
        
    
    interface JObject extends JContainer {
        
                    
    }
    
    interface JContainer extends JToken {
        
                    
    }
    
    interface JToken extends System.Object {
        
                    
    }
    
}

