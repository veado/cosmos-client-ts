import { google } from '../../proto';
import * as $protobuf from 'protobufjs';
export declare type ProtoJSONOfProtoAny = object & {
    '@type': string;
};
export declare type ProtoMessage = Function & {
    encode(value: any): $protobuf.Writer;
    decode(value: Uint8Array): unknown;
    fromObject(object: any): any;
    toObject(object: any, option?: any): any;
};
export declare function register(typeURL: string, constructor: ProtoMessage): void;
export declare function registerConvertJSON(constructor: ProtoMessage, converter: (value: any) => any): void;
export declare function castProtoJSONOfProtoAny(value: {
    type_url?: string;
    value?: string;
} | null | undefined): ProtoJSONOfProtoAny | null | undefined;
export declare function isProtoJSONOfProtoAny(value: unknown): value is ProtoJSONOfProtoAny;
export declare function isProtoJSONOfProtoAnyArray(value: unknown): value is ProtoJSONOfProtoAny[];
/**
 * Instance -> ProtoJSON
 * @param value
 * @returns
 */
export declare function instanceToProtoJSON(value: unknown): unknown;
/**
 * ProtoJSON -> Instance
 * @param value
 * @returns
 */
export declare function protoJSONToInstance<T>(value: ProtoJSONOfProtoAny | null | undefined): T | Error;
/**
 * ProtoAny -> Instance
 * @param value
 */
export declare function protoAnyToInstance(value: google.protobuf.IAny | null | undefined): unknown;
/**
 * Instance -> ProtoAny
 * @param value
 * @returns
 */
export declare function instanceToProtoAny(value: {
    constructor: Function;
}): google.protobuf.Any;
export declare function goTimeStringToJsDate(goTimeString: string): Date;
export declare function jsDateToGoTimeString(jsDate: Date): string;
export declare function jsDateToProtobufTimestamp(jsDate: Date): google.protobuf.Timestamp;
export declare function protobufTimestampToJsDate(protobufTimestamp: google.protobuf.Timestamp): Date;
export declare function canonicalizeJSON(value: any): any;
