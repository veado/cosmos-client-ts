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
var proto_1 = require("../../proto");
var module_1 = require("./module");
var long_1 = __importDefault(require("long"));
describe('codec', function () {
    it('cosmosJSONStringify', function () { return __awaiter(void 0, void 0, void 0, function () {
        var sdk, privKey, _a, _b, pubKey, address, fromAddress, toAddress, msgSend, txBody, authInfo, txBuilder, signDocBytes, json;
        var _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    expect.hasAssertions();
                    sdk = new __1.cosmosclient.CosmosSDK('http://localhost:1317', 'testchain');
                    _b = (_a = __1.proto.cosmos.crypto.secp256k1.PrivKey).bind;
                    _c = {};
                    return [4 /*yield*/, __1.cosmosclient.generatePrivKeyFromMnemonic('joke door law post fragile cruel torch silver siren mechanic flush surround')];
                case 1:
                    privKey = new (_b.apply(_a, [void 0, (_c.key = _d.sent(),
                            _c)]))();
                    pubKey = privKey.pubKey();
                    address = __1.cosmosclient.AccAddress.fromPublicKey(pubKey);
                    expect(address.toString()).toBe('cosmos14ynfqqa6j5k3kcqm2ymf3l66d9x07ysxgnvdyx');
                    fromAddress = address;
                    toAddress = address;
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
                                sequence: __1.cosmosclient.Long.fromNumber(0),
                            },
                        ],
                        fee: {
                            gas_limit: __1.cosmosclient.Long.fromString('200000'),
                        },
                    });
                    txBuilder = new __1.cosmosclient.TxBuilder(sdk, txBody, authInfo);
                    signDocBytes = txBuilder.signDocBytes(0);
                    txBuilder.addSignature(privKey.sign(signDocBytes));
                    json = txBuilder.cosmosJSONStringify(2);
                    console.log(json);
                    return [2 /*return*/];
            }
        });
    }); });
    it('unpackAny', function () {
        expect.hasAssertions();
        var res = {
            data: {
                account: {
                    '@type': '/cosmos.auth.v1beta1.BaseAccount',
                    address: 'jpyx10lcj22kzftvnduchatmnsnhfljeky5ghd398wt',
                    pub_key: { '@type': '/cosmos.crypto.secp256k1.PubKey', key: 'AvSf2U/B23UZKvLTD0E4xqJ33Nn0Z552nXCkkwEfleiu' },
                    account_number: '0',
                    sequence: '13',
                },
            },
            status: 200,
            statusText: 'OK',
            headers: { 'content-length': '315', 'content-type': 'application/json' },
            config: {
                url: 'http://a.test.jpyx.lcnem.net:1317/cosmos/auth/v1beta1/accounts/jpyx10lcj22kzftvnduchatmnsnhfljeky5ghd398wt',
                method: 'get',
                headers: { Accept: 'application/json, text/plain, */*' },
                transformRequest: [null],
                transformResponse: [null],
                timeout: 0,
                xsrfCookieName: 'XSRF-TOKEN',
                xsrfHeaderName: 'X-XSRF-TOKEN',
                maxContentLength: -1,
                maxBodyLength: -1,
            },
            request: {
                __zone_symbol__xhrSync: false,
                __zone_symbol__xhrURL: 'http://a.test.jpyx.lcnem.net:1317/cosmos/auth/v1beta1/accounts/jpyx10lcj22kzftvnduchatmnsnhfljeky5ghd398wt',
                __zone_symbol__readystatechangefalse: [
                    {
                        type: 'eventTask',
                        state: 'scheduled',
                        source: 'XMLHttpRequest.addEventListener:readystatechange',
                        zone: 'angular',
                        runCount: 6,
                    },
                ],
                __zone_symbol__abortfalse: [
                    { type: 'eventTask', state: 'scheduled', source: 'XMLHttpRequest.addEventListener:abort', zone: 'angular', runCount: 0 },
                ],
                __zone_symbol__errorfalse: [
                    { type: 'eventTask', state: 'scheduled', source: 'XMLHttpRequest.addEventListener:error', zone: 'angular', runCount: 0 },
                ],
                __zone_symbol__timeoutfalse: [
                    { type: 'eventTask', state: 'scheduled', source: 'XMLHttpRequest.addEventListener:timeout', zone: 'angular', runCount: 0 },
                ],
                __zone_symbol__xhrScheduled: true,
                __zone_symbol__xhrErrorBeforeScheduled: false,
                __zone_symbol__xhrTask: { type: 'macroTask', state: 'notScheduled', source: 'XMLHttpRequest.send', zone: 'angular', runCount: 0 },
            },
        };
        var unpacked = __1.cosmosclient.codec.unpackCosmosAny(res.data.account);
        if (!(unpacked instanceof __1.proto.cosmos.auth.v1beta1.BaseAccount)) {
            throw Error('');
        }
        console.log(unpacked);
        var key = __1.cosmosclient.codec.unpackAny(unpacked.pub_key);
        console.log(key);
        expect(true).toBeTruthy();
    });
    it('goTimeStringToJsDate', function () {
        expect.hasAssertions();
        var originalGoTimeString = '2021-12-09T18:00:00+09:00';
        var resultJsDate = (0, module_1.goTimeStringToJsDate)(originalGoTimeString);
        var resultJsDateTimestamp = resultJsDate.toUTCString();
        var expectedDateTimestamp = new Date(2021, 11, 9, 18, 0, 0).toUTCString();
        expect(resultJsDateTimestamp).toBe(expectedDateTimestamp);
    });
    it('jsDateToGoTimeString', function () {
        expect.hasAssertions();
        var originalDate = new Date(2021, 11, 9, 18, 0, 0);
        var resultDateString = (0, module_1.jsDateToGoTimeString)(originalDate);
        expect(resultDateString).toBe('2021-12-09T18:00:00+09:00');
    });
    it('jsDateToProtobufTimestamp', function () {
        expect.hasAssertions();
        var originalDate = new Date(2021, 11, 9, 18, 0, 0);
        var protobufTimestamp = (0, module_1.jsDateToProtobufTimestamp)(originalDate);
        expect(protobufTimestamp.seconds.low).toBe(1639040400);
        expect(protobufTimestamp.seconds.high).toBe(0);
        expect(protobufTimestamp.seconds.unsigned).toBe(false);
    });
    it('protobufTimestampToJsDate', function () {
        expect.hasAssertions();
        var protobufTimestamp = new proto_1.google.protobuf.Timestamp({
            seconds: long_1.default.fromNumber(new Date(2021, 11, 9, 18, 0, 0).getTime() / 1000),
        });
        var date = (0, module_1.protobufTimestampToJsDate)(protobufTimestamp);
        expect(date.getFullYear()).toBe(2021);
        expect(date.getMonth()).toBe(11);
        expect(date.getDate()).toBe(9);
        expect(date.getHours()).toBe(18);
        expect(date.getMinutes()).toBe(0);
        expect(date.getSeconds()).toBe(0);
    });
});
