"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
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
Object.defineProperty(exports, "__esModule", { value: true });
var proto_1 = require("../../proto");
var codec_1 = require("../codec");
var crypto = __importStar(require("crypto"));
/* eslint-enable */
function encodeUvarint(value) {
    if (!Number.isInteger(value)) {
        throw Error('Not integer');
    }
    if (value < 0) {
        throw Error('The value must be unsigned');
    }
    if (value > 127) {
        throw Error('The value greater than 127 is not supported');
    }
    return new Uint8Array([value]);
}
function encodeAminoPubkey(pubkey) {
    var e_1, _a;
    if (pubkey instanceof proto_1.cosmos.crypto.ed25519.PubKey) {
        return new Uint8Array(__spreadArray([0x16, 0x24, 0xde, 0x64, 0x20], __read(pubkey.key), false));
    }
    else if (pubkey instanceof proto_1.cosmos.crypto.secp256k1.PubKey) {
        return new Uint8Array(__spreadArray([0xeb, 0x5a, 0xe9, 0x87, 0x21], __read(pubkey.key), false));
    }
    else if (pubkey instanceof proto_1.cosmos.crypto.multisig.LegacyAminoPubKey) {
        var array = [];
        array.push.apply(array, [0x22, 0xc1, 0xf7, 0xe2]);
        array.push(0x08); // TODO: What is this?
        array.push.apply(// TODO: What is this?
        array, __spreadArray([], __read(encodeUvarint(pubkey.threshold)), false));
        try {
            for (var _b = __values(pubkey.public_keys.map(function (key) { return encodeAminoPubkey(codec_1.codec.protoAnyToInstance(key)); })), _c = _b.next(); !_c.done; _c = _b.next()) {
                var keyData = _c.value;
                array.push(0x12); // TODO: What is this?
                array.push.apply(// TODO: What is this?
                array, __spreadArray([], __read(encodeUvarint(keyData.length)), false));
                array.push.apply(array, __spreadArray([], __read(keyData), false));
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return new Uint8Array(array);
    }
    throw Error('Unsupported type for multisig key');
}
proto_1.cosmos.crypto.multisig.LegacyAminoPubKey.prototype.bytes = function () {
    return encodeAminoPubkey(this);
};
proto_1.cosmos.crypto.multisig.LegacyAminoPubKey.prototype.verify = function (_, sig) {
    throw Error('Not implemented');
};
proto_1.cosmos.crypto.multisig.LegacyAminoPubKey.prototype.address = function () {
    var hash = crypto.createHash('sha256').update(this.bytes()).digest();
    return new Uint8Array(hash.subarray(0, 20));
};
proto_1.cosmos.crypto.multisig.LegacyAminoPubKey.prototype.accPubkey = function () {
    throw Error('Not implemented');
};
