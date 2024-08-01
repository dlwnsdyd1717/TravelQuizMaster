//# signature=ZEPETO.World.Gui#1bf3e791bd7121cf27ae99827a919690#0.0.4
// @ts-nocheck
declare module 'ZEPETO.World.Gui' {

    import * as System from 'System';
    import * as UnityEngine from 'UnityEngine';
    import * as UnityEngine_UI from 'UnityEngine.UI';
    import * as ZEPETO_World_Gui_RoundedRectangle from 'ZEPETO.World.Gui.RoundedRectangle';
    import * as UnityEngine_EventSystems from 'UnityEngine.EventSystems';
    import * as UnityEngine_UI_Button from 'UnityEngine.UI.Button';
    import * as RootNamespace from 'RootNamespace';
    import * as System_Collections_Generic from 'System.Collections.Generic';
        
    
    class ZepetoNativeScaleFactor extends System.Object {
        
        public constructor();
        
        public static GetScaleFactor($standardMultiple?: number):number;
        
                    
    }
    
    class RoundedRectangle extends UnityEngine_UI.MaskableGraphic {
        
        public get Texture(): UnityEngine.Texture;
        public set Texture(value: UnityEngine.Texture);
        
        public get Icon(): UnityEngine.Sprite;
        public set Icon(value: UnityEngine.Sprite);
        
        public get IconColor(): UnityEngine.Color;
        public set IconColor(value: UnityEngine.Color);
        
        public get IconScale(): number;
        public set IconScale(value: number);
        
        public get mainTexture(): UnityEngine.Texture;
        
        public get FillAmount(): number;
        public set FillAmount(value: number);
        
        public get BorderWidth(): number;
        public set BorderWidth(value: number);
        
        public get BorderColor(): UnityEngine.Color;
        public set BorderColor(value: UnityEngine.Color);
        
        public get FalloffDistance(): number;
        public set FalloffDistance(value: number);
        
        public get Modifier(): UnityEngine.Vector4;
        public set Modifier(value: UnityEngine.Vector4);
        
        public get IsCircle(): boolean;
        public set IsCircle(value: boolean);
        
        public get IsPremultiplied(): boolean;
        public set IsPremultiplied(value: boolean);
        
        public get IsCover(): boolean;
        public set IsCover(value: boolean);
        
        public get FillType(): ZEPETO_World_Gui_RoundedRectangle.EFillType;
        public set FillType(value: ZEPETO_World_Gui_RoundedRectangle.EFillType);
        
        public get defaultMaterial(): UnityEngine.Material;
        
        public EncodeUV($v: UnityEngine.Vector2, $w: number, $h: number):UnityEngine.Vector2;
        
        public GetModifiedMaterial($baseMaterial: UnityEngine.Material):UnityEngine.Material;
        
                    
    }
    
    class RoundedRectangleButton extends RoundedRectangle {
        
        public OnClick: UnityEngine_UI_Button.ButtonClickedEvent;
        
        public longPressThreshold: number;
        
        public onLongPressed: UnityEngine_UI_Button.ButtonClickedEvent;
        
        public onLongPressCanceled: UnityEngine_UI_Button.ButtonClickedEvent;
        
        public useIconDisableColor: boolean;
        
        public IconDisableColor: UnityEngine.Color;
        
        public get interactable(): boolean;
        public set interactable(value: boolean);
        
        public get DisableColor(): UnityEngine.Color;
        public set DisableColor(value: UnityEngine.Color);
        
        public get color(): UnityEngine.Color;
        public set color(value: UnityEngine.Color);
        
        public get IconColor(): UnityEngine.Color;
        public set IconColor(value: UnityEngine.Color);
        
        public constructor();
        
        public OnPointerClick($eventData: UnityEngine_EventSystems.PointerEventData):void;
        
        public OnPointerDown($eventData: UnityEngine_EventSystems.PointerEventData):void;
        
        public OnPointerUp($eventData: UnityEngine_EventSystems.PointerEventData):void;
        
                    
    }
    
    class ZepetoText extends UnityEngine_UI.Text {
        
        public get OriginalText(): string;
        
        public static get InstalledFonts(): System_Collections_Generic.HashSet$1<string>;
        
        public static get SystemFont(): UnityEngine.Font;
        public static set SystemFont(value: UnityEngine.Font);
        
        public get text(): string;
        public set text(value: string);
        
        public get Padding(): UnityEngine.Vector2;
        public set Padding(value: UnityEngine.Vector2);
        
        public get horizontalFit(): boolean;
        public set horizontalFit(value: boolean);
        
        public get verticalFit(): boolean;
        public set verticalFit(value: boolean);
        
        public get preferredWidth(): number;
        
        public get preferredHeight(): number;
        
