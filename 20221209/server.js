const net = require("net")
const resFn = require("./lib/res")
const reqFn = require("./lib/req")
const PORT = process.env.SERVER_PORT || 3000
const HOST = process.env.SERVER_HOST || "127.0.0.1"

const server = net.createServer((client)=>{
    client.setEncoding("utf8")
    const res = resFn(client)

    client.on("data", (chunk) => {
        const req = reqFn(chunk)
        console.log(req)

        if(req.method === "GET" && req.path === '/'){
            res.send('hello index.html')
        } else if (req.method === 'GET' && req.path === '/list'){
            res.send("hello list.html")
        } else if (req.method === "GET" && req.path === "/write"){
            res.send("hello write.html")
        } else {
            res.send("Not found")
        }
        res.send("hello world!") //request message를 객체화를 시켜야한다
        // client.write("hello world!")
    })
})

server.on("connection", ()=>{
    console.log("hihi ?")
})

server.listen(PORT,HOST, ()=>{
    console.log("server start")
})


// chunk안에 있던 부분
// console.log(chunk)
// if(chunk === "index.html 줘"){
//     client.write("<h1>index.html이야~</h1>")
// } else if (chunk === "user.html 줄래?") {
//     client.write("<h1>user.html입니다</h1>")
// }