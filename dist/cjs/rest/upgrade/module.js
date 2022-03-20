"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.upgradedConsensusState = exports.currentPlan = exports.appliedPlan = void 0;
var api_1 = require("../../openapi/api");
function appliedPlan(sdk, name) {
    return new api_1.QueryApi(undefined, sdk.url).appliedPlan(name);
}
exports.appliedPlan = appliedPlan;
function currentPlan(sdk) {
    return new api_1.QueryApi(undefined, sdk.url).currentPlan();
}
exports.currentPlan = currentPlan;
function upgradedConsensusState(sdk, lastHeight) {
    return new api_1.QueryApi(undefined, sdk.url).upgradedConsensusState(lastHeight);
}
exports.upgradedConsensusState = upgradedConsensusState;
