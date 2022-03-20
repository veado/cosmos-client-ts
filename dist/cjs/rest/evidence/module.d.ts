import { CosmosSDK } from '../../sdk';
export declare function allEvidence(sdk: CosmosSDK, paginationKey?: string, paginationOffset?: bigint, paginationLimit?: bigint, paginationCountTotal?: boolean): Promise<import("axios").AxiosResponse<import("../../openapi/api").InlineResponse20049, any>>;
export declare function evidence(sdk: CosmosSDK, evidenceHash: string): Promise<import("axios").AxiosResponse<import("../../openapi/api").InlineResponse20050, any>>;
