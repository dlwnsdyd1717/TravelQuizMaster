//# signature=Newtonsoft.Json#ed3af61397692974a2a8b85f76e840dd#0.0.4
// @ts-nocheck
declare module 'Newtonsoft.Json' {

    import * as System from 'System';
    import * as System_Xml from 'System.Xml';
    import * as System_Xml_Linq from 'System.Xml.Linq';
    import * as System_Collections_Generic from 'System.Collections.Generic';
    import * as Newtonsoft_Json_Serialization from 'Newtonsoft.Json.Serialization';
    import * as System_Collections from 'System.Collections';
    import * as System_Runtime_Serialization from 'System.Runtime.Serialization';
    import * as System_Globalization from 'System.Globalization';
    import * as System_Threading_Tasks from 'System.Threading.Tasks';
    import * as System_Threading from 'System.Threading';
    import * as System_IO from 'System.IO';
    import * as System_Collections_ObjectModel from 'System.Collections.ObjectModel';
        
    
    enum ConstructorHandling { Default = 0, AllowNonPublicDefaultConstructor = 1 }
    
    enum DateFormatHandling { IsoDateFormat = 0, MicrosoftDateFormat = 1 }
    
    enum DateParseHandling { None = 0, DateTime = 1, DateTimeOffset = 2 }
    
    enum DateTimeZoneHandling { Local = 0, Utc = 1, Unspecified = 2, RoundtripKind = 3 }
    
    class DefaultJsonNameTable extends JsonNameTable {
        
        public constructor();
        
        public Add($key: string):string;
        
                    
    }
    
    class JsonNameTable extends System.Object {
        
        public Get($key: number[], $start: number, $length: number):string;
        
                    
    }
    
    enum DefaultValueHandling { Include = 0, Ignore = 1, Populate = 2, IgnoreAndPopulate = 3 }
    
    enum FloatFormatHandling { String = 0, Symbol = 1, DefaultValue = 2 }
    
    enum FloatParseHandling { Double = 0, Decimal = 1 }
    
    enum Formatting { None = 0, Indented = 1 }
    
    interface IJsonLineInfo {
        
        LineNumber: number;
        
        LinePosition: number;
        
        HasLineInfo():boolean;
        
                    
    }
    
    class JsonArrayAttribute extends JsonContainerAttribute {
        
        public get AllowNullItems(): boolean;
        public set AllowNullItems(value: boolean);
        
        public constructor();
        
        public constructor($allowNullItems: boolean);
        
        public constructor($id: string);
        
                    
    }
    
    class JsonContainerAttribute extends System.Attribute {
        
        public get Id(): string;
        public set Id(value: string);
        
        public get Title(): string;
        public set Title(value: string);
        
        public get Description(): string;
        public set Description(value: string);
        
        public get ItemConverterType(): System.Type;
        public set ItemConverterType(value: System.Type);
        
        public get ItemConverterParameters(): any[];
        public set ItemConverterParameters(value: any[]);
        
        public get NamingStrategyType(): System.Type;
        public set NamingStrategyType(value: System.Type);
        
        public get NamingStrategyParameters(): any[];
        public set NamingStrategyParameters(value: any[]);
        
        public get IsReference(): boolean;
        public set IsReference(value: boolean);
        
        public get ItemIsReference(): boolean;
        public set ItemIsReference(value: boolean);
        
        public get ItemReferenceLoopHandling(): ReferenceLoopHandling;
        public set ItemReferenceLoopHandling(value: ReferenceLoopHandling);
        
        public get ItemTypeNameHandling(): TypeNameHandling;
        public set ItemTypeNameHandling(value: TypeNameHandling);
        
                    
    }
    
    class JsonConstructorAttribute extends System.Attribute {
        
        public constructor();
        
                    
    }
    
    enum ReferenceLoopHandling { Error = 0, Ignore = 1, Serialize = 2 }
    
    enum TypeNameHandling { None = 0, Objects = 1, Arrays = 2, All = 3, Auto = 4 }
    
    class JsonConvert extends System.Object {
        
        public static True: string;
        
        public static False: string;
        
        public static Null: string;
        
        public static Undefined: string;
        
        public static PositiveInfinity: string;
        
        public static NegativeInfinity: string;
        
        public static NaN: string;
        
        public static get DefaultSettings(): System.Func$1<JsonSerializerSettings>;
        public static set DefaultSettings(value: System.Func$1<JsonSerializerSettings>);
        
        public static ToString($value: Date):string;
        
        public static ToString($value: Date, $format: DateFormatHandling, $timeZoneHandling: DateTimeZoneHandling):string;
        
        public static ToString($value: System.DateTimeOffset):string;
        
        public static ToString($value: System.DateTimeOffset, $format: DateFormatHandling):string;
        
        public static ToString($value: boolean):string;
        
        public static ToString($value: number):string;
        
        public static ToString($value: System.Enum):string;
        
        public static ToString($value: number):string;
        
        public static ToString($value: number):string;
        
        public static ToString($value: number):string;
        
        public static ToString($value: number):string;
        
        public static ToString($value: bigint):string;
        
        public static ToString($value: bigint):string;
        
        public static ToString($value: number):string;
        
        public static ToString($value: number):string;
        
        public static ToString($value: number):string;
        
        public static ToString($value: number):string;
        
        public static ToString($value: System.Decimal):string;
        
        public static ToString($value: System.Guid):string;
        
        public static ToString($value: System.TimeSpan):string;
        
        public static ToString($value: System.Uri):string;
        
        public static ToString($value: string):string;
        
        public static ToString($value: string, $delimiter: number):string;
        
        public static ToString($value: string, $delimiter: number, $stringEscapeHandling: StringEscapeHandling):string;
        
        public static ToString($value: any):string;
        
        public static SerializeObject($value: any):string;
        
        public static SerializeObject($value: any, $formatting: Formatting):string;
        
        public static SerializeObject($value: any, ...converters: JsonConverter[]):string;
        
        public static SerializeObject($value: any, $formatting: Formatting, ...converters: JsonConverter[]):string;
        
        public static SerializeObject($value: any, $settings: JsonSerializerSettings):string;
        
        public static SerializeObject($value: any, $type: System.Type, $settings: JsonSerializerSettings):string;
        
        public static SerializeObject($value: any, $formatting: Formatting, $settings: JsonSerializerSettings):string;
        
        public static SerializeObject($value: any, $type: System.Type, $formatting: Formatting, $settings: JsonSerializerSettings):string;
        
        public static DeserializeObject($value: string):any;
        
        public static DeserializeObject($value: string, $settings: JsonSerializerSettings):any;
        
        public static DeserializeObject($value: string, $type: System.Type):any;
        
        public static DeserializeObject<T>($value: string):T;
        
        public static DeserializeAnonymousType<T>($value: string, $anonymousTypeObject: T):T;
        
        public static DeserializeAnonymousType<T>($value: string, $anonymousTypeObject: T, $settings: JsonSerializerSettings):T;
        
        public static DeserializeObject<T>($value: string, ...converters: JsonConverter[]):T;
        
        public static DeserializeObject<T>($value: string, $settings: JsonSerializerSettings):T;
        
        public static DeserializeObject($value: string, $type: System.Type, ...converters: JsonConverter[]):any;
        
        public static DeserializeObject($value: string, $type: System.Type, $settings: JsonSerializerSettings):any;
        
        public static PopulateObject($value: string, $target: any):void;
        
        public static PopulateObject($value: string, $target: any, $settings: JsonSerializerSettings):void;
        
        public static SerializeXmlNode($node: System_Xml.XmlNode):string;
        
        public static SerializeXmlNode($node: System_Xml.XmlNode, $formatting: Formatting):string;
        
        public static SerializeXmlNode($node: System_Xml.XmlNode, $formatting: Formatting, $omitRootObject: boolean):string;
        
        public static DeserializeXmlNode($value: string):System_Xml.XmlDocument;
        
        public static DeserializeXmlNode($value: string, $deserializeRootElementName: string):System_Xml.XmlDocument;
        
        public static DeserializeXmlNode($value: string, $deserializeRootElementName: string, $writeArrayAttribute: boolean):System_Xml.XmlDocument;
        
        public static DeserializeXmlNode($value: string, $deserializeRootElementName: string, $writeArrayAttribute: boolean, $encodeSpecialCharacters: boolean):System_Xml.XmlDocument;
        
        public static SerializeXNode($node: System_Xml_Linq.XObject):string;
        
        public static SerializeXNode($node: System_Xml_Linq.XObject, $formatting: Formatting):string;
        
        public static SerializeXNode($node: System_Xml_Linq.XObject, $formatting: Formatting, $omitRootObject: boolean):string;
        
        public static DeserializeXNode($value: string):System_Xml_Linq.XDocument;
        
        public static DeserializeXNode($value: string, $deserializeRootElementName: string):System_Xml_Linq.XDocument;
        
        public static DeserializeXNode($value: string, $deserializeRootElementName: string, $writeArrayAttribute: boolean):System_Xml_Linq.XDocument;
        
        public static DeserializeXNode($value: string, $deserializeRootElementName: string, $writeArrayAttribute: boolean, $encodeSpecialCharacters: boolean):System_Xml_Linq.XDocument;
        
                    
    }
    
    class JsonSerializerSettings extends System.Object {
        
        public get ReferenceLoopHandling(): ReferenceLoopHandling;
        public set ReferenceLoopHandling(value: ReferenceLoopHandling);
        
        public get MissingMemberHandling(): MissingMemberHandling;
        public set MissingMemberHandling(value: MissingMemberHandling);
        
        public get ObjectCreationHandling(): ObjectCreationHandling;
        public set ObjectCreationHandling(value: ObjectCreationHandling);
        
        public get NullValueHandling(): NullValueHandling;
        public set NullValueHandling(value: NullValueHandling);
        
        public get DefaultValueHandling(): DefaultValueHandling;
        public set DefaultValueHandling(value: DefaultValueHandling);
        
        public get Converters(): System_Collections_Generic.IList$1<JsonConverter>;
        public set Converters(value: System_Collections_Generic.IList$1<JsonConverter>);
        
        public get PreserveReferencesHandling(): PreserveReferencesHandling;
        public set PreserveReferencesHandling(value: PreserveReferencesHandling);
        
        public get TypeNameHandling(): TypeNameHandling;
        public set TypeNameHandling(value: TypeNameHandling);
        
        public get MetadataPropertyHandling(): MetadataPropertyHandling;
        public set MetadataPropertyHandling(value: MetadataPropertyHandling);
        
        public get TypeNameAssemblyFormatHandling(): TypeNameAssemblyFormatHandling;
        public set TypeNameAssemblyFormatHandling(value: TypeNameAssemblyFormatHandling);
        
        public get ConstructorHandling(): ConstructorHandling;
        public set ConstructorHandling(value: ConstructorHandling);
        
        public get ContractResolver(): Newtonsoft_Json_Serialization.IContractResolver;
        public set ContractResolver(value: Newtonsoft_Json_Serialization.IContractResolver);
        
        public get EqualityComparer(): System_Collections.IEqualityComparer;
        public set EqualityComparer(value: System_Collections.IEqualityComparer);
        
        public get ReferenceResolverProvider(): System.Func$1<Newtonsoft_Json_Serialization.IReferenceResolver>;
        public set ReferenceResolverProvider(value: System.Func$1<Newtonsoft_Json_Serialization.IReferenceResolver>);
        
        public get TraceWriter(): Newtonsoft_Json_Serialization.ITraceWriter;
        public set TraceWriter(value: Newtonsoft_Json_Serialization.ITraceWriter);
        
        public get SerializationBinder(): Newtonsoft_Json_Serialization.ISerializationBinder;
        public set SerializationBinder(value: Newtonsoft_Json_Serialization.ISerializationBinder);
        
        public get Error(): System.EventHandler$1<Newtonsoft_Json_Serialization.ErrorEventArgs>;
        public set Error(value: System.EventHandler$1<Newtonsoft_Json_Serialization.ErrorEventArgs>);
        
        public get Context(): System_Runtime_Serialization.StreamingContext;
        public set Context(value: System_Runtime_Serialization.StreamingContext);
        
        public get DateFormatString(): string;
        public set DateFormatString(value: string);
        
        public get MaxDepth(): System.Nullable$1<number>;
        public set MaxDepth(value: System.Nullable$1<number>);
        
        public get Formatting(): Formatting;
        public set Formatting(value: Formatting);
        
        public get DateFormatHandling(): DateFormatHandling;
        public set DateFormatHandling(value: DateFormatHandling);
        
        public get DateTimeZoneHandling(): DateTimeZoneHandling;
        public set DateTimeZoneHandling(value: DateTimeZoneHandling);
        
        public get DateParseHandling(): DateParseHandling;
        public set DateParseHandling(value: DateParseHandling);
        
        public get FloatFormatHandling(): FloatFormatHandling;
        public set FloatFormatHandling(value: FloatFormatHandling);
        
        public get FloatParseHandling(): FloatParseHandling;
        public set FloatParseHandling(value: FloatParseHandling);
        
        public get StringEscapeHandling(): StringEscapeHandling;
        public set StringEscapeHandling(value: StringEscapeHandling);
        
        public get Culture(): System_Globalization.CultureInfo;
        public set Culture(value: System_Globalization.CultureInfo);
        
        public get CheckAdditionalContent(): boolean;
        public set CheckAdditionalContent(value: boolean);
        
