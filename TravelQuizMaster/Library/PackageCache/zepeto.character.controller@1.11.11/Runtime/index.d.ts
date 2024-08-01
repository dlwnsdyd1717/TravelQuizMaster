//# signature=ZEPETO.Character.Controller#f89b10be4c23d8c10dc462bb129e0205#0.0.4
// @ts-nocheck
declare module 'ZEPETO.Character.Controller' {

    import * as UnityEngine from 'UnityEngine';
    import * as System from 'System';
    import * as UnityEngine_Events from 'UnityEngine.Events';
    import * as ZEPETO_Character_Controller_StandardControl_V1 from 'ZEPETO.Character.Controller.StandardControl.V1';
    import * as ZEPETO_Character_Controller_StandardControl_V2 from 'ZEPETO.Character.Controller.StandardControl.V2';
    import * as ZEPETO_Character_Controller_CameraData from 'ZEPETO.Character.Controller.CameraData';
    import * as UnityEngine_InputSystem from 'UnityEngine.InputSystem';
    import * as ZEPETO_Character_Controller_ZepetoCamera from 'ZEPETO.Character.Controller.ZepetoCamera';
    import * as Zepeto from 'Zepeto';
    import * as ZEPETO_Character_Controller_ZepetoCharacter from 'ZEPETO.Character.Controller.ZepetoCharacter';
    import * as ZepetoInputControl from 'ZepetoInputControl';
    import * as UnityEngine_EventSystems from 'UnityEngine.EventSystems';
        
    /**
     * Manager class designed for controlling both ZEPETO player and ZEPETO character.
     */
    class ZepetoPlayers extends UnityEngine.MonoBehaviour {
        /**
         * Event triggered when a local player instance is created.
         */
        public OnAddedLocalPlayer: UnityEngine_Events.UnityEvent;
        /**
         * Event triggered when a player instance is created.
         */
        public OnAddedPlayer: UnityEngine_Events.UnityEvent$1<string>;
        /**
         * Event triggered when a player instance is removed.
         */
        public OnRemovedPlayer: UnityEngine_Events.UnityEvent$1<string>;
        /**
         * Configuration for a `ZepetoCamera`.
         */
        public cameraData: CameraData;
        /**
         * Configuration for a `ZepetoCharacter`.
         */
        public characterData: CharacterData;
        /**
         * Configuration for a `ZepetoPlayerControl`.
         */
        public controllerData: ControllerData;
        /**
         * Character-related UI settings.
         */
        public floatingUIData: FloatingUIData;
        /** @deprecated "Use characterData.customMotionData instead." */
        public motionV1Data: ZEPETO_Character_Controller_StandardControl_V1.CustomMotionData;
        /** @deprecated "Use characterData.customMotionData instead." */
        public motionV2Data: ZEPETO_Character_Controller_StandardControl_V2.CustomMotionData;
        /**
         * Singleton instance of `ZepetoPlayers`.
         */
        public static get instance(): ZepetoPlayers;
        /**
         * Local player.
         */
        public get LocalPlayer(): LocalPlayer;
        /**
         * ZEPETO Camera.
         */
        public get ZepetoCamera(): ZepetoCamera;
        /**
         * Adds handler function for the event invoked when the `ZepetoPlayers` is initialized.
         */
        public static add_onInitialized($value: System.Action):void;
        /**
         * Removes handler function for the event invoked when the `ZepetoPlayers` is initialized.
         */
        public static remove_onInitialized($value: System.Action):void;
        /**
         * Checks if a player instance associated with the specified session ID exists.
         * @param $id Session ID
         */
        public HasPlayer($id: string):boolean;
        /**
         * Retrieves the player instance associated with the specified session ID.
         * @param $id Session ID
         * @returns 
                    Player object associated with the specified ID.
                    If a player with the given ID does not exist, this will return `null`.
                    
         */
        public GetPlayer($id: string):ZepetoPlayer;
        /**
         * Retrieves the player instance associated with the specified user ID.
         * @param $userId User ID
         * @returns Player object associated with the specified user ID.
         */
        public GetPlayerWithUserId($userId: string):ZepetoPlayer;
        /**
         * Removes the player instance associated with the specified session ID.
         * @param $id Session ID
         */
        public RemovePlayer($id: string):void;
        /**
         * Removes the body deformation items worn by every player's character.
         * Reverts to the default body shape and applies the default ZEPETO outfit.
         */
        public DeformDefaultCostume():void;
        /**
         * Removes the body deformation items worn by every player's character.
         */
        public DeformDefaultProperties():void;
        
        public static onInitialized;
        
                    
    }
    /**
     * Represents the initial configuration for a `ZepetoCamera`.
     */
    class CameraData extends System.Object {
        /** @deprecated "Use zoomSpeed and rotationSpeed instead." */
        public speed: number;
        /** @deprecated "Use zoomDampSpeed instead." */
        public sensitivity: number;
        /** @deprecated "This property no longer has an effect." */
        public useEnhancedOption: boolean;
        /** @deprecated "The properties of EnhancedOptionData have been integrated into the CameraData class." */
        public enhancedOptionData: ZEPETO_Character_Controller_CameraData.EnhancedOptionData;
        /**
         * Prefab to initialize `ZepetoCamera`.
         */
        public cameraPrefab: UnityEngine.GameObject;
        /**
         * Default maximum distance the camera can zoom out from the target.
         */
        public maxZoomDistance: number;
        /**
         * Default minimum distance the camera can zoom in towards the target.
         */
        public minZoomDistance: number;
        /**
         * Maximum vertical angle at which the camera rotates around the target.
         */
        public maxPitch: number;
        /**
         * Minimum vertical angle at which the camera rotates around the target.
         */
        public minPitch: number;
        /**
         * Default offset of the camera from its target.
         */
        public offset: UnityEngine.Vector3;
        /**
         * Indicates whether the camera's X-axis rotation is locked.
         */
        public lockXAxis: boolean;
        /**
         * Defines the layers with which the camera can collide.
         */
        public layer: UnityEngine.LayerMask;
        /**
         * Time threshold for camera collision detection, affecting how quickly the camera responds to collisions.
         */
        public collisionTimeThreshold: number;
        /**
         * Speed of zooming in and out.
         */
        public get zoomSpeed(): number;
        /**
         * Speed of zooming in and out.
         */
        public set zoomSpeed(value: number);
        /**
         * Interpolation speed for zooming in and out.
         */
        public get zoomDampSpeed(): number;
        /**
         * Interpolation speed for zooming in and out.
         */
        public set zoomDampSpeed(value: number);
        /**
         * Speed of rotation.
         */
        public get rotationSpeed(): number;
        /**
         * Speed of rotation.
         */
        public set rotationSpeed(value: number);
        /**
         * Interpolation speed for rotation.
         */
        public get rotationDampSpeed(): number;
        /**
         * Interpolation speed for rotation.
         */
        public set rotationDampSpeed(value: number);
        /**
         * Indicates whether to enable character culling to prevent rendering issues at close camera distances.
         */
        public get characterCulling(): boolean;
        /**
         * Indicates whether to enable character culling to prevent rendering issues at close camera distances.
         */
        public set characterCulling(value: boolean);
        /**
         * Weight applied to the target's scale to adjust the camera's position and behavior.
         */
        public get targetScaleWeight(): number;
        /**
         * Weight applied to the target's scale to adjust the camera's position and behavior.
         */
        public set targetScaleWeight(value: number);
        
        public constructor();
        
                    
    }
    /**
     * Represents the initial configuration for a `ZepetoCharacter`.
     */
    class CharacterData extends System.Object {
        /** @deprecated "This property no longer has an effect." */
        public motionController: StateMachineVersion;
        /**
         * Steepest degree the character can ascend.
         */
        public slopeLimit: number;
        /**
         * Maximum vertical height difference the character can move over.
         */
        public stepOffset: number;
        /**
         * Skin width for collision detection, preventing the character from entering into other colliders.
         */
        public skinWidth: number;
        /**
         * Smallest gap the character can move.
         */
        public minMoveDistance: number;
        /**
         * Center point of the character's collider.
         */
        public center: UnityEngine.Vector3;
        /**
         * Radius of the character's collider capsule.
         */
        public radius: number;
        /**
         * Height of the character's collider capsule.
         */
        public height: number;
        /**
         * Defines the layers with which the character can collide.
         */
        public layer: UnityEngine.LayerMask;
        /**
         * Visual representation of the character's shadow.
         */
        public shadow: UnityEngine.GameObject;
        /**
         * Animator controller for the character.
         */
        public animatorController: UnityEngine.RuntimeAnimatorController;
        /**
         * Walking speed of the character.
         */
        public walkSpeed: number;
        /**
         * Running speed of the character.
         */
        public runSpeed: number;
        /**
         * Jump power of the character.
         */
        public jumpPower: number;
        /**
         * Customized configuration for character motion.
         */
        public customMotionData: CustomMotionData;
        
        public constructor();
        
                    
    }
    /**
     * Represents the configuration for a `ZepetoPlayerControl`.
     */
    class ControllerData extends System.Object {
        /**
         * Container for input actions and bindings used to manage complex input setups.
         */
        public inputAsset: UnityEngine_InputSystem.InputActionAsset;
        /**
         * Processes user inputs and conveys them to the UI components.
         * It handles interactions like button clicks, drags, drops, etc.
         */
        public eventSystem: UnityEngine.GameObject;
        /**
         * Determines whether to use the default V-Pad.
         */
        public useDefaultVirtualController: boolean;
        /**
         * Determines whether to use the default input controller.
         */
        public useDefaultInputController: boolean;
        /**
         * V-pad controller prefab for vertical screen orientation.
         */
        public verticalController: UnityEngine.GameObject;
        /**
         * V-pad controller prefab for horizontal screen orientation.
         */
        public horizontalController: UnityEngine.GameObject;
        
