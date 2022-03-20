"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Address = void 0;
/**
 * Base class
 */
var Address = /** @class */ (function () {
    /**
     *
     * @param value
     */
    function Address(value) {
        var addressLength = 20;
        if (value.length !== addressLength) {
            throw Error('Address must be 20 bytes length.');
        }
        this._value = value;
    }
    Address.prototype.value = function () {
        return this._value;
    };
    /**
     *
     * @param pubKey
     */
    Address.fromPublicKey = function (pubKey) {
        return new Address(pubKey.address());
    };
    return Address;
}());
exports.Address = Address;
