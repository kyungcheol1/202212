const net = require("net");
const resFn = require("./lib/res")
const reqFn = require("./lib/req")
const static = require("./lib/static")
const PORT = process.env.SERVER_PORT || 3000;
const HOST = process.env.SERVER_HOST || "127.0.0.1";

const server = net.createServer((client)=>{
    client.setEncoding("utf-8")

    client.on("data", (chunk)=>{
        // console.log(chunk)
        const req = reqFn(chunk)
        const res = resFn(client, req)
        
        for (const path in static){ //중간에 한 번 실행한다 해서 미들웨어라고 불린다.
            if(req.method === "GET" && req.path === path){
                res.sendStatic(path)
                // console.log(path)
            }
        }
        
        if(req.method === "GET" && req.path === "/"){
            const name = req.query?.name
            res.sendfile("index.html", { name,title:"메인페이지입니다." })
        } else if (req.method === "GET" && req.path === "/list") {
            res.sendfile("list.html")
        } else if (req.method === "GET" && req.path === "/view") {
            res.sendfile("view.html")
        } else if (req.method === "GET" && req.path === "/modify") {
            res.sendfile("modify.html")
        } else if (req.method === "GET" && req.path === "/write") {
            res.sendfile("write.html")
        } else if (req.method === "POST" && req.path === "/write") {
            res.sendfile(req.body.subject)
        }
        // } else if (req.method === "GET" && req.path === "/css/index.css"){
        //     res.sendStatic("/css/index.css")
        // } else if (req.method === "GET" && req.path === "/js/index.css") {
        //     res.sendStatic("/js/index.js")
        // }
    })
});

server.on("connection", ()=>{
    console.log("connected to client")
})

server.listen(PORT, HOST, () => {
    console.log("server start");
});
