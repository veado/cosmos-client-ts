"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsAddress = void 0;
var bech32 = __importStar(require("bech32"));
var config_1 = require("../../config");
var address_1 = require("./address");
/**
 * ConsAddress
 */
var ConsAddress = /** @class */ (function (_super) {
    __extends(ConsAddress, _super);
    function ConsAddress() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     *
     */
    ConsAddress.prototype.toString = function () {
        var words = bech32.toWords(Buffer.from(this._value));
        return bech32.encode(config_1.config.bech32Prefix.consAddr, words);
    };
    /**
     * For `JSON.stringify`
     */
    ConsAddress.prototype.toJSON = function () {
        return this.toString();
    };
    /**
     *
     * @param consAddress
     */
    ConsAddress.fromString = function (consAddress) {
        var words = bech32.decode(consAddress).words;
        return new ConsAddress(new Uint8Array(bech32.fromWords(words)));
    };
    ConsAddress.fromPublicKey = function (pubKey) {
        return new ConsAddress(pubKey.address());
    };
    return ConsAddress;
}(address_1.Address));
exports.ConsAddress = ConsAddress;
address_1.Address.prototype.toConsAddress = function () {
    return new ConsAddress(this.value());
};
