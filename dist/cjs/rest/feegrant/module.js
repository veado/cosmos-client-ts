"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.allowances = exports.allowance = void 0;
var api_1 = require("../../openapi/api");
function allowance(sdk, granter, grantee) {
    return new api_1.QueryApi(undefined, sdk.url).allowance(granter.toString(), grantee.toString());
}
exports.allowance = allowance;
function allowances(sdk, grantee, paginationKey, paginationOffset, paginationLimit, paginationCountTotal) {
    return new api_1.QueryApi(undefined, sdk.url).allowances(grantee.toString(), paginationKey, paginationOffset === null || paginationOffset === void 0 ? void 0 : paginationOffset.toString(), paginationLimit === null || paginationLimit === void 0 ? void 0 : paginationLimit.toString(), paginationCountTotal);
}
exports.allowances = allowances;
