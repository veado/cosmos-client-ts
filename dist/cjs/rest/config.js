"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.axiosDefaults = exports.globalAxios = void 0;
var axios_1 = __importDefault(require("axios"));
exports.globalAxios = axios_1.default;
exports.axiosDefaults = axios_1.default.defaults;
