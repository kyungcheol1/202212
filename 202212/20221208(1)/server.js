const net = require("net")
const { decidingMessage } = require("./lib/message")
const PORT = process.env.SERVER_PORT || 3000
const HOST = process.env.SERVER_HOST || "127.0.0.1"

const server = net.createServer((client)=>{
    client.setEncoding("utf8")

    client.on("data", (chunk) => {
        console.log(chunk)
        const data = decidingMessage(chunk)
        console.log(data)
    })
})

server.on("connection", ()=>{
    console.log("connected to client")
})

server.listen(PORT, HOST, () => {
    console.log("server start")
})

