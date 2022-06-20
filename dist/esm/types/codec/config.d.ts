import { ProtoMessage } from './module';
export declare const codecMaps: {
    constructor: {
        [type: string]: ProtoMessage;
    };
    inv: Map<ProtoMessage, string>;
    convertJSON: Map<ProtoMessage, (value: any) => any>;
};
