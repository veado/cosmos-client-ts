import { QueryApi } from '../../openapi/api';
export function slashingParams(sdk) {
    return new QueryApi(undefined, sdk.url).slashingParams();
}
export function signingInfos(sdk, paginationKey, paginationOffset, paginationLimit, paginationCountTotal) {
    return new QueryApi(undefined, sdk.url).signingInfos(paginationKey, paginationOffset?.toString(), paginationLimit?.toString(), paginationCountTotal);
}
export function signingInfo(sdk, consAddress) {
    return new QueryApi(undefined, sdk.url).signingInfo(consAddress.toString());
}
export function delegation(sdk, validatorAddr, delegatorAddr) {
    return new QueryApi(undefined, sdk.url).delegation(validatorAddr.toString(), delegatorAddr.toString());
}
export function redelegations(sdk, delegatorAddr, srcValidatorAddr, dstValidatorAddr, paginationKey, paginationOffset, paginationLimit, paginationCountTotal) {
    return new QueryApi(undefined, sdk.url).redelegations(delegatorAddr.toString(), srcValidatorAddr?.toString(), dstValidatorAddr?.toString(), paginationKey, paginationOffset?.toString(), paginationLimit?.toString(), paginationCountTotal);
}
export function unbondingDelegation(sdk, validatorAddr, delegatorAddr) {
    return new QueryApi(undefined, sdk.url).unbondingDelegation(validatorAddr.toString(), delegatorAddr.toString());
}
export function validators(sdk, status, paginationKey, paginationOffset, paginationLimit, paginationCountTotal) {
    return new QueryApi(undefined, sdk.url).validators(status, paginationKey, paginationOffset?.toString(), paginationLimit?.toString(), paginationCountTotal);
}
export function validator(sdk, validatorAddr) {
    return new QueryApi(undefined, sdk.url).validator(validatorAddr.toString());
}
