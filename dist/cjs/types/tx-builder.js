"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TxBuilder = void 0;
var _1 = require(".");
var proto_1 = require("../proto");
var long_1 = __importDefault(require("long"));
var TxBuilder = /** @class */ (function () {
    function TxBuilder(sdk, body, authInfo) {
        this.sdk = sdk;
        var bodyBytes = proto_1.cosmos.tx.v1beta1.TxBody.encode(body).finish();
        var authInfoBytes = proto_1.cosmos.tx.v1beta1.AuthInfo.encode(authInfo).finish();
        this.txRaw = new proto_1.cosmos.tx.v1beta1.TxRaw({
            body_bytes: bodyBytes,
            auth_info_bytes: authInfoBytes,
            signatures: [],
        });
    }
    TxBuilder.prototype.signDoc = function (accountNumber) {
        if (typeof accountNumber === 'number') {
            accountNumber = long_1.default.fromNumber(accountNumber);
        }
        var signDoc = new proto_1.cosmos.tx.v1beta1.SignDoc({
            body_bytes: this.txRaw.body_bytes,
            auth_info_bytes: this.txRaw.auth_info_bytes,
            chain_id: this.sdk.chainID,
            account_number: (accountNumber === null || accountNumber === void 0 ? void 0 : accountNumber.isZero()) ? null : accountNumber,
        });
        return signDoc;
    };
    TxBuilder.prototype.signDocBytes = function (accountNumber) {
        return proto_1.cosmos.tx.v1beta1.SignDoc.encode(this.signDoc(accountNumber)).finish();
    };
    /**
     * The order of signatures must be same to the declared order in authInfo.
     * @param signature
     */
    TxBuilder.prototype.addSignature = function (signature) {
        this.txRaw.signatures.push(signature);
    };
    /**
     * Permutation of signatures must be same to the declared permutation in modeInfo.
     * @param signatures
     * @param modeInfo
     * @returns
     */
    TxBuilder.prototype.createSignatureOfMultisig = function (signatures, modeInfo) {
        var _a;
        var bitArray = proto_1.cosmos.crypto.multisig.v1beta1.CompactBitArray.from(signatures.map(function (sig) { return !!sig; }));
        if ((bitArray === null || bitArray === void 0 ? void 0 : bitArray.elems) !== ((_a = modeInfo.bitarray) === null || _a === void 0 ? void 0 : _a.elems)) {
            return Error('Permutation of signatures is different from the declared permutation in modeInfo');
        }
        var multiSignature = new proto_1.cosmos.crypto.multisig.v1beta1.MultiSignature({
            signatures: signatures.filter(function (sig) { return !!sig; }),
        });
        var bundledSignature = proto_1.cosmos.crypto.multisig.v1beta1.MultiSignature.encode(multiSignature).finish();
        return bundledSignature;
    };
    /**
     * @link BroadcastTxRequest
     */
    TxBuilder.prototype.txBytes = function () {
        var bytes = proto_1.cosmos.tx.v1beta1.TxRaw.encode(this.txRaw).finish();
        return Buffer.from(bytes).toString('base64');
    };
    TxBuilder.prototype.toProtoJSON = function () {
        var body = proto_1.cosmos.tx.v1beta1.TxBody.decode(this.txRaw.body_bytes);
        var authInfo = proto_1.cosmos.tx.v1beta1.AuthInfo.decode(this.txRaw.auth_info_bytes);
        return _1.codec.instanceToProtoJSON(new proto_1.cosmos.tx.v1beta1.Tx({
            body: body,
            auth_info: authInfo,
            signatures: this.txRaw.signatures,
        }));
    };
    TxBuilder.prototype.protoJSONStringify = function (space) {
        return JSON.stringify(this.toProtoJSON(), undefined, space);
    };
    return TxBuilder;
}());
exports.TxBuilder = TxBuilder;
