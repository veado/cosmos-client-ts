"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
var proto_1 = require("../../proto");
var codec_1 = require("../codec");
require("./ed25519");
require("./multisig");
require("./secp256k1");
__exportStar(require("./key"), exports);
codec_1.codec.register('/cosmos.crypto.ed25519.PrivKey', proto_1.cosmos.crypto.ed25519.PrivKey);
codec_1.codec.register('/cosmos.crypto.ed25519.PubKey', proto_1.cosmos.crypto.ed25519.PubKey);
codec_1.codec.register('/cosmos.crypto.secp256k1.PrivKey', proto_1.cosmos.crypto.secp256k1.PrivKey);
codec_1.codec.register('/cosmos.crypto.secp256k1.PubKey', proto_1.cosmos.crypto.secp256k1.PubKey);
codec_1.codec.register('/cosmos.crypto.multisig.LegacyAminoPubKey', proto_1.cosmos.crypto.multisig.LegacyAminoPubKey);
