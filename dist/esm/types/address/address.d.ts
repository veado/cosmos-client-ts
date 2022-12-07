import { PubKey } from '../crypto';
/**
 * Base class
 */
export declare class Address {
    protected _value: Uint8Array;
    /**
     *
     * @param value
     */
    constructor(value: Uint8Array);
    value(): Uint8Array;
    /**
     *
     * @param pubKey
     */
    static fromPublicKey(pubKey: PubKey): Address;
}
