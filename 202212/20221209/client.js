const net = require("net")

const config = { port:3000, host:"127.0.0.1"}
const socket = net.connect(config) // 객체로 된 아이를 조작하기 위해서 변수로 받는다.

socket.on("connect", ()=>{
    console.log("Hi?")
    socket.write("index.html 줘")
})

socket.on("data", (chunk)=>{
    console.log(chunk.toString())
    socket.write("user.html 줄래?")
})
