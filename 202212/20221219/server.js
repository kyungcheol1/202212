const express = require("express");
const nunjucks = require("nunjucks");
const app = express();
const PORT = process.env.SERVER_PORT || 3000;

const list = [{ name: "test", content: "test", subject: "test" }];

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "html");

nunjucks.configure("views", {
    express: app,
});

app.post("/write", (req, res) => {
    const { subject, name, content } = req.body;
    list.push({ subject, content, name });
    res.redirect(`/view?index=${list.length - 1}`);
});

app.get("/view", (req, res) => {
    const { index } = req.query;
    res.render("view.html", { name: list[index].name, content: list[index].content, subject: list[index].subject });
    // res.render("view.html", {...list[index]})
});

app.get("/", (req, res) => {
    const { name } = req.query;
    res.render("index.html", { name });
});

app.get("/list", (req, res) => {
    res.render("list.html", { list });
});

app.get("/write", (req, res) => {
    res.render("write.html");
});

app.listen(PORT, () => {
    console.log("server start");
});
