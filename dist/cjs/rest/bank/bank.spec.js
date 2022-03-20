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
Object.defineProperty(exports, "__esModule", { value: true });
var __1 = require("../..");
describe('bank', function () {
    it('send', function () { return __awaiter(void 0, void 0, void 0, function () {
        var sdk, privKey, _a, _b, pubKey, address, fromAddress, toAddress, account, msgSend, txBody, authInfo, txBuilder, signDocBytes, res;
        var _c;
        var _d, _e;
        return __generator(this, function (_f) {
            switch (_f.label) {
                case 0:
                    expect.hasAssertions();
                    sdk = new __1.cosmosclient.CosmosSDK('http://localhost:1317', 'testchain');
                    _b = (_a = __1.proto.cosmos.crypto.secp256k1.PrivKey).bind;
                    _c = {};
                    return [4 /*yield*/, __1.cosmosclient.generatePrivKeyFromMnemonic('joke door law post fragile cruel torch silver siren mechanic flush surround')];
                case 1:
                    privKey = new (_b.apply(_a, [void 0, (_c.key = _f.sent(),
                            _c)]))();
                    pubKey = privKey.pubKey();
                    address = __1.cosmosclient.AccAddress.fromPublicKey(pubKey);
                    expect(address.toString()).toStrictEqual('cosmos14ynfqqa6j5k3kcqm2ymf3l66d9x07ysxgnvdyx');
                    fromAddress = address;
                    toAddress = address;
                    return [4 /*yield*/, __1.rest.auth
                            .account(sdk, fromAddress)
                            .then(function (res) { return res.data.account && __1.cosmosclient.codec.unpackCosmosAny(res.data.account); })
                            .catch(function (_) { return undefined; })];
                case 2:
                    account = _f.sent();
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
                        messages: [__1.cosmosclient.codec.packAny(msgSend)],
                    });
                    authInfo = new __1.proto.cosmos.tx.v1beta1.AuthInfo({
                        signer_infos: [
                            {
                                public_key: __1.cosmosclient.codec.packAny(pubKey),
                                mode_info: {
                                    single: {
                                        mode: __1.proto.cosmos.tx.signing.v1beta1.SignMode.SIGN_MODE_DIRECT,
                                    },
                                },
                                sequence: account.sequence,
                            },
                        ],
                        fee: {
                            gas_limit: __1.cosmosclient.Long.fromString('200000'),
                        },
                    });
                    txBuilder = new __1.cosmosclient.TxBuilder(sdk, txBody, authInfo);
                    signDocBytes = txBuilder.signDocBytes(account.account_number);
                    txBuilder.addSignature(privKey.sign(signDocBytes));
                    return [4 /*yield*/, __1.rest.tx.broadcastTx(sdk, {
                            tx_bytes: txBuilder.txBytes(),
                            mode: __1.rest.tx.BroadcastTxMode.Block,
                        })];
                case 3:
                    res = _f.sent();
                    console.log(res);
                    expect((_e = (_d = res.data.tx_response) === null || _d === void 0 ? void 0 : _d.raw_log) === null || _e === void 0 ? void 0 : _e.match('failed')).toBeFalsy();
                    return [2 /*return*/];
            }
        });
    }); });
});
