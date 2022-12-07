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
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("../../config/");
var proto_1 = require("../../proto");
var bech32 = __importStar(require("bech32"));
var crypto = __importStar(require("crypto"));
var secp256k1 = __importStar(require("secp256k1"));
/* eslint-enable */
// PrivKey
proto_1.cosmos.crypto.secp256k1.PrivKey.prototype.bytes = function () {
    return this.key;
};
proto_1.cosmos.crypto.secp256k1.PrivKey.prototype.sign = function (message) {
    var hash = crypto.createHash('sha256').update(message).digest();
    var signature = secp256k1.ecdsaSign(hash, this.key).signature;
    return signature;
};
proto_1.cosmos.crypto.secp256k1.PrivKey.prototype.pubKey = function () {
    return new proto_1.cosmos.crypto.secp256k1.PubKey({
        key: secp256k1.publicKeyCreate(this.key),
    });
};
// PubKey
proto_1.cosmos.crypto.secp256k1.PubKey.prototype.bytes = function () {
    return this.key;
};
proto_1.cosmos.crypto.secp256k1.PubKey.prototype.verify = function (msg, sig) {
    var hash = crypto.createHash('sha256').update(msg).digest();
    return secp256k1.ecdsaVerify(sig, new Uint8Array(hash), this.key);
};
proto_1.cosmos.crypto.secp256k1.PubKey.prototype.address = function () {
    return new Uint8Array(hash160(this.key));
};
proto_1.cosmos.crypto.secp256k1.PubKey.prototype.accPubkey = function () {
    //Todo: calculate prefix from base128Varints
    var prefix = new Uint8Array([235, 90, 233, 135, 33]);
    var mergedKey = new Uint8Array(prefix.length + this.key.length);
    mergedKey.set(prefix);
    mergedKey.set(this.key, prefix.length);
    var words = bech32.toWords(Buffer.from(mergedKey));
    return bech32.encode(config_1.config.bech32Prefix.accPub, words);
};
function hash160(buffer) {
    var sha256Hash = crypto.createHash('sha256').update(buffer).digest();
    try {
        return crypto.createHash('rmd160').update(sha256Hash).digest();
    }
    catch (err) {
        return crypto.createHash('ripemd160').update(sha256Hash).digest();
    }
}
