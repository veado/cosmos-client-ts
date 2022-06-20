"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.params = exports.account = void 0;
var api_1 = require("../../openapi/api");
function account(sdk, address) {
    return new api_1.QueryApi(undefined, sdk.url).account(address.toString());
}
exports.account = account;
function params(sdk) {
    return new api_1.QueryApi(undefined, sdk.url).authParams();
}
exports.params = params;
