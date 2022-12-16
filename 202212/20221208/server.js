const net = require("net")
const PORT = process.env.SERVER_PORT || 3000
const HOST = process.env.SERVER_HOST || 3000

const server = net.createServer((client)=>{
    client.setEncoding("utf8")
    client.on('data', (chunk)=>{
        console.log(chunk)
        // const data = JSON.parse(chunk)
        // console.log(data.content)
        if(chunk.indexOf("true") !== -1){
            client.write("ccc")
        } else if (chunk.indexOf("ddd") !== -1){
            client.write("eee connection:false")
        }
    })

    client.on("close", ()=>{
        console.log("byebye~")
    })
})  
//server를 실행 하기 위한 모든 객체를 담아놓은것
//server는 접속한 client가 많기 때문에 그걸 구분 할 수 있는 코드가 필요하다
//여러명의 client를 관리하기 위해서
//client가 보내준 data를 변수 data에 담는다. 
server.listen (PORT, HOST, ()=>{
    console.log("112233")
})

server.on("connection", ()=>{
    console.log("접속쓰")

})

server.on("data", (data)=>{
    console.log(data)
})






/**
 net 안에 
 client
 server 
 2가지 모두 담겨있다.
 
 net.createServer() 를 쓰면 서버에 관련된 모든 객체를 담아오고
 net.connect() 를 쓰면 client에 관련된 모든 객체를 담아온다.
*/