        public constructor();
        
                    
    }
    
    enum StringEscapeHandling { Default = 0, EscapeNonAscii = 1, EscapeHtml = 2 }
    
    class JsonConverter extends System.Object {
        
        public get CanRead(): boolean;
        
        public get CanWrite(): boolean;
        
        public WriteJson($writer: JsonWriter, $value: any, $serializer: JsonSerializer):void;
        
        public ReadJson($reader: JsonReader, $objectType: System.Type, $existingValue: any, $serializer: JsonSerializer):any;
        
        public CanConvert($objectType: System.Type):boolean;
        
                    
    }
    
    class JsonWriter extends System.Object {
        
        public get CloseOutput(): boolean;
        public set CloseOutput(value: boolean);
        
        public get AutoCompleteOnClose(): boolean;
        public set AutoCompleteOnClose(value: boolean);
        
        public get WriteState(): WriteState;
        
        public get Path(): string;
        
        public get Formatting(): Formatting;
        public set Formatting(value: Formatting);
        
        public get DateFormatHandling(): DateFormatHandling;
        public set DateFormatHandling(value: DateFormatHandling);
        
        public get DateTimeZoneHandling(): DateTimeZoneHandling;
        public set DateTimeZoneHandling(value: DateTimeZoneHandling);
        
        public get StringEscapeHandling(): StringEscapeHandling;
        public set StringEscapeHandling(value: StringEscapeHandling);
        
        public get FloatFormatHandling(): FloatFormatHandling;
        public set FloatFormatHandling(value: FloatFormatHandling);
        
        public get DateFormatString(): string;
        public set DateFormatString(value: string);
        
        public get Culture(): System_Globalization.CultureInfo;
        public set Culture(value: System_Globalization.CultureInfo);
        
        public CloseAsync($cancellationToken?: System_Threading.CancellationToken):System_Threading_Tasks.Task;
        
        public FlushAsync($cancellationToken?: System_Threading.CancellationToken):System_Threading_Tasks.Task;
        
        public WriteRawAsync($json: string, $cancellationToken?: System_Threading.CancellationToken):System_Threading_Tasks.Task;
        
        public WriteEndAsync($cancellationToken?: System_Threading.CancellationToken):System_Threading_Tasks.Task;
        
        public WriteEndArrayAsync($cancellationToken?: System_Threading.CancellationToken):System_Threading_Tasks.Task;
        
        public WriteEndConstructorAsync($cancellationToken?: System_Threading.CancellationToken):System_Threading_Tasks.Task;
        
        public WriteEndObjectAsync($cancellationToken?: System_Threading.CancellationToken):System_Threading_Tasks.Task;
        
        public WriteNullAsync($cancellationToken?: System_Threading.CancellationToken):System_Threading_Tasks.Task;
        
        public WritePropertyNameAsync($name: string, $cancellationToken?: System_Threading.CancellationToken):System_Threading_Tasks.Task;
        
        public WritePropertyNameAsync($name: string, $escape: boolean, $cancellationToken?: System_Threading.CancellationToken):System_Threading_Tasks.Task;
        
        public WriteStartArrayAsync($cancellationToken?: System_Threading.CancellationToken):System_Threading_Tasks.Task;
        
        public WriteCommentAsync($text: string, $cancellationToken?: System_Threading.CancellationToken):System_Threading_Tasks.Task;
        
        public WriteRawValueAsync($json: string, $cancellationToken?: System_Threading.CancellationToken):System_Threading_Tasks.Task;
        
        public WriteStartConstructorAsync($name: string, $cancellationToken?: System_Threading.CancellationToken):System_Threading_Tasks.Task;
        
        public WriteStartObjectAsync($cancellationToken?: System_Threading.CancellationToken):System_Threading_Tasks.Task;
        
        public WriteTokenAsync($reader: JsonReader, $cancellationToken?: System_Threading.CancellationToken):System_Threading_Tasks.Task;
        
        public WriteTokenAsync($reader: JsonReader, $writeChildren: boolean, $cancellationToken?: System_Threading.CancellationToken):System_Threading_Tasks.Task;
        
        public WriteTokenAsync($token: JsonToken, $cancellationToken?: System_Threading.CancellationToken):System_Threading_Tasks.Task;
        
        public WriteTokenAsync($token: JsonToken, $value: any, $cancellationToken?: System_Threading.CancellationToken):System_Threading_Tasks.Task;
        
        public WriteValueAsync($value: boolean, $cancellationToken?: System_Threading.CancellationToken):System_Threading_Tasks.Task;
        
        public WriteValueAsync($value: System.Nullable$1<boolean>, $cancellationToken?: System_Threading.CancellationToken):System_Threading_Tasks.Task;
        
        public WriteValueAsync($value: number, $cancellationToken?: System_Threading.CancellationToken):System_Threading_Tasks.Task;
        
        public WriteValueAsync($value: System.Nullable$1<number>, $cancellationToken?: System_Threading.CancellationToken):System_Threading_Tasks.Task;
        
        public WriteValueAsync($value: number[], $cancellationToken?: System_Threading.CancellationToken):System_Threading_Tasks.Task;
        
        public WriteValueAsync($value: number, $cancellationToken?: System_Threading.CancellationToken):System_Threading_Tasks.Task;
        
        public WriteValueAsync($value: System.Nullable$1<number>, $cancellationToken?: System_Threading.CancellationToken):System_Threading_Tasks.Task;
        
        public WriteValueAsync($value: Date, $cancellationToken?: System_Threading.CancellationToken):System_Threading_Tasks.Task;
        
        public WriteValueAsync($value: System.Nullable$1<Date>, $cancellationToken?: System_Threading.CancellationToken):System_Threading_Tasks.Task;
        
        public WriteValueAsync($value: System.DateTimeOffset, $cancellationToken?: System_Threading.CancellationToken):System_Threading_Tasks.Task;
        
        public WriteValueAsync($value: System.Nullable$1<System.DateTimeOffset>, $cancellationToken?: System_Threading.CancellationToken):System_Threading_Tasks.Task;
        
        public WriteValueAsync($value: System.Decimal, $cancellationToken?: System_Threading.CancellationToken):System_Threading_Tasks.Task;
        
        public WriteValueAsync($value: System.Nullable$1<System.Decimal>, $cancellationToken?: System_Threading.CancellationToken):System_Threading_Tasks.Task;
        
        public WriteValueAsync($value: number, $cancellationToken?: System_Threading.CancellationToken):System_Threading_Tasks.Task;
        
        public WriteValueAsync($value: System.Nullable$1<number>, $cancellationToken?: System_Threading.CancellationToken):System_Threading_Tasks.Task;
        
        public WriteValueAsync($value: number, $cancellationToken?: System_Threading.CancellationToken):System_Threading_Tasks.Task;
        
        public WriteValueAsync($value: System.Nullable$1<number>, $cancellationToken?: System_Threading.CancellationToken):System_Threading_Tasks.Task;
        
        public WriteValueAsync($value: System.Guid, $cancellationToken?: System_Threading.CancellationToken):System_Threading_Tasks.Task;
        
        public WriteValueAsync($value: System.Nullable$1<System.Guid>, $cancellationToken?: System_Threading.CancellationToken):System_Threading_Tasks.Task;
        
        public WriteValueAsync($value: number, $cancellationToken?: System_Threading.CancellationToken):System_Threading_Tasks.Task;
        
        public WriteValueAsync($value: System.Nullable$1<number>, $cancellationToken?: System_Threading.CancellationToken):System_Threading_Tasks.Task;
        
        public WriteValueAsync($value: bigint, $cancellationToken?: System_Threading.CancellationToken):System_Threading_Tasks.Task;
        
        public WriteValueAsync($value: System.Nullable$1<bigint>, $cancellationToken?: System_Threading.CancellationToken):System_Threading_Tasks.Task;
        
        public WriteValueAsync($value: any, $cancellationToken?: System_Threading.CancellationToken):System_Threading_Tasks.Task;
        
        public WriteValueAsync($value: number, $cancellationToken?: System_Threading.CancellationToken):System_Threading_Tasks.Task;
        
        public WriteValueAsync($value: System.Nullable$1<number>, $cancellationToken?: System_Threading.CancellationToken):System_Threading_Tasks.Task;
        
        public WriteValueAsync($value: number, $cancellationToken?: System_Threading.CancellationToken):System_Threading_Tasks.Task;
        
        public WriteValueAsync($value: System.Nullable$1<number>, $cancellationToken?: System_Threading.CancellationToken):System_Threading_Tasks.Task;
        
        public WriteValueAsync($value: string, $cancellationToken?: System_Threading.CancellationToken):System_Threading_Tasks.Task;
        
        public WriteValueAsync($value: System.TimeSpan, $cancellationToken?: System_Threading.CancellationToken):System_Threading_Tasks.Task;
        
        public WriteValueAsync($value: System.Nullable$1<System.TimeSpan>, $cancellationToken?: System_Threading.CancellationToken):System_Threading_Tasks.Task;
        
        public WriteValueAsync($value: number, $cancellationToken?: System_Threading.CancellationToken):System_Threading_Tasks.Task;
        
        public WriteValueAsync($value: System.Nullable$1<number>, $cancellationToken?: System_Threading.CancellationToken):System_Threading_Tasks.Task;
        
        public WriteValueAsync($value: bigint, $cancellationToken?: System_Threading.CancellationToken):System_Threading_Tasks.Task;
        
        public WriteValueAsync($value: System.Nullable$1<bigint>, $cancellationToken?: System_Threading.CancellationToken):System_Threading_Tasks.Task;
        
        public WriteValueAsync($value: System.Uri, $cancellationToken?: System_Threading.CancellationToken):System_Threading_Tasks.Task;
        
        public WriteValueAsync($value: number, $cancellationToken?: System_Threading.CancellationToken):System_Threading_Tasks.Task;
        
        public WriteValueAsync($value: System.Nullable$1<number>, $cancellationToken?: System_Threading.CancellationToken):System_Threading_Tasks.Task;
        
        public WriteUndefinedAsync($cancellationToken?: System_Threading.CancellationToken):System_Threading_Tasks.Task;
        
        public WriteWhitespaceAsync($ws: string, $cancellationToken?: System_Threading.CancellationToken):System_Threading_Tasks.Task;
        
        public Flush():void;
        
        public Close():void;
        
        public WriteStartObject():void;
        
        public WriteEndObject():void;
        
        public WriteStartArray():void;
        
        public WriteEndArray():void;
        
        public WriteStartConstructor($name: string):void;
        
        public WriteEndConstructor():void;
        
        public WritePropertyName($name: string):void;
        
        public WritePropertyName($name: string, $escape: boolean):void;
        
        public WriteEnd():void;
        
        public WriteToken($reader: JsonReader):void;
        
        public WriteToken($reader: JsonReader, $writeChildren: boolean):void;
        
        public WriteToken($token: JsonToken, $value: any):void;
        
        public WriteToken($token: JsonToken):void;
        
        public WriteNull():void;
        
        public WriteUndefined():void;
        
        public WriteRaw($json: string):void;
        
        public WriteRawValue($json: string):void;
        
        public WriteValue($value: string):void;
        
        public WriteValue($value: number):void;
        
        public WriteValue($value: number):void;
        
        public WriteValue($value: bigint):void;
        
        public WriteValue($value: bigint):void;
        
        public WriteValue($value: number):void;
        
        public WriteValue($value: number):void;
        
        public WriteValue($value: boolean):void;
        
        public WriteValue($value: number):void;
        
        public WriteValue($value: number):void;
        
        public WriteValue($value: number):void;
        
        public WriteValue($value: number):void;
        
        public WriteValue($value: number):void;
        
        public WriteValue($value: System.Decimal):void;
        
        public WriteValue($value: Date):void;
        
        public WriteValue($value: System.DateTimeOffset):void;
        
        public WriteValue($value: System.Guid):void;
        
        public WriteValue($value: System.TimeSpan):void;
        
        public WriteValue($value: System.Nullable$1<number>):void;
        
        public WriteValue($value: System.Nullable$1<number>):void;
        
        public WriteValue($value: System.Nullable$1<bigint>):void;
        
        public WriteValue($value: System.Nullable$1<bigint>):void;
        
        public WriteValue($value: System.Nullable$1<number>):void;
        
        public WriteValue($value: System.Nullable$1<number>):void;
        
        public WriteValue($value: System.Nullable$1<boolean>):void;
        
        public WriteValue($value: System.Nullable$1<number>):void;
        
        public WriteValue($value: System.Nullable$1<number>):void;
        
        public WriteValue($value: System.Nullable$1<number>):void;
        
        public WriteValue($value: System.Nullable$1<number>):void;
        
        public WriteValue($value: System.Nullable$1<number>):void;
        
        public WriteValue($value: System.Nullable$1<System.Decimal>):void;
        
        public WriteValue($value: System.Nullable$1<Date>):void;
        
        public WriteValue($value: System.Nullable$1<System.DateTimeOffset>):void;
        
        public WriteValue($value: System.Nullable$1<System.Guid>):void;
        
        public WriteValue($value: System.Nullable$1<System.TimeSpan>):void;
        
        public WriteValue($value: number[]):void;
        
        public WriteValue($value: System.Uri):void;
        
        public WriteValue($value: any):void;
        
        public WriteComment($text: string):void;
        
        public WriteWhitespace($ws: string):void;
        
                    
    }
    
    class JsonSerializer extends System.Object {
        
