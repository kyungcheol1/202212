const fileread = require("./template")

const message = (content)=>{
    const body = Buffer.from(content)

    return `HTTP/1.1 200 OK
Connection:close
Content-Type:text/html; charset=utf-8
Content-Length${body.length}

${body.toString()}`
}

module.exports = (client) => {
    return {
        send:(body)=>{
            const response = message(body)
            client.write(response)
        },
        sendfile:(filename)=>{
            const body = fileread(filename)
            const response = message(body)
            client.write(response)
        }
    }

}