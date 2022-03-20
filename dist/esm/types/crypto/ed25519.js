import { cosmos } from '../../proto';
import * as crypto from 'crypto';
import * as nacl from 'tweetnacl';
// PrivKey
cosmos.crypto.ed25519.PrivKey.prototype.bytes = function () {
    return this.key;
};
cosmos.crypto.ed25519.PrivKey.prototype.sign = function (message) {
    const keypair = nacl.sign.keyPair.fromSeed(this.key);
    return nacl.sign(message, keypair.secretKey);
};
cosmos.crypto.ed25519.PrivKey.prototype.pubKey = function () {
    const keypair = nacl.sign.keyPair.fromSeed(this.key);
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
