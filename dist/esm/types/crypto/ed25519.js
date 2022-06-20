import { config } from '../../config/';
import { cosmos } from '../../proto';
import * as bech32 from 'bech32';
import * as crypto from 'crypto';
import * as nacl from 'tweetnacl';
/* eslint-enable */
// PrivKey
cosmos.crypto.ed25519.PrivKey.prototype.bytes = function () {
    return this.key;
};
cosmos.crypto.ed25519.PrivKey.prototype.sign = function (message) {
    const keypair = nacl.sign.keyPair.fromSeed(this.key);
    return nacl.sign(message, keypair.secretKey);
};
cosmos.crypto.ed25519.PrivKey.prototype.pubKey = function () {
    const slicedKey = this.key.slice(0, 32);
    const keypair = nacl.sign.keyPair.fromSeed(slicedKey);
    return new cosmos.crypto.ed25519.PubKey({ key: keypair.publicKey });
};
// PubKey
cosmos.crypto.ed25519.PubKey.prototype.bytes = function () {
    return this.key;
};
cosmos.crypto.ed25519.PubKey.prototype.verify = function (_, sig) {
    return nacl.sign.open(sig, this.key) !== null;
};
cosmos.crypto.ed25519.PubKey.prototype.address = function () {
    const hash = crypto.createHash('sha256').update(this.key).digest();
    return new Uint8Array(hash.subarray(0, 20));
};
cosmos.crypto.ed25519.PubKey.prototype.accPubkey = function () {
    //Todo: calculate prefix from base128Varints
    const prefix = new Uint8Array([22, 36, 222, 100, 32]);
    const mergedKey = new Uint8Array(prefix.length + this.key.length);
    mergedKey.set(prefix);
    mergedKey.set(this.key, prefix.length);
    const words = bech32.toWords(Buffer.from(mergedKey));
    return bech32.encode(config.bech32Prefix.consPub, words);
};
