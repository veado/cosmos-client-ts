import { cosmos } from '../proto';
import { CosmosSDK } from '../sdk';
import Long from 'long';
export declare class TxBuilder {
    private sdk;
    txRaw: cosmos.tx.v1beta1.TxRaw;
    constructor(sdk: CosmosSDK, body: cosmos.tx.v1beta1.TxBody, authInfo: cosmos.tx.v1beta1.AuthInfo);
    signDoc(accountNumber?: number | Long): cosmos.tx.v1beta1.SignDoc;
    signDocBytes(accountNumber?: number | Long): Uint8Array;
    addSignature(sig: Uint8Array): void;
    /**
     * @link BroadcastTxRequest
     */
    txBytes(): string;
    cosmosJSONStringify(space?: number): string;
}
