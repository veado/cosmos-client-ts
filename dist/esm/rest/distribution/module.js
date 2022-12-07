import { QueryApi } from '../../openapi/api';
export function communityPool(sdk) {
    return new QueryApi(undefined, sdk.url).communityPool();
}
export function delegationTotalRewards(sdk, delegatorAddress) {
    return new QueryApi(undefined, sdk.url).delegationTotalRewards(delegatorAddress.toString());
}
export function delegationRewards(sdk, delegatorAddress, validatorAddress) {
    return new QueryApi(undefined, sdk.url).validatorDelegations(delegatorAddress.toString(), validatorAddress.toString());
}
export function delegatorValidators(sdk, delegatorAddress) {
    return new QueryApi(undefined, sdk.url).delegatorValidators(delegatorAddress.toString());
}
export function delegatorWithdrawAddress(sdk, delegatorAddress) {
    return new QueryApi(undefined, sdk.url).delegatorWithdrawAddress(delegatorAddress.toString());
}
export function validatorCommission(sdk, validatorAddress) {
    return new QueryApi(undefined, sdk.url).validatorCommission(validatorAddress.toString());
}
export function validatorOutstandingRewards(sdk, validatorAddress) {
    return new QueryApi(undefined, sdk.url).validatorOutstandingRewards(validatorAddress.toString());
}
export function validatorSlashes(sdk, validatorAddress, startingHeight, endingHeight, paginationKey, paginationOffset, paginationLimit, paginationCountTotal) {
    return new QueryApi(undefined, sdk.url).validatorSlashes(validatorAddress.toString(), startingHeight, endingHeight, paginationKey, paginationOffset?.toString(), paginationLimit?.toString(), paginationCountTotal);
}
