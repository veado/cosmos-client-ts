import { QueryApi } from '../../openapi/api';
export function delegatorDelegations(sdk, delegatorAddr, paginationKey, paginationOffset, paginationLimit, paginationCountTotal) {
    return new QueryApi(undefined, sdk.url).delegatorDelegations(delegatorAddr.toString(), paginationKey, paginationOffset?.toString(), paginationLimit?.toString(), paginationCountTotal);
}
export function redelegations(sdk, delegatorAddr, srcValidatorAddr, dstValidatorAddr, paginationKey, paginationOffset, paginationLimit, paginationCountTotal) {
    return new QueryApi(undefined, sdk.url).redelegations(delegatorAddr.toString(), srcValidatorAddr?.toString(), dstValidatorAddr?.toString(), paginationKey, paginationOffset?.toString(), paginationLimit?.toString(), paginationCountTotal);
}
export function delegatorUnbondingDelegations(sdk, delegatorAddr, paginationKey, paginationOffset, paginationLimit, paginationCountTotal) {
    return new QueryApi(undefined, sdk.url).delegatorUnbondingDelegations(delegatorAddr.toString(), paginationKey, paginationOffset?.toString(), paginationLimit?.toString(), paginationCountTotal);
}
export function delegatorValidators(sdk, delegatorAddr, paginationKey, paginationOffset, paginationLimit, paginationCountTotal) {
    return new QueryApi(undefined, sdk.url).stakingDelegatorValidators(delegatorAddr.toString(), paginationKey, paginationOffset?.toString(), paginationLimit?.toString(), paginationCountTotal);
}
export function delegatorValidator(sdk, validatorAddr, delegatorAddr) {
    return new QueryApi(undefined, sdk.url).delegatorValidator(validatorAddr.toString(), delegatorAddr.toString());
}
export function historicalInfo(sdk, height) {
    return new QueryApi(undefined, sdk.url).historicalInfo(height.toString());
}
export function params(sdk) {
    return new QueryApi(undefined, sdk.url).stakingParams();
}
export function pool(sdk) {
    return new QueryApi(undefined, sdk.url).pool();
}
export function validators(sdk, status, paginationKey, paginationOffset, paginationLimit, paginationCountTotal) {
    return new QueryApi(undefined, sdk.url).validators(status, paginationKey, paginationOffset?.toString(), paginationLimit?.toString(), paginationCountTotal);
}
export function validator(sdk, validatorAddr) {
    return new QueryApi(undefined, sdk.url).validator(validatorAddr.toString());
}
export function validatorDelegations(sdk, validatorAddr, paginationKey, paginationOffset, paginationLimit, paginationCountTotal) {
    return new QueryApi(undefined, sdk.url).validatorDelegations(validatorAddr.toString(), paginationKey, paginationOffset?.toString(), paginationLimit?.toString(), paginationCountTotal);
}
export function delegation(sdk, validatorAddr, delegatorAddr) {
    return new QueryApi(undefined, sdk.url).delegation(validatorAddr.toString(), delegatorAddr.toString());
}
export function unbondingDelegation(sdk, validatorAddr, delegatorAddr) {
    return new QueryApi(undefined, sdk.url).unbondingDelegation(validatorAddr.toString(), delegatorAddr.toString());
}
export function validatorUnbondingDelegations(sdk, validatorAddr, paginationKey, paginationOffset, paginationLimit, paginationCountTotal) {
    return new QueryApi(undefined, sdk.url).validatorUnbondingDelegations(validatorAddr.toString(), paginationKey, paginationOffset?.toString(), paginationLimit?.toString(), paginationCountTotal);
}
