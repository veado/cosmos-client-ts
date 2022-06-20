import { CosmosSDK } from '../../sdk';
import { AccAddress } from '../../types';
export declare function allBalances(sdk: CosmosSDK, address: AccAddress, paginationKey?: string, paginationOffset?: bigint, paginationLimit?: bigint, paginationCountTotal?: boolean): Promise<import("axios").AxiosResponse<import("../../openapi/api").InlineResponse20028, any>>;
export declare function balance(sdk: CosmosSDK, address: AccAddress, denom: string): Promise<import("axios").AxiosResponse<import("../../openapi/api").InlineResponse20029, any>>;
export declare function params(sdk: CosmosSDK): Promise<import("axios").AxiosResponse<import("../../openapi/api").InlineResponse20033, any>>;
export declare function supplyOf(sdk: CosmosSDK, denom: string): Promise<import("axios").AxiosResponse<import("../../openapi/api").InlineResponse20034, any>>;
export declare function totalSupply(sdk: CosmosSDK): Promise<import("axios").AxiosResponse<import("../../openapi/api").QueryTotalSupplyResponseIsTheResponseTypeForTheQueryTotalSupplyRPCMethod, any>>;
