"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vote = exports.votes = exports.tallyresult = exports.deposit = exports.deposits = exports.proposal = exports.proposals = exports.params = void 0;
var api_1 = require("../../openapi/api");
function params(sdk, paramsType) {
    return new api_1.QueryApi(undefined, sdk.url).govParams(paramsType);
}
exports.params = params;
function proposals(sdk, proposalStatus, voter, depositor, paginationKey, paginationOffset, paginationLimit, paginationCountTotal) {
    return new api_1.QueryApi(undefined, sdk.url).proposals(proposalStatus, voter, depositor, paginationKey, paginationOffset === null || paginationOffset === void 0 ? void 0 : paginationOffset.toString(), paginationLimit === null || paginationLimit === void 0 ? void 0 : paginationLimit.toString(), paginationCountTotal);
}
exports.proposals = proposals;
function proposal(sdk, proposalID) {
    return new api_1.QueryApi(undefined, sdk.url).proposal(proposalID);
}
exports.proposal = proposal;
function deposits(sdk, proposalID, paginationKey, paginationOffset, paginationLimit, paginationCountTotal) {
    return new api_1.QueryApi(undefined, sdk.url).deposits(proposalID, paginationKey, paginationOffset === null || paginationOffset === void 0 ? void 0 : paginationOffset.toString(), paginationLimit === null || paginationLimit === void 0 ? void 0 : paginationLimit.toString(), paginationCountTotal);
}
exports.deposits = deposits;
function deposit(sdk, proposalID, depositor) {
    return new api_1.QueryApi(undefined, sdk.url).deposit(proposalID, depositor.toString());
}
exports.deposit = deposit;
function tallyresult(sdk, proposalID) {
    return new api_1.QueryApi(undefined, sdk.url).tallyResult(proposalID);
}
exports.tallyresult = tallyresult;
function votes(sdk, proposalID, paginationKey, paginationOffset, paginationLimit, paginationCountTotal) {
    return new api_1.QueryApi(undefined, sdk.url).votes(proposalID, paginationKey, paginationOffset === null || paginationOffset === void 0 ? void 0 : paginationOffset.toString(), paginationLimit === null || paginationLimit === void 0 ? void 0 : paginationLimit.toString(), paginationCountTotal);
}
exports.votes = votes;
function vote(sdk, proposalID, voter) {
    return new api_1.QueryApi(undefined, sdk.url).vote(proposalID, voter.toString());
}
exports.vote = vote;
