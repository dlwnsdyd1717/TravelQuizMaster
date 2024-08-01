//# signature=ZEPETO.Mannequin#216d83c22535cd38851867d9418cc5d4#0.0.4
// @ts-nocheck
declare module 'ZEPETO.Mannequin' {

    import * as System from 'System';
    import * as Zepeto from 'Zepeto';
    import * as UnityEngine from 'UnityEngine';
    import * as UnityEngine_Events from 'UnityEngine.Events';
    import * as System_Collections from 'System.Collections';
        
    
    class ItemContent extends System.Object {
        
        public id: string;
        
        public isZem: boolean;
        
        public price: number;
        
        public gender: string;
        
        public property: Zepeto.ZepetoPropertyFlag;
        
        public thumbnail: string;
        
        public badge: string;
        
        public isVisible: boolean;
        
        public has: boolean;
        
        public constructor();
        
                    
    }
    
    class MannequinInteractable extends UnityEngine.MonoBehaviour {
        
        public constructor();
        
                    
    }
    
    class MannequinComponent extends UnityEngine.MonoBehaviour {
        
        public onActive: UnityEngine_Events.UnityEvent$1<ItemContent[]>;
        
        public onCancel: UnityEngine_Events.UnityEvent;
        
        public constructor();
        
                    
    }
    
    class MannequinPreviewer extends BasePreviewer {
        
        public constructor($context: Zepeto.ZepetoContext, $contents: ItemContent[]);
        
        public constructor($context: Zepeto.ZepetoContext, $contents: ItemContent[]);
        
                    
    }
    
    class BasePreviewer extends System.Object {
        
        public OnChanged: UnityEngine_Events.UnityEvent$1<ZEPETO_Mannequin_BasePreviewer.ChangedValue[]>;
        
        public constructor($context: Zepeto.ZepetoContext, $contents: ItemContent[]);
        
        public PreviewContents():void;
        
        public PreviewContent($flag: Zepeto.ZepetoPropertyFlag):void;
        
        public PreviewContent($flag: Zepeto.ZepetoPropertyFlag, $id: string):void;
        
        public ResetContents():void;
        
        public ResetContent($flag: Zepeto.ZepetoPropertyFlag):void;
        
        public ApplyContents($contents: ItemContent[]):void;
        
                    
    }
    
    class ClothesPreviewer extends BasePreviewer {
        
        public constructor($context: Zepeto.ZepetoContext, $contents: ItemContent[]);
        
        public constructor($context: Zepeto.ZepetoContext, $contents: ItemContent[]);
        
                    
    }
    
    class ItemContentsRequest extends System.Object {
        
        public contents: ItemContent[];
        
        public constructor($ids: string[]);
        
        public SendWebRequest():System_Collections.IEnumerator;
        
        public Dispose():void;
        
                    
    }
    
    class Mannequin extends System.Object {
        
        public static OnSelectedItem: UnityEngine_Events.UnityEvent$2<ItemContent, boolean>;
        
        public static OnSucceededPurchaseItems: UnityEngine_Events.UnityEvent$1<ItemContent[]>;
        
        public static OnFailedPurchaseItems: UnityEngine_Events.UnityEvent$1<ItemContent[]>;
        
        public static OnAppliedItems: UnityEngine_Events.UnityEvent$1<ItemContent[]>;
        
        public static OnOpenedShopUI: UnityEngine_Events.UnityEvent$1<ItemContent[]>;
        
        public static OnClosedShopUI: UnityEngine_Events.UnityEvent;
        
        public static WorldCamera: UnityEngine.Camera;
        
        public static OpenUI($contents: ItemContent[]):void;
        
        public static CloseUI():void;
        
                    
    }
    
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
    
    interface Int32 extends ValueType {
        
                    
    }
    
    interface Enum extends ValueType {
        
                    
    }
    
    interface Void extends ValueType {
        
                    
    }
    
    interface Array extends Object {
        
                    
    }
    
}
declare module 'Zepeto' {

    import * as UnityEngine from 'UnityEngine';
        
    
    enum ZepetoPropertyFlag { None = 0, Skin = 1, SkinTone = 2, SkinDetail = 3, Face = 4, Eye = 5, EyeLens = 6, Eyebrow = 7, Beard = 8, Mustache = 9, EyeShadow = 10, EyeLiner = 11, EyeLash = 12, Blusher = 13, Nose = 14, Mouth = 15, Lips = 16, Hair = 17, ClothesGlasses = 18, ClothesTop = 19, ClothesBottom = 20, ClothesShoes = 21, ClothesDress = 22, Background = 23, RoomWallpaper = 24, RoomFloor = 25, RoomBottom = 26, RoomTopLeft = 27, RoomTopRight = 28, RoomMiddleLeft = 29, RoomMiddleRight = 30, Point = 31, Freckles = 32, FaceHair = 33, DoubleEyelid = 34, NailArt = 35, ClothesSocks = 36, ClothesGlove = 37, AccessoryBracelet = 38, AccessoryNecklace = 39, AccessoryEarring = 40, AccessoryRing = 41, AccessoryHeadwear = 42, AccessoryPiercing = 43, BoothBackground = 44, LUT = 45, AccessoryMask = 46, FacePainting = 47, AccessoryBag = 48, AccessoryWing = 49, ClothesCape = 50, ClothesExtra = 51, MannequinFace = 52, WrinkleForehead = 53, WrinkleEye = 54, WrinkleMouth = 55, DoubleEyelidBottom = 56, WrinkleMongo = 57, AccessoryTail = 58, AccessoryEffect = 59, ClothesDeform = 60, HairExtensions = 61, MakeupSet = 62, FaceContouring = 63, BaseModel = 64, CreatorLens = 65 }
    
    interface ZepetoContext extends UnityEngine.MonoBehaviour {
        
                    
    }
    
}
declare module 'UnityEngine' {

    import * as System from 'System';
        
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
    /**
     * A Camera is a device through which the player views the world.
     */
    interface Camera extends Behaviour {
        
                    
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
    /**
     * Two argument version of UnityEvent.
     */
    interface UnityEvent$2<T0,T1> extends UnityEventBase {
        
                    
    }
    
}
declare module 'System.Collections' {

        
    
    interface IEnumerator {
        
                    
    }
    
}
declare module 'ZEPETO.Mannequin.BasePreviewer' {

    import * as System from 'System';
    import * as Zepeto from 'Zepeto';
        
    
    class ChangedValue extends System.Object {
        
        public property: Zepeto.ZepetoPropertyFlag;
        
        public id: string;
        
        public constructor();
        
                    
    }
    
}

