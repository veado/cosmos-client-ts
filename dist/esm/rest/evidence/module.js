import { QueryApi } from '../../openapi/api';
export function allEvidence(sdk, paginationKey, paginationOffset, paginationLimit, paginationCountTotal) {
    return new QueryApi(undefined, sdk.url).allEvidence(paginationKey, paginationOffset?.toString(), paginationLimit?.toString(), paginationCountTotal);
}
export function evidence(sdk, evidenceHash) {
    return new QueryApi(undefined, sdk.url).evidence(evidenceHash);
}
