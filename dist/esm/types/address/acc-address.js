import * as bech32 from 'bech32';
import { config } from '../../config/';
import { Address } from './address';
/**
 * AccAddress
 */
export class AccAddress extends Address {
    /**
     *
     */
    toString() {
        const words = bech32.toWords(Buffer.from(this._value));
        return bech32.encode(config.bech32Prefix.accAddr, words);
    }
    /**
     * For `JSON.stringify`
     */
    toJSON() {
        return this.toString();
    }
    /**
     *
     * @param accAddress
     */
    static fromString(accAddress) {
        const { words } = bech32.decode(accAddress);
        return new AccAddress(new Uint8Array(bech32.fromWords(words)));
    }
    static fromPublicKey(pubKey) {
        return new AccAddress(pubKey.address());
    }
}
Address.prototype.toAccAddress = function () {
    return new AccAddress(this.value());
};
