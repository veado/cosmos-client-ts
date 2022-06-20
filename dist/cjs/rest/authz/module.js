"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.grants = void 0;
var api_1 = require("../../openapi/api");
function grants(sdk, granter, grantee, msgTypeUrl, paginationKey, paginationOffset, paginationLimit, paginationCountTotal) {
    return new api_1.QueryApi(undefined, sdk.url).grants(granter.toString(), grantee.toString(), msgTypeUrl, paginationKey, paginationOffset === null || paginationOffset === void 0 ? void 0 : paginationOffset.toString(), paginationLimit === null || paginationLimit === void 0 ? void 0 : paginationLimit.toString(), paginationCountTotal);
}
exports.grants = grants;