        public get ReferenceResolver(): Newtonsoft_Json_Serialization.IReferenceResolver;
        public set ReferenceResolver(value: Newtonsoft_Json_Serialization.IReferenceResolver);
        
        public get SerializationBinder(): Newtonsoft_Json_Serialization.ISerializationBinder;
        public set SerializationBinder(value: Newtonsoft_Json_Serialization.ISerializationBinder);
        
        public get TraceWriter(): Newtonsoft_Json_Serialization.ITraceWriter;
        public set TraceWriter(value: Newtonsoft_Json_Serialization.ITraceWriter);
        
        public get EqualityComparer(): System_Collections.IEqualityComparer;
        public set EqualityComparer(value: System_Collections.IEqualityComparer);
        
        public get TypeNameHandling(): TypeNameHandling;
        public set TypeNameHandling(value: TypeNameHandling);
        
        public get TypeNameAssemblyFormatHandling(): TypeNameAssemblyFormatHandling;
        public set TypeNameAssemblyFormatHandling(value: TypeNameAssemblyFormatHandling);
        
        public get PreserveReferencesHandling(): PreserveReferencesHandling;
        public set PreserveReferencesHandling(value: PreserveReferencesHandling);
        
        public get ReferenceLoopHandling(): ReferenceLoopHandling;
        public set ReferenceLoopHandling(value: ReferenceLoopHandling);
        
        public get MissingMemberHandling(): MissingMemberHandling;
        public set MissingMemberHandling(value: MissingMemberHandling);
        
        public get NullValueHandling(): NullValueHandling;
        public set NullValueHandling(value: NullValueHandling);
        
        public get DefaultValueHandling(): DefaultValueHandling;
        public set DefaultValueHandling(value: DefaultValueHandling);
        
        public get ObjectCreationHandling(): ObjectCreationHandling;
        public set ObjectCreationHandling(value: ObjectCreationHandling);
        
        public get ConstructorHandling(): ConstructorHandling;
        public set ConstructorHandling(value: ConstructorHandling);
        
        public get MetadataPropertyHandling(): MetadataPropertyHandling;
        public set MetadataPropertyHandling(value: MetadataPropertyHandling);
        
        public get Converters(): JsonConverterCollection;
        
        public get ContractResolver(): Newtonsoft_Json_Serialization.IContractResolver;
        public set ContractResolver(value: Newtonsoft_Json_Serialization.IContractResolver);
        
        public get Context(): System_Runtime_Serialization.StreamingContext;
        public set Context(value: System_Runtime_Serialization.StreamingContext);
        
        public get Formatting(): Formatting;
        public set Formatting(value: Formatting);
        
        public get DateFormatHandling(): DateFormatHandling;
        public set DateFormatHandling(value: DateFormatHandling);
        
        public get DateTimeZoneHandling(): DateTimeZoneHandling;
        public set DateTimeZoneHandling(value: DateTimeZoneHandling);
        
        public get DateParseHandling(): DateParseHandling;
        public set DateParseHandling(value: DateParseHandling);
        
        public get FloatParseHandling(): FloatParseHandling;
        public set FloatParseHandling(value: FloatParseHandling);
        
        public get FloatFormatHandling(): FloatFormatHandling;
        public set FloatFormatHandling(value: FloatFormatHandling);
        
        public get StringEscapeHandling(): StringEscapeHandling;
        public set StringEscapeHandling(value: StringEscapeHandling);
        
        public get DateFormatString(): string;
        public set DateFormatString(value: string);
        
        public get Culture(): System_Globalization.CultureInfo;
        public set Culture(value: System_Globalization.CultureInfo);
        
        public get MaxDepth(): System.Nullable$1<number>;
        public set MaxDepth(value: System.Nullable$1<number>);
        
        public get CheckAdditionalContent(): boolean;
        public set CheckAdditionalContent(value: boolean);
        
        public constructor();
        
        public add_Error($value: System.EventHandler$1<Newtonsoft_Json_Serialization.ErrorEventArgs>):void;
        
        public remove_Error($value: System.EventHandler$1<Newtonsoft_Json_Serialization.ErrorEventArgs>):void;
        
        public static Create():JsonSerializer;
        
        public static Create($settings: JsonSerializerSettings):JsonSerializer;
        
        public static CreateDefault():JsonSerializer;
        
        public static CreateDefault($settings: JsonSerializerSettings):JsonSerializer;
        
        public Populate($reader: System_IO.TextReader, $target: any):void;
        
        public Populate($reader: JsonReader, $target: any):void;
        
        public Deserialize($reader: JsonReader):any;
        
        public Deserialize($reader: System_IO.TextReader, $objectType: System.Type):any;
        
        public Deserialize<T>($reader: JsonReader):T;
        
        public Deserialize($reader: JsonReader, $objectType: System.Type):any;
        
        public Serialize($textWriter: System_IO.TextWriter, $value: any):void;
        
        public Serialize($jsonWriter: JsonWriter, $value: any, $objectType: System.Type):void;
        
        public Serialize($textWriter: System_IO.TextWriter, $value: any, $objectType: System.Type):void;
        
        public Serialize($jsonWriter: JsonWriter, $value: any):void;
        
        public Error;
        
                    
    }
    
    class JsonReader extends System.Object {
        
        public get CloseInput(): boolean;
        public set CloseInput(value: boolean);
        
        public get SupportMultipleContent(): boolean;
        public set SupportMultipleContent(value: boolean);
        
        public get QuoteChar(): number;
        
        public get DateTimeZoneHandling(): DateTimeZoneHandling;
        public set DateTimeZoneHandling(value: DateTimeZoneHandling);
        
        public get DateParseHandling(): DateParseHandling;
        public set DateParseHandling(value: DateParseHandling);
        
        public get FloatParseHandling(): FloatParseHandling;
        public set FloatParseHandling(value: FloatParseHandling);
        
        public get DateFormatString(): string;
        public set DateFormatString(value: string);
        
        public get MaxDepth(): System.Nullable$1<number>;
        public set MaxDepth(value: System.Nullable$1<number>);
        
        public get TokenType(): JsonToken;
        
        public get Value(): any;
        
        public get ValueType(): System.Type;
        
        public get Depth(): number;
        
        public get Path(): string;
        
        public get Culture(): System_Globalization.CultureInfo;
        public set Culture(value: System_Globalization.CultureInfo);
        
        public ReadAsync($cancellationToken?: System_Threading.CancellationToken):System_Threading_Tasks.Task$1<boolean>;
        
        public SkipAsync($cancellationToken?: System_Threading.CancellationToken):System_Threading_Tasks.Task;
        
        public ReadAsBooleanAsync($cancellationToken?: System_Threading.CancellationToken):System_Threading_Tasks.Task$1<System.Nullable$1<boolean>>;
        
        public ReadAsBytesAsync($cancellationToken?: System_Threading.CancellationToken):System_Threading_Tasks.Task$1<number[]>;
        
        public ReadAsDateTimeAsync($cancellationToken?: System_Threading.CancellationToken):System_Threading_Tasks.Task$1<System.Nullable$1<Date>>;
        
        public ReadAsDateTimeOffsetAsync($cancellationToken?: System_Threading.CancellationToken):System_Threading_Tasks.Task$1<System.Nullable$1<System.DateTimeOffset>>;
        
        public ReadAsDecimalAsync($cancellationToken?: System_Threading.CancellationToken):System_Threading_Tasks.Task$1<System.Nullable$1<System.Decimal>>;
        
        public ReadAsDoubleAsync($cancellationToken?: System_Threading.CancellationToken):System_Threading_Tasks.Task$1<System.Nullable$1<number>>;
        
        public ReadAsInt32Async($cancellationToken?: System_Threading.CancellationToken):System_Threading_Tasks.Task$1<System.Nullable$1<number>>;
        
        public ReadAsStringAsync($cancellationToken?: System_Threading.CancellationToken):System_Threading_Tasks.Task$1<string>;
        
        public Read():boolean;
        
        public ReadAsInt32():System.Nullable$1<number>;
        
        public ReadAsString():string;
        
        public ReadAsBytes():number[];
        
        public ReadAsDouble():System.Nullable$1<number>;
        
        public ReadAsBoolean():System.Nullable$1<boolean>;
        
        public ReadAsDecimal():System.Nullable$1<System.Decimal>;
        
        public ReadAsDateTime():System.Nullable$1<Date>;
        
        public ReadAsDateTimeOffset():System.Nullable$1<System.DateTimeOffset>;
        
        public Skip():void;
        
        public Close():void;
        
                    
    }
    
    class JsonConverterAttribute extends System.Attribute {
        
        public get ConverterType(): System.Type;
        
        public get ConverterParameters(): any[];
        
        public constructor($converterType: System.Type);
        
        public constructor($converterType: System.Type, ...converterParameters: any[]);
        
                    
    }
    
    class JsonConverterCollection extends System_Collections_ObjectModel.Collection$1<Newtonsoft_Json.JsonConverter> {
        
        public constructor();
        
                    
    }
    
    class JsonDictionaryAttribute extends JsonContainerAttribute {
        
        public constructor();
        
        public constructor($id: string);
        
                    
    }
    
    class JsonException extends System.Exception {
        
        public constructor();
        
        public constructor($message: string);
        
        public constructor($message: string, $innerException: System.Exception);
        
        public constructor($info: System_Runtime_Serialization.SerializationInfo, $context: System_Runtime_Serialization.StreamingContext);
        
                    
    }
    
    class JsonExtensionDataAttribute extends System.Attribute {
        
        public get WriteData(): boolean;
        public set WriteData(value: boolean);
        
        public get ReadData(): boolean;
        public set ReadData(value: boolean);
        
        public constructor();
        
                    
    }
    
    class JsonIgnoreAttribute extends System.Attribute {
        
        public constructor();
        
                    
    }
    
    class JsonObjectAttribute extends JsonContainerAttribute {
        
        public get MemberSerialization(): MemberSerialization;
        public set MemberSerialization(value: MemberSerialization);
        
        public get MissingMemberHandling(): MissingMemberHandling;
        public set MissingMemberHandling(value: MissingMemberHandling);
        
        public get ItemNullValueHandling(): NullValueHandling;
        public set ItemNullValueHandling(value: NullValueHandling);
        
        public get ItemRequired(): Required;
        public set ItemRequired(value: Required);
        
        public constructor();
        
        public constructor($memberSerialization: MemberSerialization);
        
        public constructor($id: string);
        
                    
    }
    
    enum MemberSerialization { OptOut = 0, OptIn = 1, Fields = 2 }
    
    enum MissingMemberHandling { Ignore = 0, Error = 1 }
    
    enum NullValueHandling { Include = 0, Ignore = 1 }
    
    enum Required { Default = 0, AllowNull = 1, Always = 2, DisallowNull = 3 }
    
    class JsonPropertyAttribute extends System.Attribute {
        
        public get ItemConverterType(): System.Type;
        public set ItemConverterType(value: System.Type);
        
        public get ItemConverterParameters(): any[];
        public set ItemConverterParameters(value: any[]);
        
        public get NamingStrategyType(): System.Type;
        public set NamingStrategyType(value: System.Type);
        
        public get NamingStrategyParameters(): any[];
        public set NamingStrategyParameters(value: any[]);
        
        public get NullValueHandling(): NullValueHandling;
        public set NullValueHandling(value: NullValueHandling);
        
        public get DefaultValueHandling(): DefaultValueHandling;
        public set DefaultValueHandling(value: DefaultValueHandling);
        
        public get ReferenceLoopHandling(): ReferenceLoopHandling;
        public set ReferenceLoopHandling(value: ReferenceLoopHandling);
        
        public get ObjectCreationHandling(): ObjectCreationHandling;
        public set ObjectCreationHandling(value: ObjectCreationHandling);
        
        public get TypeNameHandling(): TypeNameHandling;
        public set TypeNameHandling(value: TypeNameHandling);
        
        public get IsReference(): boolean;
        public set IsReference(value: boolean);
        
        public get Order(): number;
        public set Order(value: number);
        
        public get Required(): Required;
        public set Required(value: Required);
        
        public get PropertyName(): string;
        public set PropertyName(value: string);
        
        public get ItemReferenceLoopHandling(): ReferenceLoopHandling;
        public set ItemReferenceLoopHandling(value: ReferenceLoopHandling);
        
        public get ItemTypeNameHandling(): TypeNameHandling;
        public set ItemTypeNameHandling(value: TypeNameHandling);
        
        public get ItemIsReference(): boolean;
        public set ItemIsReference(value: boolean);
        
        public constructor();
        
        public constructor($propertyName: string);
        
                    
    }
    
    enum ObjectCreationHandling { Auto = 0, Reuse = 1, Replace = 2 }
    
    enum JsonToken { None = 0, StartObject = 1, StartArray = 2, StartConstructor = 3, PropertyName = 4, Comment = 5, Raw = 6, Integer = 7, Float = 8, String = 9, Boolean = 10, Null = 11, Undefined = 12, EndObject = 13, EndArray = 14, EndConstructor = 15, Date = 16, Bytes = 17 }
    
    class JsonReaderException extends JsonException {
        
        public get LineNumber(): number;
        
        public get LinePosition(): number;
        
        public get Path(): string;
        
        public constructor();
        
        public constructor($message: string);
        
        public constructor($message: string, $innerException: System.Exception);
        
        public constructor($info: System_Runtime_Serialization.SerializationInfo, $context: System_Runtime_Serialization.StreamingContext);
        
