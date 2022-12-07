import { QueryApi } from '../../openapi/api';
export function allowance(sdk, granter, grantee) {
    return new QueryApi(undefined, sdk.url).allowance(granter.toString(), grantee.toString());
}
export function allowances(sdk, grantee, paginationKey, paginationOffset, paginationLimit, paginationCountTotal) {
    return new QueryApi(undefined, sdk.url).allowances(grantee.toString(), paginationKey, paginationOffset?.toString(), paginationLimit?.toString(), paginationCountTotal);
}
