const express = require("express");
const nunjucks = require("nunjucks");
const app = express();
const PORT = process.env.SERVER_PORT || 3000;

app.set("view engine", "html");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

nunjucks.configure("views", {
    express: app,
});

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/list", (req, res) => {
    res.render("list");
});

app.get("/view", (req, res) => {
    res.render("view");
});

app.listen(PORT, () => {
    console.log("hihi??");
});
