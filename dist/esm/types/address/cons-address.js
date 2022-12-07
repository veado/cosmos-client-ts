import * as bech32 from 'bech32';
import { config } from '../../config';
import { Address } from './address';
/**
 * ConsAddress
 */
export class ConsAddress extends Address {
    /**
     *
     */
    toString() {
        const words = bech32.toWords(Buffer.from(this._value));
        return bech32.encode(config.bech32Prefix.consAddr, words);
    }
    /**
     * For `JSON.stringify`
     */
    toJSON() {
        return this.toString();
    }
    /**
     *
     * @param consAddress
     */
    static fromString(consAddress) {
        const { words } = bech32.decode(consAddress);
        return new ConsAddress(new Uint8Array(bech32.fromWords(words)));
    }
    static fromPublicKey(pubKey) {
        return new ConsAddress(pubKey.address());
    }
}
Address.prototype.toConsAddress = function () {
    return new ConsAddress(this.value());
};
