"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.totalSupply = exports.supplyOf = exports.params = exports.balance = exports.allBalances = void 0;
var api_1 = require("../../openapi/api");
function allBalances(sdk, address, paginationKey, paginationOffset, paginationLimit, paginationCountTotal) {
    return new api_1.QueryApi(undefined, sdk.url).allBalances(address.toString(), paginationKey, paginationOffset === null || paginationOffset === void 0 ? void 0 : paginationOffset.toString(), paginationLimit === null || paginationLimit === void 0 ? void 0 : paginationLimit.toString(), paginationCountTotal);
}
exports.allBalances = allBalances;
function balance(sdk, address, denom) {
    return new api_1.QueryApi(undefined, sdk.url).balance(address.toString(), denom);
}
exports.balance = balance;
function params(sdk) {
    return new api_1.QueryApi(undefined, sdk.url).bankParams();
}
exports.params = params;
function supplyOf(sdk, denom) {
    return new api_1.QueryApi(undefined, sdk.url).supplyOf(denom);
}
exports.supplyOf = supplyOf;
function totalSupply(sdk) {
    return new api_1.QueryApi(undefined, sdk.url).totalSupply();
}
exports.totalSupply = totalSupply;
