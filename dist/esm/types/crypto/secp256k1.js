import { cosmos } from '../../proto';
import * as crypto from 'crypto';
import * as secp256k1 from 'secp256k1';
// PrivKey
cosmos.crypto.secp256k1.PrivKey.prototype.bytes = function () {
    return this.key;
};
cosmos.crypto.secp256k1.PrivKey.prototype.sign = function (message) {
    const hash = crypto.createHash('sha256').update(message).digest();
    const signature = secp256k1.ecdsaSign(hash, this.key).signature;
    return signature;
};
cosmos.crypto.secp256k1.PrivKey.prototype.pubKey = function () {
    return new cosmos.crypto.secp256k1.PubKey({
        key: secp256k1.publicKeyCreate(this.key),
    });
};
// PubKey
cosmos.crypto.secp256k1.PubKey.prototype.bytes = function () {
    return this.key;
};
cosmos.crypto.secp256k1.PubKey.prototype.verify = function (msg, sig) {
    const hash = crypto.createHash('sha256').update(msg).digest();
    return secp256k1.ecdsaVerify(sig, new Uint8Array(hash), this.key);
};
cosmos.crypto.secp256k1.PubKey.prototype.address = function () {
    return new Uint8Array(hash160(this.key));
};
function hash160(buffer) {
    const sha256Hash = crypto.createHash('sha256').update(buffer).digest();
    try {
        return crypto.createHash('rmd160').update(sha256Hash).digest();
    }
    catch (err) {
        return crypto.createHash('ripemd160').update(sha256Hash).digest();
    }
}
