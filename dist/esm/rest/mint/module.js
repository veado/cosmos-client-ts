import { QueryApi } from '../../openapi/api';
export function annualProvisions(sdk) {
    return new QueryApi(undefined, sdk.url).annualProvisions();
}
export function inflation(sdk) {
    return new QueryApi(undefined, sdk.url).inflation();
}
export function params(sdk) {
    return new QueryApi(undefined, sdk.url).mintParams();
}
