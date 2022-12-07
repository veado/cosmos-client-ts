"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var __1 = require("../..");
var long_1 = __importDefault(require("long"));
describe('bank', function () {
    it('send', function () { return __awaiter(void 0, void 0, void 0, function () {
        var sdk, privKey1, _a, _b, pubKey1, privKey2, _c, _d, pubKey2, privKey3, _e, _f, pubKey3, multisigPubKey, address, fromAddress, toAddress, account, msgSend, txBody, authInfo, txBuilder, signDocBytes, signature, res;
        var _g, _h, _j;
        var _k, _l, _m;
        return __generator(this, function (_o) {
            switch (_o.label) {
                case 0:
                    expect.hasAssertions();
                    sdk = new __1.cosmosclient.CosmosSDK('http://localhost:1317', 'testchain');
                    _b = (_a = __1.proto.cosmos.crypto.secp256k1.PrivKey).bind;
                    _g = {};
                    return [4 /*yield*/, __1.cosmosclient.generatePrivKeyFromMnemonic('joke door law post fragile cruel torch silver siren mechanic flush surround')];
                case 1:
                    privKey1 = new (_b.apply(_a, [void 0, (_g.key = _o.sent(),
                            _g)]))();
                    pubKey1 = privKey1.pubKey();
                    _d = (_c = __1.proto.cosmos.crypto.secp256k1.PrivKey).bind;
                    _h = {};
                    return [4 /*yield*/, __1.cosmosclient.generatePrivKeyFromMnemonic('torch silver siren mechanic flush surround joke door law post fragile cruel')];
                case 2:
                    privKey2 = new (_d.apply(_c, [void 0, (_h.key = _o.sent(),
                            _h)]))();
                    pubKey2 = privKey2.pubKey();
                    _f = (_e = __1.proto.cosmos.crypto.secp256k1.PrivKey).bind;
                    _j = {};
                    return [4 /*yield*/, __1.cosmosclient.generatePrivKeyFromMnemonic('joke door law mechanic flush surround post fragile cruel torch silver siren')];
                case 3:
                    privKey3 = new (_f.apply(_e, [void 0, (_j.key = _o.sent(),
                            _j)]))();
                    pubKey3 = privKey3.pubKey();
                    multisigPubKey = new __1.proto.cosmos.crypto.multisig.LegacyAminoPubKey({
                        threshold: 2,
                        public_keys: [
                            __1.cosmosclient.codec.instanceToProtoAny(pubKey1),
                            __1.cosmosclient.codec.instanceToProtoAny(pubKey2),
                            __1.cosmosclient.codec.instanceToProtoAny(pubKey3),
                        ],
                    });
                    address = __1.cosmosclient.AccAddress.fromPublicKey(multisigPubKey);
                    fromAddress = address;
                    toAddress = address;
                    return [4 /*yield*/, __1.rest.auth
                            .account(sdk, fromAddress)
                            .then(function (res) { return __1.cosmosclient.codec.protoJSONToInstance(__1.cosmosclient.codec.castProtoJSONOfProtoAny(res.data.account)); })
                            .catch(function () { return undefined; })];
                case 4:
                    account = _o.sent();
                    if (!(account instanceof __1.proto.cosmos.auth.v1beta1.BaseAccount)) {
                        console.log(account);
                        return [2 /*return*/];
                    }
                    msgSend = new __1.proto.cosmos.bank.v1beta1.MsgSend({
                        from_address: fromAddress.toString(),
                        to_address: toAddress.toString(),
                        amount: [{ denom: 'token', amount: '1' }],
                    });
                    txBody = new __1.proto.cosmos.tx.v1beta1.TxBody({
                        messages: [__1.cosmosclient.codec.instanceToProtoAny(msgSend)],
                    });
                    authInfo = new __1.proto.cosmos.tx.v1beta1.AuthInfo({
                        signer_infos: [
                            {
                                public_key: __1.cosmosclient.codec.instanceToProtoAny(multisigPubKey),
                                mode_info: {
                                    multi: {
                                        bitarray: __1.proto.cosmos.crypto.multisig.v1beta1.CompactBitArray.from([true, false, true]),
                                        mode_infos: [
                                            {
                                                single: {
                                                    mode: __1.proto.cosmos.tx.signing.v1beta1.SignMode.SIGN_MODE_DIRECT,
                                                },
                                            },
                                            {
                                                single: {
                                                    mode: __1.proto.cosmos.tx.signing.v1beta1.SignMode.SIGN_MODE_DIRECT,
                                                },
                                            },
                                        ],
                                    },
                                },
                                sequence: account.sequence,
                            },
                        ],
                        fee: {
                            gas_limit: long_1.default.fromString('200000'),
                        },
                    });
                    txBuilder = new __1.cosmosclient.TxBuilder(sdk, txBody, authInfo);
                    signDocBytes = txBuilder.signDocBytes(account.account_number);
                    signature = txBuilder.createSignatureOfMultisig([privKey1.sign(signDocBytes), null, privKey3.sign(signDocBytes)], (_k = authInfo.signer_infos[0].mode_info) === null || _k === void 0 ? void 0 : _k.multi);
                    if (signature instanceof Error) {
                        console.error(signature);
                        return [2 /*return*/];
                    }
                    txBuilder.addSignature(signature);
                    return [4 /*yield*/, __1.rest.tx.broadcastTx(sdk, {
                            tx_bytes: txBuilder.txBytes(),
                            mode: __1.rest.tx.BroadcastTxMode.Block,
                        })];
                case 5:
                    res = _o.sent();
                    console.log(res);
                    expect((_m = (_l = res.data.tx_response) === null || _l === void 0 ? void 0 : _l.raw_log) === null || _m === void 0 ? void 0 : _m.match('failed')).toBeFalsy();
                    return [2 /*return*/];
            }
        });
    }); });
});
