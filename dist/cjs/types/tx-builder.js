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
    TxBuilder.prototype.addSignature = function (sig) {
        this.txRaw.signatures.push(sig);
    };
    /**
     * @link BroadcastTxRequest
     */
    TxBuilder.prototype.txBytes = function () {
        var bytes = proto_1.cosmos.tx.v1beta1.TxRaw.encode(this.txRaw).finish();
        return Buffer.from(bytes).toString('base64');
    };
    TxBuilder.prototype.cosmosJSONStringify = function (space) {
        var body = proto_1.cosmos.tx.v1beta1.TxBody.decode(this.txRaw.body_bytes);
        var authInfo = proto_1.cosmos.tx.v1beta1.AuthInfo.decode(this.txRaw.auth_info_bytes);
        return JSON.stringify(_1.codec.packCosmosAny({
            body: body,
            auth_info: authInfo,
            signatures: this.txRaw.signatures,
        }), undefined, space);
    };
    return TxBuilder;
}());
exports.TxBuilder = TxBuilder;
