const express = require("express");
const nunjucks = require("nunjucks");
const app = express();

app.set("view engine", "html");
app.use(express.static("public"));
nunjucks.configure("views", { express: app });
app.use(express.urlencoded({ extended: false }));

const list = [];

app.get("/", (req, res) => {
    res.render("index.html");
});

app.get("/list", (req, res) => {
    res.render("list.html", { list });
});

app.get("/view", (req, res) => {
    const { index } = req.query;
    res.render("view.html", { title: list[index].title, writer: list[index].writer, content: list[index].content });
});

app.get("/write", (req, res) => {
    res.render("write.html");
});

app.post("/write", (req, res) => {
    const { title, writer, content } = req.body;
    console.log(title, writer, content);
    list.push({ title, writer, content });
    res.redirect(`/view?index=${list.length - 1}`);
});

app.listen(3000, () => {
    console.log("server start");
});
