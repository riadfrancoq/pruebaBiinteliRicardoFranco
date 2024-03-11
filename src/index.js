import Server from "./infrastructure/server.js";

const server = new Server();
server.listen();
server.db.connect();