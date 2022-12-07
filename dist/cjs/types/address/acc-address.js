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
exports.AccAddress = void 0;
var bech32 = __importStar(require("bech32"));
var config_1 = require("../../config/");
var address_1 = require("./address");
/**
 * AccAddress
 */
var AccAddress = /** @class */ (function (_super) {
    __extends(AccAddress, _super);
    function AccAddress() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     *
     */
    AccAddress.prototype.toString = function () {
        var words = bech32.toWords(Buffer.from(this._value));
        return bech32.encode(config_1.config.bech32Prefix.accAddr, words);
    };
    /**
     * For `JSON.stringify`
     */
    AccAddress.prototype.toJSON = function () {
        return this.toString();
    };
    /**
     *
     * @param accAddress
     */
    AccAddress.fromString = function (accAddress) {
        var words = bech32.decode(accAddress).words;
        return new AccAddress(new Uint8Array(bech32.fromWords(words)));
    };
    AccAddress.fromPublicKey = function (pubKey) {
        return new AccAddress(pubKey.address());
    };
    return AccAddress;
}(address_1.Address));
exports.AccAddress = AccAddress;
address_1.Address.prototype.toAccAddress = function () {
    return new AccAddress(this.value());
};
