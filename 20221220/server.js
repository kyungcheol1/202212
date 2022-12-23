const express = require("express");
const app = express();
const nunjucks = require("nunjucks");

const item = [
    {
        subject: "첫번째 게시물",
        content: "content",
        name: "name",
        date: "date",
        hit: "hit",
    },
];

app.use(express.urlencoded({ extended: false }));
app.set("view engine", "html");
nunjucks.configure("views", { express: app });

app.get("/", (req, res) => {
    res.render("index.html");
});

app.get("/list", (req, res) => {
    res.render("board/list.html", { item });
});

app.get("/write", (req, res) => {
    res.render("board/write.html");
});

app.post("/write", (req, res) => {
    const { content, subject, name, date, hit } = req.body;
    item.push({ content, subject, name, date, hit });
    res.redirect(`/view?index=${item.length - 1}`);
});

app.get("/view", (req, res) => {
    const { index } = req.query;
    const items = {
        ...item[index],
        index,
    };
    console.log(items);
    res.render("board/view.html", { items });
});

app.get("/view", (req, res) => {
    const { index } = req.query;
    const items = {
        ...item[index],
        index,
    };
    console.log(items);
    res.render("board/view.html", { items });
});

app.get("/modify", (req, res) => {
    const { index } = req.query;
    const items = {
        ...item[index],
        index,
    };
    res.render("board/modify.html", { items });
});

app.post("/modify", (req, res) => {
    // const { index, subject, content, name } = req.body;
    // item[index].subject = subject;
    // item[index].content = content;
    // item[index].name = name;
    const { index, ...rest } = req.body;
    item[index] = rest;
    res.redirect(`/view?index=${index}`);
});

app.get("/delete", (req, res) => {
    const { index } = req.query;
    item.splice(index, 1);
    res.redirect("/list");
});

app.listen(3000, () => {
    console.log("server start");
});

