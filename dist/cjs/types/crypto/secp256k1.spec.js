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
var __1 = require("../..");
var crypto = __importStar(require("crypto"));
var secp256k1 = __importStar(require("secp256k1"));
describe('secp256k1', function () {
    it('verify', function () {
        expect.hasAssertions();
        var bytes = crypto.randomBytes(32);
        var key = new __1.proto.cosmos.crypto.secp256k1.PrivKey({ key: bytes });
        var pubkey = key.pubKey();
        var address = __1.cosmosclient.AccAddress.fromPublicKey(pubkey);
        var str = address.toString();
        console.log(str);
        var data = 'hogefugafoobar';
        var msg = Buffer.from(data, 'utf-8');
        var hash = crypto.createHash('sha256').update(msg).digest();
        var signature = secp256k1.ecdsaSign(hash, bytes).signature;
        var pbk = secp256k1.publicKeyCreate(bytes);
        expect(secp256k1.ecdsaVerify(signature, hash, pbk)).toBeTruthy();
        var sig = key.sign(msg);
        expect(pubkey.verify(msg, sig)).toBeTruthy();
    });
});
