const express = require("express");
const router = require("./routes/index");
const app = express();
const nunjucks = require("nunjucks");
const { login } = require("./middlewares/index");

app.set("view engine", "html");
nunjucks.configure("views", {
    express: app,
});

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

app.use(router);
// const boardRouter = require("./routes/board.route");
// const galleryRouter = require("./routes/gallery.route");
// const noticeRouter = require("./routes/notice.route");
// router.get("/list", (req, res) => {
//     res.send("/page");
// });
// app.use("/board/", (req, res) => {
//     if (req.method === "get" && req.path === "board/list") {
//         ///code 실행
//     } else if (req.method === "get" && req.path === "board/list") {
//     }
// });
// router.get("/list", (req, res) => {
//     res.send("/ page");
// }); //등록형태 실행을 하진 않고 router 라는 객체 안에 이 데이터를 쌓는 역할이다.// 실행은 무조건 app 부터 시작이 되어야한다.

// router.get("/write", (req, res) => {
//     res.send("/ write");
// });

// router.get("/modify", (req, res) => {
//     res.send("/ modify");
// });
// app.use("/board", boardRouter);
// app.use("/notice", noticeRouter);
// app.use("/gallery", galleryRouter);
// app.get("/board/list", (req, res) => {
//     res.send("app get 으로 실행됨");
// });

// app.use(router);

// if(req.path.include("/board")) {

// }

app.get("/", (req, res) => {
    res.send("/ page");
});

app.listen(3000, () => {
    console.log("server start");
});
