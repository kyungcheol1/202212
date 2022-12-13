const message = (content)=>{
    const body = Buffer.from(content)

    return `HTTP/1.1 200 OK
Connection:Close
Content-tpye:text/html; charset=UTF-8
Content-Length:${body.length}

${body.toString()}`
}
// 의존성 주입 
module.exports = (client) => {
    return {
        send: (body) => {
            const response = message(body)
            client.write(response)
        },
        sendFile: (body) => {}
    }
}

//함수 안에 리턴이 객체 
//객체의 속성이 send send의 값이 : (body) => {
        //     const response = message(body)
        //     client.write(response)
        // },

