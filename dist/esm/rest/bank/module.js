import { QueryApi } from '../../openapi/api';
export function allBalances(sdk, address, paginationKey, paginationOffset, paginationLimit, paginationCountTotal) {
    return new QueryApi(undefined, sdk.url).allBalances(address.toString(), paginationKey, paginationOffset === null || paginationOffset === void 0 ? void 0 : paginationOffset.toString(), paginationLimit === null || paginationLimit === void 0 ? void 0 : paginationLimit.toString(), paginationCountTotal);
}
export function balance(sdk, address, denom) {
    return new QueryApi(undefined, sdk.url).balance(address.toString(), denom);
}
export function params(sdk) {
    return new QueryApi(undefined, sdk.url).bankParams();
}
export function supplyOf(sdk, denom) {
    return new QueryApi(undefined, sdk.url).supplyOf(denom);
}
export function totalSupply(sdk) {
    return new QueryApi(undefined, sdk.url).totalSupply();
}
