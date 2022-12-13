const net = require("net")
const { json } = require("stream/consumers")

const socket = net.connect({port:3000, host:"127.0.0.1"})
//쓰는 순간 3way hand 일어난다.
//연결만 시켜두면 끝나지면 여기서 객체들을 받아두기 위해 socket이라는 변수에다가 담아둔 것이다.

socket.on("connect", ()=> {
    console.log("server랑 접속쓰")

    socket.write("aaa reply:false")
    socket.write("bbb reply:true")
    // const message1 = {
    //     content:"aaa",
    //     reply:false
    // }
    // const message2 = {
    //     content:"bbb",
    //     reply:true
    // }
    // socket.write(JSON.stringify(message1))
    // socket.write(JSON.stringify(message2))
})

socket.on("data", (chunk)=>{
    console.log(`received ${chunk}`)
    if (chunk.indexOf("ccc") !== -1) {
        socket.write("ddd")
    }
    if (chunk.indexOf("connection:false") !== -1){
        socket.end()
    }

})



