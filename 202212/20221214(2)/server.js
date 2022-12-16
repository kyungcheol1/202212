const express = require("express");
const nunjucks = require("nunjucks"); // 인자값 2개
const app = express();
const PORT = process.env.SERVER_PORT || 3000;

app.set("view engine", "html");
//템플릿 엔진을 사용하겠다는 선언 같은것
nunjucks.configure("views", {
    express: app, // express를 실행하는 변수명
});

// const callback = (req,res,next) => {
//     console.log("hello world")
//     next()
// }

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

// extended 확장 디렉토리 무엇을 쓸건지
// http://localhost:3000/css/index.css 등의 라우터를 만들어줌
// directory 명은 적어줘야 함 내부적으로 next 까지 실행됨
// path가 없으면 어떤 요청이 들어와도 이것만 실행한다.
// 어떤 것도 상관없이 일단 실행하고 다음걸 찾아서 실행한다(next가 있기 때문에)
// next를 만나지 않으면 하나만 실행한다.

app.get("/", (req, res) => {
    const name = req.query.name;
    console.log("되냐");
    res.render("index.html", { name: name });
});

//render 템플릿 엔진이 적용이 됐을 때 쓸 수 있는 값

// app.get('/',(req, res, next)=>{   // res req 객체를 만들어서 주는 것 라우터 요청이 들어오면 어떤걸 실행시키는지 알려주기 때문에 callback ? 미들웨어
//     console.log(req.query.name)
//     // res.send("hello world!")
//     next()
// }, (req,res)=>{
//     console.log("되냥")
//     res.send("hellllllo world")
// })

app.get("/user/join", (req, res) => {
    res.render("user/join.html");
});

app.post("/user/join", (req, res) => {
    const { userid, userpw, username } = req.body;
    console.log(userid);
    console.log(userpw);
    console.log(username);
    res.redirect("/user/welcome");
});

app.get("/user/welcome", (req, res) => {
    res.render("user/welcome.html");
});

app.listen(PORT, () => {
    console.log(`server start`);
});

//꼭 알아야하는 http 프로토콜
//location >> re요청 > url 바뀜
