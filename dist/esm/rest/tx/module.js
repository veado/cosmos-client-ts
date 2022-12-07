import { ServiceApi, InlineObject16ModeEnum as BroadcastTxMode, } from '../../openapi/api';
export { BroadcastTxMode };
export function broadcastTx(sdk, body) {
    return new ServiceApi(undefined, sdk.url).broadcastTx(body);
}
export function getTx(sdk, hash) {
    return new ServiceApi(undefined, sdk.url).getTx(hash);
}
export function getTxsEvent(sdk, events, paginationKey, paginationOffset, paginationLimit, paginationCountTotal) {
    return new ServiceApi(undefined, sdk.url).getTxsEvent(events, paginationKey, paginationOffset?.toString(), paginationLimit?.toString(), paginationCountTotal);
}
export function simulate(sdk, body) {
    return new ServiceApi(undefined, sdk.url).simulate(body);
}
