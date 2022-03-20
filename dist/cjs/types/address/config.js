"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setBech32Prefix = exports.bech32Prefix = void 0;
var prefix_1 = require("./prefix");
exports.bech32Prefix = {
    accAddr: prefix_1.AddressPrefix.Cosmos,
    accPub: prefix_1.AddressPrefix.Cosmos + prefix_1.AddressPrefix.Public,
    valAddr: prefix_1.AddressPrefix.Cosmos + prefix_1.AddressPrefix.Validator + prefix_1.AddressPrefix.Operator,
    valPub: prefix_1.AddressPrefix.Cosmos + prefix_1.AddressPrefix.Validator + prefix_1.AddressPrefix.Operator + prefix_1.AddressPrefix.Public,
    consAddr: prefix_1.AddressPrefix.Cosmos + prefix_1.AddressPrefix.Validator + prefix_1.AddressPrefix.Consensus,
    consPub: prefix_1.AddressPrefix.Cosmos + prefix_1.AddressPrefix.Validator + prefix_1.AddressPrefix.Consensus + prefix_1.AddressPrefix.Public,
};
function setBech32Prefix(value) {
    exports.bech32Prefix.accAddr = value.accAddr;
    exports.bech32Prefix.accPub = value.accPub;
    exports.bech32Prefix.valAddr = value.valAddr;
    exports.bech32Prefix.valPub = value.valPub;
    exports.bech32Prefix.consAddr = value.consAddr;
    exports.bech32Prefix.consPub = value.consPub;
}
exports.setBech32Prefix = setBech32Prefix;
