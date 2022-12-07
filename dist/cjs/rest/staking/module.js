"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatorUnbondingDelegations = exports.unbondingDelegation = exports.delegation = exports.validatorDelegations = exports.validator = exports.validators = exports.pool = exports.params = exports.historicalInfo = exports.delegatorValidator = exports.delegatorValidators = exports.delegatorUnbondingDelegations = exports.redelegations = exports.delegatorDelegations = void 0;
var api_1 = require("../../openapi/api");
function delegatorDelegations(sdk, delegatorAddr, paginationKey, paginationOffset, paginationLimit, paginationCountTotal) {
    return new api_1.QueryApi(undefined, sdk.url).delegatorDelegations(delegatorAddr.toString(), paginationKey, paginationOffset === null || paginationOffset === void 0 ? void 0 : paginationOffset.toString(), paginationLimit === null || paginationLimit === void 0 ? void 0 : paginationLimit.toString(), paginationCountTotal);
}
exports.delegatorDelegations = delegatorDelegations;
function redelegations(sdk, delegatorAddr, srcValidatorAddr, dstValidatorAddr, paginationKey, paginationOffset, paginationLimit, paginationCountTotal) {
    return new api_1.QueryApi(undefined, sdk.url).redelegations(delegatorAddr.toString(), srcValidatorAddr === null || srcValidatorAddr === void 0 ? void 0 : srcValidatorAddr.toString(), dstValidatorAddr === null || dstValidatorAddr === void 0 ? void 0 : dstValidatorAddr.toString(), paginationKey, paginationOffset === null || paginationOffset === void 0 ? void 0 : paginationOffset.toString(), paginationLimit === null || paginationLimit === void 0 ? void 0 : paginationLimit.toString(), paginationCountTotal);
}
exports.redelegations = redelegations;
function delegatorUnbondingDelegations(sdk, delegatorAddr, paginationKey, paginationOffset, paginationLimit, paginationCountTotal) {
    return new api_1.QueryApi(undefined, sdk.url).delegatorUnbondingDelegations(delegatorAddr.toString(), paginationKey, paginationOffset === null || paginationOffset === void 0 ? void 0 : paginationOffset.toString(), paginationLimit === null || paginationLimit === void 0 ? void 0 : paginationLimit.toString(), paginationCountTotal);
}
exports.delegatorUnbondingDelegations = delegatorUnbondingDelegations;
function delegatorValidators(sdk, delegatorAddr, paginationKey, paginationOffset, paginationLimit, paginationCountTotal) {
    return new api_1.QueryApi(undefined, sdk.url).stakingDelegatorValidators(delegatorAddr.toString(), paginationKey, paginationOffset === null || paginationOffset === void 0 ? void 0 : paginationOffset.toString(), paginationLimit === null || paginationLimit === void 0 ? void 0 : paginationLimit.toString(), paginationCountTotal);
}
exports.delegatorValidators = delegatorValidators;
function delegatorValidator(sdk, validatorAddr, delegatorAddr) {
    return new api_1.QueryApi(undefined, sdk.url).delegatorValidator(validatorAddr.toString(), delegatorAddr.toString());
}
exports.delegatorValidator = delegatorValidator;
function historicalInfo(sdk, height) {
    return new api_1.QueryApi(undefined, sdk.url).historicalInfo(height.toString());
}
exports.historicalInfo = historicalInfo;
function params(sdk) {
    return new api_1.QueryApi(undefined, sdk.url).stakingParams();
}
exports.params = params;
function pool(sdk) {
    return new api_1.QueryApi(undefined, sdk.url).pool();
}
exports.pool = pool;
function validators(sdk, status, paginationKey, paginationOffset, paginationLimit, paginationCountTotal) {
    return new api_1.QueryApi(undefined, sdk.url).validators(status, paginationKey, paginationOffset === null || paginationOffset === void 0 ? void 0 : paginationOffset.toString(), paginationLimit === null || paginationLimit === void 0 ? void 0 : paginationLimit.toString(), paginationCountTotal);
}
exports.validators = validators;
function validator(sdk, validatorAddr) {
    return new api_1.QueryApi(undefined, sdk.url).validator(validatorAddr.toString());
}
exports.validator = validator;
function validatorDelegations(sdk, validatorAddr, paginationKey, paginationOffset, paginationLimit, paginationCountTotal) {
    return new api_1.QueryApi(undefined, sdk.url).validatorDelegations(validatorAddr.toString(), paginationKey, paginationOffset === null || paginationOffset === void 0 ? void 0 : paginationOffset.toString(), paginationLimit === null || paginationLimit === void 0 ? void 0 : paginationLimit.toString(), paginationCountTotal);
}
exports.validatorDelegations = validatorDelegations;
function delegation(sdk, validatorAddr, delegatorAddr) {
    return new api_1.QueryApi(undefined, sdk.url).delegation(validatorAddr.toString(), delegatorAddr.toString());
}
exports.delegation = delegation;
function unbondingDelegation(sdk, validatorAddr, delegatorAddr) {
    return new api_1.QueryApi(undefined, sdk.url).unbondingDelegation(validatorAddr.toString(), delegatorAddr.toString());
}
exports.unbondingDelegation = unbondingDelegation;
function validatorUnbondingDelegations(sdk, validatorAddr, paginationKey, paginationOffset, paginationLimit, paginationCountTotal) {
    return new api_1.QueryApi(undefined, sdk.url).validatorUnbondingDelegations(validatorAddr.toString(), paginationKey, paginationOffset === null || paginationOffset === void 0 ? void 0 : paginationOffset.toString(), paginationLimit === null || paginationLimit === void 0 ? void 0 : paginationLimit.toString(), paginationCountTotal);
}
exports.validatorUnbondingDelegations = validatorUnbondingDelegations;
