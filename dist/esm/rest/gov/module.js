import { QueryApi } from '../../openapi/api';
export function params(sdk, paramsType) {
    return new QueryApi(undefined, sdk.url).govParams(paramsType);
}
export function proposals(sdk, proposalStatus, voter, depositor, paginationKey, paginationOffset, paginationLimit, paginationCountTotal) {
    return new QueryApi(undefined, sdk.url).proposals(proposalStatus, voter, depositor, paginationKey, paginationOffset?.toString(), paginationLimit?.toString(), paginationCountTotal);
}
export function proposal(sdk, proposalID) {
    return new QueryApi(undefined, sdk.url).proposal(proposalID);
}
export function deposits(sdk, proposalID, paginationKey, paginationOffset, paginationLimit, paginationCountTotal) {
    return new QueryApi(undefined, sdk.url).deposits(proposalID, paginationKey, paginationOffset?.toString(), paginationLimit?.toString(), paginationCountTotal);
}
export function deposit(sdk, proposalID, depositor) {
    return new QueryApi(undefined, sdk.url).deposit(proposalID, depositor.toString());
}
export function tallyresult(sdk, proposalID) {
    return new QueryApi(undefined, sdk.url).tallyResult(proposalID);
}
export function votes(sdk, proposalID, paginationKey, paginationOffset, paginationLimit, paginationCountTotal) {
    return new QueryApi(undefined, sdk.url).votes(proposalID, paginationKey, paginationOffset?.toString(), paginationLimit?.toString(), paginationCountTotal);
}
export function vote(sdk, proposalID, voter) {
    return new QueryApi(undefined, sdk.url).vote(proposalID, voter.toString());
}
