import { cosmos } from '../proto';
import { CosmosSDK } from '../sdk';
import Long from 'long';
export declare class TxBuilder {
    private sdk;
    txRaw: cosmos.tx.v1beta1.TxRaw;
    constructor(sdk: CosmosSDK, body: cosmos.tx.v1beta1.TxBody, authInfo: cosmos.tx.v1beta1.AuthInfo);
    signDoc(accountNumber?: number | Long): cosmos.tx.v1beta1.SignDoc;
    signDocBytes(accountNumber?: number | Long): Uint8Array;
    /**
     * The order of signatures must be same to the declared order in authInfo.
     * @param signature
     */
    addSignature(signature: Uint8Array): void;
    /**
     * Permutation of signatures must be same to the declared permutation in modeInfo.
     * @param signatures
     * @param modeInfo
     * @returns
     */
    createSignatureOfMultisig(signatures: (Uint8Array | null)[], modeInfo: cosmos.tx.v1beta1.ModeInfo.IMulti): Uint8Array | Error;
    /**
     * @link BroadcastTxRequest
     */
    txBytes(): string;
    toProtoJSON(): unknown;
    protoJSONStringify(space?: number): string;
}
