import { config } from '../../config';
import { google } from '../../proto';
import Long from 'long';
export function register(typeURL, constructor) {
    config.codecMaps.constructor[typeURL] = constructor;
    config.codecMaps.inv.set(constructor, typeURL);
}
export function registerConvertJSON(constructor, converter) {
    config.codecMaps.convertJSON.set(constructor, converter);
}
export function castProtoJSONOfProtoAny(value) {
    return value;
}
export function isProtoJSONOfProtoAny(value) {
    return typeof value === 'object' && value != null && '@type' in value;
}
export function isProtoJSONOfProtoAnyArray(value) {
    return value instanceof Array && value.every((v) => isProtoJSONOfProtoAny(v));
}
/**
 * Instance -> ProtoJSON
 * @param value
 * @returns
 */
export function instanceToProtoJSON(value) {
    if (value instanceof Array) {
        return value.map((v) => instanceToProtoJSON(v));
    }
    if (value instanceof Uint8Array) {
        return Buffer.from(value).toString('base64');
    }
    if (value instanceof google.protobuf.Any) {
        const instance = protoAnyToInstance(value);
        const constructor = instance?.constructor;
        const typeURL = constructor && config.codecMaps.inv.get(constructor);
        const ret = { '@type': typeURL, ...instanceToProtoJSON(instance) };
        if (!typeURL) {
            delete ret['@type'];
        }
        return ret;
    }
    if (value instanceof google.protobuf.Timestamp) {
        return jsDateToGoTimeString(protobufTimestampToJsDate(value));
    }
    if (Long.isLong(value)) {
        return value.toString();
    }
    if (typeof value !== 'object') {
        return value;
    }
    if (value == null) {
        return value;
    }
    const constructor = value?.constructor;
    const prototype = constructor?.prototype;
    const keys = prototype ? Object.keys(prototype) : Object.keys(value);
    const newValue = {};
    for (const key of keys) {
        const v = value[key];
        if (v == null || typeof v === 'function') {
            continue;
        }
        newValue[key] = instanceToProtoJSON(v);
    }
    const converter = constructor && config.codecMaps.convertJSON.get(constructor);
    if (converter) {
        return converter(newValue);
    }
    return newValue;
}
function protoJSONArrayToInstance(value) {
    const array = [];
    for (const v of value) {
        const instance = protoJSONToInstance(v);
        if (instance instanceof Error) {
            return instance;
        }
        array.push(instance);
    }
    return array;
}
/**
 * ProtoJSON -> Instance
 * @param value
 * @returns
 */
export function protoJSONToInstance(value) {
    if (value == null) {
        return Error('Entered value is null or undefined');
    }
    const typeURL = value['@type'];
    if (!typeURL) {
        return Error("This object doesn't have information of type");
    }
    if (!config.codecMaps.constructor[typeURL]) {
        return Error(`This type is not registered: ${typeURL}}`);
    }
    const newValue = {};
    for (const [key, _v] of Object.entries(value)) {
        const v = _v;
        if (isProtoJSONOfProtoAnyArray(v)) {
            const array = protoJSONArrayToInstance(v);
            if (array instanceof Error) {
                return array;
            }
            newValue[key] = array.map((instance) => instanceToProtoAny(instance));
        }
        else if (isProtoJSONOfProtoAny(v)) {
            const instance = protoJSONToInstance(v);
            if (instance instanceof Error) {
                return instance;
            }
            newValue[key] = instanceToProtoAny(instance);
        }
        else {
            newValue[key] = v;
        }
    }
    return config.codecMaps.constructor[typeURL].fromObject(newValue);
}
/**
 * ProtoAny -> Instance
 * @param value
 */
export function protoAnyToInstance(value) {
    if (!value) {
        throw Error("Object 'value' is null or undefined");
    }
    if (!value.type_url) {
        throw Error("The field 'type_url' is undefined");
    }
    if (!value.value) {
        throw Error("The field 'value' is undefined");
    }
    return config.codecMaps.constructor[value.type_url].decode(value.value);
}
/**
 * Instance -> ProtoAny
 * @param value
 * @returns
 */
export function instanceToProtoAny(value) {
    const constructor = value?.constructor;
    if (!constructor) {
        throw Error("The field 'constructor' is undefined");
    }
    const typeURL = constructor && config.codecMaps.inv.get(constructor);
    if (!typeURL) {
        throw Error(`This type is not registered: ${typeURL}`);
    }
    const packed = new google.protobuf.Any({
        type_url: typeURL,
        value: constructor.encode(value).finish(),
    });
    return packed;
}
export function goTimeStringToJsDate(goTimeString) {
    return new Date(Date.parse(goTimeString));
}
export function jsDateToGoTimeString(jsDate) {
    const timezoneOffset = jsDate.getTimezoneOffset();
    const timezoneHours = timezoneOffset / 60;
    const timezoneMinutes = timezoneOffset % 60;
    const rfc3339 = [
        jsDate.getFullYear(),
        '-',
        `0${jsDate.getMonth() + 1}`.slice(-2),
        '-',
        `0${jsDate.getDate()}`.slice(-2),
        'T',
        `0${jsDate.getHours()}`.slice(-2),
        ':',
        `0${jsDate.getMinutes()}`.slice(-2),
        ':',
        `0${jsDate.getSeconds()}`.slice(-2),
        -timezoneHours < 0 ? '' : '+',
        `0${-timezoneHours}`.slice(-2),
        ':',
        `0${timezoneMinutes}`.slice(-2),
    ].join('');
    return rfc3339;
}
export function jsDateToProtobufTimestamp(jsDate) {
    return new google.protobuf.Timestamp({
        seconds: Long.fromNumber(jsDate.getTime() / 1000),
    });
}
export function protobufTimestampToJsDate(protobufTimestamp) {
    return new Date(protobufTimestamp.seconds.toNumber() * 1000);
}
export function canonicalizeJSON(value) {
    if (Object.prototype.toString.call(value) === '[object Object]') {
        const sorted = {};
        const keys = Object.keys(value).sort();
        for (const key of keys) {
            const keyValue = value[key];
            if (keyValue != null) {
                sorted[key] = canonicalizeJSON(keyValue);
            }
        }
        return sorted;
    }
    if (Array.isArray(value)) {
        return value.map((element) => canonicalizeJSON(element));
    }
    return value === undefined ? null : value;
}
