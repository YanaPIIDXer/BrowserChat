const Client = require("./client");
const server = require("ws").Server;
const sock = new server({ port: 3000 });

console.log("Start ChatServer!");

var clientList = {};
var nextClientId = 1;

sock.on("connection", (ws) => {
    var myClient = new Client(nextClientId, ws);
    clientList[nextClientId] = myClient;
    nextClientId++;
    ws.on("message", (message) => {
        const msg = message.toString("utf8");
        Object.values(clientList).map((client) => {
            if (client != myClient) {
                client.sendMessage(msg);
            }
        });
    });

    ws.on("close", () => {
        delete clientList[myClient.id];
    });
});
