import { CosmosSDK } from '../../sdk';
import { AccAddress } from '../../types';
export declare function allowance(sdk: CosmosSDK, granter: AccAddress, grantee: AccAddress): Promise<import("axios").AxiosResponse<import("../../openapi/api").InlineResponse20081, any>>;
export declare function allowances(sdk: CosmosSDK, grantee: AccAddress, paginationKey?: string, paginationOffset?: bigint, paginationLimit?: bigint, paginationCountTotal?: boolean): Promise<import("axios").AxiosResponse<import("../../openapi/api").InlineResponse20082, any>>;