        public constructor();
        
                    
    }
    /**
     * Class responsible for managing character-related UI settings.
     */
    class FloatingUIData extends System.Object {
        /**
         * Determines whether to display the local player's character nickname UI.
         */
        public showNickNameLocalPlayer: boolean;
        /**
         * Determines whether to display the character nickname UI for other players.
         */
        public showNickNameOtherPlayers: boolean;
        /**
         * Determines whether to display the local player's character bubble chat UI.
         */
        public showBubbleChatLocalPlayer: boolean;
        /**
         * Determines whether to display the character bubble chat UI for other players.
         */
        public showBubbleChatOtherPlayers: boolean;
        /**
         * Determines whether to show the mini-profile pop-up UI when clicking on a character.
         */
        public useMiniProfileOnApp: boolean;
        
        public constructor();
        
                    
    }
    
    interface Setting extends UnityEngine.ScriptableObject {
        
                    
    }
    /**
     * Class designed to manage the local player's actions, including movement, costume customization, and ZEPETO camera interactions.
     */
    class LocalPlayer extends UnityEngine.MonoBehaviour {
        /**
         * Movement central axis of the local player's ZEPETO character.
         */
        public movingAxis: UnityEngine.Transform;
        /**
         * ZEPETO camera instance associated with the local player.
         */
        public get zepetoCamera(): ZepetoCamera;
        /**
         * ZEPETO player instance associated with the local player.
         */
        public get zepetoPlayer(): ZepetoPlayer;
        /**
         * Changes the costume of the local player's ZEPETO character. Throws a general `Exception`.
         * @param $itemCode Item ID of the costume.
         * @param $complete Callback function to handle the completion.
         */
        public SetCostume($itemCode: string, $complete?: System.Action):void;
        /**
         * Makes the local player's ZEPETO character jump.
         */
        public Jump():void;
        /**
         * Makes the local player's ZEPETO character double jump.
         */
        public DoubleJump():void;
        /**
         * Moves the local player's ZEPETO character in a specified direction.
         * @param $dir Direction in which the character should move.
         */
        public Move($dir: UnityEngine.Vector2):void;
        /**
         * Moves the local player's ZEPETO character in a specified direction.
         * @param $dir Direction in which the character should move.
         */
        public Move($dir: UnityEngine.Vector3):void;
        /**
         * Stops the local player's ZEPETO character.
         */
        public StopMoving():void;
        
                    
    }
    /**
     * Camera control class designed for use within a ZEPETO Character Controller.
     */
    class ZepetoCamera extends UnityEngine.MonoBehaviour {
        /** @deprecated "This property no longer has an effect." */
        public terrainClipDist: number;
        /** @deprecated "This property no longer has an effect." */
        public castRadius: number;
        /** @deprecated "This property no longer has an effect." */
        public zoomCalibration: number;
        /** @deprecated "This property no longer has an effect." */
        public rotateCalibration: number;
        /** @deprecated "This property no longer has an effect." */
        public additionalSpeed: number;
        /** @deprecated "This property no longer has an effect." */
        public additionalSensitivity: number;
        /** @deprecated "The properties of EnhancedOption have been integrated into the ZepetoCamera class." */
        public enhancedOption: ZEPETO_Character_Controller_ZepetoCamera.EnhancedOption;
        /**
         * Extra distance added to the default maximum zoom value.
         */
        public additionalMaxZoomDistance: number;
        /**
         * Extra distance added to the default minimum zoom value.
         */
        public additionalMinZoomDistance: number;
        /**
         * Additional offset applied to the camera's position relative to its target.
         */
        public additionalOffset: UnityEngine.Vector3;
        /**
         * Event triggered when the camera state changes.
         * Registered listeners receive two parameters:
         * - The new camera state. (Type: `CameraState`)
         * - The previous camera state. (Type: `CameraState`)
         */
        public OnChangedState: UnityEngine_Events.UnityEvent$2<CameraState, CameraState>;
        /**
         * Event triggered when the current camera state is in the status of `StateStatus.Update`.
         * Registered listeners receive a single parameter:
         * - The current camera state. (Type: `CameraState`)
         */
        public OnUpdateState: UnityEngine_Events.UnityEvent$1<CameraState>;
        /** @deprecated "This property no longer has an effect." */
        public get Speed(): number;
        /** @deprecated "This property no longer has an effect." */
        public get Sensitivity(): number;
        /** @deprecated "This property no longer has an effect." */
        public get useEnhancedOption(): boolean;
        /**
         * Retrieves the current camera state.
         */
        public get currentState(): CameraState;
        /**
         * Retrieves the status of the current camera state.
         */
        public get currentStateStatus(): StateStatus;
        /**
         * Retrieves the current camera position value.
         */
        public get position(): UnityEngine.Vector3;
        /**
         * Retrieves the current camera rotation value.
         */
        public get rotation(): UnityEngine.Quaternion;
        /**
         * Distance from the target.
         */
        public get distance(): number;
        /**
         * `Transform` of the camera parent object.
         */
        public get cameraParent(): UnityEngine.Transform;
        /**
         * Retrieves the flag indicating whether the camera is following the target.
         */
        public get isFollow(): boolean;
        /**
         * Retrieves the camera state machine.
         */
        public get StateMachine(): StateMachine$1<CameraState>;
        /**
         * Retrieves the `Transform` of the target.
         * By default, this is set to be the `HEAD_UPPER` of the local player's character.
         */
        public get FollowTarget(): UnityEngine.Transform;
        /**
         * Calculated maximum distance the camera can zoom out from the target.
         */
        public get MaxZoomDistance(): number;
        /**
         * Calculated minimum distance the camera can zoom in towards the target.
         */
        public get MinZoomDistance(): number;
        /**
         * Calculated offset of the camera from its target.
         */
        public get LookOffset(): UnityEngine.Vector3;
        /**
         * Indicates whether the camera's X-axis rotation is locked.
         */
        public get LockXAxis(): boolean;
        /**
         * Indicates whether the camera's X-axis rotation is locked.
         */
        public set LockXAxis(value: boolean);
        /**
         * Defines the layers with which the camera can collide.
         */
        public get CollisionLayer(): UnityEngine.LayerMask;
        /**
         * Defines the layers with which the camera can collide.
         */
        public set CollisionLayer(value: UnityEngine.LayerMask);
        /**
         * Weight applied to the target's scale to adjust the camera's position and behavior.
         */
        public get targetScaleWeight(): number;
        /**
         * Weight applied to the target's scale to adjust the camera's position and behavior.
         */
        public set targetScaleWeight(value: number);
        /**
         * Indicates whether to enable character culling to prevent rendering issues at close camera distances.
         */
        public get useCharacterCulling(): boolean;
        /**
         * Indicates whether to enable character culling to prevent rendering issues at close camera distances.
         */
        public set useCharacterCulling(value: boolean);
        /**
         * Speed of zooming in and out.
         */
        public get zoomSpeed(): number;
        /**
         * Speed of zooming in and out.
         */
        public set zoomSpeed(value: number);
        /**
         * Interpolation speed for zooming in and out.
         */
        public get zoomDampSpeed(): number;
        /**
         * Interpolation speed for zooming in and out.
         */
        public set zoomDampSpeed(value: number);
        /**
         * Speed of rotation.
         */
        public get rotationSpeed(): number;
        /**
         * Speed of rotation.
         */
        public set rotationSpeed(value: number);
        /**
         * Interpolation speed for rotation.
         */
        public get rotationDampSpeed(): number;
        /**
         * Interpolation speed for rotation.
         */
        public set rotationDampSpeed(value: number);
        /**
         * Unity `Camera`.
         */
        public get camera(): UnityEngine.Camera;
        /**
         * Creates a `ZepetoCamera` instance.
         * @param $camera Unity `Camera` object to be used as the basis for the `ZepetoCamera`.
         * @param $data Initial configuration for the `ZepetoCamera`.
         * @returns New instance of `ZepetoCamera`.
         */
        public static Create($camera: UnityEngine.Camera, $data: CameraData):ZepetoCamera;
        /**
         * Sets the follow target for the camera.
         * @param $target `Transform` representing the object that the camera should follow.
         * @param $scaleReference 
                    `Transform` used as a reference for scaling the camera's follow behavior.
                    If provided, the camera will adjust its distance towards the target based on the scale of this reference.
                    
         */
        public SetFollowTarget($target: UnityEngine.Transform, $scaleReference?: UnityEngine.Transform):void;
        /**
         * Rotates the camera.
         * @param $delta Roate amount.
         */
        public Rotate($delta: UnityEngine.Vector2):void;
        /**
         * Zooms the camera.
         * @param $delta Zoom amount.
         */
        public DoZoom($delta: number):void;
        
        public Release():void;
        
                    
    }
    
    interface CharacterInfo extends System.Object {
        
                    
    }
    /**
     * Represents the spawning location of a ZEPETO character.
     */
    class SpawnInfo extends System.ValueType {
        /**
         * Default spawning location.
         */
        public static Default: SpawnInfo;
        /**
         * Location of ZEPETO character when spawned.
         */
        public position: UnityEngine.Vector3;
        /**
         * Rotation of ZEPETO character when spawned.
         */
        public rotation: UnityEngine.Quaternion;
        
