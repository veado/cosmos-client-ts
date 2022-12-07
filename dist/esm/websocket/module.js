import { WebSocketSubject } from 'rxjs/webSocket';
export function connect(url) {
    const ws = new WebSocketSubject({
        url: `${url}/websocket`,
    });
    return ws;
}
