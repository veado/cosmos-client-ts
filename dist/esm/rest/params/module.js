import { QueryApi } from '../../openapi/api';
export function params(sdk, subspace, key) {
    return new QueryApi(undefined, sdk.url).params(subspace, key);
}
