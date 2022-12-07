"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.evidence = exports.allEvidence = void 0;
var api_1 = require("../../openapi/api");
function allEvidence(sdk, paginationKey, paginationOffset, paginationLimit, paginationCountTotal) {
    return new api_1.QueryApi(undefined, sdk.url).allEvidence(paginationKey, paginationOffset === null || paginationOffset === void 0 ? void 0 : paginationOffset.toString(), paginationLimit === null || paginationLimit === void 0 ? void 0 : paginationLimit.toString(), paginationCountTotal);
}
exports.allEvidence = allEvidence;
function evidence(sdk, evidenceHash) {
    return new api_1.QueryApi(undefined, sdk.url).evidence(evidenceHash);
}
exports.evidence = evidence;
