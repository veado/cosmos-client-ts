import { PubKey } from '../crypto';
import { Address } from './address';
/**
 * ConsAddress
 */
export declare class ConsAddress extends Address {
    /**
     *
     */
    toString(): string;
    /**
     * For `JSON.stringify`
     */
    toJSON(): string;
    /**
     *
     * @param consAddress
     */
    static fromString(consAddress: string): ConsAddress;
    static fromPublicKey(pubKey: PubKey): ConsAddress;
}
declare module './address' {
    interface Address {
        toConsAddress(): ConsAddress;
    }
}
