const fileRead = require("./template")

const letter = (content)=>{
    const body = Buffer.from(content)

    return `HTTP/1.1 200 Ok
Connection:close
Content-Type:text/html
Content-Length:${body.length}

${body.toString()}`
}

module.exports = (socket) => {
    return {
        send:(body)=>{
            const response = letter(body)
            socket.write(response)
        },
        sendFile:(filename)=>{
            const body = fileRead(filename)
            const response = letter(body)
            socket.write(response)
        }
    }
}