const express = require("express");
const nunjucks = require("nunjucks");
const server = express();
const PORT = process.env.SERVER_PORT || 3500;

server.set("view engine", "html");
nunjucks.configure("views", { express: server });

server.use(express.static("public"));
server.use(express.urlencoded({ extended: false }));

server.get("/", (req, res) => {
    res.render("index");
});

server.get("/user/join", (req, res) => {
    res.render("user/join");
});

server.post("/user/join", (req, res) => {
    console.log(req.body);
    res.redirect("/user/welcome");
});

server.get("/user/welcome", (req, res) => {
    res.render("user/welcome");
});

server.on("connection", () => {
    console.log("e되나");
});

server.listen(PORT, () => {
    console.log("server start2");
});
