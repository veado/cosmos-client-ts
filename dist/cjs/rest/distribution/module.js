"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatorSlashes = exports.validatorOutstandingRewards = exports.validatorCommission = exports.delegatorWithdrawAddress = exports.delegatorValidators = exports.delegationRewards = exports.delegationTotalRewards = exports.communityPool = void 0;
var api_1 = require("../../openapi/api");
function communityPool(sdk) {
    return new api_1.QueryApi(undefined, sdk.url).communityPool();
}
exports.communityPool = communityPool;
function delegationTotalRewards(sdk, delegatorAddress) {
    return new api_1.QueryApi(undefined, sdk.url).delegationTotalRewards(delegatorAddress.toString());
}
exports.delegationTotalRewards = delegationTotalRewards;
function delegationRewards(sdk, delegatorAddress, validatorAddress) {
    return new api_1.QueryApi(undefined, sdk.url).validatorDelegations(delegatorAddress.toString(), validatorAddress.toString());
}
exports.delegationRewards = delegationRewards;
function delegatorValidators(sdk, delegatorAddress) {
    return new api_1.QueryApi(undefined, sdk.url).delegatorValidators(delegatorAddress.toString());
}
exports.delegatorValidators = delegatorValidators;
function delegatorWithdrawAddress(sdk, delegatorAddress) {
    return new api_1.QueryApi(undefined, sdk.url).delegatorWithdrawAddress(delegatorAddress.toString());
}
exports.delegatorWithdrawAddress = delegatorWithdrawAddress;
function validatorCommission(sdk, validatorAddress) {
    return new api_1.QueryApi(undefined, sdk.url).validatorCommission(validatorAddress.toString());
}
exports.validatorCommission = validatorCommission;
function validatorOutstandingRewards(sdk, validatorAddress) {
    return new api_1.QueryApi(undefined, sdk.url).validatorOutstandingRewards(validatorAddress.toString());
}
exports.validatorOutstandingRewards = validatorOutstandingRewards;
function validatorSlashes(sdk, validatorAddress, startingHeight, endingHeight, paginationKey, paginationOffset, paginationLimit, paginationCountTotal) {
    return new api_1.QueryApi(undefined, sdk.url).validatorSlashes(validatorAddress.toString(), startingHeight, endingHeight, paginationKey, paginationOffset === null || paginationOffset === void 0 ? void 0 : paginationOffset.toString(), paginationLimit === null || paginationLimit === void 0 ? void 0 : paginationLimit.toString(), paginationCountTotal);
}
exports.validatorSlashes = validatorSlashes;
