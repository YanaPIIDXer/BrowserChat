var sock = null;
window.onload = () => {
    sock = new WebSocket("ws://127.0.0.1:3000");
    sock.addEventListener("message", (e) => {
        const recv = JSON.parse(e.data);
        buildDom(recv.message, false);
    });

    sock.addEventListener("error", (e) => {
        alert("Socket Error!");
        console.log(e);
        sock = null;
    });
}

const sendMessage = (message) => {
    if (sock === null) { return; }

    buildDom(message, true);
    sock.send(message);
}