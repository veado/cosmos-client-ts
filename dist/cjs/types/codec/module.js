"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.canonicalizeJSON = exports.protobufTimestampToJsDate = exports.jsDateToProtobufTimestamp = exports.jsDateToGoTimeString = exports.goTimeStringToJsDate = exports.instanceToProtoAny = exports.protoAnyToInstance = exports.protoJSONToInstance = exports.instanceToProtoJSON = exports.isProtoJSONOfProtoAnyArray = exports.isProtoJSONOfProtoAny = exports.castProtoJSONOfProtoAny = exports.registerConvertJSON = exports.register = void 0;
var config_1 = require("../../config");
var proto_1 = require("../../proto");
var long_1 = __importDefault(require("long"));
function register(typeURL, constructor) {
    config_1.config.codecMaps.constructor[typeURL] = constructor;
    config_1.config.codecMaps.inv.set(constructor, typeURL);
}
exports.register = register;
function registerConvertJSON(constructor, converter) {
    config_1.config.codecMaps.convertJSON.set(constructor, converter);
}
exports.registerConvertJSON = registerConvertJSON;
function castProtoJSONOfProtoAny(value) {
    return value;
}
exports.castProtoJSONOfProtoAny = castProtoJSONOfProtoAny;
function isProtoJSONOfProtoAny(value) {
    return typeof value === 'object' && value != null && '@type' in value;
}
exports.isProtoJSONOfProtoAny = isProtoJSONOfProtoAny;
function isProtoJSONOfProtoAnyArray(value) {
    return value instanceof Array && value.every(function (v) { return isProtoJSONOfProtoAny(v); });
}
exports.isProtoJSONOfProtoAnyArray = isProtoJSONOfProtoAnyArray;
/**
 * Instance -> ProtoJSON
 * @param value
 * @returns
 */