        public get_Clone(): SpawnInfo;            
    }
    /**
     * Represents a ZEPETO character that can be loaded and controlled in a ZEPETO World.
     */
    class ZepetoCharacter extends UnityEngine.MonoBehaviour {
        /**
         * Retrieves the additional walk speed.
         */
        public additionalWalkSpeed: number;
        /**
         * Retrieves the additional run speed.
         */
        public additionalRunSpeed: number;
        /**
         * Retrieves the additional jump power.
         */
        public additionalJumpPower: number;
        /**
         * Determines whether the character's rotation is restricted.
         */
        public constraintRotation: boolean;
        /**
         * Event triggered when the character state changes.
         * Registered listeners receive two parameters:
         * - The new character state. (Type: `CharacterState`)
         * - The previous character state. (Type: `CharacterState`)
         */
        public OnChangedState: UnityEngine_Events.UnityEvent$2<CharacterState, CharacterState>;
        /**
         * Event triggered when the character state is in the status of `StateStatus.Update`.
         * Registered listeners receive a single parameter:
         * - The current character state. (Type: `CharacterState`)
         */
        public OnUpdateState: UnityEngine_Events.UnityEvent$1<CharacterState>;
        /**
         * The animator for the ZEPETO character.
         */
        public get ZepetoAnimator(): UnityEngine.Animator;
        /**
         */
        public get characterController(): UnityEngine.CharacterController;
        /**
         * Retrieves the total walking speed, which is the sum of the base speed and additional speed.
         */
        public get WalkSpeed(): number;
        /**
         * Retrieves the total running speed, which is the sum of the base speed and additional speed.
         */
        public get RunSpeed(): number;
        /**
         * Retrieves the total jumping power, which is the sum of the base power and additional power.
         */
        public get JumpPower(): number;
        /**
         * Retrieves the base walking speed.
         */
        public get baseWalkSpeed(): number;
        /**
         * Retrieves the base running speed.
         */
        public get baseRunSpeed(): number;
        /**
         * Retrieves the base jump power.
         */
        public get baseJumpPower(): number;
        /**
         * Indicates whether the character is attempting to move.
         */
        public get tryMove(): boolean;
        /**
         * Indicates whether the character is attempting to jump.
         */
        public get tryJump(): boolean;
        /**
         * Indicates whether the character is attempting to double jump.
         */
        public get tryDoubleJump(): boolean;
        /** @deprecated "Use motionState instead." */
        public get MotionV2(): ZEPETO_Character_Controller_StandardControl_V2.MotionState;
        /**
         * Motion state and configuration of the character.
         */
        public get motionState(): MotionState;
        /**
         * Loading status of the character.
         */
        public get loadingStatus(): ZEPETO_Character_Controller_ZepetoCharacter.LoadingStatus;
        /**
         * ZEPETO Context of the character.
         */
        public get Context(): Zepeto.ZepetoContext;
        /**
         * State machine of the character.
         */
        public get StateMachine(): CharacterStateMachine;
        /** @deprecated "This property no longer has an effect." */
        public get StateMachineVersion(): StateMachineVersion;
        /**
         * Current state of the character defined in the state machine.
         */
        public get CurrentState(): CharacterState;
        /**
         * Status of the current state of the character, defined in the state machine.
         */
        public get CurrentStateStatus(): StateStatus;
        /**
         * Time elapsed in seconds since the character was initialized.
         */
        public get ElapsedTime(): number;
        /**
         * Synchronizes the animator with the current character state of the ZEPETO character.
         */
        public SyncStateAnimation():void;
        /**
         * Plays the animation associated with the provided character state on the animator.
         * @param $state Character state representing the animation to play.
         */
        public ChangeStateAnimation($state: CharacterState):void;
        /**
         * Plays the animation associated with the provided character state on the animator.
         * @param $state Character state representing the animation to play.
         * @param $moveState Optional movement state for the animation when `state` is `CharacterState.Move`.
         */
        public ChangeStateAnimation($state: CharacterState, $moveState: CharacterMoveState):void;
        /**
         * Plays the animation associated with the provided character state on the animator.
         * @param $state Character state representing the animation to play.
         * @param $jumpState Optional jump state for the animation when `state` is `CharacterState.Jump`.
         */
        public ChangeStateAnimation($state: CharacterState, $jumpState: CharacterJumpState):void;
        /**
         * Plays the animation associated with the provided character state on the animator.
         * @param $state Character state representing the animation to play.
         * @param $landingState Optional landing state for the animation when `state` is `CharacterState.Landing`.
         */
        public ChangeStateAnimation($state: CharacterState, $landingState: CharacterLandingState):void;
        /**
         * Moves the character in a specified direction.
         * @param $dir Direction in which the character should move.
         */
        public Move($dir: UnityEngine.Vector2):void;
        /**
         * Moves the character in a specified direction.
         * @param $dir Direction in which the character should move.
         */
        public Move($dir: UnityEngine.Vector3):void;
        /**
         * Continuously moves the character in a given direction based on the current orientation it is facing.
         * @param $dir Direction in which the character should move, based on the current orientation it is facing.
         */
        public MoveContinuously($dir: UnityEngine.Vector2):void;
        /**
         * Continuously moves the character in a given direction based on the current orientation it is facing.
         * @param $dir Direction in which the character should move, based on the current orientation it is facing.
         */
        public MoveContinuously($dir: UnityEngine.Vector3):void;
        /**
         * Moves the character to a specified position.
         * @param $pos Destination the character should move to.
         */
        public MoveToPosition($pos: UnityEngine.Vector3):void;
        /**
         * Stops the character's movement.
         */
        public StopMoving():void;
        /**
         * Makes the character jump.
         */
        public Jump():void;
        /**
         * Makes the character double jump.
         */
        public DoubleJump():void;
        /**
         * Instantly moves the character to the specified transform.
         * @param $pos Position to which the character will be teleported.
         * @param $rot Rotation that the character will have after the teleportation.
         */
        public Teleport($pos: UnityEngine.Vector3, $rot: UnityEngine.Quaternion):void;
        /**
         * Plays the character's motion for the specified gesture.
         * @param $gesture Gesture that the character will perform.
         */
        public SetGesture($gesture: UnityEngine.AnimationClip):void;
        /**
         * Stops the playback of the gesture.
         */
        public CancelGesture():void;
        /**
         * Retrieves the `Transform` of a socket of the character.
         * @param $socket Socket (Attachment point).
         * @returns `Transform` component associated with the specified socket.
         */
        public GetSocket($socket: KnowSockets):UnityEngine.Transform;
        /**
         * Retrieves the `Transform` of a socket of the character.
         * @param $socket Name of the socket (attachment point).
         * @returns `Transform` component associated with the specified socket.
         */
        public GetSocket($socket: string):UnityEngine.Transform;
        /**
         * Retrieves the character properties associated with any body deformation items worn by the character.
         * @returns Character properties associated with the body deformation items worn by the character.
         */
        public GetBodyModifierProperties():Zepeto.ZepetoPropertyFlag[];
        /**
         * Removes the body deformation items worn by the character and reverts to the default body shape.
         */
        public DeformDefaultProperties():void;
        /**
         * Removes the body deformation items worn by the character, reverts to the default body shape, and applies the default ZEPETO outfit.
         */
        public DeformDefaultCostume():void;
        /**
         * Adds a callback function to handle the completion of character loading.
         */
        public add_loadedCharacter($value: System.Action):void;
        /**
         * Removes a callback function to handle the completion of character loading.
         */
        public remove_loadedCharacter($value: System.Action):void;
        
        public Release():void;
        
        public loadedCharacter;
        
                    
    }
    /**
     * Represents a ZEPETO player.
     */
    class ZepetoPlayer extends System.Object {
        /**
         * Player's user ID, a unique randomized ID assigned upon account creation.
         */
        public get userId(): string;
        /**
         * Player's user name, set by the user in the ZEPETO App.
         */
        public get name(): string;
        /**
         * ZEPETO character of the player.
         */
        public get character(): ZepetoCharacter;
        /**
         * Indicates whether it is a local player.
         */
        public get isLocalPlayer(): boolean;
        /**
         * Retrieves the profile image of the player. Throws a general `Exception`.
         * @param $complete Callback function to handle the retrieved profile image.
         */
        public GetProfileTextureAsync($complete: System.Action$1<UnityEngine.Texture2D>):void;
        /**
         * Releases the ZEPETO player object.
         */
        public Release():void;
        
                    
    }
    /**
     * Manages the input control for a ZEPETO player.
     */
    class ZepetoPlayerControl extends UnityEngine.MonoBehaviour {
        /**
         * Determines whether player input control is enabled.
         */
        public set Enable(value: boolean);
        
        public constructor();
        /**
         * Creates a `ZepetoPlayerControl` instance.
         * @param $playerActions Set of input actions to be associated with the `ZepetoPlayerControl`.
         * @returns 
                    New instance of `ZepetoPlayerControl`.
                    Instance is attached to a new game object and ready to handle player input actions.
                    
         */
        public static Create($playerActions: ZepetoInputControl.PlayerActions):ZepetoPlayerControl;
        
                    
    }
    /**
     * Manages the camera controls in a ZEPETO environment, including input handling for camera movement and zoom.
     */
    class ZepetoCameraControl extends UnityEngine.MonoBehaviour {
        /**
         * Determines whether camera control (zoom or rotation) input is enabled.
         */
        public set Enable(value: boolean);
        
