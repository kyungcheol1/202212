const net = require("net")
const resFn = require("./lib/res")
const reqFn = require("./lib/req")
const PORT = process.env.SERVER_POST || 3000
const HOST = process.env.SERVER_HOST || "127.0.0.1"

const server = net.createServer((client)=>{
    client.setEncoding("utf8")

    client.on("data", (chunk)=>{
        console.log(chunk)
        const res = resFn(client)
        const req = reqFn(chunk)

        if(req.method === "GET" && req.path === '/'){
            res.send('<h1>응당~~~</h1>')
        } else if (req.method === "GET" && req.path === "/list"){
            console.log("==========")
            console.log(res)
            res.sendFile('list.html')
        } else if (req.method === "GET" && req.path === "/write"){
            res.sendFile('write.html')
        } else if (req.method === "GET" && req.path === "/update"){
            res.sendFile('update.html')
        } else if (req.method === "GET" && req.path === "/view") {
            res.sendFile('view.html')
        }
        // console.log(req)
        // res.send("<h1>응답~~~</h1>")
        
    })
})

server.on("connection", ()=>{
    console.log("connected")
})

server.listen(PORT,HOST,()=>{
    console.log("server start")
})