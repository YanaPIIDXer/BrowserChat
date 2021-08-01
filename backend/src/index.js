const server = require("ws").Server;
const sock = new server({ port: 3000 });

console.log("Start ChatServer!");

var sockList = [];

sock.on("connection", (ws) => {
    sockList.push(ws);
    ws.on("message", (message) => {
        const msg = message.toString("utf8");
        sockList.map((s) => {
            if (s != ws) {
                s.send(msg);
            }
        });
    });

    ws.on("close", () => {
        sockList.splice(sockList.indexOf(ws), 1);
    });
});
