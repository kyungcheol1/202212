const net = require("net")
const {incodeMessage : reqeustMessage, decidingMessage: b} = require("./lib/message")

const config = ({port:3000, host:"127.0.0.1"})
const socket = net.connect(config)

socket.on("connect", ()=> {
    console.log("connected to server")
    const message = {
        reply:true, 
        "content-type":"string", 
        body: "답장주세요"
    }
    socket.write(reqeustMessage(message))
    socket.write("data~~~~")
})