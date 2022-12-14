const net = require("net")
const reqFn = require("./lib/req")
const resFn = require("./lib/res")
const PORT = process.SERVER_PORT || 3000
const HOST = process.SERVER_HOST || "127.0.0.1"

const server = net.createServer((client)=>{
    client.setEncoding("utf8")

    client.on("data", (chunk)=>{
        const res = resFn(client)
        const req = reqFn(chunk)
        if(req.method === "GET" && req.path === "/"){
            res.sendFile("index.html")
        } else if(req.method === "GET" && req.path === "/list"){
            res.sendFile("list.html")
        } else if(req.method === "GET" && req.path === "/write"){
            res.sendFile("write.html")
        } else if(req.method === "GET" && req.path === "/modify"){
            res.sendFile("modify.html")
        }
    })
})

server.on("connection", ()=>{
    console.log("hihi ??")
})

server.listen(PORT, HOST, ()=>{
    console.log("server Sttttart")
})