        public constructor();
        /**
         * Creates a `ZepetoCameraControl` instance.
         * @param $cameraActions Set of camera actions to be associated with the `ZepetoCameraControl`. These actions define how the camera will respond to user input.
         * @returns 
                    New instance of `ZepetoCameraControl`.
                    Instance is attached to a new game object and ready to handle camera input actions.
                    
         */
        public static Create($cameraActions: ZepetoInputControl.CameraActions):ZepetoCameraControl;
        
                    
    }
    /**
     * Represents the state of a ZEPETO character.
     */
    enum CharacterState { 
	/**
	 * Uninitialized or invalid.
	 */
	Invalid = 0, 
	/**
	 * Character is not engaged in any movement or action.
	 */
	Idle = 1, 
	/**
	 * Character is moving at a slow pace.
	 */
	Walk = 2, 
	/**
	 * Character is moving quickly.
	 */
	Run = 3, 
	/**
	 * Character is jumping in place.
	 */
	JumpIdle = 4, 
	/**
	 * Character is jumping in a direction, combining the vertical leap with horizontal motion.
	 */
	JumpMove = 5, 
	/**
	 * Character is moving from one location to another without traversing the space in between.
	 */
	Teleport = 20, 
	/**
	 * Character is performing a gesture.
	 */
	Gesture = 30, 
	/**
	 * General moving state.
	 */
	Move = 102, 
	/**
	 * Character is changing the movement direction.
	 */
	MoveTurn = 103, 
	/**
	 * General jumping state.
	 */
	Jump = 104, 
	/**
	 * Character is performing a stamp.
	 */
	Stamp = 106, 
	/**
	 * Character is in free fall.
	 */
	Falling = 108, 
	/**
	 * Character is returning to the ground after falling.
	 */
	Landing = 109 }
    /**
     * Represents the detailed moving state of a ZEPETO character.
     */
    enum CharacterMoveState { 
	/**
	 * None.
	 */
	None = -1, 
	/**
	 * Moving at a slow pace.
	 */
	MoveWalk = 0, 
	/**
	 * Moving quickly.
	 */
	MoveRun = 1 }
    /**
     * Represents the detailed jumping state of a ZEPETO character.
     */
    enum CharacterJumpState { 
	/**
	 * None.
	 */
	None = -1, 
	/**
	 * Jumping in place.
	 */
	JumpIdle = 0, 
	/**
	 * Jumping in a direction, combining the vertical leap with horizontal motion.
	 */
	JumpMove = 1, 
	/**
	 * Jumping quickly.
	 */
	JumpDash = 2, 
	/**
	 * Performing a second jump while already in a jump.
	 */
	JumpDouble = 3 }
    /**
     * Represents the detailed landing state of a ZEPETO character.
     */
    enum CharacterLandingState { 
	/**
	 * None.
	 */
	None = -1, 
	/**
	 * In a landing with minor impact.
	 */
	LandingSlight = 0, 
	/**
	 * In a landing with significant impact.
	 */
	LandingDeep = 1, 
	/**
	 * In a landing roll.
	 */
	LandingRoll = 2 }
    /**
     * Defines a set of known attachment points, referred to as sockets, on a character.
     */
    enum KnowSockets { 
	/**
	 * Represents the top part of the character's head.
	 */
	HEAD_UPPER = 0 }
    /**
     * Class for managing character motion state and configuration.
     */
    class MotionState extends System.Object {
        /**
         * Determines whether the character can perform a double jump.
         */
        public get useDoubleJump(): boolean;
        /**
         * Determines whether the character can perform a double jump.
         */
        public set useDoubleJump(value: boolean);
        /**
         * Additional force applied during a double jump.
         */
        public get doubleJumpPower(): number;
        /**
         * Additional force applied during a double jump.
         */
        public set doubleJumpPower(value: number);
        /**
         * Determines whether to apply landing motion.
         */
        public get useLanding(): boolean;
        /**
         * Determines whether to apply landing motion.
         */
        public set useLanding(value: boolean);
        /**
         * Determines whether the character performs a roll upon landing.
         */
        public get useLandingRoll(): boolean;
        /**
         * Determines whether the character performs a roll upon landing.
         */
        public set useLandingRoll(value: boolean);
        /**
         * Gets or sets the character's landing roll speed.
         */
        public get landingRollSpeed(): number;
        /**
         * Gets or sets the character's landing roll speed.
         */
        public set landingRollSpeed(value: number);
        /**
         * Determines whether to play a motion for changing the character's movement direction.
         */
        public get useMoveTurn(): boolean;
        /**
         * Determines whether to play a motion for changing the character's movement direction.
         */
        public set useMoveTurn(value: boolean);
        /**
         * Gravitational force applied to the character.
         */
        public get gravity(): number;
        /**
         * Gravitational force applied to the character.
         */
        public set gravity(value: number);
        /**
         * Retrieves the current jump state of the character.
         */
        public get currentJumpState(): CharacterJumpState;
        /**
         * Retrieves the current landing state of the character.
         */
        public get currentLandingState(): CharacterLandingState;
        /**
         * Retrieves the current movement state of the character.
         */
        public get currentMoveState(): CharacterMoveState;
        /**
         * Creates a `MotionState` instance.
         * @param $character A `ZepetoCharacter` object.
         */
        public constructor($character: ZepetoCharacter);
        
                    
    }
    /**
     * Class responsible for synchronizing the animator with the character state of a ZEPETO character.
     */
    class CharacterStateMachine extends StateMachine$1<CharacterState> {
        /**
         * Determines whether to synchronize the animator with the current character state of the ZEPETO character.
         * If set to `true`, the animator state will not be updated based on the current character state.
         */
        public get constraintStateAnimation(): boolean;
        /**
         * Determines whether to synchronize the animator with the current character state of the ZEPETO character.
         * If set to `true`, the animator state will not be updated based on the current character state.
         */
        public set constraintStateAnimation(value: boolean);
        /**
         * Synchronizes the animator with the current character state of the ZEPETO character.
         */
        public SyncStateAnimation():void;
        /**
         * Plays the animation associated with the provided character state on the animator.
         * @param $state Character state representing the animation to play.
         */
        public ChangeStateAnimation($state: CharacterState):void;
        
                    
    }
    /**
     * `StateMachine` manages the `States`, `Transitions`, and `Events`.
     * By updating states according to specified conditions and elapsed time, it enables the definition and control of diverse states for objects.
     * @typeParam TEnum Type of states and transitions, constrained to be an enumeration.
     */
    class StateMachine$1<TEnum> extends System.Object {
        /**
         * Event triggered when the camera state changes.
         * Registered listeners receive two parameters:
         * - The new state.
         * - The previous state.
         */
        public OnChangedState: System.Action$2<TEnum, TEnum>;
        /**
         * Provides an array of all the events defined in the state machine.
         */
        public get Events(): TransitionBase$1<TEnum>[];
        /**
         * Retrieves the current state.
         */
        public get Current(): State$1<TEnum>;
        /**
         * Retrieves the previous state.
         */
        public get Prev(): State$1<TEnum>;
        /**
         * Indicates whether the state machine is actively processing states and transitions.
         */
        public get IsRunning(): boolean;
        /**
         * Retrieves the count of states defined in the state machine.
         */
        public get stateCount(): number;
        /**
         * Retrieves the count of transitions defined in the state machine.
         */
        public get transitionCount(): number;
        /**
         * Finds a state within the state machine and executes a callback on success.
         * @param $state State to find within the state machine.
         * @param $success Callback function to handle the found `State`.
         * @param $failed Callback function to handle the case when the state is not found.
         */
        public FindState($state: TEnum, $success: System.Action$1<State$1<TEnum>>, $failed: System.Action):void;
        /**
         * Finds transitions within the state machine and executes a callback on success.
         * @param $from State from which the transition starts.
         * @param $success Callback function to handle the found array of `Transition`.
         * @param $failed Callback function to handle the case when transitions are not found.
         */
        public FindTransitions($from: TEnum, $success: System.Action$1<Transition$1<TEnum>[]>, $failed: System.Action):void;
        /**
         * Finds a transition within the state machine and executes a callback on success.
         * @param $from State from which the transition starts.
         * @param $to State to which the transition will occur.
         * @param $success Callback function to handle the found `Transition`.
         * @param $failed Callback function to handle the case when the transition is not found.
         */
        public FindTransition($from: TEnum, $to: TEnum, $success: System.Action$1<Transition$1<TEnum>>, $failed: System.Action):void;
        /**
         * Initiates the processing of the state machine.
         * @param $state State from which the state machine will start its processing.
         */
        public Start($state: TEnum):void;
        /**
         * Updates the current state and transition of the state machine.
         * @param $deltaTime Time elapsed in seconds since the last `Update` call.
         */
        public Update($deltaTime: number):void;
        /**
         * Stops the processing of the state machine.
         */
        public Stop():void;
        /**
         * Transitions the state machine into a specified state.
         * @param $state The state to which the state machine will transition.
         */
        public EnterState($state: TEnum):void;
        /**
         * The state machine exits the current state.
         * @param $nextState The next state to be handled by the current state's `OnLeave`.
         */
        public LeaveState($nextState: TEnum):void;
        
                    
    }
    /** @deprecated "This property no longer has an effect." */
    enum StateMachineVersion { V1 = 0, V2 = 1 }
    /**
     * Represents the possible statuses of a state within a state machine, indicating the current phase of the state's lifecycle.
     */
    enum StateStatus { 
	/**
	 * The state is inactive and waiting to be entered.
	 */
	Wait = 0, 
	/**
	 * The state is in the process of being entered.
	 */
	Enter = 1, 
	/**
	 * The state is active and its logic is being executed.
	 */
	Update = 2, 
	/**
	 * The state has completed its active phase and is ready to end.
	 */
	End = 3, 
	/**
	 * The state is in the process of being exited.
	 */
	Leave = 4 }
    /**
     * Represents the customized configuration for character motion.
     */
    class CustomMotionData extends System.Object {
        /**
         * Determines whether the character can perform a double jump.
         */
        public useDoubleJump: boolean;
        /**
         * Additional force applied during a double jump.
         */
        public doubleJumpPower: number;
        /**
         * Determines whether to apply landing motion.
         */
        public useLanding: boolean;
        /**
         * Determines whether the character performs a roll upon landing.
         */
        public useLandingRoll: boolean;
        /**
         * Playback speed of landing roll motion.
         */
        public landingRollSpeed: number;
        /**
         * Determines whether to play a motion for changing the character's movement direction.
         */
        public useMoveTurn: boolean;
        /**
         * Gravitational force applied to the character.
         */
        public gravity: number;
        
