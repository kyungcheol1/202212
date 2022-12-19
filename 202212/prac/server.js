const express = require("express");
const nunjucks = require("nunjucks");
const app = express();

app.set("view engine", "html");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
nunjucks.configure("views", { express: app });

const list = [];

app.get("/", (req, res) => {
    res.render("index.html");
});

app.get("/list", (req, res) => {
    res.render("list.html", { list });
});

app.get("/write", (req, res) => {
    res.render("write.html");
});

app.post("/write", (req, res) => {
    const getdate = () => {
        const now = new Date();
        let mm = now.getMonth() + 1;
        let dd = now.getDate();
        let yy = now.getFullYear();
        const arr = [yy, mm, dd];
        return arr.join("/");
    };
    const date = getdate();
    const { title, writer, content } = req.body;
    list.push({ title, writer, content, date });
    res.redirect(`/view?index=${list.length - 1}`);
});

app.get("/view", (req, res) => {
    const { index } = req.query;
    const path = list[index];
    res.render("view.html", { title: path.title, writer: path.writer, content: path.content });
});

app.get("/modify", (req, res) => {
    res.render("modify.html");
});

app.listen(3000, () => {
    console.log("server hi");
});