        public constructor($message: string, $path: string, $lineNumber: number, $linePosition: number, $innerException: System.Exception);
        
        public constructor($message: string);
        
        public constructor($message: string, $innerException: System.Exception);
        
        public constructor($info: System_Runtime_Serialization.SerializationInfo, $context: System_Runtime_Serialization.StreamingContext);
        
                    
    }
    
    class JsonRequiredAttribute extends System.Attribute {
        
        public constructor();
        
                    
    }
    
    class JsonSerializationException extends JsonException {
        
        public get LineNumber(): number;
        
        public get LinePosition(): number;
        
        public get Path(): string;
        
        public constructor();
        
        public constructor($message: string);
        
        public constructor($message: string, $innerException: System.Exception);
        
        public constructor($info: System_Runtime_Serialization.SerializationInfo, $context: System_Runtime_Serialization.StreamingContext);
        
        public constructor($message: string, $path: string, $lineNumber: number, $linePosition: number, $innerException: System.Exception);
        
        public constructor($message: string);
        
        public constructor($message: string, $innerException: System.Exception);
        
        public constructor($info: System_Runtime_Serialization.SerializationInfo, $context: System_Runtime_Serialization.StreamingContext);
        
                    
    }
    
    enum TypeNameAssemblyFormatHandling { Simple = 0, Full = 1 }
    
    enum PreserveReferencesHandling { None = 0, Objects = 1, Arrays = 2, All = 3 }
    
    enum MetadataPropertyHandling { Default = 0, ReadAhead = 1, Ignore = 2 }
    
    class JsonTextReader extends JsonReader {
        
        public get PropertyNameTable(): JsonNameTable;
        public set PropertyNameTable(value: JsonNameTable);
        
        public get ArrayPool(): IArrayPool$1<number>;
        public set ArrayPool(value: IArrayPool$1<number>);
        
        public get LineNumber(): number;
        
        public get LinePosition(): number;
        
        public constructor($reader: System_IO.TextReader);
        
        public HasLineInfo():boolean;
        
                    
    }
    
    interface IArrayPool$1<T> {
        
                    
    }
    
    class JsonTextWriter extends JsonWriter {
        
        public get ArrayPool(): IArrayPool$1<number>;
        public set ArrayPool(value: IArrayPool$1<number>);
        
        public get Indentation(): number;
        public set Indentation(value: number);
        
        public get QuoteChar(): number;
        public set QuoteChar(value: number);
        
        public get IndentChar(): number;
        public set IndentChar(value: number);
        
        public get QuoteName(): boolean;
        public set QuoteName(value: boolean);
        
        public constructor($textWriter: System_IO.TextWriter);
        
                    
    }
    
    enum WriteState { Error = 0, Closed = 1, Object = 2, Array = 3, Constructor = 4, Property = 5, Start = 6 }
    
    class JsonWriterException extends JsonException {
        
        public get Path(): string;
        
        public constructor();
        
        public constructor($message: string);
        
        public constructor($message: string, $innerException: System.Exception);
        
        public constructor($info: System_Runtime_Serialization.SerializationInfo, $context: System_Runtime_Serialization.StreamingContext);
        
        public constructor($message: string, $path: string, $innerException: System.Exception);
        
        public constructor($message: string);
        
        public constructor($message: string, $innerException: System.Exception);
        
        public constructor($info: System_Runtime_Serialization.SerializationInfo, $context: System_Runtime_Serialization.StreamingContext);
        
                    
    }
    
}
declare module 'System' {

    import * as System_Reflection from 'System.Reflection';
        
    
    interface Enum extends ValueType {
        
                    
    }
    
    interface ValueType extends Object {
        
                    
    }
    
    interface Object {
        
                    
    }
    
    interface Int32 extends ValueType {
        
                    
    }
    
    interface String extends Object {
        
                    
    }
    
    interface Char extends ValueType {
        
                    
    }
    
    interface Array extends Object {
        
                    
    }
    
    interface Boolean extends ValueType {
        
                    
    }
    
    interface Attribute extends Object {
        
                    
    }
    
    interface Void extends ValueType {
        
                    
    }
    
    interface Type extends System_Reflection.MemberInfo {
        
                    
    }
    
    type Func$1<TResult> = () => TResult;
    
    type MulticastDelegate = (...args:any[]) => any;
    var MulticastDelegate: {new (func: (...args:any[]) => any): MulticastDelegate;}
    
    interface Delegate extends Object {
        
                    
    }
    
    interface DateTime extends ValueType {
        
                    
    }
    
    interface DateTimeOffset extends ValueType {
        
                    
    }
    
    interface Int16 extends ValueType {
        
                    
    }
    
    interface UInt16 extends ValueType {
        
                    
    }
    
    interface UInt32 extends ValueType {
        
                    
    }
    
    interface Int64 extends ValueType {
        
                    
    }
    
    interface UInt64 extends ValueType {
        
                    
    }
    
    interface Single extends ValueType {
        
                    
    }
    
    interface Double extends ValueType {
        
                    
    }
    
    interface Byte extends ValueType {
        
                    
    }
    
    interface SByte extends ValueType {
        
                    
    }
    
    interface Decimal extends ValueType {
        
                    
    }
    
    interface Guid extends ValueType {
        
                    
    }
    
    interface TimeSpan extends ValueType {
        
                    
    }
    
    interface Uri extends Object {
        
                    
    }
    
    interface Exception extends Object {
        
                    
    }
    
    interface Nullable$1<T> extends ValueType {
        
                    
    }
    
    interface EventArgs extends Object {
        
                    
    }
    
    type EventHandler$1<TEventArgs> = (sender: any, e: TEventArgs) => void;
    
    interface MarshalByRefObject extends Object {
        
                    
    }
    
    type Action = () => void;
    var Action: {new (func: () => void): Action;}
    
    interface IAsyncResult {
        
                    
    }
    
    type AsyncCallback = (ar: IAsyncResult) => void;
    var AsyncCallback: {new (func: (ar: IAsyncResult) => void): AsyncCallback;}
    
    interface IntPtr extends ValueType {
        
                    
    }
    
    type Func$2<T,TResult> = (arg: T) => TResult;
    
    type Predicate$1<T> = (obj: T) => boolean;
    
    type Action$2<T1,T2> = (arg1: T1, arg2: T2) => void;
    
    enum StringComparison { CurrentCulture = 0, CurrentCultureIgnoreCase = 1, InvariantCulture = 2, InvariantCultureIgnoreCase = 3, Ordinal = 4, OrdinalIgnoreCase = 5 }
    
    interface IFormatProvider {
        
                    
    }
    
}
declare module 'System.Reflection' {

    import * as System from 'System';
        
    
    interface MemberInfo extends System.Object {
        
                    
    }
    
    enum BindingFlags { Default = 0, IgnoreCase = 1, DeclaredOnly = 2, Instance = 4, Static = 8, Public = 16, NonPublic = 32, FlattenHierarchy = 64, InvokeMethod = 256, CreateInstance = 512, GetField = 1024, SetField = 2048, GetProperty = 4096, SetProperty = 8192, PutDispProperty = 16384, PutRefDispProperty = 32768, ExactBinding = 65536, SuppressChangeType = 131072, OptionalParamBinding = 262144, IgnoreReturn = 16777216 }
    
}
declare module 'System.Xml' {

    import * as System from 'System';
        
    
    interface XmlNode extends System.Object {
        
                    
    }
    
    interface XmlDocument extends XmlNode {
        
                    
    }
    
}
declare module 'System.Xml.Linq' {

    import * as System from 'System';
        
    
    interface XObject extends System.Object {
        
                    
    }
    
    interface XDocument extends XContainer {
        
                    
    }
    
    interface XContainer extends XNode {
        
                    
    }
    
    interface XNode extends XObject {
        
                    
    }
    
}
declare module 'System.Collections.ObjectModel' {

    import * as System from 'System';
        
    
    interface Collection$1<T> extends System.Object {
        
                    
    }
    
    interface KeyedCollection$2<TKey,TItem> extends Collection$1<TItem> {
        
                    
    }
    
}
declare module 'System.Runtime.Serialization' {

    import * as System from 'System';
        
    
    interface SerializationInfo extends System.Object {
        
                    
    }
    
    interface StreamingContext extends System.ValueType {
        
                    
    }
    
    interface SerializationBinder extends System.Object {
        
                    
    }
    
}
declare module 'System.Threading.Tasks' {

    import * as System from 'System';
        
    
    interface Task$1<TResult> extends Task {
        
                    
    }
    
    interface Task extends System.Object {
        
                    
    }
    
}
declare module 'System.Threading' {

    import * as System from 'System';
        
    
    interface CancellationToken extends System.ValueType {
        
                    
    }
    
}
declare module 'System.Globalization' {

    import * as System from 'System';
        
    
    interface CultureInfo extends System.Object {
        
                    
    }
    
    enum DateTimeStyles { None = 0, AllowLeadingWhite = 1, AllowTrailingWhite = 2, AllowInnerWhite = 4, AllowWhiteSpaces = 7, NoCurrentDateDefault = 8, AdjustToUniversal = 16, AssumeLocal = 32, AssumeUniversal = 64, RoundtripKind = 128 }
    
}
declare module 'Newtonsoft.Json.Serialization' {

    import * as System from 'System';
    import * as System_Diagnostics from 'System.Diagnostics';
    import * as Newtonsoft_Json from 'Newtonsoft.Json';
    import * as System_Collections_Generic from 'System.Collections.Generic';
    import * as System_Runtime_Serialization from 'System.Runtime.Serialization';
    import * as System_Collections_ObjectModel from 'System.Collections.ObjectModel';
        
    
    class ErrorEventArgs extends System.EventArgs {
        
        public get CurrentObject(): any;
        
        public get ErrorContext(): ErrorContext;
        
        public constructor($currentObject: any, $errorContext: ErrorContext);
        
                    
    }
    
    interface IReferenceResolver {
        
        ResolveReference($context: any, $reference: string):any;
        
        GetReference($context: any, $value: any):string;
        
        IsReferenced($context: any, $value: any):boolean;
        
        AddReference($context: any, $reference: string, $value: any):void;
        
                    
    }
    
    interface ISerializationBinder {
        
        BindToType($assemblyName: string, $typeName: string):System.Type;
        
        BindToName($serializedType: System.Type, $assemblyName: $Ref<string>, $typeName: $Ref<string>):void;
        
                    
    }
    
    interface ITraceWriter {
        
        LevelFilter: System_Diagnostics.TraceLevel;
        
        Trace($level: System_Diagnostics.TraceLevel, $message: string, $ex: System.Exception):void;
        
                    
    }
    
    interface IContractResolver {
        
        ResolveContract($type: System.Type):JsonContract;
        
                    
    }
    
    class CamelCaseNamingStrategy extends NamingStrategy {
        
        public constructor($processDictionaryKeys: boolean, $overrideSpecifiedNames: boolean);
        
        public constructor($processDictionaryKeys: boolean, $overrideSpecifiedNames: boolean, $processExtensionDataNames: boolean);
        
        public constructor();
        
                    
    }
    
    class NamingStrategy extends System.Object {
        
        public get ProcessDictionaryKeys(): boolean;
        public set ProcessDictionaryKeys(value: boolean);
        
        public get ProcessExtensionDataNames(): boolean;
        public set ProcessExtensionDataNames(value: boolean);
        
        public get OverrideSpecifiedNames(): boolean;
        public set OverrideSpecifiedNames(value: boolean);
        
        public GetPropertyName($name: string, $hasSpecifiedName: boolean):string;
        
        public GetExtensionDataName($name: string):string;
        
        public GetDictionaryKey($key: string):string;
        
        public GetHashCode():number;
        
        public Equals($obj: any):boolean;
        
                    
    }
    
    class CamelCasePropertyNamesContractResolver extends DefaultContractResolver {
        
        public constructor();
        
                    
    }
    
    class DefaultContractResolver extends System.Object {
        
        public get DynamicCodeGeneration(): boolean;
        
        public get SerializeCompilerGeneratedMembers(): boolean;
        public set SerializeCompilerGeneratedMembers(value: boolean);
        
        public get IgnoreSerializableInterface(): boolean;
        public set IgnoreSerializableInterface(value: boolean);
        
        public get IgnoreSerializableAttribute(): boolean;
        public set IgnoreSerializableAttribute(value: boolean);
        
        public get IgnoreIsSpecifiedMembers(): boolean;
        public set IgnoreIsSpecifiedMembers(value: boolean);
        
        public get IgnoreShouldSerializeMembers(): boolean;
        public set IgnoreShouldSerializeMembers(value: boolean);
        
        public get NamingStrategy(): NamingStrategy;
        public set NamingStrategy(value: NamingStrategy);
        
        public constructor();
        
        public ResolveContract($type: System.Type):JsonContract;
        
        public GetResolvedPropertyName($propertyName: string):string;
        
                    
    }
    
    class JsonContract extends System.Object {
        
        public get UnderlyingType(): System.Type;
        
        public get CreatedType(): System.Type;
        public set CreatedType(value: System.Type);
        
        public get IsReference(): System.Nullable$1<boolean>;
        public set IsReference(value: System.Nullable$1<boolean>);
        
        public get Converter(): Newtonsoft_Json.JsonConverter;
        public set Converter(value: Newtonsoft_Json.JsonConverter);
        
