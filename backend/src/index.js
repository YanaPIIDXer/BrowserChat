const Client = require("./client");
const server = require("ws").Server;
const sock = new server({ port: 3000 });

console.log("Start ChatServer!");

var clientList = {};
var nextClientId = 1;

// クライアントと共通の定義
const NAME_ENTRY = 0;
const SEND_MESSAGE = 1;

sock.on("connection", (ws) => {
    var myClient = new Client(nextClientId, ws);
    clientList[nextClientId] = myClient;
    nextClientId++;
    ws.on("message", (json) => {
        const data = JSON.parse(json);
        switch (data.type) {
            case NAME_ENTRY:
                myClient.name = data.name;
                break;

            case SEND_MESSAGE:
                if (!myClient.isValid) { return; }
                const msg = data.message.toString("utf8");
                Object.values(clientList).map((client) => {
                    if (client != myClient && client.isValid) {
                        client.sendMessage(msg);
                    }
                });
                break;
        }
    });

    ws.on("close", () => {
        delete clientList[myClient.id];
    });
});
