import { CosmosSDK } from '../../sdk';
import { AccAddress } from '../../types';
export declare function account(sdk: CosmosSDK, address: AccAddress): Promise<import("axios").AxiosResponse<import("../../openapi/api").InlineResponse20026, any>>;
export declare function params(sdk: CosmosSDK): Promise<import("axios").AxiosResponse<import("../../openapi/api").InlineResponse20027, any>>;