        public get InternalConverter(): Newtonsoft_Json.JsonConverter;
        
        public get OnDeserializedCallbacks(): System_Collections_Generic.IList$1<SerializationCallback>;
        
        public get OnDeserializingCallbacks(): System_Collections_Generic.IList$1<SerializationCallback>;
        
        public get OnSerializedCallbacks(): System_Collections_Generic.IList$1<SerializationCallback>;
        
        public get OnSerializingCallbacks(): System_Collections_Generic.IList$1<SerializationCallback>;
        
        public get OnErrorCallbacks(): System_Collections_Generic.IList$1<SerializationErrorCallback>;
        
        public get DefaultCreator(): System.Func$1<any>;
        public set DefaultCreator(value: System.Func$1<any>);
        
        public get DefaultCreatorNonPublic(): boolean;
        public set DefaultCreatorNonPublic(value: boolean);
        
                    
    }
    
    class DefaultNamingStrategy extends NamingStrategy {
        
        public constructor();
        
                    
    }
    
    class DefaultSerializationBinder extends System_Runtime_Serialization.SerializationBinder {
        
        public constructor();
        
        public BindToType($assemblyName: string, $typeName: string):System.Type;
        
        public BindToName($serializedType: System.Type, $assemblyName: $Ref<string>, $typeName: $Ref<string>):void;
        
                    
    }
    
    class DiagnosticsTraceWriter extends System.Object {
        
        public get LevelFilter(): System_Diagnostics.TraceLevel;
        public set LevelFilter(value: System_Diagnostics.TraceLevel);
        
        public constructor();
        
        public Trace($level: System_Diagnostics.TraceLevel, $message: string, $ex: System.Exception):void;
        
                    
    }
    
    class ErrorContext extends System.Object {
        
        public get Error(): System.Exception;
        
        public get OriginalObject(): any;
        
        public get Member(): any;
        
        public get Path(): string;
        
        public get Handled(): boolean;
        public set Handled(value: boolean);
        
                    
    }
    
    class ExpressionValueProvider extends System.Object {
        
        public constructor($memberInfo: System_Reflection.MemberInfo);
        
        public SetValue($target: any, $value: any):void;
        
        public GetValue($target: any):any;
        
                    
    }
    
    interface IAttributeProvider {
        
        GetAttributes($inherit: boolean):System_Collections_Generic.IList$1<System.Attribute>;
        
        GetAttributes($attributeType: System.Type, $inherit: boolean):System_Collections_Generic.IList$1<System.Attribute>;
        
                    
    }
    
    interface IValueProvider {
        
        SetValue($target: any, $value: any):void;
        
        GetValue($target: any):any;
        
                    
    }
    
    class JsonArrayContract extends JsonContainerContract {
        
        public get CollectionItemType(): System.Type;
        
        public get IsMultidimensionalArray(): boolean;
        
        public get OverrideCreator(): ObjectConstructor$1<any>;
        public set OverrideCreator(value: ObjectConstructor$1<any>);
        
        public get HasParameterizedCreator(): boolean;
        public set HasParameterizedCreator(value: boolean);
        
        public constructor($underlyingType: System.Type);
        
                    
    }
    
    class JsonContainerContract extends JsonContract {
        
        public get ItemConverter(): Newtonsoft_Json.JsonConverter;
        public set ItemConverter(value: Newtonsoft_Json.JsonConverter);
        
        public get ItemIsReference(): System.Nullable$1<boolean>;
        public set ItemIsReference(value: System.Nullable$1<boolean>);
        
        public get ItemReferenceLoopHandling(): System.Nullable$1<Newtonsoft_Json.ReferenceLoopHandling>;
        public set ItemReferenceLoopHandling(value: System.Nullable$1<Newtonsoft_Json.ReferenceLoopHandling>);
        
        public get ItemTypeNameHandling(): System.Nullable$1<Newtonsoft_Json.TypeNameHandling>;
        public set ItemTypeNameHandling(value: System.Nullable$1<Newtonsoft_Json.TypeNameHandling>);
        
                    
    }
    
    type ObjectConstructor$1<T> = (args: any[]) => any;
    
    type SerializationCallback = (o: any, context: System_Runtime_Serialization.StreamingContext) => void;
    var SerializationCallback: {new (func: (o: any, context: System_Runtime_Serialization.StreamingContext) => void): SerializationCallback;}
    
    type SerializationErrorCallback = (o: any, context: System_Runtime_Serialization.StreamingContext, errorContext: ErrorContext) => void;
    var SerializationErrorCallback: {new (func: (o: any, context: System_Runtime_Serialization.StreamingContext, errorContext: ErrorContext) => void): SerializationErrorCallback;}
    
    type ExtensionDataSetter = (o: any, key: string, value: any) => void;
    var ExtensionDataSetter: {new (func: (o: any, key: string, value: any) => void): ExtensionDataSetter;}
    
    type ExtensionDataGetter = (o: any) => System_Collections_Generic.IEnumerable$1<System_Collections_Generic.KeyValuePair$2<any, any>>;
    var ExtensionDataGetter: {new (func: (o: any) => System_Collections_Generic.IEnumerable$1<System_Collections_Generic.KeyValuePair$2<any, any>>): ExtensionDataGetter;}
    
    class JsonDictionaryContract extends JsonContainerContract {
        
        public get DictionaryKeyResolver(): System.Func$2<string, string>;
        public set DictionaryKeyResolver(value: System.Func$2<string, string>);
        
        public get DictionaryKeyType(): System.Type;
        
        public get DictionaryValueType(): System.Type;
        
        public get OverrideCreator(): ObjectConstructor$1<any>;
        public set OverrideCreator(value: ObjectConstructor$1<any>);
        
        public get HasParameterizedCreator(): boolean;
        public set HasParameterizedCreator(value: boolean);
        
        public constructor($underlyingType: System.Type);
        
                    
    }
    
    class JsonDynamicContract extends JsonContainerContract {
        
        public get Properties(): JsonPropertyCollection;
        
        public get PropertyNameResolver(): System.Func$2<string, string>;
        public set PropertyNameResolver(value: System.Func$2<string, string>);
        
        public constructor($underlyingType: System.Type);
        
                    
    }
    
    class JsonPropertyCollection extends System_Collections_ObjectModel.KeyedCollection$2<string, Newtonsoft_Json_Serialization.JsonProperty> {
        
        public constructor($type: System.Type);
        
        public AddProperty($property: JsonProperty):void;
        
        public GetClosestMatchProperty($propertyName: string):JsonProperty;
        
        public GetProperty($propertyName: string, $comparisonType: System.StringComparison):JsonProperty;
        
                    
    }
    
    class JsonProperty extends System.Object {
        
        public get PropertyName(): string;
        public set PropertyName(value: string);
        
        public get DeclaringType(): System.Type;
        public set DeclaringType(value: System.Type);
        
        public get Order(): System.Nullable$1<number>;
        public set Order(value: System.Nullable$1<number>);
        
        public get UnderlyingName(): string;
        public set UnderlyingName(value: string);
        
        public get ValueProvider(): IValueProvider;
        public set ValueProvider(value: IValueProvider);
        
        public get AttributeProvider(): IAttributeProvider;
        public set AttributeProvider(value: IAttributeProvider);
        
        public get PropertyType(): System.Type;
        public set PropertyType(value: System.Type);
        
        public get Converter(): Newtonsoft_Json.JsonConverter;
        public set Converter(value: Newtonsoft_Json.JsonConverter);
        
        public get Ignored(): boolean;
        public set Ignored(value: boolean);
        
        public get Readable(): boolean;
        public set Readable(value: boolean);
        
        public get Writable(): boolean;
        public set Writable(value: boolean);
        
        public get HasMemberAttribute(): boolean;
        public set HasMemberAttribute(value: boolean);
        
        public get DefaultValue(): any;
        public set DefaultValue(value: any);
        
        public get Required(): Newtonsoft_Json.Required;
        public set Required(value: Newtonsoft_Json.Required);
        
        public get IsRequiredSpecified(): boolean;
        
        public get IsReference(): System.Nullable$1<boolean>;
        public set IsReference(value: System.Nullable$1<boolean>);
        
        public get NullValueHandling(): System.Nullable$1<Newtonsoft_Json.NullValueHandling>;
        public set NullValueHandling(value: System.Nullable$1<Newtonsoft_Json.NullValueHandling>);
        
        public get DefaultValueHandling(): System.Nullable$1<Newtonsoft_Json.DefaultValueHandling>;
        public set DefaultValueHandling(value: System.Nullable$1<Newtonsoft_Json.DefaultValueHandling>);
        
        public get ReferenceLoopHandling(): System.Nullable$1<Newtonsoft_Json.ReferenceLoopHandling>;
        public set ReferenceLoopHandling(value: System.Nullable$1<Newtonsoft_Json.ReferenceLoopHandling>);
        
        public get ObjectCreationHandling(): System.Nullable$1<Newtonsoft_Json.ObjectCreationHandling>;
        public set ObjectCreationHandling(value: System.Nullable$1<Newtonsoft_Json.ObjectCreationHandling>);
        
        public get TypeNameHandling(): System.Nullable$1<Newtonsoft_Json.TypeNameHandling>;
        public set TypeNameHandling(value: System.Nullable$1<Newtonsoft_Json.TypeNameHandling>);
        
        public get ShouldSerialize(): System.Predicate$1<any>;
        public set ShouldSerialize(value: System.Predicate$1<any>);
        
        public get ShouldDeserialize(): System.Predicate$1<any>;
        public set ShouldDeserialize(value: System.Predicate$1<any>);
        
        public get GetIsSpecified(): System.Predicate$1<any>;
        public set GetIsSpecified(value: System.Predicate$1<any>);
        
        public get SetIsSpecified(): System.Action$2<any, any>;
        public set SetIsSpecified(value: System.Action$2<any, any>);
        
        public get ItemConverter(): Newtonsoft_Json.JsonConverter;
        public set ItemConverter(value: Newtonsoft_Json.JsonConverter);
        
        public get ItemIsReference(): System.Nullable$1<boolean>;
        public set ItemIsReference(value: System.Nullable$1<boolean>);
        
        public get ItemTypeNameHandling(): System.Nullable$1<Newtonsoft_Json.TypeNameHandling>;
        public set ItemTypeNameHandling(value: System.Nullable$1<Newtonsoft_Json.TypeNameHandling>);
        
        public get ItemReferenceLoopHandling(): System.Nullable$1<Newtonsoft_Json.ReferenceLoopHandling>;
        public set ItemReferenceLoopHandling(value: System.Nullable$1<Newtonsoft_Json.ReferenceLoopHandling>);
        
        public constructor();
        
        public ToString():string;
        
                    
    }
    
    class JsonISerializableContract extends JsonContainerContract {
        
        public get ISerializableCreator(): ObjectConstructor$1<any>;
        public set ISerializableCreator(value: ObjectConstructor$1<any>);
        
        public constructor($underlyingType: System.Type);
        
                    
    }
    
    class JsonLinqContract extends JsonContract {
        
        public constructor($underlyingType: System.Type);
        
                    
    }
    
    class JsonObjectContract extends JsonContainerContract {
        
        public get MemberSerialization(): Newtonsoft_Json.MemberSerialization;
        public set MemberSerialization(value: Newtonsoft_Json.MemberSerialization);
        
        public get MissingMemberHandling(): System.Nullable$1<Newtonsoft_Json.MissingMemberHandling>;
        public set MissingMemberHandling(value: System.Nullable$1<Newtonsoft_Json.MissingMemberHandling>);
        
        public get ItemRequired(): System.Nullable$1<Newtonsoft_Json.Required>;
        public set ItemRequired(value: System.Nullable$1<Newtonsoft_Json.Required>);
        
        public get ItemNullValueHandling(): System.Nullable$1<Newtonsoft_Json.NullValueHandling>;
        public set ItemNullValueHandling(value: System.Nullable$1<Newtonsoft_Json.NullValueHandling>);
        
        public get Properties(): JsonPropertyCollection;
        
        public get CreatorParameters(): JsonPropertyCollection;
        
        public get OverrideCreator(): ObjectConstructor$1<any>;
        public set OverrideCreator(value: ObjectConstructor$1<any>);
        
        public get ExtensionDataSetter(): ExtensionDataSetter;
        public set ExtensionDataSetter(value: ExtensionDataSetter);
        
        public get ExtensionDataGetter(): ExtensionDataGetter;
        public set ExtensionDataGetter(value: ExtensionDataGetter);
        
        public get ExtensionDataValueType(): System.Type;
        public set ExtensionDataValueType(value: System.Type);
        
        public get ExtensionDataNameResolver(): System.Func$2<string, string>;
        public set ExtensionDataNameResolver(value: System.Func$2<string, string>);
        
        public constructor($underlyingType: System.Type);
        
                    
    }
    
    class JsonPrimitiveContract extends JsonContract {
        
        public constructor($underlyingType: System.Type);
        
                    
    }
    
    class JsonStringContract extends JsonPrimitiveContract {
        
        public constructor($underlyingType: System.Type);
        
        public constructor($underlyingType: System.Type);
        
                    
    }
    
    class KebabCaseNamingStrategy extends NamingStrategy {
        
        public constructor($processDictionaryKeys: boolean, $overrideSpecifiedNames: boolean);
        
        public constructor($processDictionaryKeys: boolean, $overrideSpecifiedNames: boolean, $processExtensionDataNames: boolean);
        
