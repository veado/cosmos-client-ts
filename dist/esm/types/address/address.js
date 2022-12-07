/**
 * Base class
 */
export class Address {
    _value;
    /**
     *
     * @param value
     */
    constructor(value) {
        const addressLength = 20;
        if (value.length !== addressLength) {
            throw Error('Address must be 20 bytes length.');
        }
        this._value = value;
    }
    value() {
        return this._value;
    }
    /**
     *
     * @param pubKey
     */
    static fromPublicKey(pubKey) {
        return new Address(pubKey.address());
    }
}