        public gravityRestoreRate: number;
        
        public gravityHorizontalWeight: number;
        /**
         * Minimum input value required to trigger acceleration for walking motion.
         */
        public walkThreshold: number;
        /**
         * Minimum input value required to switch motion from walking to running.
         */
        public runThreshold: number;
        /**
         * Minimum falling time duration to determine if the character has entered a falling state.
         */
        public fallingTimeThreshold: number;
        /**
         * Mimum falling speed to determine if the character has entered a falling state.
         */
        public fallingSpeedThreshold: number;
        /**
         * Minimum landed time duration to determine if the character has landed.
         */
        public landingTimeThreshold: number;
        /**
         * Minimum falling speed to determine if the character can perform additional actions upon landing.
         */
        public landingSpeedThreshold: number;
        /**
         * Minimum falling speed to determine if the character experiences a greater impact upon landing.
         */
        public landingImpactSpeedThreshold: number;
        /**
         * Maximum falling speed required to trigger a landing roll.
         */
        public landingRollSpeedThreshold: number;
        
        public landingCastScaleWeight: number;
        /**
         * Minimum turning angle required to trigger a turning motion.
         */
        public moveTurnAngleThreshold: number;
        /**
         * Minimum moving speed required to trigger a turning motion.
         */
        public moveTurnSpeedThreshold: number;
        /**
         * Time duration of the turning motion.
         */
        public moveTurnTimeThreshold: number;
        
        public moveTurnReleaseTime: number;
        
        public moveTurnReverseSpeed: number;
        /**
         * Minimum jump speed required to trigger a dash.
         */
        public jumpDashSpeedThreshold: number;
        /**
         * Base speed of the walking motion.
         */
        public walkClipBaseSpeed: number;
        
        public jumpEaseSpeedThreshold: number;
        
        public jumpEaseSpeedRate: number;
        
        public firstJumpCurveNormalizedTime: number;
        
        public secondJumpCurveNormalizedTime: number;
        
        public firstDoubleJumpCurveNormalizedTime: number;
        
        public secondDoubleJumpCurveNormalizedTime: number;
        /**
         * Time duration of the stamp motion.
         */
        public stampClipNormalizedTime: number;
        /**
         * Time duration of the landing motion.
         */
        public landingClipNormalizedTime: number;
        /**
         * Time duration of the landing roll motion.
         */
        public landingRollClipNormalizedTime: number;
        /**
         * Time duration of the turning motion.
         */
        public moveTurnClipNormalizedTime: number;
        
        public jumpDoubleAvailableAscentRatio: number;
        
        public jumpDoubleAvailableDescentRatio: number;
        
        public constructor();
        
                    
    }
    
    enum PlayerControlMode { Default = 0, WalkOnly = 1, RunOnly = 2 }
    /**
     * Class responsible for managing the shadows of ZEPETO characters.
     */
    class CharacterShadow extends UnityEngine.MonoBehaviour {
        /**
         * Represents the object that serves as the transform reference.
         */
        public target: UnityEngine.Transform;
        /**
         * Determines whether to synchronize the shadow position to the target.
         */
        public autoSyncTransform: boolean;
        
                    
    }
    /**
     * Represents the state of a `ZepetoCamera`.
     */
    enum CameraState { 
	/**
	 * Camera is not following the target.
	 */
	Idle = 0, 
	/**
	 * Camera is following the target.
	 */
	Follow = 1 }
    /**
     * Class designed to handle stick interactions in the ZEPETO environment.
     */
    class ZepetoScreenStick extends ZepetoScreenControl {
        /**
         * Event triggered when the stick is pressed down.
         */
        public OnPointerDownEvent: UnityEngine_Events.UnityEvent;
        /**
         * Event triggered when the stick is being dragged.
         */
        public OnDragEvent: UnityEngine_Events.UnityEvent$1<UnityEngine.Vector2>;
        /**
         * Event triggered when the stick is released.
         */
        public OnPointerUpEvent: UnityEngine_Events.UnityEvent;
        
        public constructor();
        /**
         * Manages the drag behavior, calculating the position delta and clamping it within the specified movement range.
         * Triggers `OnDragEvent` with the normalized position value.
         * Throws `ArgumentNullException`.
         * @param $eventData Data related to the drag event.
         */
        public OnDrag($eventData: UnityEngine_EventSystems.PointerEventData):void;
        
                    
    }
    /**
     * Abstract class designed for creating UI controls in the ZEPETO environment.
     */
    class ZepetoScreenControl extends UnityEngine.MonoBehaviour {
        /**
         * Handles events when the user presses a UI control.
         * @param $eventData Data related to the pointer down event.
         */
        public OnPointerDown($eventData: UnityEngine_EventSystems.PointerEventData):void;
        /**
         * Handles events when the user releases a UI control.
         * @param $eventData Data related to the pointer up event.
         */
        public OnPointerUp($eventData: UnityEngine_EventSystems.PointerEventData):void;
        
                    
    }
    /**
     * Class designed to handle button interactions in the ZEPETO environment.
     */
    class ZepetoScreenButton extends ZepetoScreenControl {
        /**
         * Event triggered when the button is pressed down.
         */
        public OnPointDownEvent: UnityEngine_Events.UnityEvent;
        /**
         * Event triggered when the button is released.
         */
        public OnPointUpEvent: UnityEngine_Events.UnityEvent;
        
        public constructor();
        
                    
    }
    /**
     * Class designed to handle touchpad interactions in the ZEPETO environment.
     */
    class ZepetoScreenTouchpad extends ZepetoScreenControl {
        /**
         * Event triggered when the touchpad is pressed down.
         */
        public OnPointerDownEvent: UnityEngine_Events.UnityEvent;
        /**
         * Event triggered when the touchpad is being dragged.
         */
        public OnDragEvent: UnityEngine_Events.UnityEvent$1<UnityEngine.Vector2>;
        /**
         * Event triggered when the touchpad is released.
         */
        public OnPointerUpEvent: UnityEngine_Events.UnityEvent;
        /**
         * Canvas group component used to manage the opacity and interaction of the touchpad's background.
         */
        public canvasGroupTouchPadBackground: UnityEngine.CanvasGroup;
        /**
         * Animation curve for the touchpad's background fade in and out effect.
         */
        public touchPadBackgroundCurve: UnityEngine.AnimationCurve;
        /**
         * `RectTransform` component representing the touch handle.
         */
        public touchHandle: UnityEngine.RectTransform;
        /**
         * Animator component used to animate the touch handle.
         */
        public touchHandleAnimator: UnityEngine.Animator;
        /**
         * `RectTransform` for the original position of the touch handle.
         */
        public touchHandleOrigin: UnityEngine.RectTransform;
        /**
         * Animator component for the touch handle's origin point.
         */
        public touchHandleOriginAnimator: UnityEngine.Animator;
        
        public constructor();
        /**
         * Handles click events on the touchpad. Throws `ArgumentNullException`.
         * @param $eventData Data related to the drag event.
         */
        public OnPointerClick($eventData: UnityEngine_EventSystems.PointerEventData):void;
        /**
         * Manages the drag behavior, calculating the position delta and clamping it within the specified movement range.
         * Triggers `OnDragEvent` with the normalized position value.
         * Throws `ArgumentNullException`.
         * @param $eventData Data related to the drag event.
         */
        public OnDrag($eventData: UnityEngine_EventSystems.PointerEventData):void;
        
                    
    }
    /**
     * Class provides UI-based control for the local player's character.
     */
    class UIZepetoPlayerControl extends UnityEngine.MonoBehaviour {
        
