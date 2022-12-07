import { cosmos } from '../proto';
/* eslint-enable */
cosmos.crypto.multisig.v1beta1.CompactBitArray.empty = function (bitLength) {
    if (!Number.isInteger(bitLength) || bitLength <= 0) {
        return null;
    }
    const nElems = (bitLength + 7) / 8;
    if (nElems <= 0 || nElems > Number.MAX_SAFE_INTEGER) {
        return null;
    }
    return new cosmos.crypto.multisig.v1beta1.CompactBitArray({
        extra_bits_stored: bitLength % 8,
        elems: new Uint8Array(nElems),
    });
};
cosmos.crypto.multisig.v1beta1.CompactBitArray.from = function (value) {
    const array = this.empty(value.length);
    if (!array) {
        return null;
    }
    for (const [i, v] of value.entries()) {
        array.setIndex(i, v);
    }
    return array;
};
cosmos.crypto.multisig.v1beta1.CompactBitArray.prototype.count = function () {
    if (this.extra_bits_stored == 0) {
        return this.elems.length * 8;
    }
    return (this.elems.length - 1) * 8 + this.extra_bits_stored;
};
cosmos.crypto.multisig.v1beta1.CompactBitArray.prototype.getIndex = function (i) {
    if (i < 0 || i >= this.count()) {
        return false;
    }
    return (this.elems[i >> 3] & (1 << (7 - (i % 8)))) > 0;
};
cosmos.crypto.multisig.v1beta1.CompactBitArray.prototype.setIndex = function (i, v) {
    if (i < 0 || i >= this.count()) {
        return false;
    }
    if (v) {
        this.elems[i >> 3] |= 1 << (7 - (i % 8));
    }
    else {
        this.elems[i >> 3] &= ~(1 << (7 - (i % 8)));
    }
    return true;
};
