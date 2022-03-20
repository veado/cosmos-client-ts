import { google } from '../../proto';
import * as $protobuf from 'protobufjs';
export declare function register(type: string, constructor: Function & {
    encode(value: any): $protobuf.Writer;
    decode(value: Uint8Array): unknown;
    fromObject(object: any): any;
}): void;
/**
 * CosmosAny -> Instance
 * @param value
 * @returns
 */
export declare function unpackCosmosAny(value: any): unknown;
/**
 * Instance -> CosmosAny
 * @param value
 * @returns
 */
export declare function packCosmosAny(value: any): Object;
/**
 * CosmosAny -> Any
 * @param value
 */
export declare function packAnyFromCosmosJSON(value: any): any;
/**
 * Any -> Instance
 * @param value
 */
export declare function unpackAny(value?: google.protobuf.IAny | null): unknown;
/**
 * Instance -> Any
 * @param value
 * @returns
 */
export declare function packAny(value: any): google.protobuf.Any;
export declare function goTimeStringToJsDate(goTimeString: string): Date;
export declare function jsDateToGoTimeString(jsDate: Date): string;
export declare function jsDateToProtobufTimestamp(jsDate: Date): google.protobuf.Timestamp;
export declare function protobufTimestampToJsDate(protobufTimestamp: google.protobuf.Timestamp): Date;
