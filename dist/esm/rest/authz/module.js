import { QueryApi } from '../../openapi/api';
export function grants(sdk, granter, grantee, msgTypeUrl, paginationKey, paginationOffset, paginationLimit, paginationCountTotal) {
    return new QueryApi(undefined, sdk.url).grants(granter.toString(), grantee.toString(), msgTypeUrl, paginationKey, paginationOffset?.toString(), paginationLimit?.toString(), paginationCountTotal);
}
