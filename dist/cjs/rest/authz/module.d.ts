import { CosmosSDK } from '../../sdk';
import { AccAddress } from '../../types';
export declare function grants(sdk: CosmosSDK, granter: AccAddress, grantee: AccAddress, msgTypeUrl?: string, paginationKey?: string, paginationOffset?: bigint, paginationLimit?: bigint, paginationCountTotal?: boolean): Promise<import("axios").AxiosResponse<import("../../openapi/api").InlineResponse20080, any>>;
