"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.simulate = exports.getTxsEvent = exports.getTx = exports.broadcastTx = exports.BroadcastTxMode = void 0;
var api_1 = require("../../openapi/api");
Object.defineProperty(exports, "BroadcastTxMode", { enumerable: true, get: function () { return api_1.InlineObject16ModeEnum; } });
function broadcastTx(sdk, body) {
    return new api_1.ServiceApi(undefined, sdk.url).broadcastTx(body);
}
exports.broadcastTx = broadcastTx;
function getTx(sdk, hash) {
    return new api_1.ServiceApi(undefined, sdk.url).getTx(hash);
}
exports.getTx = getTx;
function getTxsEvent(sdk, events, paginationKey, paginationOffset, paginationLimit, paginationCountTotal) {
    return new api_1.ServiceApi(undefined, sdk.url).getTxsEvent(events, paginationKey, paginationOffset === null || paginationOffset === void 0 ? void 0 : paginationOffset.toString(), paginationLimit === null || paginationLimit === void 0 ? void 0 : paginationLimit.toString(), paginationCountTotal);
}
exports.getTxsEvent = getTxsEvent;
function simulate(sdk, body) {
    return new api_1.ServiceApi(undefined, sdk.url).simulate(body);
}
exports.simulate = simulate;
