import { ServiceApi } from '../../../openapi/api';
export async function getBlockByHeight(sdk, height) {
    return new ServiceApi(undefined, sdk.url).getBlockByHeight(height.toString());
}
export async function getLatestBlock(sdk) {
    return new ServiceApi(undefined, sdk.url).getLatestBlock();
}
export async function getLatestValidatorSet(sdk, paginationKey, paginationOffset, paginationLimit, paginationCountTotal) {
    return new ServiceApi(undefined, sdk.url).getLatestValidatorSet(paginationKey, paginationOffset?.toString(), paginationLimit?.toString(), paginationCountTotal);
}
export async function getValidatorSet(sdk, height, paginationKey, paginationOffset, paginationLimit, paginationCountTotal) {
    return new ServiceApi(undefined, sdk.url).getValidatorSetByHeight(height.toString(), paginationKey, paginationOffset?.toString(), paginationLimit?.toString(), paginationCountTotal);
}
export function getNodeInfo(sdk) {
    return new ServiceApi(undefined, sdk.url).getNodeInfo();
}
export function getSyncing(sdk) {
    return new ServiceApi(undefined, sdk.url).getSyncing();
}
export function getValidatorSetByHeight(sdk, height, paginationKey, paginationOffset, paginationLimit, paginationCountTotal) {
    return new ServiceApi(undefined, sdk.url).getValidatorSetByHeight(height, paginationKey, paginationOffset?.toString(), paginationLimit?.toString(), paginationCountTotal);
}
