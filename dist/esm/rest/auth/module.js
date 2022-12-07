import { QueryApi } from '../../openapi/api';
export function account(sdk, address) {
    return new QueryApi(undefined, sdk.url).account(address.toString());
}
export function params(sdk) {
    return new QueryApi(undefined, sdk.url).authParams();
}
