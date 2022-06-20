import * as bech32 from 'bech32';
import { config } from '../../config';
import { Address } from './address';
/**
 * ValAddress
 */
export class ValAddress extends Address {
    /**
     *
     */
    toString() {
        const words = bech32.toWords(Buffer.from(this._value));
        return bech32.encode(config.bech32Prefix.valAddr, words);
    }
    /**
     * For `JSON.stringify`
     */
    toJSON() {
        return this.toString();
    }
    /**
     *
     * @param valAddress
     */
    static fromString(valAddress) {
        const { words } = bech32.decode(valAddress);
        return new ValAddress(new Uint8Array(bech32.fromWords(words)));
    }
    static fromPublicKey(pubKey) {
        return new ValAddress(pubKey.address());
    }
}
Address.prototype.toValAddress = function () {
    return new ValAddress(this.value());
};
