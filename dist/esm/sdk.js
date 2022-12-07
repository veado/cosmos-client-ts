/**
 *
 */
export class CosmosSDK {
    url;
    chainID;
    /**
     * @param url
     * @param chainID
     */
    constructor(url, chainID) {
        this.url = url;
        this.chainID = chainID;
    }
}
