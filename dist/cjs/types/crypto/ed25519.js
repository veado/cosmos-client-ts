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
var nacl = __importStar(require("tweetnacl"));
/* eslint-enable */
// PrivKey
proto_1.cosmos.crypto.ed25519.PrivKey.prototype.bytes = function () {
    return this.key;
};
proto_1.cosmos.crypto.ed25519.PrivKey.prototype.sign = function (message) {
    var keypair = nacl.sign.keyPair.fromSeed(this.key);
    return nacl.sign(message, keypair.secretKey);
};
proto_1.cosmos.crypto.ed25519.PrivKey.prototype.pubKey = function () {
    var slicedKey = this.key.slice(0, 32);
    var keypair = nacl.sign.keyPair.fromSeed(slicedKey);
    return new proto_1.cosmos.crypto.ed25519.PubKey({ key: keypair.publicKey });
};
// PubKey
proto_1.cosmos.crypto.ed25519.PubKey.prototype.bytes = function () {
    return this.key;
};
proto_1.cosmos.crypto.ed25519.PubKey.prototype.verify = function (_, sig) {
    return nacl.sign.open(sig, this.key) !== null;
};
proto_1.cosmos.crypto.ed25519.PubKey.prototype.address = function () {
    var hash = crypto.createHash('sha256').update(this.key).digest();
    return new Uint8Array(hash.subarray(0, 20));
};
proto_1.cosmos.crypto.ed25519.PubKey.prototype.accPubkey = function () {
    //Todo: calculate prefix from base128Varints
    var prefix = new Uint8Array([22, 36, 222, 100, 32]);
    var mergedKey = new Uint8Array(prefix.length + this.key.length);
    mergedKey.set(prefix);
    mergedKey.set(this.key, prefix.length);
    var words = bech32.toWords(Buffer.from(mergedKey));
    return bech32.encode(config_1.config.bech32Prefix.consPub, words);
};
