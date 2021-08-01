const Client = require("./client");
const server = require("ws").Server;
const sock = new server({ port: 3000 });

const Types = require("./json_types");

console.log("Start ChatServer!");

var clientList = {};
var nextClientId = 1;

sock.on("connection", (ws) => {
    var myClient = new Client(nextClientId, ws);
    clientList[nextClientId] = myClient;
    nextClientId++;
    ws.on("message", (json) => {
        const data = JSON.parse(json);
        switch (data.type) {
            case Types.NAME_ENTRY:
                myClient.name = data.name;
                Object.values(clientList).map((client) => {
                    if (client != myClient && client.isValid) {
                        client.noticeJoin(myClient.name);
                    }
                });
                break;

            case Types.SEND_MESSAGE:
                if (!myClient.isValid) { return; }
                const msg = data.message;
                Object.values(clientList).map((client) => {
                    if (client != myClient && client.isValid) {
                        client.sendMessage(myClient.name, msg);
                    }
                });
                break;
        }
    });

    ws.on("close", () => {
        delete clientList[myClient.id];
        Object.values(clientList).map((client) => {
            if (client.isValid) {
                client.noticeLeave(myClient.name);
            }
        });
    });
});
