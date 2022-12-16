const fileRead = require('./template')

const message = (content)=>{
    const body = Buffer.from(content)

    return `HTTP/1.1 200 OK
Connection:close
Content-Type:text/html; charset=UTF-8
Contetn-Length:${body.length}

${body.toString()}`
}

module.exports = (client) => {
    return {
        send:(body)=>{ 
            const response = message(body)
            client.write(response)
        },
        sendFile:(filename)=>{
            const body = fileRead(filename) // string html에 있는 모든 내용
            const response = message(body)
            client.write(response)
        }
    }
}