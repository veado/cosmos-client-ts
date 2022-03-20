"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.protobufTimestampToJsDate = exports.jsDateToProtobufTimestamp = exports.jsDateToGoTimeString = exports.goTimeStringToJsDate = exports.packAny = exports.unpackAny = exports.packAnyFromCosmosJSON = exports.packCosmosAny = exports.unpackCosmosAny = exports.register = void 0;
var config_1 = require("../../config");
var proto_1 = require("../../proto");
var long_1 = __importDefault(require("long"));
function register(type, constructor) {
    config_1.config.codecMaps.inv.set(constructor, type);
    config_1.config.codecMaps.encode[type] = constructor.encode;
    config_1.config.codecMaps.decode[type] = constructor.decode;
    config_1.config.codecMaps.fromObject[type] = constructor.fromObject;
}
exports.register = register;
/**
 * CosmosAny -> Instance
 * @param value
 * @returns
 */
function unpackCosmosAny(value) {
    var newValue = {};
    for (var key in value) {
        newValue[key] = packAnyFromCosmosJSON(value[key]);
    }
    var typeURL = value && value['@type'];
    if (!typeURL || !config_1.config.codecMaps.fromObject[typeURL]) {
        return newValue;
    }
    return config_1.config.codecMaps.fromObject[typeURL](newValue);
}
exports.unpackCosmosAny = unpackCosmosAny;
/**
 * Instance -> CosmosAny
 * @param value
 * @returns
 */
function packCosmosAny(value) {
    if (value instanceof Array) {
        return value.map(function (v) { return packCosmosAny(v); });
    }
    if (value instanceof Uint8Array) {
        return Buffer.from(value).toString('base64');
    }
    if (value instanceof proto_1.google.protobuf.Any) {
        return packCosmosAny(unpackAny(value));
    }
    if (value instanceof proto_1.google.protobuf.Timestamp) {
        return jsDateToGoTimeString(protobufTimestampToJsDate(value));
    }
    if (value instanceof long_1.default) {
        return value.toString();
    }
    if (typeof value !== 'object') {
        return value;
    }
    var newValue = {};
    var constructor = value === null || value === void 0 ? void 0 : value.constructor;
    var typeURL = constructor && config_1.config.codecMaps.inv.get(constructor);
    if (typeURL) {
        newValue['@type'] = typeURL;
    }
    for (var key in value) {
        var v = value[key];
        if (typeof v !== 'function') {
            newValue[key] = packCosmosAny(v);
        }
    }
    return newValue;
}
exports.packCosmosAny = packCosmosAny;
/**
 * CosmosAny -> Any
 * @param value
 */
function packAnyFromCosmosJSON(value) {
    var typeURL = value && value['@type'];
    if (!typeURL || !config_1.config.codecMaps.fromObject[typeURL]) {
        return value;
    }
    var newValue = {};
    for (var key in value) {
        newValue[key] = packAnyFromCosmosJSON(value[key]);
    }
    return new proto_1.google.protobuf.Any({
        type_url: typeURL,
        value: config_1.config.codecMaps.encode[typeURL](config_1.config.codecMaps.fromObject[typeURL](newValue)).finish(),
    });
}
exports.packAnyFromCosmosJSON = packAnyFromCosmosJSON;
/**
 * Any -> Instance
 * @param value
 */
function unpackAny(value) {
    if (!value) {
        throw Error("Object 'value' is undefined");
    }
    if (!value.type_url) {
        throw Error("The field 'type_url' is undefined");
    }
    if (!value.value) {
        throw Error("The field 'value' is undefined");
    }
    return config_1.config.codecMaps.decode[value.type_url](value.value);
}
exports.unpackAny = unpackAny;
/**
 * Instance -> Any
 * @param value
 * @returns
 */
function packAny(value) {
    var constructor = value === null || value === void 0 ? void 0 : value.constructor;
    if (!constructor) {
        throw Error("The field 'constructor' is undefined");
    }
    var typeURL = constructor && config_1.config.codecMaps.inv.get(constructor);
    if (!typeURL) {
        throw Error('This type is not registered');
    }
    var packed = new proto_1.google.protobuf.Any({
        type_url: typeURL,
        value: constructor.encode(value).finish(),
    });
    return packed;
}
exports.packAny = packAny;
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