        public constructor();
        /**
         * Sets the moving flag of the local player's character to `true`.
         */
        public StartMoving():void;
        /**
         * Sets the moving direction of local player's ZEPETO character.
         * @param $dir Direction in which the character should move.
         */
        public Move($delta: UnityEngine.Vector2):void;
        /**
         * Stops the local player's ZEPETO character.
         */
        public StopMoving():void;
        /**
         * Makes the local player's ZEPETO character jump.
         */
        public Jump():void;
        /**
         * Makes the local player's ZEPETO character double jump.
         */
        public DoubleJump():void;
        /**
         * Updates the moving direction of local player's ZEPETO character.
         */
        public Update():void;
        
                    
    }
    /**
     * Utility class designed to assist with input handling.
     */
    class InputHelper extends System.Object {
        /**
         * Determines if the pointer is currently over a UI object.
         * @returns Returns `true` if the pointer is over a UI object.
         */
        public static IsPointerOverUIObjectCurrentPosition():boolean;
        /**
         * Checks if the specified position on the screen is over a UI element.
         * @param $position Position on the screen.
         * @returns Returns `true` if the position is over a UI object.
         */
        public static IsPointerOverUIObject($position: UnityEngine.Vector2):boolean;
        
                    
    }
    /**
     * Class responsible for handling character-related or general events within the ZEPETO World.
     */
    class EventReceiver extends System.Object {
        /**
         * Event triggered when the character is clicked.
         */
        public static OnCharacterClick: UnityEngine_Events.UnityEvent$2<string, Zepeto.ZepetoContext>;
        /**
         * Event triggered when the character's profile is clicked.
         */
        public static OnCharacterProfileClick: UnityEngine_Events.UnityEvent$2<string, Zepeto.ZepetoContext>;
        /**
         * General-purpose click event that can be used for various interactive elements.
         */
        public static OnClick: UnityEngine_Events.UnityEvent$1<number>;
        
        public constructor();
        
                    
    }
    /**
     * Base class for defining transitions between states in a state machine.
     * @typeParam TEnum Type of state, constrained to be an enumeration.
     */
    class TransitionBase$1<TEnum> extends System.Object {
        /**
         * State to which the transition will occur.
         */
        public get To(): TEnum;
        /**
         * Time duration the transition should take from start to end (in seconds).
         */
        public get Duration(): number;
        /**
         * Time duration the transition should take from start to end (in seconds).
         */
        public set Duration(value: number);
        /**
         * Status of the transition.
         */
        public get Status(): StateStatus;
        /**
         * Indicates whether the transition is currently in the status of `StateStatus.Enter` or `StateStatus.Update`.
         */
        public get IsRunning(): boolean;
        /**
         * Checks if the conditions for invoking a transition are met.
         * @returns `true` if the transition's conditions are met.
         */
        public Check():boolean;
        
                    
    }
    /**
     * Represents a state within a state machine.
     * @typeParam TEnum Type of state, constrained to be an enumeration.
     */
    class State$1<TEnum> extends System.Object {
        /**
         * Callback function to handle the state update.
         */
        public OnUpdateState: System.Action$1<TEnum>;
        /**
         * Type of the state.
         */
        public get stateType(): TEnum;
        /**
         * Status of the state.
         */
        public get Status(): StateStatus;
        
                    
    }
    /**
     * Generic class for defining transitions between states in a state machine.
     * @typeParam TEnum Type of state, constrained to be an enumeration.
     */
    class Transition$1<TEnum> extends TransitionBase$1<TEnum> {
        /**
         * State from which the transition starts.
         */
        public get From(): TEnum;
        
                    
    }
    
    interface ITransition$1<T> {
        
                    
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
     * A class you can derive from if you want to create objects that don't need to be attached to game objects.
     */
    interface ScriptableObject extends Object {
        
                    
    }
    /**
     * Base class for all entities in Unity Scenes.
     */
    interface GameObject extends Object {
        
                    
    }
    /**
     * Position, rotation and scale of an object.
     */
    interface Transform extends Component {
        
                    
    }
    /**
     * Representation of 2D vectors and points.
     */
    interface Vector2 extends System.ValueType {
        
                    
    }
    /**
     * Representation of 3D vectors and points.
     */
    interface Vector3 extends System.ValueType {
        
                    
    }
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
     * Interface to control the Mecanim animation system.
     */
    interface Animator extends Behaviour {
        
                    
    }
    /**
     * A CharacterController allows you to easily do movement constrained by collisions without having to deal with a rigidbody.
     */
    interface CharacterController extends Collider {
        
                    
    }
    /**
     * A base class of all colliders.
     */
    interface Collider extends Component {
        
                    
    }
    /**
     * Quaternions are used to represent rotations.
     */
    interface Quaternion extends System.ValueType {
        
                    
    }
    /**
     * Stores keyframe based animations.
     */
    interface AnimationClip extends Motion {
        
                    
    }
    /**
     * Base class for AnimationClips and BlendTrees.
     */
    interface Motion extends Object {
        
                    
    }
    /**
     * Specifies Layers to use in a Physics.Raycast.
     */
    interface LayerMask extends System.ValueType {
        
                    
    }
    /**
     * The runtime representation of the AnimatorController. Use this representation to change the Animator Controller during runtime.
     */
    interface RuntimeAnimatorController extends Object {
        
                    
    }
    /**
     * A Camera is a device through which the player views the world.
     */
    interface Camera extends Behaviour {
        
                    
    }
    /**
     * A Canvas placable element that can be used to modify children Alpha, Raycasting, Enabled state.
     */
    interface CanvasGroup extends Behaviour {
        
                    
    }
    /**
     * Store a collection of Keyframes that can be evaluated over time.
     */
    interface AnimationCurve extends System.Object {
        
                    
    }
    /**
     * Position, size, anchor and pivot information for a rectangle.
     */
    interface RectTransform extends Transform {
        
                    
    }
    
}
declare module 'System' {

        
    
    interface Object {
        
                    
    }
    
    type Action = () => void;
    var Action: {new (func: () => void): Action;}
    
    interface Void extends ValueType {
        
                    
    }
    
    interface ValueType extends Object {
        
                    
    }
    
    type MulticastDelegate = (...args:any[]) => any;
    var MulticastDelegate: {new (func: (...args:any[]) => any): MulticastDelegate;}
    
    interface Delegate extends Object {
        
                    
    }
    
    interface Boolean extends ValueType {
        
                    
    }
    
    interface String extends Object {
        
                    
    }
    
    interface Single extends ValueType {
        
                    
    }
    
    type Action$1<T> = (obj: T) => void;
    
    interface Enum extends ValueType {
        
                    
    }
    
    interface Array extends Object {
        
                    
    }
    
    interface Nullable$1<T> extends ValueType {
        
                    
    }
    
    type Action$2<T1,T2> = (arg1: T1, arg2: T2) => void;
    
    interface Int32 extends ValueType {
        
                    
    }
    
    type Func$1<TResult> = () => TResult;
    
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
    /**
     * One argument version of UnityEvent.
     */
    class UnityEvent$1<T0> extends UnityEventBase {
        
        public constructor();
        
        public AddListener($call: UnityAction$1<T0>):void;
        
        public RemoveListener($call: UnityAction$1<T0>):void;
        
        public Invoke($arg0: T0):void;
        
                    
    }
    /**
     * Two argument version of UnityEvent.
     */
    class UnityEvent$2<T0,T1> extends UnityEventBase {
        
        public constructor();
        
        public AddListener($call: UnityAction$2<T0, T1>):void;
        
        public RemoveListener($call: UnityAction$2<T0, T1>):void;
        
        public Invoke($arg0: T0, $arg1: T1):void;
        
                    
    }
    
    type UnityAction$1<T0> = (arg0: T0) => void;
    
    type UnityAction$2<T0,T1> = (arg0: T0, arg1: T1) => void;
    
}
declare module 'ZEPETO.Character.Controller.StandardControl.V1' {

    import * as System from 'System';
        
    
    interface CustomMotionData extends System.Object {
        
                    
    }
    
}
declare module 'ZEPETO.Character.Controller.StandardControl.V2' {

    import * as System from 'System';
    import * as ZEPETO_Character_Controller from 'ZEPETO.Character.Controller';
        
    
    interface CustomMotionData extends System.Object {
        
                    
    }
    
    class MotionState extends System.Object {
        
        public get useDoubleJump(): boolean;
        
        public set useDoubleJump(value: boolean);
        
        public get doubleJumpPower(): number;
        
        public set doubleJumpPower(value: number);
        
        public get useLanding(): boolean;
        
        public set useLanding(value: boolean);
        
        public get useLandingRoll(): boolean;
        
        public set useLandingRoll(value: boolean);
        
        public get landingRollSpeed(): number;
        
        public set landingRollSpeed(value: number);
        
        public get useMoveTurn(): boolean;
        
        public set useMoveTurn(value: boolean);
        
        public get Gravity(): number;
        
        public set Gravity(value: number);
        
        public get CurrentJumpState(): ZEPETO_Character_Controller.CharacterJumpState;
        
        public get CurrentLandingState(): ZEPETO_Character_Controller.CharacterLandingState;
        
        public get CurrentMoveState(): ZEPETO_Character_Controller.CharacterMoveState;
        
        public constructor($character: ZEPETO_Character_Controller.ZepetoCharacter);
        
                    
    }
    
}
declare module 'ZEPETO.Character.Controller.ZepetoPlayers' {

    import * as System from 'System';
        
    
    interface InternalEvent extends System.Object {
        
                    
    }
    
}
declare module 'Zepeto' {

