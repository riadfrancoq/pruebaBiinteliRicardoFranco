import Server from "./server.js";

const server = new Server();
server.listen();
server.db.connect();