        public constructor();
        
                    
    }
    
    class MemoryTraceWriter extends System.Object {
        
        public get LevelFilter(): System_Diagnostics.TraceLevel;
        public set LevelFilter(value: System_Diagnostics.TraceLevel);
        
        public constructor();
        
        public Trace($level: System_Diagnostics.TraceLevel, $message: string, $ex: System.Exception):void;
        
        public GetTraceMessages():System_Collections_Generic.IEnumerable$1<string>;
        
        public ToString():string;
        
                    
    }
    
    class OnErrorAttribute extends System.Attribute {
        
        public constructor();
        
                    
    }
    
    class ReflectionAttributeProvider extends System.Object {
        
        public constructor($attributeProvider: any);
        
        public GetAttributes($inherit: boolean):System_Collections_Generic.IList$1<System.Attribute>;
        
        public GetAttributes($attributeType: System.Type, $inherit: boolean):System_Collections_Generic.IList$1<System.Attribute>;
        
                    
    }
    
    class ReflectionValueProvider extends System.Object {
        
        public constructor($memberInfo: System_Reflection.MemberInfo);
        
        public SetValue($target: any, $value: any):void;
        
        public GetValue($target: any):any;
        
                    
    }
    
    class SnakeCaseNamingStrategy extends NamingStrategy {
        
        public constructor($processDictionaryKeys: boolean, $overrideSpecifiedNames: boolean);
        
        public constructor($processDictionaryKeys: boolean, $overrideSpecifiedNames: boolean, $processExtensionDataNames: boolean);
        
        public constructor();
        
                    
    }
    
}
declare module 'System.Collections' {

        
    
    interface IEqualityComparer {
        
                    
    }
    
}
declare module 'System.Runtime.Serialization.Formatters' {

        
    
    enum FormatterAssemblyStyle { Simple = 0, Full = 1 }
    
}
declare module 'System.IO' {

    import * as System from 'System';
        
    
    interface TextReader extends System.MarshalByRefObject {
        
                    
    }
    
    interface TextWriter extends System.MarshalByRefObject {
        
                    
    }
    
}
declare module 'System.Collections.Generic' {

    import * as System from 'System';
    import * as Newtonsoft_Json_Linq from 'Newtonsoft.Json.Linq';
        
    
    interface IList$1<T> {
        
                    
    }
    
    interface KeyValuePair$2<TKey,TValue> extends System.ValueType {
        
                    
    }
    
    interface IEnumerable$1<T> {
        
                    
    }
    
    interface IEnumerator$1<T> {
        
                    
    }
    
    interface IEnumerable$1 {
        /** @extension Newtonsoft.Json.Linq.Extensions */
        Ancestors<T extends JToken>():IJEnumerable$1<JToken>;
        /** @extension Newtonsoft.Json.Linq.Extensions */
        AncestorsAndSelf<T extends JToken>():IJEnumerable$1<JToken>;
        /** @extension Newtonsoft.Json.Linq.Extensions */
        Descendants<T extends JContainer>():IJEnumerable$1<JToken>;
        /** @extension Newtonsoft.Json.Linq.Extensions */
        DescendantsAndSelf<T extends JContainer>():IJEnumerable$1<JToken>;
        /** @extension Newtonsoft.Json.Linq.Extensions */
        Properties():IJEnumerable$1<JProperty>;
        /** @extension Newtonsoft.Json.Linq.Extensions */
        Values($key: any):IJEnumerable$1<JToken>;
        /** @extension Newtonsoft.Json.Linq.Extensions */
        Values():IJEnumerable$1<JToken>;
        /** @extension Newtonsoft.Json.Linq.Extensions */
        Values<U>($key: any):System_Collections_Generic.IEnumerable$1<U>;
        /** @extension Newtonsoft.Json.Linq.Extensions */
        Values<U>():System_Collections_Generic.IEnumerable$1<U>;
        /** @extension Newtonsoft.Json.Linq.Extensions */
        Value<U>():U;
        /** @extension Newtonsoft.Json.Linq.Extensions */
        AsJEnumerable():IJEnumerable$1<JToken>;
        /** @extension Newtonsoft.Json.Linq.Extensions */
        Value<T extends JToken,U>():U;
        /** @extension Newtonsoft.Json.Linq.Extensions */
        Children<T extends JToken>():IJEnumerable$1<JToken>;
        /** @extension Newtonsoft.Json.Linq.Extensions */
        Children<T extends JToken,U>():System_Collections_Generic.IEnumerable$1<U>;
        /** @extension Newtonsoft.Json.Linq.Extensions */
        AsJEnumerable<T extends JToken>():IJEnumerable$1<T>;
        
                    
    }
    
}
declare module 'Newtonsoft.Json.Utilities' {

    import * as System from 'System';
        
    
    class AotHelper extends System.Object {
        
        public static Ensure($action: System.Action):void;
        
        public static EnsureType<T>():void;
        
        public static EnsureList<T>():void;
        
        public static EnsureDictionary<TKey,TValue>():void;
        
        public static IsFalse():boolean;
        
                    
    }
    
}
declare module 'System.Diagnostics' {

        
    
    enum TraceLevel { Off = 0, Error = 1, Warning = 2, Info = 3, Verbose = 4 }
    
}
declare module 'Newtonsoft.Json.Linq' {

    import * as System from 'System';
    import * as System_Collections_Generic from 'System.Collections.Generic';
    import * as System_Threading_Tasks from 'System.Threading.Tasks';
    import * as Newtonsoft_Json from 'Newtonsoft.Json';
    import * as System_Threading from 'System.Threading';
    import * as System_ComponentModel from 'System.ComponentModel';
    import * as System_Collections_Specialized from 'System.Collections.Specialized';
        
    
    enum CommentHandling { Ignore = 0, Load = 1 }
    
    enum DuplicatePropertyNameHandling { Replace = 0, Ignore = 1, Error = 2 }
    
    class Extensions extends System.Object {
        
        public static Ancestors<T extends JToken>($source: System_Collections_Generic.IEnumerable$1<T>):IJEnumerable$1<JToken>;
        
        public static AncestorsAndSelf<T extends JToken>($source: System_Collections_Generic.IEnumerable$1<T>):IJEnumerable$1<JToken>;
        
        public static Descendants<T extends JContainer>($source: System_Collections_Generic.IEnumerable$1<T>):IJEnumerable$1<JToken>;
        
        public static DescendantsAndSelf<T extends JContainer>($source: System_Collections_Generic.IEnumerable$1<T>):IJEnumerable$1<JToken>;
        
        public static Properties($source: System_Collections_Generic.IEnumerable$1<JObject>):IJEnumerable$1<JProperty>;
        
        public static Values($source: System_Collections_Generic.IEnumerable$1<JToken>, $key: any):IJEnumerable$1<JToken>;
        
        public static Values($source: System_Collections_Generic.IEnumerable$1<JToken>):IJEnumerable$1<JToken>;
        
        public static Values<U>($source: System_Collections_Generic.IEnumerable$1<JToken>, $key: any):System_Collections_Generic.IEnumerable$1<U>;
        
        public static Values<U>($source: System_Collections_Generic.IEnumerable$1<JToken>):System_Collections_Generic.IEnumerable$1<U>;
        
        public static Value<U>($value: System_Collections_Generic.IEnumerable$1<JToken>):U;
        
        public static Value<T extends JToken,U>($value: System_Collections_Generic.IEnumerable$1<T>):U;
        
        public static Children<T extends JToken>($source: System_Collections_Generic.IEnumerable$1<T>):IJEnumerable$1<JToken>;
        
        public static Children<T extends JToken,U>($source: System_Collections_Generic.IEnumerable$1<T>):System_Collections_Generic.IEnumerable$1<U>;
        
        public static AsJEnumerable($source: System_Collections_Generic.IEnumerable$1<JToken>):IJEnumerable$1<JToken>;
        
        public static AsJEnumerable<T extends JToken>($source: System_Collections_Generic.IEnumerable$1<T>):IJEnumerable$1<T>;
        
                    
    }
    
    class JToken extends System.Object {
        
        public static get EqualityComparer(): JTokenEqualityComparer;
        
        public get Parent(): JContainer;
        
        public get Root(): JToken;
        
        public get Type(): JTokenType;
        
        public get HasValues(): boolean;
        
        public get Next(): JToken;
        
        public get Previous(): JToken;
        
        public get Path(): string;
        
        public get First(): JToken;
        
        public get Last(): JToken;
        
        public WriteToAsync($writer: Newtonsoft_Json.JsonWriter, $cancellationToken: System_Threading.CancellationToken, ...converters: Newtonsoft_Json.JsonConverter[]):System_Threading_Tasks.Task;
        
        public WriteToAsync($writer: Newtonsoft_Json.JsonWriter, ...converters: Newtonsoft_Json.JsonConverter[]):System_Threading_Tasks.Task;
        
        public static ReadFromAsync($reader: Newtonsoft_Json.JsonReader, $cancellationToken?: System_Threading.CancellationToken):System_Threading_Tasks.Task$1<JToken>;
        
        public static ReadFromAsync($reader: Newtonsoft_Json.JsonReader, $settings: JsonLoadSettings, $cancellationToken?: System_Threading.CancellationToken):System_Threading_Tasks.Task$1<JToken>;
        
        public static LoadAsync($reader: Newtonsoft_Json.JsonReader, $cancellationToken?: System_Threading.CancellationToken):System_Threading_Tasks.Task$1<JToken>;
        
        public static LoadAsync($reader: Newtonsoft_Json.JsonReader, $settings: JsonLoadSettings, $cancellationToken?: System_Threading.CancellationToken):System_Threading_Tasks.Task$1<JToken>;
        
        public static DeepEquals($t1: JToken, $t2: JToken):boolean;
        
        public AddAfterSelf($content: any):void;
        
        public AddBeforeSelf($content: any):void;
        
        public Ancestors():System_Collections_Generic.IEnumerable$1<JToken>;
        
        public AncestorsAndSelf():System_Collections_Generic.IEnumerable$1<JToken>;
        
        public AfterSelf():System_Collections_Generic.IEnumerable$1<JToken>;
        
        public BeforeSelf():System_Collections_Generic.IEnumerable$1<JToken>;
        
        public get_Item($key: any):JToken;
        
        public set_Item($key: any, $value: JToken):void;
        
        public Value<T>($key: any):T;
        
        public Children():JEnumerable$1<JToken>;
        
        public Children<T extends JToken>():JEnumerable$1<T>;
        
        public Values<T>():System_Collections_Generic.IEnumerable$1<T>;
        
        public Remove():void;
        
        public Replace($value: JToken):void;
        
        public WriteTo($writer: Newtonsoft_Json.JsonWriter, ...converters: Newtonsoft_Json.JsonConverter[]):void;
        
        public ToString():string;
        
        public ToString($formatting: Newtonsoft_Json.Formatting, ...converters: Newtonsoft_Json.JsonConverter[]):string;
        
        public static op_Explicit($value: JToken):boolean;
        
        public static op_Explicit($value: JToken):System.DateTimeOffset;
        
        public static op_Explicit($value: JToken):System.Nullable$1<boolean>;
        
        public static op_Explicit($value: JToken):bigint;
        
        public static op_Explicit($value: JToken):System.Nullable$1<Date>;
        
        public static op_Explicit($value: JToken):System.Nullable$1<System.DateTimeOffset>;
        
        public static op_Explicit($value: JToken):System.Nullable$1<System.Decimal>;
        
        public static op_Explicit($value: JToken):System.Nullable$1<number>;
        
        public static op_Explicit($value: JToken):System.Nullable$1<number>;
        
        public static op_Explicit($value: JToken):number;
        
        public static op_Explicit($value: JToken):number;
        
        public static op_Explicit($value: JToken):number;
        
        public static op_Explicit($value: JToken):number;
        
        public static op_Explicit($value: JToken):number;
        
        public static op_Explicit($value: JToken):number;
        
        public static op_Explicit($value: JToken):System.Nullable$1<number>;
        
        public static op_Explicit($value: JToken):System.Nullable$1<number>;
        
        public static op_Explicit($value: JToken):System.Nullable$1<number>;
        
        public static op_Explicit($value: JToken):System.Nullable$1<number>;
        
        public static op_Explicit($value: JToken):System.Nullable$1<number>;
        
        public static op_Explicit($value: JToken):Date;
        
        public static op_Explicit($value: JToken):System.Nullable$1<bigint>;
        
        public static op_Explicit($value: JToken):System.Nullable$1<number>;
        
        public static op_Explicit($value: JToken):System.Decimal;
        
        public static op_Explicit($value: JToken):System.Nullable$1<number>;
        
        public static op_Explicit($value: JToken):System.Nullable$1<bigint>;
        
        public static op_Explicit($value: JToken):number;
        
        public static op_Explicit($value: JToken):number;
        
        public static op_Explicit($value: JToken):string;
        
        public static op_Explicit($value: JToken):number;
        
        public static op_Explicit($value: JToken):bigint;
        
        public static op_Explicit($value: JToken):number[];
        
        public static op_Explicit($value: JToken):System.Guid;
        
        public static op_Explicit($value: JToken):System.Nullable$1<System.Guid>;
        
        public static op_Explicit($value: JToken):System.TimeSpan;
        
        public static op_Explicit($value: JToken):System.Nullable$1<System.TimeSpan>;
        
        public static op_Explicit($value: JToken):System.Uri;
        
