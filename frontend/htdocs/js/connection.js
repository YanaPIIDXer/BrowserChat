// サーバと共通の定義
const NAME_ENTRY = 0;
const SEND_MESSAGE = 1;

var sock = null;
window.onload = () => {
    sock = new WebSocket("ws://127.0.0.1:3000");
    sock.addEventListener("open", () => {
        var name = prompt("名前を入力してください", "名無し");
        sock.send(JSON.stringify({ "type": NAME_ENTRY, "name": name }));
    });

    sock.addEventListener("message", (e) => {
        const recv = JSON.parse(e.data);
        buildMessageDom(recv.name, recv.message, false);
    });

    sock.addEventListener("error", (e) => {
        alert("Socket Error!");
        console.log(e);
        sock = null;
    });
}

const sendMessage = (message) => {
    if (sock === null) { return; }

    buildMessageDom(null, message, true);
    sock.send(JSON.stringify({ "type": SEND_MESSAGE, "message": message }));
}