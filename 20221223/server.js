const express = require("express");
const nunjucks = require("nunjucks");
const cookieParser = require("./middlewares/cookieParser");
const app = express();

app.set("view engine", "html");
nunjucks.configure("views", { express: app });

app.use(cookieParser());

app.get("/", (req, res) => {
    res.render("index.html");
});

app.get("/createCookie", (req, res) => {
    res.setHeader("name", "ingoo");
    res.setHeader("set-Cookie", "token=web7722; Domain=localhost; Path=/; Secure; HttpOnly;");
    res.send("응답");
});

app.get("/profile", (req, res) => {
    console.log(req.cookies);
    res.send("cookie");
});

app.listen(3001, () => {
    console.log("server stare");
});