        public static op_Implicit($value: boolean):JToken;
        
        public static op_Implicit($value: System.DateTimeOffset):JToken;
        
        public static op_Implicit($value: number):JToken;
        
        public static op_Implicit($value: System.Nullable$1<number>):JToken;
        
        public static op_Implicit($value: number):JToken;
        
        public static op_Implicit($value: System.Nullable$1<number>):JToken;
        
        public static op_Implicit($value: System.Nullable$1<boolean>):JToken;
        
        public static op_Implicit($value: bigint):JToken;
        
        public static op_Implicit($value: System.Nullable$1<Date>):JToken;
        
        public static op_Implicit($value: System.Nullable$1<System.DateTimeOffset>):JToken;
        
        public static op_Implicit($value: System.Nullable$1<System.Decimal>):JToken;
        
        public static op_Implicit($value: System.Nullable$1<number>):JToken;
        
        public static op_Implicit($value: number):JToken;
        
        public static op_Implicit($value: number):JToken;
        
        public static op_Implicit($value: number):JToken;
        
        public static op_Implicit($value: System.Nullable$1<number>):JToken;
        
        public static op_Implicit($value: Date):JToken;
        
        public static op_Implicit($value: System.Nullable$1<bigint>):JToken;
        
        public static op_Implicit($value: System.Nullable$1<number>):JToken;
        
        public static op_Implicit($value: System.Decimal):JToken;
        
        public static op_Implicit($value: System.Nullable$1<number>):JToken;
        
        public static op_Implicit($value: System.Nullable$1<number>):JToken;
        
        public static op_Implicit($value: System.Nullable$1<number>):JToken;
        
        public static op_Implicit($value: System.Nullable$1<bigint>):JToken;
        
        public static op_Implicit($value: number):JToken;
        
        public static op_Implicit($value: number):JToken;
        
        public static op_Implicit($value: string):JToken;
        
        public static op_Implicit($value: number):JToken;
        
        public static op_Implicit($value: bigint):JToken;
        
        public static op_Implicit($value: number[]):JToken;
        
        public static op_Implicit($value: System.Uri):JToken;
        
        public static op_Implicit($value: System.TimeSpan):JToken;
        
        public static op_Implicit($value: System.Nullable$1<System.TimeSpan>):JToken;
        
        public static op_Implicit($value: System.Guid):JToken;
        
        public static op_Implicit($value: System.Nullable$1<System.Guid>):JToken;
        
        public CreateReader():Newtonsoft_Json.JsonReader;
        
        public static FromObject($o: any):JToken;
        
        public static FromObject($o: any, $jsonSerializer: Newtonsoft_Json.JsonSerializer):JToken;
        
        public ToObject<T>():T;
        
        public ToObject($objectType: System.Type):any;
        
        public ToObject<T>($jsonSerializer: Newtonsoft_Json.JsonSerializer):T;
        
        public ToObject($objectType: System.Type, $jsonSerializer: Newtonsoft_Json.JsonSerializer):any;
        
        public static ReadFrom($reader: Newtonsoft_Json.JsonReader):JToken;
        
        public static ReadFrom($reader: Newtonsoft_Json.JsonReader, $settings: JsonLoadSettings):JToken;
        
        public static Parse($json: string):JToken;
        
        public static Parse($json: string, $settings: JsonLoadSettings):JToken;
        
        public static Load($reader: Newtonsoft_Json.JsonReader, $settings: JsonLoadSettings):JToken;
        
        public static Load($reader: Newtonsoft_Json.JsonReader):JToken;
        
        public SelectToken($path: string):JToken;
        
        public SelectToken($path: string, $errorWhenNoMatch: boolean):JToken;
        
        public SelectTokens($path: string):System_Collections_Generic.IEnumerable$1<JToken>;
        
        public SelectTokens($path: string, $errorWhenNoMatch: boolean):System_Collections_Generic.IEnumerable$1<JToken>;
        
        public DeepClone():JToken;
        
        public AddAnnotation($annotation: any):void;
        
        public Annotation<T>():T;
        
        public Annotation($type: System.Type):any;
        
        public Annotations<T>():System_Collections_Generic.IEnumerable$1<T>;
        
        public Annotations($type: System.Type):System_Collections_Generic.IEnumerable$1<any>;
        
        public RemoveAnnotations<T>():void;
        
        public RemoveAnnotations($type: System.Type):void;
        
                    
    }
    
    interface IJEnumerable$1<T> {
        
                    
    }
    
    class JContainer extends JToken {
        
        public get HasValues(): boolean;
        
        public get First(): JToken;
        
        public get Last(): JToken;
        
        public get Count(): number;
        
        public add_ListChanged($value: System_ComponentModel.ListChangedEventHandler):void;
        
        public remove_ListChanged($value: System_ComponentModel.ListChangedEventHandler):void;
        
        public add_AddingNew($value: System_ComponentModel.AddingNewEventHandler):void;
        
        public remove_AddingNew($value: System_ComponentModel.AddingNewEventHandler):void;
        
        public add_CollectionChanged($value: System_Collections_Specialized.NotifyCollectionChangedEventHandler):void;
        
        public remove_CollectionChanged($value: System_Collections_Specialized.NotifyCollectionChangedEventHandler):void;
        
        public Descendants():System_Collections_Generic.IEnumerable$1<JToken>;
        
        public DescendantsAndSelf():System_Collections_Generic.IEnumerable$1<JToken>;
        
        public Add($content: any):void;
        
        public AddFirst($content: any):void;
        
        public CreateWriter():Newtonsoft_Json.JsonWriter;
        
        public ReplaceAll($content: any):void;
        
        public RemoveAll():void;
        
        public Merge($content: any):void;
        
        public Merge($content: any, $settings: JsonMergeSettings):void;
        
        public ListChanged;
        
        public AddingNew;
        
        public CollectionChanged;
        
                    
    }
    
    class JProperty extends JContainer {
        
        public get Name(): string;
        
        public get Value(): JToken;
        public set Value(value: JToken);
        
        public get Type(): JTokenType;
        
        public constructor($other: JProperty);
        
        public constructor($name: string, ...content: any[]);
        
        public constructor($name: string, $content: any);
        
        public static LoadAsync($reader: Newtonsoft_Json.JsonReader, $cancellationToken?: System_Threading.CancellationToken):System_Threading_Tasks.Task$1<JProperty>;
        
        public static LoadAsync($reader: Newtonsoft_Json.JsonReader, $settings: JsonLoadSettings, $cancellationToken?: System_Threading.CancellationToken):System_Threading_Tasks.Task$1<JProperty>;
        
        public static Load($reader: Newtonsoft_Json.JsonReader):JProperty;
        
        public static Load($reader: Newtonsoft_Json.JsonReader, $settings: JsonLoadSettings):JProperty;
        
        public static LoadAsync($reader: Newtonsoft_Json.JsonReader, $cancellationToken?: System_Threading.CancellationToken):System_Threading_Tasks.Task$1<JToken>;
        
        public static LoadAsync($reader: Newtonsoft_Json.JsonReader, $settings: JsonLoadSettings, $cancellationToken?: System_Threading.CancellationToken):System_Threading_Tasks.Task$1<JToken>;
        
        public static Load($reader: Newtonsoft_Json.JsonReader, $settings: JsonLoadSettings):JToken;
        
        public static Load($reader: Newtonsoft_Json.JsonReader):JToken;
        
                    
    }
    
    class JObject extends JContainer {
        
        public get Type(): JTokenType;
        
        public constructor();
        
        public constructor($other: JObject);
        
        public constructor(...content: any[]);
        
        public constructor($content: any);
        
        public static LoadAsync($reader: Newtonsoft_Json.JsonReader, $cancellationToken?: System_Threading.CancellationToken):System_Threading_Tasks.Task$1<JObject>;
        
        public static LoadAsync($reader: Newtonsoft_Json.JsonReader, $settings: JsonLoadSettings, $cancellationToken?: System_Threading.CancellationToken):System_Threading_Tasks.Task$1<JObject>;
        
        public add_PropertyChanged($value: System_ComponentModel.PropertyChangedEventHandler):void;
        
        public remove_PropertyChanged($value: System_ComponentModel.PropertyChangedEventHandler):void;
        
        public add_PropertyChanging($value: System_ComponentModel.PropertyChangingEventHandler):void;
        
        public remove_PropertyChanging($value: System_ComponentModel.PropertyChangingEventHandler):void;
        
        public Properties():System_Collections_Generic.IEnumerable$1<JProperty>;
        
        public Property($name: string):JProperty;
        
        public Property($name: string, $comparison: System.StringComparison):JProperty;
        
        public PropertyValues():JEnumerable$1<JToken>;
        
        public get_Item($key: any):JToken;
        
        public set_Item($key: any, $value: JToken):void;
        
        public get_Item($propertyName: string):JToken;
        
        public set_Item($propertyName: string, $value: JToken):void;
        
        public static Load($reader: Newtonsoft_Json.JsonReader):JObject;
        
        public static Load($reader: Newtonsoft_Json.JsonReader, $settings: JsonLoadSettings):JObject;
        
        public static Parse($json: string):JObject;
        
        public static Parse($json: string, $settings: JsonLoadSettings):JObject;
        
        public static FromObject($o: any):JObject;
        
        public static FromObject($o: any, $jsonSerializer: Newtonsoft_Json.JsonSerializer):JObject;
        
        public GetValue($propertyName: string):JToken;
        
        public GetValue($propertyName: string, $comparison: System.StringComparison):JToken;
        
        public TryGetValue($propertyName: string, $comparison: System.StringComparison, $value: $Ref<JToken>):boolean;
        
        public Add($propertyName: string, $value: JToken):void;
        
        public ContainsKey($propertyName: string):boolean;
        
        public Remove($propertyName: string):boolean;
        
        public TryGetValue($propertyName: string, $value: $Ref<JToken>):boolean;
        
        public GetEnumerator():System_Collections_Generic.IEnumerator$1<System_Collections_Generic.KeyValuePair$2<string, JToken>>;
        
        public Add($content: any):void;
        
        public Remove():void;
        
        public Add($content: any):void;
        
        public static LoadAsync($reader: Newtonsoft_Json.JsonReader, $cancellationToken?: System_Threading.CancellationToken):System_Threading_Tasks.Task$1<JToken>;
        
        public static LoadAsync($reader: Newtonsoft_Json.JsonReader, $settings: JsonLoadSettings, $cancellationToken?: System_Threading.CancellationToken):System_Threading_Tasks.Task$1<JToken>;
        
        public get_Item($key: any):JToken;
        
        public set_Item($key: any, $value: JToken):void;
        
        public static FromObject($o: any):JToken;
        
        public static FromObject($o: any, $jsonSerializer: Newtonsoft_Json.JsonSerializer):JToken;
        
        public static Parse($json: string):JToken;
        
        public static Parse($json: string, $settings: JsonLoadSettings):JToken;
        
        public static Load($reader: Newtonsoft_Json.JsonReader, $settings: JsonLoadSettings):JToken;
        
        public static Load($reader: Newtonsoft_Json.JsonReader):JToken;
        
        public PropertyChanged;
        
        public PropertyChanging;
        
                    
    }
    
    class JArray extends JContainer {
        
        public get Type(): JTokenType;
        
        public get IsReadOnly(): boolean;
        
        public constructor();
        
        public constructor($other: JArray);
        
        public constructor(...content: any[]);
        
        public constructor($content: any);
        
        public static LoadAsync($reader: Newtonsoft_Json.JsonReader, $cancellationToken?: System_Threading.CancellationToken):System_Threading_Tasks.Task$1<JArray>;
        
        public static LoadAsync($reader: Newtonsoft_Json.JsonReader, $settings: JsonLoadSettings, $cancellationToken?: System_Threading.CancellationToken):System_Threading_Tasks.Task$1<JArray>;
        
        public static Load($reader: Newtonsoft_Json.JsonReader):JArray;
        
        public static Load($reader: Newtonsoft_Json.JsonReader, $settings: JsonLoadSettings):JArray;
        
        public static Parse($json: string):JArray;
        
        public static Parse($json: string, $settings: JsonLoadSettings):JArray;
        
        public static FromObject($o: any):JArray;
        
        public static FromObject($o: any, $jsonSerializer: Newtonsoft_Json.JsonSerializer):JArray;
        
        public get_Item($key: any):JToken;
        
        public set_Item($key: any, $value: JToken):void;
        
        public get_Item($index: number):JToken;
        
        public set_Item($index: number, $value: JToken):void;
        
        public IndexOf($item: JToken):number;
        
        public Insert($index: number, $item: JToken):void;
        
        public RemoveAt($index: number):void;
        
        public GetEnumerator():System_Collections_Generic.IEnumerator$1<JToken>;
        
        public Add($item: JToken):void;
        
        public Clear():void;
        
        public Contains($item: JToken):boolean;
        
        public CopyTo($array: JToken[], $arrayIndex: number):void;
        
        public Remove($item: JToken):boolean;
        
        public Add($content: any):void;
        
        public Remove():void;
        
        public Add($content: any):void;
        
        public static LoadAsync($reader: Newtonsoft_Json.JsonReader, $cancellationToken?: System_Threading.CancellationToken):System_Threading_Tasks.Task$1<JToken>;
        
        public static LoadAsync($reader: Newtonsoft_Json.JsonReader, $settings: JsonLoadSettings, $cancellationToken?: System_Threading.CancellationToken):System_Threading_Tasks.Task$1<JToken>;
        
