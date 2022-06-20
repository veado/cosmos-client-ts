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
exports.staking = void 0;
var proto_1 = require("../../proto");
var types_1 = require("../../types");
exports.staking = __importStar(require("./module"));
types_1.codec.register('/cosmos.staking.v1beta1.MsgBeginRedelegate', proto_1.cosmos.staking.v1beta1.MsgBeginRedelegate);
types_1.codec.register('/cosmos.staking.v1beta1.MsgCreateValidator', proto_1.cosmos.staking.v1beta1.MsgCreateValidator);
types_1.codec.register('/cosmos.staking.v1beta1.MsgDelegate', proto_1.cosmos.staking.v1beta1.MsgDelegate);
types_1.codec.register('/cosmos.staking.v1beta1.MsgEditValidator', proto_1.cosmos.staking.v1beta1.MsgEditValidator);
types_1.codec.register('/cosmos.staking.v1beta1.MsgUndelegate', proto_1.cosmos.staking.v1beta1.MsgUndelegate);
