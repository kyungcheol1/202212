const net = require("net");
const resFn = require("./lib/res")
// const reqFn = require("./lib/req")
const PORT = process.env.SERVER_PORT || 3000;
const HOST = process.env.SERVER_HOST || "127.0.0.1";

const server = net.createServer((client)=>{
    client.setEncoding("utf-8")

    client.on("data", (chunk)=>{
        console.log(chunk)
        const res = resFn(client)
        // const req = reqFn(chunk)
        res.sendfile("index.html")
    })
});

server.on("connection", ()=>{
    console.log("connected to client")
})

server.listen(PORT, HOST, () => {
    console.log("server start");
});