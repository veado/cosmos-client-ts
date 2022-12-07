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
exports.gov = void 0;
var proto_1 = require("../../proto");
var types_1 = require("../../types");
exports.gov = __importStar(require("./module"));
types_1.codec.register('/cosmos.gov.v1beta1.MsgDeposit', proto_1.cosmos.gov.v1beta1.MsgDeposit);
types_1.codec.register('/cosmos.gov.v1beta1.MsgSubmitProposal', proto_1.cosmos.gov.v1beta1.MsgSubmitProposal);
types_1.codec.register('/cosmos.gov.v1beta1.MsgVoteWeighted', proto_1.cosmos.gov.v1beta1.MsgVoteWeighted);
types_1.codec.register('/cosmos.gov.v1beta1.MsgVote', proto_1.cosmos.gov.v1beta1.MsgVote);
types_1.codec.register('/cosmos.gov.v1beta1.TextProposal', proto_1.cosmos.gov.v1beta1.TextProposal);
