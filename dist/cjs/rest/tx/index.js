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
exports.tx = void 0;
var proto_1 = require("../../proto");
var types_1 = require("../../types");
exports.tx = __importStar(require("./module"));
types_1.codec.register('/cosmos.tx.v1beta1.AuthInfo', proto_1.cosmos.tx.v1beta1.AuthInfo);
types_1.codec.register('/cosmos.tx.v1beta1.Fee', proto_1.cosmos.tx.v1beta1.Fee);
types_1.codec.register('/cosmos.tx.v1beta1.ModeInfo', proto_1.cosmos.tx.v1beta1.ModeInfo);
types_1.codec.register('/cosmos.tx.v1beta1.SignDoc', proto_1.cosmos.tx.v1beta1.SignDoc);
types_1.codec.register('/cosmos.tx.v1beta1.SignerInfo', proto_1.cosmos.tx.v1beta1.SignerInfo);
types_1.codec.register('/cosmos.tx.v1beta1.Tx', proto_1.cosmos.tx.v1beta1.Tx);
types_1.codec.register('/cosmos.tx.v1beta1.TxBody', proto_1.cosmos.tx.v1beta1.TxBody);
types_1.codec.register('/cosmos.tx.v1beta1.TxRaw', proto_1.cosmos.tx.v1beta1.TxRaw);
types_1.codec.registerConvertJSON(proto_1.cosmos.tx.v1beta1.ModeInfo, function (value) {
    if (value === null || value === void 0 ? void 0 : value.single) {
        value.single.mode = proto_1.cosmos.tx.signing.v1beta1.SignMode[value.single.mode];
    }
    return value;
});
