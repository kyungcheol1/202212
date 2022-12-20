const readFile = require("./template")

const message = (content,req) => { //req내용 확인
  const body = Buffer.from(content);
  let contentType = ''
  if(req.headers.Accept.indexOf("text/html") !== -1) {
    contentType = 'text/html'
  } else {
    contentType = req.headers.Accept
  }

  return `HTTP/1.1 200 OK
Connection:close
Content-Type:${contentType}; charset=UTF
Content-Length:${body.length}

${body.toString()}
`;
};


module.exports = (socket, req) => {
    return {
        send:(body)=>{
            const response = message(body)
            socket.write(response)
        },
        sendfile:(filename, obj={})=>{
            const body = readFile(filename, obj)
            const response = message(body,req)
            socket.write(response)
        },
        sendStatic:(filename) => {
            const defaultDir='../public'
            const body = readFile(filename, {}, defaultDir)
            const response = message(body,req)
            socket.write(response)
        }
    }
}
