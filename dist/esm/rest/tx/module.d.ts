import { CosmosTxV1beta1SimulateRequest, InlineObject16 as BroadcastTxRequest, InlineObject16ModeEnum as BroadcastTxMode } from '../../openapi/api';
import { CosmosSDK } from '../../sdk';
export { BroadcastTxMode };
export declare function broadcastTx(sdk: CosmosSDK, body: BroadcastTxRequest): Promise<import("axios").AxiosResponse<import("../../openapi/api").InlineResponse20075, any>>;
export declare function getTx(sdk: CosmosSDK, hash: string): Promise<import("axios").AxiosResponse<import("../../openapi/api").CosmosTxV1beta1GetTxResponse, any>>;
export declare function getTxsEvent(sdk: CosmosSDK, events?: string[], paginationKey?: string, paginationOffset?: bigint, paginationLimit?: bigint, paginationCountTotal?: boolean): Promise<import("axios").AxiosResponse<import("../../openapi/api").CosmosTxV1beta1GetTxsEventResponse, any>>;
export declare function simulate(sdk: CosmosSDK, body: CosmosTxV1beta1SimulateRequest): Promise<import("axios").AxiosResponse<import("../../openapi/api").InlineResponse20074, any>>;
