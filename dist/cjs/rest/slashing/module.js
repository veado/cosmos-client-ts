"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validator = exports.validators = exports.unbondingDelegation = exports.redelegations = exports.delegation = exports.signingInfo = exports.signingInfos = exports.slashingParams = void 0;
var api_1 = require("../../openapi/api");
function slashingParams(sdk) {
    return new api_1.QueryApi(undefined, sdk.url).slashingParams();
}
exports.slashingParams = slashingParams;
function signingInfos(sdk, paginationKey, paginationOffset, paginationLimit, paginationCountTotal) {
    return new api_1.QueryApi(undefined, sdk.url).signingInfos(paginationKey, paginationOffset === null || paginationOffset === void 0 ? void 0 : paginationOffset.toString(), paginationLimit === null || paginationLimit === void 0 ? void 0 : paginationLimit.toString(), paginationCountTotal);
}
exports.signingInfos = signingInfos;
function signingInfo(sdk, consAddress) {
    return new api_1.QueryApi(undefined, sdk.url).signingInfo(consAddress.toString());
}
exports.signingInfo = signingInfo;
function delegation(sdk, validatorAddr, delegatorAddr) {
    return new api_1.QueryApi(undefined, sdk.url).delegation(validatorAddr.toString(), delegatorAddr.toString());
}
exports.delegation = delegation;
function redelegations(sdk, delegatorAddr, srcValidatorAddr, dstValidatorAddr, paginationKey, paginationOffset, paginationLimit, paginationCountTotal) {
    return new api_1.QueryApi(undefined, sdk.url).redelegations(delegatorAddr.toString(), srcValidatorAddr === null || srcValidatorAddr === void 0 ? void 0 : srcValidatorAddr.toString(), dstValidatorAddr === null || dstValidatorAddr === void 0 ? void 0 : dstValidatorAddr.toString(), paginationKey, paginationOffset === null || paginationOffset === void 0 ? void 0 : paginationOffset.toString(), paginationLimit === null || paginationLimit === void 0 ? void 0 : paginationLimit.toString(), paginationCountTotal);
}
exports.redelegations = redelegations;
function unbondingDelegation(sdk, validatorAddr, delegatorAddr) {
    return new api_1.QueryApi(undefined, sdk.url).unbondingDelegation(validatorAddr.toString(), delegatorAddr.toString());
}
exports.unbondingDelegation = unbondingDelegation;
function validators(sdk, status, paginationKey, paginationOffset, paginationLimit, paginationCountTotal) {
    return new api_1.QueryApi(undefined, sdk.url).validators(status, paginationKey, paginationOffset === null || paginationOffset === void 0 ? void 0 : paginationOffset.toString(), paginationLimit === null || paginationLimit === void 0 ? void 0 : paginationLimit.toString(), paginationCountTotal);
}
exports.validators = validators;
function validator(sdk, validatorAddr) {
    return new api_1.QueryApi(undefined, sdk.url).validator(validatorAddr.toString());
}
exports.validator = validator;
