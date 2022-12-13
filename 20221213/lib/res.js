const readFile = require("./template")

const message = (content) => {
  const body = Buffer.from(content);

  return `HTTP/1.1 200 OK
Connection:close
Content-Type:text/html; charset=UTF
Content-Length:${body.length}

${body.toString()}
`;
};


module.exports = (socket) => {
    return {
        send:(body)=>{
            const response = message(body)
            socket.write(response)
        },
        sendfile:(filename)=>{
            const body = readFile(filename)
            const response = message(body)
            socket.write(response)
        }
    }
}