        public get TextGenerator2x(): UnityEngine.TextGenerator;
        
        public get HasTextGenerated(): boolean;
        
        public constructor();
        
        public static SetStruct<T>($currentValue: $Ref<T>, $newValue: T):boolean;
        
        public SetLayoutDirty():void;
        
        public FindLayoutController($current: UnityEngine.Transform, $last: $Ref<UnityEngine.RectTransform>):void;
        
        public SetLayoutHorizontal():void;
        
        public SetLayoutVertical():void;
        
        public static FindFont($fontName: string):UnityEngine.Font;
        
        public static FindFonts($fontLists: string[]):System_Collections_Generic.List$1<UnityEngine.Font>;
        
        public static FindFontByPriority($fontListByPriority: string[]):UnityEngine.Font;
        
        public static GetDefaultBuiltinFont($defaultFontName?: string):UnityEngine.Font;
        
                    
    }
    
}
declare module 'System' {

        
    
    interface Object {
        
                    
    }
    
    interface Single extends ValueType {
        
                    
    }
    
    interface ValueType extends Object {
        
                    
    }
    
    interface Void extends ValueType {
        
                    
    }
    
    interface Boolean extends ValueType {
        
                    
    }
    
    interface Enum extends ValueType {
        
                    
    }
    
    interface String extends Object {
        
                    
    }
    
    interface Array extends Object {
        
                    
    }
    
}
declare module 'UnityEngine' {

    import * as System from 'System';
        
    /**
     * Representation of 2D vectors and points.
     */
    interface Vector2 extends System.ValueType {
        
                    
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
    /**
     * Base class for all objects Unity can reference.
     */
    interface Object extends System.Object {
        
                    
    }
    /**
     * Base class for Texture handling.
     */
    interface Texture extends Object {
        
                    
    }
    /**
     * Represents a Sprite object for use in 2D gameplay.
     */
    interface Sprite extends Object {
        
                    
    }
    /**
     * Representation of RGBA colors.
     */
    interface Color extends System.ValueType {
        
                    
    }
    /**
     * Representation of four-dimensional vectors.
     */
    interface Vector4 extends System.ValueType {
        
                    
    }
    /**
     * The material class.
     */
    interface Material extends Object {
        
                    
    }
    /**
     * Script interface for.
     */
    interface Font extends Object {
        
                    
    }
    /**
     * Class that can be used to generate text for rendering.
     */
    interface TextGenerator extends System.Object {
        
                    
    }
    /**
     * Position, rotation and scale of an object.
     */
    interface Transform extends Component {
        
                    
    }
    /**
     * Position, size, anchor and pivot information for a rectangle.
     */
    interface RectTransform extends Transform {
        
                    
    }
    
}
declare module 'UnityEngine.UI' {

    import * as UnityEngine_EventSystems from 'UnityEngine.EventSystems';
        
    
    interface MaskableGraphic extends Graphic {
        
                    
    }
    
    interface Graphic extends UnityEngine_EventSystems.UIBehaviour {
        
                    
    }
    
    interface Button extends Selectable {
        
                    
    }
    
    interface Selectable extends UnityEngine_EventSystems.UIBehaviour {
        
                    
    }
    
    interface Text extends MaskableGraphic {
        
                    
    }
    
}
declare module 'UnityEngine.EventSystems' {

    import * as UnityEngine from 'UnityEngine';
    import * as System from 'System';
        
    
    interface UIBehaviour extends UnityEngine.MonoBehaviour {
        
                    
    }
    
    interface PointerEventData extends BaseEventData {
        
                    
    }
    
    interface BaseEventData extends AbstractEventData {
        
                    
    }
    
    interface AbstractEventData extends System.Object {
        
                    
    }
    
}
declare module 'ZEPETO.World.Gui.RoundedRectangle' {

        
    
    enum EFillType { ALPHA = 0, CIRCLE = 1, HORIZONTAL = 2, VERTICAL = 3 }
    
}
declare module 'UnityEngine.UI.Button' {

    import * as UnityEngine_Events from 'UnityEngine.Events';
        
    
    interface ButtonClickedEvent extends UnityEngine_Events.UnityEvent {
        
                    
    }
    
}
declare module 'UnityEngine.Events' {

    import * as System from 'System';
        
    /**
     * A zero argument persistent callback that can be saved with the Scene.
     */
    interface UnityEvent extends UnityEventBase {
        
                    
    }
    /**
     * Abstract base class for UnityEvents.
     */
    interface UnityEventBase extends System.Object {
        
                    
    }
    
}
declare module 'System.Collections.Generic' {

    import * as System from 'System';
        
    
    interface HashSet$1<T> extends System.Object {
        
                    
    }
    
    interface List$1<T> extends System.Object {
        
                    
    }
    
}

