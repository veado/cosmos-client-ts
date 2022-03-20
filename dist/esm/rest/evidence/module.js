import { QueryApi } from '../../openapi/api';
export function allEvidence(sdk, paginationKey, paginationOffset, paginationLimit, paginationCountTotal) {
    return new QueryApi(undefined, sdk.url).allEvidence(paginationKey, paginationOffset === null || paginationOffset === void 0 ? void 0 : paginationOffset.toString(), paginationLimit === null || paginationLimit === void 0 ? void 0 : paginationLimit.toString(), paginationCountTotal);
}
export function evidence(sdk, evidenceHash) {
    return new QueryApi(undefined, sdk.url).evidence(evidenceHash);
}
