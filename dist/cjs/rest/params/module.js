"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.params = void 0;
var api_1 = require("../../openapi/api");
function params(sdk, subspace, key) {
    return new api_1.QueryApi(undefined, sdk.url).params(subspace, key);
}
exports.params = params;
