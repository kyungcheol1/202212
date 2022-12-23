# router 나누기

/root
controllers
routes
server.js
middlewares
controllers

callback router 안에 들어간 callback(미드웨이) 함수는 이 함수를 실행시키는 목적
요청객체와 응답객체를 주는 함수들

```js
const modifyController = (req,res)=>{
    const index = req.query.index
    items[index].subject = ...
    res.render("modify.html")
}

app.("/modify", modifyController)
```

```js
app.get("/");
app.get("/list");
app.get("/view");
app, get("/modify");
```

```js
const sepress = require("express");
const router = express.Router();
```

게시판이 3가지 형태

board, notice, gallery

/boadr/list
/boadr/wirte
/boadr/view
/boadr/modify

/notice/list
/notice/wirte
/notice/view
/notice/modify
/notice/index
