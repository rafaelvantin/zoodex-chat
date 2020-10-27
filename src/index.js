const express = require("express");
const app = express();

const server = require("http").createServer(app);
require("./socket.js")(server);

server.listen(process.env.PORT || 3000);
