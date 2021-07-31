const server = require("ws").Server;
const sock = new server({ port: 3000 });

console.log("Start ChatServer!");

sock.on("connection", (ws) => {

});
