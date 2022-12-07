"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connect = void 0;
var webSocket_1 = require("rxjs/webSocket");
function connect(url) {
    var ws = new webSocket_1.WebSocketSubject({
        url: url + "/websocket",
    });
    return ws;
}
exports.connect = connect;
