import { QueryApi } from '../../openapi/api';
export function grants(sdk, granter, grantee, msgTypeUrl, paginationKey, paginationOffset, paginationLimit, paginationCountTotal) {
    return new QueryApi(undefined, sdk.url).grants(granter.toString(), grantee.toString(), msgTypeUrl, paginationKey, paginationOffset === null || paginationOffset === void 0 ? void 0 : paginationOffset.toString(), paginationLimit === null || paginationLimit === void 0 ? void 0 : paginationLimit.toString(), paginationCountTotal);
}
