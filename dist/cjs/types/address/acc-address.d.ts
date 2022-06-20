import { PubKey } from '../crypto';
import { Address } from './address';
/**
 * AccAddress
 */
export declare class AccAddress extends Address {
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
     * @param accAddress
     */
    static fromString(accAddress: string): AccAddress;
    static fromPublicKey(pubKey: PubKey): AccAddress;
}
declare module './address' {
    interface Address {
        toAccAddress(): AccAddress;
    }
}
