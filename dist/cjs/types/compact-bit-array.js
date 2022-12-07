"use strict";
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var proto_1 = require("../proto");
/* eslint-enable */
proto_1.cosmos.crypto.multisig.v1beta1.CompactBitArray.empty = function (bitLength) {
    if (!Number.isInteger(bitLength) || bitLength <= 0) {
        return null;
    }
    var nElems = (bitLength + 7) / 8;
    if (nElems <= 0 || nElems > Number.MAX_SAFE_INTEGER) {
        return null;
    }
    return new proto_1.cosmos.crypto.multisig.v1beta1.CompactBitArray({
        extra_bits_stored: bitLength % 8,
        elems: new Uint8Array(nElems),
    });
};
proto_1.cosmos.crypto.multisig.v1beta1.CompactBitArray.from = function (value) {
    var e_1, _a;
    var array = this.empty(value.length);
    if (!array) {
        return null;
    }
    try {
        for (var _b = __values(value.entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
            var _d = __read(_c.value, 2), i = _d[0], v = _d[1];
            array.setIndex(i, v);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return array;
};
proto_1.cosmos.crypto.multisig.v1beta1.CompactBitArray.prototype.count = function () {
    if (this.extra_bits_stored == 0) {
        return this.elems.length * 8;
    }
    return (this.elems.length - 1) * 8 + this.extra_bits_stored;
};
proto_1.cosmos.crypto.multisig.v1beta1.CompactBitArray.prototype.getIndex = function (i) {
    if (i < 0 || i >= this.count()) {
        return false;
    }
    return (this.elems[i >> 3] & (1 << (7 - (i % 8)))) > 0;
};
proto_1.cosmos.crypto.multisig.v1beta1.CompactBitArray.prototype.setIndex = function (i, v) {
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
