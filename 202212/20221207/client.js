const net = require('net')

const socket = net.connect({port:3000, host:"127.0.0.1"})
//값을 따로 빼도됨 단 객체로.
//이 메서드가 실행되면 ip와 포트를 선택한 곳에 데이터를 보낸다.

socket.on("connect", ()=>{
    console.log("connected to server !")

    socket.write("나 데이터 보낸다!")
})

socket.on("data", (chunk)=>{
    console.log(`Received : ${chunk}`)
})

// http 는 기본적으로 tcp 통신을 한다.
// tcp 통신은 쌍방향 통신이 가능하다 > 서버와 클라이언트가 요청이 가능하다
// HTTP 프로토콜의 규격을 실제로 해보기 
// http의 프로토콜 규격만 맞춰도 브라우저 요청만으로 http://127.0.0.1:3000을 치면
// 나의 tcp server가 받을 수 있게. 