    import * as UnityEngine from 'UnityEngine';
    import * as System from 'System';
        
    
    enum ZepetoPropertyFlag { None = 0, Skin = 1, SkinTone = 2, SkinDetail = 3, Face = 4, Eye = 5, EyeLens = 6, Eyebrow = 7, Beard = 8, Mustache = 9, EyeShadow = 10, EyeLiner = 11, EyeLash = 12, Blusher = 13, Nose = 14, Mouth = 15, Lips = 16, Hair = 17, ClothesGlasses = 18, ClothesTop = 19, ClothesBottom = 20, ClothesShoes = 21, ClothesDress = 22, Background = 23, RoomWallpaper = 24, RoomFloor = 25, RoomBottom = 26, RoomTopLeft = 27, RoomTopRight = 28, RoomMiddleLeft = 29, RoomMiddleRight = 30, Point = 31, Freckles = 32, FaceHair = 33, DoubleEyelid = 34, NailArt = 35, ClothesSocks = 36, ClothesGlove = 37, AccessoryBracelet = 38, AccessoryNecklace = 39, AccessoryEarring = 40, AccessoryRing = 41, AccessoryHeadwear = 42, AccessoryPiercing = 43, BoothBackground = 44, LUT = 45, AccessoryMask = 46, FacePainting = 47, AccessoryBag = 48, AccessoryWing = 49, ClothesCape = 50, ClothesExtra = 51, MannequinFace = 52, WrinkleForehead = 53, WrinkleEye = 54, WrinkleMouth = 55, DoubleEyelidBottom = 56, WrinkleMongo = 57, AccessoryTail = 58, AccessoryEffect = 59, ClothesDeform = 60, HairExtensions = 61, MakeupSet = 62, FaceContouring = 63, BaseModel = 64, CreatorLens = 65, BaseDeformer = 66 }
    
    interface ZepetoContext extends UnityEngine.MonoBehaviour {
        
                    
    }
    
    interface ZepetoMetadata extends System.Object {
        
                    
    }
    
}
declare module 'ZEPETO.Character.Controller.ZepetoCharacter' {

        
    /**
     * Loading state of the ZEPETO character.
     */
    enum LoadingStatus { 
	/**
	 * Character has not yet begun the loading process.
	 */
	NotLoaded = 0, 
	/**
	 * Character is currently in the loading process.
	 */
	Loading = 1, 
	/**
	 * Character has fully loaded.
	 */
	Loaded = 2, 
	/**
	 * Error occured during the loading process.
	 */
	Error = 3 }
    
}
declare module 'RootNamespace' {

    import * as System from 'System';
    import * as UnityEngine_InputSystem from 'UnityEngine.InputSystem';
    import * as System_Collections_Generic from 'System.Collections.Generic';
    import * as UnityEngine_InputSystem_Utilities from 'UnityEngine.InputSystem.Utilities';
    import * as ZepetoInputControl from 'ZepetoInputControl';
        
    /**
     * Class responsible for managing input control schemes and actions for ZEPETO World.
     */
    class ZepetoInputControl extends System.Object {
        /**
         * Returns the input action asset.
         */
        public get asset(): UnityEngine_InputSystem.InputActionAsset;
        /**
         * Binding mask to filter out specific bindings.
         */
        public get bindingMask(): System.Nullable$1<UnityEngine_InputSystem.InputBinding>;
        /**
         * Binding mask to filter out specific bindings.
         */
        public set bindingMask(value: System.Nullable$1<UnityEngine_InputSystem.InputBinding>);
        /**
         * Devices that are applicable to the input control.
         */
        public get devices(): System.Nullable$1<UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<UnityEngine_InputSystem.InputDevice>>;
        /**
         * Devices that are applicable to the input control.
         */
        public set devices(value: System.Nullable$1<UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<UnityEngine_InputSystem.InputDevice>>);
        /**
         * Returns the input control schemes.
         */
        public get controlSchemes(): UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<UnityEngine_InputSystem.InputControlScheme>;
        /**
         * Returns grouped player-related input actions.
         */
        public get Player(): ZepetoInputControl.PlayerActions;
        /**
         * Returns the set of camera-related input actions.
         */
        public get Camera(): ZepetoInputControl.CameraActions;
        /**
         * Returns an instance of the `UIActions` structure, connecting it with the current `ZepetoInputControl` context.
         */
        public get UI(): ZepetoInputControl.UIActions;
        /**
         * Returns the keyboard and mouse control scheme.
         */
        public get KeyboardMouseScheme(): UnityEngine_InputSystem.InputControlScheme;
        /**
         * Returns the gamepad control scheme.
         */
        public get GamepadScheme(): UnityEngine_InputSystem.InputControlScheme;
        /**
         * Returns the touch control scheme.
         */
        public get TouchScheme(): UnityEngine_InputSystem.InputControlScheme;
        /**
         * Returns the joystick control scheme.
         */
        public get JoystickScheme(): UnityEngine_InputSystem.InputControlScheme;
        /**
         * Returns the XR (Extended Reality) control scheme.
         */
        public get XRScheme(): UnityEngine_InputSystem.InputControlScheme;
        
        public constructor();
        /**
         * Cleans up resources used by the input control, particularly the `InputActionAsset`.
         */
        public Dispose():void;
        /**
         * Determines whether the specified action is part of the asset.
         * @param $action The action to check for.
         * @returns If the action is present, the method returns `true`.
         */
        public Contains($action: UnityEngine_InputSystem.InputAction):boolean;
        /**
         * Returns an enumerator that iterates through the actions.
         * @returns An enumerator that iterates through the actions.
         */
        public GetEnumerator():System_Collections_Generic.IEnumerator$1<UnityEngine_InputSystem.InputAction>;
        /**
         * Enables all the input actions defined in the asset.
         */
        public Enable():void;
        /**
         * Disables all the input actions.
         */
        public Disable():void;
        
                    
    }
    
}
declare module 'ZepetoInputControl' {

    import * as System from 'System';
    import * as UnityEngine_InputSystem from 'UnityEngine.InputSystem';
    import * as UnityEngine_InputSystem_InputAction from 'UnityEngine.InputSystem.InputAction';
        
    /**
     * Responsible for handling player-specific actions like movement, jumping, and double jumping.
     */
    class PlayerActions extends System.ValueType {
        /**
         * Retrieves the input action for player movement.
         */
        public get Move(): UnityEngine_InputSystem.InputAction;
        /**
         * Retrieves the input action for player jump.
         */
        public get Jump(): UnityEngine_InputSystem.InputAction;
        /**
         * Retrieves the input action for player double jump.
         */
        public get DoubleJump(): UnityEngine_InputSystem.InputAction;
        /**
         * Indicates the current activation status of the player's input actions.
         */
        public get enabled(): boolean;
        
        public constructor($wrapper: RootNamespace.ZepetoInputControl);
        /**
         * Retrieves `InputActionMap` associated with player actions.
         * @returns `InputActionMap` for player actions.
         */
        public Get():UnityEngine_InputSystem.InputActionMap;
        /**
         * Activates the player action map, enabling player input actions.
         */
        public Enable():void;
        /**
         * Deactivates the player action map, disabling player input actions.
         */
        public Disable():void;
        
        public static op_Implicit($set: PlayerActions):UnityEngine_InputSystem.InputActionMap;
        /**
         * Associates callback methods from instance with the respective player actions.
         * @param $instance An object that implements the `IPlayerActions` interface.
         */
        public SetCallbacks($instance: IPlayerActions):void;
        
                    
    }
    /**
     * Manages camera-related input actions within the ZEPETO World.
     */
    class CameraActions extends System.ValueType {
        /**
         * Returns the input action for scrolling the camera.
         */
        public get Scroll(): UnityEngine_InputSystem.InputAction;
        /**
         * Returns the input action for capturing the position of the primary touch.
         */
        public get PrimaryTouchPosition(): UnityEngine_InputSystem.InputAction;
        /**
         * Returns the input action for detecting contact on the primary touch.
         */
        public get PrimaryTouchContact(): UnityEngine_InputSystem.InputAction;
        /**
         * Returns the input action for capturing the position of the secondary touch.
         */
        public get SecondaryTouchPosition(): UnityEngine_InputSystem.InputAction;
        /**
         * Returns the input action for detecting contact on the secondary touch.
         */
        public get SecondaryTouchContact(): UnityEngine_InputSystem.InputAction;
        /**
         * Returns the input action for capturing the position of the tertiary touch.
         */
        public get TertiaryTouchPosition(): UnityEngine_InputSystem.InputAction;
        /**
         * Returns the input action for detecting contact on the tertiary touch.
         */
        public get TertiaryTouchContact(): UnityEngine_InputSystem.InputAction;
        /**
         * Indicates whether the input actions within the camera action map are currently enabled.
         */
        public get enabled(): boolean;
        
        public constructor($wrapper: RootNamespace.ZepetoInputControl);
        /**
         * Retrieves the InputActionMap associated with camera actions from the ZepetoInputControl.
         * @returns Returns an InputActionMap object, a collection of camera-related input actions.
         */
        public Get():UnityEngine_InputSystem.InputActionMap;
        /**
         * Enables all the input actions within the camera action map.
         */
        public Enable():void;
        /**
         * Disables all the input actions within the camera action map.
         */
        public Disable():void;
        
