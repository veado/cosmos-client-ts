import { CosmosSDK } from '../../../sdk';
export declare function getBlockByHeight(sdk: CosmosSDK, height: bigint): Promise<import("axios").AxiosResponse<import("../../../openapi/api").InlineResponse20036, any>>;
export declare function getLatestBlock(sdk: CosmosSDK): Promise<import("axios").AxiosResponse<import("../../../openapi/api").InlineResponse20035, any>>;
export declare function getLatestValidatorSet(sdk: CosmosSDK, paginationKey?: string, paginationOffset?: bigint, paginationLimit?: bigint, paginationCountTotal?: boolean): Promise<import("axios").AxiosResponse<import("../../../openapi/api").InlineResponse20039, any>>;
export declare function getValidatorSet(sdk: CosmosSDK, height: bigint, paginationKey?: string, paginationOffset?: bigint, paginationLimit?: bigint, paginationCountTotal?: boolean): Promise<import("axios").AxiosResponse<import("../../../openapi/api").InlineResponse20040, any>>;
export declare function getNodeInfo(sdk: CosmosSDK): Promise<import("axios").AxiosResponse<import("../../../openapi/api").InlineResponse20037, any>>;
export declare function getSyncing(sdk: CosmosSDK): Promise<import("axios").AxiosResponse<import("../../../openapi/api").InlineResponse20038, any>>;
export declare function getValidatorSetByHeight(sdk: CosmosSDK, height: string, paginationKey?: string, paginationOffset?: bigint, paginationLimit?: bigint, paginationCountTotal?: boolean): Promise<import("axios").AxiosResponse<import("../../../openapi/api").InlineResponse20040, any>>;
