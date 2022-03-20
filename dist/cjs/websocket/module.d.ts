import { WebSocketSubject } from 'rxjs/webSocket';
declare type BaseSchema = {
    id: '1';
    jsonrpc: '2.0';
};
export declare type RequestSchema = BaseSchema & {
    method: 'subscribe' | 'unsubscribe' | 'unsubscribe_all';
    params: string[];
};
export declare type ResponseSchema = BaseSchema & {
    result?: any;
    error?: string;
};
export declare function connect(url: string): WebSocketSubject<RequestSchema | ResponseSchema>;
export {};
