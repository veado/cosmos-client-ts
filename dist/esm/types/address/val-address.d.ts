import { PubKey } from '../crypto';
import { Address } from './address';
/**
 * ValAddress
 */
export declare class ValAddress extends Address {
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
     * @param valAddress
     */
    static fromString(valAddress: string): ValAddress;
    static fromPublicKey(pubKey: PubKey): ValAddress;
}
declare module './address' {
    interface Address {
        toValAddress(): ValAddress;
    }
}
