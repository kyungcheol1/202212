const readFile = require("./template")

const message = (content, req) => {  
    const body = Buffer.from(content)

    return `HTTP/1.1 200 OK
Connection:Close
Content-Type:text/html; charset=UTF-8
Content-Length:${body.length}

${body.toString()}`
}

module.exports = (client, req)=>{
    return {
        send:(body)=>{
            const response = message(body)
            client.write(response) 
        },
        sendFile:(filename)=>{
            const body = readFile(filename)
            const response = message(body)
            client.write(response)
        }
    }    
}
