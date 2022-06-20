"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.params = exports.inflation = exports.annualProvisions = void 0;
var api_1 = require("../../openapi/api");
function annualProvisions(sdk) {
    return new api_1.QueryApi(undefined, sdk.url).annualProvisions();
}
exports.annualProvisions = annualProvisions;
function inflation(sdk) {
    return new api_1.QueryApi(undefined, sdk.url).inflation();
}
exports.inflation = inflation;
function params(sdk) {
    return new api_1.QueryApi(undefined, sdk.url).mintParams();
}
exports.params = params;
