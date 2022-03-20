import { CosmosSDK } from '../../sdk';
export declare function appliedPlan(sdk: CosmosSDK, name: string): Promise<import("axios").AxiosResponse<import("../../openapi/api").InlineResponse20076, any>>;
export declare function currentPlan(sdk: CosmosSDK): Promise<import("axios").AxiosResponse<import("../../openapi/api").InlineResponse20077, any>>;
export declare function upgradedConsensusState(sdk: CosmosSDK, lastHeight: string): Promise<import("axios").AxiosResponse<import("../../openapi/api").InlineResponse20079, any>>;
