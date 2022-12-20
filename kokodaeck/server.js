const net = require("net")
const resFn = require("./lib/res")
const reqFn = require("./lib/req")
const PORT = process.env.SERVER_PORT || 3000
const HOST = process.env.SERVER_HOST || "127.0.0.1"

const server = net.createServer((client)=>{
    client.setEncoding("utf8")
    
    client.on("data", (chunk)=>{
        const req = reqFn(chunk)
        const res = resFn(client)
        // const res = resFn(client)
        console.log(chunk)
        if (req.method === "GET" && req.path === "/"){
            res.send("<h1>응답이라니께</h1>")
        } else if (req.method === "GET" && req.path === "/list") {
            res.sendfile("list.html")
        } else if (req.method === "GET" && req.path === "/write") {
            res.sendfile("write.html")
        }
        
    })
})

server.on("connection", ()=>{
    console.log("connected client")
})

server.listen(PORT, HOST, ()=>{
    console.log("start server")
})