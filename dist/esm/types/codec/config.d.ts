import * as $protobuf from 'protobufjs';
export declare const codecMaps: {
    inv: Map<Function, string>;
    encode: {
        [type: string]: (value: any) => $protobuf.Writer;
    };
    decode: {
        [type: string]: (value: Uint8Array) => unknown;
    };
    fromObject: {
        [type: string]: (value: any) => unknown;
    };
};