function instanceToProtoJSON(value) {
    var e_1, _a;
    if (value instanceof Array) {
        return value.map(function (v) { return instanceToProtoJSON(v); });
    }
    if (value instanceof Uint8Array) {
        return Buffer.from(value).toString('base64');
    }
    if (value instanceof proto_1.google.protobuf.Any) {
        var instance = protoAnyToInstance(value);
        var constructor_1 = instance === null || instance === void 0 ? void 0 : instance.constructor;
        var typeURL = constructor_1 && config_1.config.codecMaps.inv.get(constructor_1);
        var ret = __assign({ '@type': typeURL }, instanceToProtoJSON(instance));
        if (!typeURL) {
            delete ret['@type'];
        }
        return ret;
    }
    if (value instanceof proto_1.google.protobuf.Timestamp) {
        return jsDateToGoTimeString(protobufTimestampToJsDate(value));
    }
    if (long_1.default.isLong(value)) {
        return value.toString();
    }
    if (typeof value !== 'object') {
        return value;
    }
    if (value == null) {
        return value;
    }
    var constructor = value === null || value === void 0 ? void 0 : value.constructor;
    var prototype = constructor === null || constructor === void 0 ? void 0 : constructor.prototype;
    var keys = prototype ? Object.keys(prototype) : Object.keys(value);
    var newValue = {};
    try {
        for (var keys_1 = __values(keys), keys_1_1 = keys_1.next(); !keys_1_1.done; keys_1_1 = keys_1.next()) {
            var key = keys_1_1.value;
            var v = value[key];
            if (v == null || typeof v === 'function') {
                continue;
            }
            newValue[key] = instanceToProtoJSON(v);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (keys_1_1 && !keys_1_1.done && (_a = keys_1.return)) _a.call(keys_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    var converter = constructor && config_1.config.codecMaps.convertJSON.get(constructor);
    if (converter) {
        return converter(newValue);
    }
    return newValue;
}
exports.instanceToProtoJSON = instanceToProtoJSON;
function protoJSONArrayToInstance(value) {
    var e_2, _a;
    var array = [];
    try {
        for (var value_1 = __values(value), value_1_1 = value_1.next(); !value_1_1.done; value_1_1 = value_1.next()) {
            var v = value_1_1.value;
            var instance = protoJSONToInstance(v);
            if (instance instanceof Error) {
                return instance;
            }
            array.push(instance);
        }
    }
    catch (e_2_1) { e_2 = { error: e_2_1 }; }
    finally {
        try {
            if (value_1_1 && !value_1_1.done && (_a = value_1.return)) _a.call(value_1);
        }
        finally { if (e_2) throw e_2.error; }
    }
    return array;
}
/**
 * ProtoJSON -> Instance
 * @param value
 * @returns
 */
function protoJSONToInstance(value) {
    var e_3, _a;
    if (value == null) {
        return Error('Entered value is null or undefined');
    }
    var typeURL = value['@type'];
    if (!typeURL) {
        return Error("This object doesn't have information of type");
    }
    if (!config_1.config.codecMaps.constructor[typeURL]) {
        return Error("This type is not registered: " + typeURL + "}");
    }
    var newValue = {};
    try {
        for (var _b = __values(Object.entries(value)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var _d = __read(_c.value, 2), key = _d[0], _v = _d[1];
            var v = _v;
            if (isProtoJSONOfProtoAnyArray(v)) {
                var array = protoJSONArrayToInstance(v);
                if (array instanceof Error) {
                    return array;
                }
                newValue[key] = array.map(function (instance) { return instanceToProtoAny(instance); });
            }
            else if (isProtoJSONOfProtoAny(v)) {
                var instance = protoJSONToInstance(v);
                if (instance instanceof Error) {
                    return instance;
                }
                newValue[key] = instanceToProtoAny(instance);
            }
            else {
                newValue[key] = v;
            }
        }
    }
    catch (e_3_1) { e_3 = { error: e_3_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_3) throw e_3.error; }
    }
    return config_1.config.codecMaps.constructor[typeURL].fromObject(newValue);
}
exports.protoJSONToInstance = protoJSONToInstance;
/**
 * ProtoAny -> Instance
 * @param value
 */
function protoAnyToInstance(value) {
    if (!value) {
        throw Error("Object 'value' is null or undefined");
    }
    if (!value.type_url) {
        throw Error("The field 'type_url' is undefined");
    }
    if (!value.value) {
        throw Error("The field 'value' is undefined");
    }
    return config_1.config.codecMaps.constructor[value.type_url].decode(value.value);
}
exports.protoAnyToInstance = protoAnyToInstance;
/**
 * Instance -> ProtoAny
 * @param value
 * @returns
 */
function instanceToProtoAny(value) {
    var constructor = value === null || value === void 0 ? void 0 : value.constructor;
    if (!constructor) {
        throw Error("The field 'constructor' is undefined");
    }
    var typeURL = constructor && config_1.config.codecMaps.inv.get(constructor);
    if (!typeURL) {
        throw Error("This type is not registered: " + typeURL);
    }
    var packed = new proto_1.google.protobuf.Any({
        type_url: typeURL,
        value: constructor.encode(value).finish(),
    });
    return packed;
}
exports.instanceToProtoAny = instanceToProtoAny;
function goTimeStringToJsDate(goTimeString) {
    return new Date(Date.parse(goTimeString));
}
exports.goTimeStringToJsDate = goTimeStringToJsDate;
function jsDateToGoTimeString(jsDate) {
    var timezoneOffset = jsDate.getTimezoneOffset();
    var timezoneHours = timezoneOffset / 60;
    var timezoneMinutes = timezoneOffset % 60;
    var rfc3339 = [
        jsDate.getFullYear(),
        '-',
        ("0" + (jsDate.getMonth() + 1)).slice(-2),
        '-',
        ("0" + jsDate.getDate()).slice(-2),
        'T',
        ("0" + jsDate.getHours()).slice(-2),
        ':',
        ("0" + jsDate.getMinutes()).slice(-2),
        ':',
        ("0" + jsDate.getSeconds()).slice(-2),
        -timezoneHours < 0 ? '' : '+',
        ("0" + -timezoneHours).slice(-2),
        ':',
        ("0" + timezoneMinutes).slice(-2),
    ].join('');
    return rfc3339;
}
exports.jsDateToGoTimeString = jsDateToGoTimeString;
function jsDateToProtobufTimestamp(jsDate) {
    return new proto_1.google.protobuf.Timestamp({
        seconds: long_1.default.fromNumber(jsDate.getTime() / 1000),
    });
}
exports.jsDateToProtobufTimestamp = jsDateToProtobufTimestamp;
function protobufTimestampToJsDate(protobufTimestamp) {
    return new Date(protobufTimestamp.seconds.toNumber() * 1000);
}
exports.protobufTimestampToJsDate = protobufTimestampToJsDate;
function canonicalizeJSON(value) {
    var e_4, _a;
    if (Object.prototype.toString.call(value) === '[object Object]') {
        var sorted = {};
        var keys = Object.keys(value).sort();
        try {
            for (var keys_2 = __values(keys), keys_2_1 = keys_2.next(); !keys_2_1.done; keys_2_1 = keys_2.next()) {
                var key = keys_2_1.value;
                var keyValue = value[key];
                if (keyValue != null) {
                    sorted[key] = canonicalizeJSON(keyValue);
                }
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (keys_2_1 && !keys_2_1.done && (_a = keys_2.return)) _a.call(keys_2);
            }
            finally { if (e_4) throw e_4.error; }
        }
        return sorted;
    }
    if (Array.isArray(value)) {
        return value.map(function (element) { return canonicalizeJSON(element); });
    }
    return value === undefined ? null : value;
}
exports.canonicalizeJSON = canonicalizeJSON;
