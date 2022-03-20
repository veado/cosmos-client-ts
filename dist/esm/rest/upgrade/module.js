import { QueryApi } from '../../openapi/api';
export function appliedPlan(sdk, name) {
    return new QueryApi(undefined, sdk.url).appliedPlan(name);
}
export function currentPlan(sdk) {
    return new QueryApi(undefined, sdk.url).currentPlan();
}
export function upgradedConsensusState(sdk, lastHeight) {
    return new QueryApi(undefined, sdk.url).upgradedConsensusState(lastHeight);
}
