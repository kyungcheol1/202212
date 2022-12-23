const express = require("express");
const boardroute = require("./board.route");
const route = express.Router();

route.use("/board", boardroute);

module.exports = route;

