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
describe('sdk', function () {
    it('multisig', function () { return __awaiter(void 0, void 0, void 0, function () {
        var json, obj, unpacked;
        return __generator(this, function (_a) {
            expect.hasAssertions();
            json = "\n    {\n      \"@type\": \"/cosmos.auth.v1beta1.BaseAccount\",\n      \"address\": \"osmo1auheafvzrej6ljjdz9vqt6caxzz7rewaqknqpc\",\n      \"pub_key\": {\n          \"@type\": \"/cosmos.crypto.multisig.LegacyAminoPubKey\",\n          \"threshold\": 4,\n          \"public_keys\": [\n              {\n                  \"@type\": \"/cosmos.crypto.secp256k1.PubKey\",\n                  \"key\": \"AgRqhR0KbyL3kTxdtsW2pLvZmKVQQp4JHFNGK54PFQBi\"\n              },\n              {\n                  \"@type\": \"/cosmos.crypto.secp256k1.PubKey\",\n                  \"key\": \"As/ouf6C1qz4n+Csqt9ZqML9VnFG88gluMIt1KiKZYgG\"\n              },\n              {\n                  \"@type\": \"/cosmos.crypto.secp256k1.PubKey\",\n                  \"key\": \"AxZ0qBLKcUoiNcEOYwy1gStAYGiDZBfZwki3gqv6AiOB\"\n              },\n              {\n                  \"@type\": \"/cosmos.crypto.secp256k1.PubKey\",\n                  \"key\": \"Ap5caxs652g/S0lFkLivfeG7a8KPFH0JV9xX+Cvgh+nw\"\n              },\n              {\n                  \"@type\": \"/cosmos.crypto.secp256k1.PubKey\",\n                  \"key\": \"AhH+cRacMEEJ8xjU0vulJbJ4rpIVdDDUvyWoj+4ao+wS\"\n              },\n              {\n                  \"@type\": \"/cosmos.crypto.secp256k1.PubKey\",\n                  \"key\": \"Azb7O3HKDZhZIoe7he1OkmrNKs8I/im+Cx4hztwv5xMj\"\n              },\n              {\n                  \"@type\": \"/cosmos.crypto.secp256k1.PubKey\",\n                  \"key\": \"AgJ0b5zwlNPxj67gtGDE0CYu4kepxKikUwuYM+o/P6Bu\"\n              }\n          ]\n      },\n      \"account_number\": \"430633\",\n      \"sequence\": \"1\"\n    }\n";
            obj = JSON.parse(json);
            unpacked = __1.cosmosclient.codec.protoJSONToInstance(obj);
            console.log(unpacked);
            expect(true).toBeTruthy();
            return [2 /*return*/];
        });
    }); });
});