        public static op_Implicit($set: CameraActions):UnityEngine_InputSystem.InputActionMap;
        /**
         * Sets the callback interface for the camera actions, allowing external implementation of action handlers.
         * @param $instance Object implements the `ICameraActions` interface.
         */
        public SetCallbacks($instance: ICameraActions):void;
        
                    
    }
    /**
     * Handles various UI-related input actions.
     */
    class UIActions extends System.ValueType {
        /**
         * This action handles navigation through UI elements, such as menus or lists, typically using directional inputs like arrow keys, joystick movement, or swipe gestures.
         */
        public get Navigate(): UnityEngine_InputSystem.InputAction;
        /**
         * Represents the action of confirming or selecting a highlighted UI element, equivalent to a 'Enter' or 'OK' command.
         */
        public get Submit(): UnityEngine_InputSystem.InputAction;
        /**
         * This action corresponds to a cancellation or 'back' command, allowing users to return to a previous menu or close a current UI window.
         */
        public get Cancel(): UnityEngine_InputSystem.InputAction;
        /**
         * Handles the pointing mechanism in UI, similar to moving a mouse cursor or a finger touch point on touchscreens.
         */
        public get Point(): UnityEngine_InputSystem.InputAction;
        /**
         * Represents the action of clicking a UI element, akin to mouse clicks or screen taps.
         */
        public get Click(): UnityEngine_InputSystem.InputAction;
        /**
         * This action is used to capture scrolling input, such as from a mouse wheel or a touchpad gesture.
         */
        public get ScrollWheel(): UnityEngine_InputSystem.InputAction;
        /**
         * Represents the action of pressing the middle mouse button.
         */
        public get MiddleClick(): UnityEngine_InputSystem.InputAction;
        /**
         * Corresponds to the action of right-clicking with a mouse, often used to open context menus or perform secondary actions.
         */
        public get RightClick(): UnityEngine_InputSystem.InputAction;
        /**
         * Captures the positional data of a tracked device, like a VR controller or a motion tracking device.
         */
        public get TrackedDevicePosition(): UnityEngine_InputSystem.InputAction;
        /**
         * Tracks the orientation of a device, typically used in VR or AR setups to detect the direction in which a device is pointed or facing.
         */
        public get TrackedDeviceOrientation(): UnityEngine_InputSystem.InputAction;
        /**
         * Indicates whether the UI actions are currently active and responsive to input.
         */
        public get enabled(): boolean;
        
        public constructor($wrapper: RootNamespace.ZepetoInputControl);
        /**
         * Returns the InputActionMap associated with UI actions.
         * @returns The returned InputActionMap includes all the input actions defined for UI interactions within the ZepetoInputControl class.
         */
        public Get():UnityEngine_InputSystem.InputActionMap;
        /**
         * Activates the UI input actions, making them responsive to user input.
         */
        public Enable():void;
        /**
         * Deactivates the UI input actions, rendering them unresponsive to user input.
         */
        public Disable():void;
        
        public static op_Implicit($set: UIActions):UnityEngine_InputSystem.InputActionMap;
        /**
         * Registers callback methods for the UI actions. It links the actions to their respective event handlers as defined in the `IUIActions` interface implemented by the instance.
         * @param $instance An object that implements the `IUIActions` interface.
         */
        public SetCallbacks($instance: IUIActions):void;
        
                    
    }
    /**
     * Interface for player actions.
     */
    interface IPlayerActions {
        /**
         * On move.
         * @param $context Callback context.
         */
        OnMove($context: UnityEngine_InputSystem_InputAction.CallbackContext):void;
        /**
         * On jump.
         * @param $context Callback context.
         */
        OnJump($context: UnityEngine_InputSystem_InputAction.CallbackContext):void;
        /**
         * On double jump.
         * @param $context Callback context.
         */
        OnDoubleJump($context: UnityEngine_InputSystem_InputAction.CallbackContext):void;
        
                    
    }
    /**
     * Interface for camera actions.
     */
    interface ICameraActions {
        /**
         * On scroll.
         * @param $context Callback context.
         */
        OnScroll($context: UnityEngine_InputSystem_InputAction.CallbackContext):void;
        /**
         * On primary touch position.
         * @param $context Callback context.
         */
        OnPrimaryTouchPosition($context: UnityEngine_InputSystem_InputAction.CallbackContext):void;
        /**
         * On primary touch contact.
         * @param $context Callback context.
         */
        OnPrimaryTouchContact($context: UnityEngine_InputSystem_InputAction.CallbackContext):void;
        /**
         * On scroll.
         * @param $context Callback context.
         */
        OnSecondaryTouchPosition($context: UnityEngine_InputSystem_InputAction.CallbackContext):void;
        /**
         * On secondary touch contact.
         * @param $context Callback context.
         */
        OnSecondaryTouchContact($context: UnityEngine_InputSystem_InputAction.CallbackContext):void;
        /**
         * On tertiary touch position.
         * @param $context Callback context.
         */
        OnTertiaryTouchPosition($context: UnityEngine_InputSystem_InputAction.CallbackContext):void;
        /**
         * On tertiary touch contact.
         * @param $context Callback context.
         */
        OnTertiaryTouchContact($context: UnityEngine_InputSystem_InputAction.CallbackContext):void;
        
                    
    }
    /**
     * Interface for UI actions.
     */
    interface IUIActions {
        /**
         * On navigate.
         * @param $context Callback context.
         */
        OnNavigate($context: UnityEngine_InputSystem_InputAction.CallbackContext):void;
        /**
         * On submit.
         * @param $context Callback context.
         */
        OnSubmit($context: UnityEngine_InputSystem_InputAction.CallbackContext):void;
        /**
         * On cancel.
         * @param $context Callback context.
         */
        OnCancel($context: UnityEngine_InputSystem_InputAction.CallbackContext):void;
        /**
         * On point.
         * @param $context Callback context.
         */
        OnPoint($context: UnityEngine_InputSystem_InputAction.CallbackContext):void;
        /**
         * On click.
         * @param $context Callback context.
         */
        OnClick($context: UnityEngine_InputSystem_InputAction.CallbackContext):void;
        /**
         * On scroll wheel.
         * @param $context Callback context.
         */
        OnScrollWheel($context: UnityEngine_InputSystem_InputAction.CallbackContext):void;
        /**
         * On middle click.
         * @param $context Callback context.
         */
        OnMiddleClick($context: UnityEngine_InputSystem_InputAction.CallbackContext):void;
        /**
         * On right click.
         * @param $context Callback context.
         */
        OnRightClick($context: UnityEngine_InputSystem_InputAction.CallbackContext):void;
        /**
         * On tracked device position.
         * @param $context Callback context.
         */
        OnTrackedDevicePosition($context: UnityEngine_InputSystem_InputAction.CallbackContext):void;
        /**
         * On tracked device orientation.
         * @param $context Callback context.
         */
        OnTrackedDeviceOrientation($context: UnityEngine_InputSystem_InputAction.CallbackContext):void;
        
                    
    }
    
}
declare module 'UnityEngine.InputSystem' {

    import * as UnityEngine from 'UnityEngine';
    import * as System from 'System';
        
    
    interface InputActionAsset extends UnityEngine.ScriptableObject {
        
                    
    }
    
    interface InputBinding extends System.ValueType {
        
                    
    }
    
    interface InputDevice extends InputControl {
        
                    
    }
    
    interface InputControl extends System.Object {
        
                    
    }
    
    interface InputControlScheme extends System.ValueType {
        
                    
    }
    
    interface InputAction extends System.Object {
        
                    
    }
    
    interface InputActionMap extends System.Object {
        
                    
    }
    
}
declare module 'ZEPETO.Character.Controller.CameraData' {

    import * as System from 'System';
        
    /** @deprecated "The properties of EnhancedOptionData have been integrated into the CameraData class." */
    class EnhancedOptionData extends System.Object {
        
        public zoomSpeed: number;
        
        public zoomDampSpeed: number;
        
        public rotationSpeed: number;
        
        public rotationDampSpeed: number;
        
        public viewportMargin: number;
        
        public characterCulling: boolean;
        
        public targetScaleWeight: number;
        
        public constructor();
        
                    
    }
    
}
declare module 'ZEPETO.Character.Controller.ZepetoCamera' {

    import * as System from 'System';
        
    /** @deprecated "The properties of EnhancedOption have been integrated into the ZepetoCamera class." */
    class EnhancedOption extends System.Object {
        
        public get targetScaleWeight(): number;
        
        public set targetScaleWeight(value: number);
        
        public get useCharacterCulling(): boolean;
        
        public set useCharacterCulling(value: boolean);
        
        public get viewPortMargin(): number;
        
        public set viewPortMargin(value: number);
        
        public get rotationSpeed(): number;
        
        public set rotationSpeed(value: number);
        
        public get rotationDampSpeed(): number;
        
        public set rotationDampSpeed(value: number);
        
        public get zoomSpeed(): number;
        
        public set zoomSpeed(value: number);
        
        public get zoomDampSpeed(): number;
        
        public set zoomDampSpeed(value: number);
        
                    
    }
    
}
declare module 'UnityEngine.EventSystems' {

    import * as System from 'System';
        
    
    interface PointerEventData extends BaseEventData {
        
                    
    }
    
    interface BaseEventData extends AbstractEventData {
        
                    
    }
    
    interface AbstractEventData extends System.Object {
        
                    
    }
    
}
declare module 'UnityEngine.InputSystem.Utilities' {

    import * as System from 'System';
        
    
    interface ReadOnlyArray$1<TValue> extends System.ValueType {
        
                    
    }
    
}
declare module 'System.Collections.Generic' {

        
    
    interface IEnumerator$1<T> {
        
                    
    }
    
}
declare module 'UnityEngine.InputSystem.InputAction' {

    import * as System from 'System';
        
    
    interface CallbackContext extends System.ValueType {
        
                    
    }
    
}