        public get_Item($key: any):JToken;
        
        public set_Item($key: any, $value: JToken):void;
        
        public static FromObject($o: any):JToken;
        
        public static FromObject($o: any, $jsonSerializer: Newtonsoft_Json.JsonSerializer):JToken;
        
        public static Parse($json: string):JToken;
        
        public static Parse($json: string, $settings: JsonLoadSettings):JToken;
        
        public static Load($reader: Newtonsoft_Json.JsonReader, $settings: JsonLoadSettings):JToken;
        
        public static Load($reader: Newtonsoft_Json.JsonReader):JToken;
        
                    
    }
    
    class JsonLoadSettings extends System.Object {
        
        public get CommentHandling(): CommentHandling;
        public set CommentHandling(value: CommentHandling);
        
        public get LineInfoHandling(): LineInfoHandling;
        public set LineInfoHandling(value: LineInfoHandling);
        
        public get DuplicatePropertyNameHandling(): DuplicatePropertyNameHandling;
        public set DuplicatePropertyNameHandling(value: DuplicatePropertyNameHandling);
        
        public constructor();
        
                    
    }
    
    enum JTokenType { None = 0, Object = 1, Array = 2, Constructor = 3, Property = 4, Comment = 5, Integer = 6, Float = 7, String = 8, Boolean = 9, Null = 10, Undefined = 11, Date = 12, Raw = 13, Bytes = 14, Guid = 15, Uri = 16, TimeSpan = 17 }
    
    class JConstructor extends JContainer {
        
        public get Name(): string;
        public set Name(value: string);
        
        public get Type(): JTokenType;
        
        public constructor();
        
        public constructor($other: JConstructor);
        
        public constructor($name: string, ...content: any[]);
        
        public constructor($name: string, $content: any);
        
        public constructor($name: string);
        
        public static LoadAsync($reader: Newtonsoft_Json.JsonReader, $cancellationToken?: System_Threading.CancellationToken):System_Threading_Tasks.Task$1<JConstructor>;
        
        public static LoadAsync($reader: Newtonsoft_Json.JsonReader, $settings: JsonLoadSettings, $cancellationToken?: System_Threading.CancellationToken):System_Threading_Tasks.Task$1<JConstructor>;
        
        public static Load($reader: Newtonsoft_Json.JsonReader):JConstructor;
        
        public static Load($reader: Newtonsoft_Json.JsonReader, $settings: JsonLoadSettings):JConstructor;
        
        public static LoadAsync($reader: Newtonsoft_Json.JsonReader, $cancellationToken?: System_Threading.CancellationToken):System_Threading_Tasks.Task$1<JToken>;
        
        public static LoadAsync($reader: Newtonsoft_Json.JsonReader, $settings: JsonLoadSettings, $cancellationToken?: System_Threading.CancellationToken):System_Threading_Tasks.Task$1<JToken>;
        
        public static Load($reader: Newtonsoft_Json.JsonReader, $settings: JsonLoadSettings):JToken;
        
        public static Load($reader: Newtonsoft_Json.JsonReader):JToken;
        
                    
    }
    
    interface JEnumerable$1<T> extends System.ValueType {
        
                    
    }
    
    class JsonMergeSettings extends System.Object {
        
        public get MergeArrayHandling(): MergeArrayHandling;
        public set MergeArrayHandling(value: MergeArrayHandling);
        
        public get MergeNullValueHandling(): MergeNullValueHandling;
        public set MergeNullValueHandling(value: MergeNullValueHandling);
        
        public get PropertyNameComparison(): System.StringComparison;
        public set PropertyNameComparison(value: System.StringComparison);
        
        public constructor();
        
                    
    }
    
    class JPropertyDescriptor extends System_ComponentModel.PropertyDescriptor {
        
        public get ComponentType(): System.Type;
        
        public get IsReadOnly(): boolean;
        
        public get PropertyType(): System.Type;
        
        public constructor($name: string);
        
        public CanResetValue($component: any):boolean;
        
        public GetValue($component: any):any;
        
        public ResetValue($component: any):void;
        
        public SetValue($component: any, $value: any):void;
        
        public ShouldSerializeValue($component: any):boolean;
        
                    
    }
    
    class JRaw extends JValue {
        
        public constructor($other: JRaw);
        
        public constructor($rawJson: any);
        
        public static CreateAsync($reader: Newtonsoft_Json.JsonReader, $cancellationToken?: System_Threading.CancellationToken):System_Threading_Tasks.Task$1<JRaw>;
        
        public static Create($reader: Newtonsoft_Json.JsonReader):JRaw;
        
        public constructor($other: JValue);
        
        public constructor($value: bigint);
        
        public constructor($value: System.Decimal);
        
        public constructor($value: number);
        
        public constructor($value: bigint);
        
        public constructor($value: number);
        
        public constructor($value: number);
        
        public constructor($value: Date);
        
        public constructor($value: System.DateTimeOffset);
        
        public constructor($value: boolean);
        
        public constructor($value: string);
        
        public constructor($value: System.Guid);
        
        public constructor($value: System.Uri);
        
        public constructor($value: System.TimeSpan);
        
        public constructor($value: any);
        
                    
    }
    
    class JValue extends JToken {
        
        public get HasValues(): boolean;
        
        public get Type(): JTokenType;
        
        public get Value(): any;
        public set Value(value: any);
        
        public constructor($other: JValue);
        
        public constructor($value: bigint);
        
        public constructor($value: System.Decimal);
        
        public constructor($value: number);
        
        public constructor($value: bigint);
        
        public constructor($value: number);
        
        public constructor($value: number);
        
        public constructor($value: Date);
        
        public constructor($value: System.DateTimeOffset);
        
        public constructor($value: boolean);
        
        public constructor($value: string);
        
        public constructor($value: System.Guid);
        
        public constructor($value: System.Uri);
        
        public constructor($value: System.TimeSpan);
        
        public constructor($value: any);
        
        public static CreateComment($value: string):JValue;
        
        public static CreateString($value: string):JValue;
        
        public static CreateNull():JValue;
        
        public static CreateUndefined():JValue;
        
        public Equals($other: JValue):boolean;
        
        public Equals($obj: any):boolean;
        
        public GetHashCode():number;
        
        public ToString():string;
        
        public ToString($format: string):string;
        
        public ToString($formatProvider: System.IFormatProvider):string;
        
        public ToString($format: string, $formatProvider: System.IFormatProvider):string;
        
        public CompareTo($obj: JValue):number;
        
        public ToString($formatting: Newtonsoft_Json.Formatting, ...converters: Newtonsoft_Json.JsonConverter[]):string;
        
        public ToString($formatting: Newtonsoft_Json.Formatting, ...converters: Newtonsoft_Json.JsonConverter[]):string;
        
                    
    }
    
    enum LineInfoHandling { Ignore = 0, Load = 1 }
    
    enum MergeArrayHandling { Concat = 0, Union = 1, Replace = 2, Merge = 3 }
    
    enum MergeNullValueHandling { Ignore = 0, Merge = 1 }
    
    class JTokenEqualityComparer extends System.Object {
        
        public constructor();
        
        public Equals($x: JToken, $y: JToken):boolean;
        
        public GetHashCode($obj: JToken):number;
        
                    
    }
    
    class JTokenReader extends Newtonsoft_Json.JsonReader {
        
        public get CurrentToken(): JToken;
        
        public get Path(): string;
        
        public constructor($token: JToken);
        
        public constructor($token: JToken, $initialPath: string);
        
                    
    }
    
    class JTokenWriter extends Newtonsoft_Json.JsonWriter {
        
        public get CurrentToken(): JToken;
        
        public get Token(): JToken;
        
        public constructor($container: JContainer);
        
        public constructor();
        
                    
    }
    
}
declare module 'System.ComponentModel' {

    import * as System from 'System';
        
    
    type ListChangedEventHandler = (sender: any, e: ListChangedEventArgs) => void;
    var ListChangedEventHandler: {new (func: (sender: any, e: ListChangedEventArgs) => void): ListChangedEventHandler;}
    
    interface ListChangedEventArgs extends System.EventArgs {
        
                    
    }
    
    type AddingNewEventHandler = (sender: any, e: AddingNewEventArgs) => void;
    var AddingNewEventHandler: {new (func: (sender: any, e: AddingNewEventArgs) => void): AddingNewEventHandler;}
    
    interface AddingNewEventArgs extends System.EventArgs {
        
                    
    }
    
    type PropertyChangedEventHandler = (sender: any, e: PropertyChangedEventArgs) => void;
    var PropertyChangedEventHandler: {new (func: (sender: any, e: PropertyChangedEventArgs) => void): PropertyChangedEventHandler;}
    
    interface PropertyChangedEventArgs extends System.EventArgs {
        
                    
    }
    
    type PropertyChangingEventHandler = (sender: any, e: PropertyChangingEventArgs) => void;
    var PropertyChangingEventHandler: {new (func: (sender: any, e: PropertyChangingEventArgs) => void): PropertyChangingEventHandler;}
    
    interface PropertyChangingEventArgs extends System.EventArgs {
        
                    
    }
    
    interface PropertyDescriptor extends MemberDescriptor {
        
                    
    }
    
    interface MemberDescriptor extends System.Object {
        
                    
    }
    
}
declare module 'System.Collections.Specialized' {

    import * as System from 'System';
        
    
    type NotifyCollectionChangedEventHandler = (sender: any, e: NotifyCollectionChangedEventArgs) => void;
    var NotifyCollectionChangedEventHandler: {new (func: (sender: any, e: NotifyCollectionChangedEventArgs) => void): NotifyCollectionChangedEventHandler;}
    
    interface NotifyCollectionChangedEventArgs extends System.EventArgs {
        
                    
    }
    
}
declare module 'Newtonsoft.Json.Converters' {

    import * as Newtonsoft_Json from 'Newtonsoft.Json';
    import * as System from 'System';
    import * as System_Globalization from 'System.Globalization';
    import * as Newtonsoft_Json_Serialization from 'Newtonsoft.Json.Serialization';
        
    
    class BinaryConverter extends Newtonsoft_Json.JsonConverter {
        
        public constructor();
        
                    
    }
    
    class DataSetConverter extends Newtonsoft_Json.JsonConverter {
        
        public constructor();
        
                    
    }
    
    class DataTableConverter extends Newtonsoft_Json.JsonConverter {
        
        public constructor();
        
                    
    }
    
    class DateTimeConverterBase extends Newtonsoft_Json.JsonConverter {
        
                    
    }
    
    class DiscriminatedUnionConverter extends Newtonsoft_Json.JsonConverter {
        
        public constructor();
        
                    
    }
    
    class EntityKeyMemberConverter extends Newtonsoft_Json.JsonConverter {
        
        public constructor();
        
                    
    }
    
    class ExpandoObjectConverter extends Newtonsoft_Json.JsonConverter {
        
        public get CanWrite(): boolean;
        
        public constructor();
        
                    
    }
    
    class IsoDateTimeConverter extends DateTimeConverterBase {
        
        public get DateTimeStyles(): System_Globalization.DateTimeStyles;
        public set DateTimeStyles(value: System_Globalization.DateTimeStyles);
        
        public get DateTimeFormat(): string;
        public set DateTimeFormat(value: string);
        
        public get Culture(): System_Globalization.CultureInfo;
        public set Culture(value: System_Globalization.CultureInfo);
        
        public constructor();
        
                    
    }
    
    class JavaScriptDateTimeConverter extends DateTimeConverterBase {
        
        public constructor();
        
                    
    }
    
    class KeyValuePairConverter extends Newtonsoft_Json.JsonConverter {
        
        public constructor();
        
                    
    }
    
    class RegexConverter extends Newtonsoft_Json.JsonConverter {
        
        public constructor();
        
                    
    }
    
    class StringEnumConverter extends Newtonsoft_Json.JsonConverter {
        
        public get NamingStrategy(): Newtonsoft_Json_Serialization.NamingStrategy;
        public set NamingStrategy(value: Newtonsoft_Json_Serialization.NamingStrategy);
        
        public get AllowIntegerValues(): boolean;
        public set AllowIntegerValues(value: boolean);
        
        public constructor();
        
        public constructor($namingStrategy: Newtonsoft_Json_Serialization.NamingStrategy, $allowIntegerValues?: boolean);
        
        public constructor($namingStrategyType: System.Type);
        
        public constructor($namingStrategyType: System.Type, $namingStrategyParameters: any[]);
        
        public constructor($namingStrategyType: System.Type, $namingStrategyParameters: any[], $allowIntegerValues: boolean);
        
                    
    }
    
    class UnixDateTimeConverter extends DateTimeConverterBase {
        
        public constructor();
        
                    
    }
    
    class VersionConverter extends Newtonsoft_Json.JsonConverter {
        
        public constructor();
        
                    
    }
    
    class XmlNodeConverter extends Newtonsoft_Json.JsonConverter {
        
        public get DeserializeRootElementName(): string;
        public set DeserializeRootElementName(value: string);
        
        public get WriteArrayAttribute(): boolean;
        public set WriteArrayAttribute(value: boolean);
        
        public get OmitRootObject(): boolean;
        public set OmitRootObject(value: boolean);
        
        public get EncodeSpecialCharacters(): boolean;
        public set EncodeSpecialCharacters(value: boolean);
        
        public constructor();
        
                    
    }
    
}

