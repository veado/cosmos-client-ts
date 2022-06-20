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
var config_1 = require("./../address/config");
describe('ed25519', function () {
    it('ed25519_accPubkey_cosmos', function () { return __awaiter(void 0, void 0, void 0, function () {
        var pub_key, priv_key, publicKeyUnpack, privateKeyUnpack;
        return __generator(this, function (_a) {
            expect.hasAssertions();
            pub_key = {
                '@type': '/cosmos.crypto.ed25519.PubKey',
                key: 'CqJssSo+a3LSQHKgbbqL/KTLeECZO/Jc3lrsQcY/2Po=',
            };
            priv_key = {
                '@type': '/cosmos.crypto.ed25519.PrivKey',
                key: 'vGqFxQ10qeP98qJ/mdpcJpPTkc6uqI0dr9x6L9AFSEMKomyxKj5rctJAcqBtuov8pMt4QJk78lzeWuxBxj/Y+g==',
            };
            publicKeyUnpack = __1.cosmosclient.codec.protoJSONToInstance(pub_key);
            privateKeyUnpack = __1.cosmosclient.codec.protoJSONToInstance(priv_key);
            //check1 (encoded public key from packed pubkey vs packed privkey )
            expect(publicKeyUnpack.accPubkey()).toBe(privateKeyUnpack.pubKey().accPubkey());
            return [2 /*return*/];
        });
    }); });
    it('ed25519_accPubkey_ununifi', function () { return __awaiter(void 0, void 0, void 0, function () {
        var pub_key, priv_key, publicKeyUnpack, privateKeyUnpack;
        return __generator(this, function (_a) {
            expect.hasAssertions();
            //set prefix for test
            (0, config_1.setBech32Prefix)({
                accAddr: 'ununifi',
                accPub: 'ununifipub',
                valAddr: 'ununifivaloper',
                valPub: 'ununifivaloperpub',
                consAddr: 'ununifivalcons',
                consPub: 'ununifivalconspub',
            });
            pub_key = {
                '@type': '/cosmos.crypto.ed25519.PubKey',
                key: '+q8dUtYeppa3ycdKFIc1Dl9OtVLbTVlXoBpmsOO4p40=',
            };
            priv_key = {
                '@type': '/cosmos.crypto.ed25519.PrivKey',
                key: 'Q7RecOq++QctQfKXqBOnrvMIT81sC8KaIE+HY+ZfsOn6rx1S1h6mlrfJx0oUhzUOX061UttNWVegGmaw47injQ==',
            };
            publicKeyUnpack = __1.cosmosclient.codec.protoJSONToInstance(pub_key);
            privateKeyUnpack = __1.cosmosclient.codec.protoJSONToInstance(priv_key);
            //check1 (encoded public key from packed pubkey vs packed privkey )
            expect(publicKeyUnpack.accPubkey()).toBe(privateKeyUnpack.pubKey().accPubkey());
            //check2 (encoded public key from packed pubkey vs ununifid show-validator command )
            expect(privateKeyUnpack.pubKey().accPubkey()).toBe('ununifivalconspub1zcjduepql2h365kkr6nfdd7fca9pfpe4pe05ad2jmdx4j4aqrfntpcac57xssk7egh');
            return [2 /*return*/];
        });
    }); });
});
