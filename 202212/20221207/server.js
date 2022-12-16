const net = require("net")
const PORT = process.env.SERVER_PORT || 3000
const HOST = process.env.SERVER_HOST || "127.0.0.1"

const body = Buffer.from(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./kicss.css">
</head>
<body>
    <div id="head">
        <h1>
            <img src="http://www.kiweb.or.kr/images/main_new/logo_new_2018.png" alt="">
        </h1>
        <ul>
            <li><a href="">학교소개</a></li>
            <li><a href="">학교소개</a></li>
            <li><a href="">학교소개</a></li>
            <li><a href="">학교소개</a></li>
            <li><a href="">학교소개</a></li>
            <li><a href="">학교소개</a></li>
        </ul>
    </div>
</body>
</html>`)

const response = 
`
HTTP/1.1 200 Ok
Connection: keep-alive
keep-Alive: timeout=5
Content-type: text/html
Content-length: ${body.length}

${body.toString()}
`

const link = Buffer.from(`* {
    margin: 0;
    padding: 0;
}

ul,
li {
    list-style: none;
}

#head {
    display: flex;
    width: 1200px;
    height: 100px;
    background-color: silver;
}
`)

const responseCss = 
`
HTTP/1.1 200 Ok
Connection: keep-alive
keep-Alive: timeout=5
Content-type: text/css
Content-length: ${link.length}

${link.toString()}
`

const server = net.createServer((client)=> {
    client.setEncoding("utf8")
    // buffer 2진수 데이터 -> 16진수
    //문자 집합 > 아스키코드 유니코드 utf8 로 설정을 해줘야 볼 수 있다.
    client.on("data", (data)=>{
         //바로 utf8 로 바꿔서 가져오는것
        console.log(data)
        // console.log(data.toString("hex"))
        // console.log(data.toString("utf8"))


        if (data.indexOf("css") !== -1){
            client.write(responseCss)
        } else {
            client.write(response)
        }
    })

    client.on("close", ()=>{
        console.log("bye bye~")
    })
})

// 첫번째 콜백 > 클라이언트와 관계를 맺는 콜백 
// 두번째 콜백 > 클라이언트 데이터를 가져오는 콜백
/*
listen의 2가지 인자값
1: port
2: host / 어디 컴퓨터에 열건지 ? 127.0.0.1 <-- 내 컴퓨터의 host
3: listen 될 경우 실행할 함수 (callback) = 대부분 콘솔 찍는다*/

server.listen(PORT, HOST, ()=> {
    console.log(`Server Listening port : ${PORT}`)

    server.on("connection", ()=>{
        console.log("client 가 접속함")
    })
})