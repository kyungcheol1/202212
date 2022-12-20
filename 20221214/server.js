const net = require("net");
const resFn = require("./lib/res");
const reqFn = require("./lib/req");
const PORT = process.env.SERVER_PORT || 3000;
const HOST = process.env.SERVER_HOST || "127.0.0.1";

const server = net.createServer((client) => {
    client.setEncoding("utf8");

    client.on("data", (chunk) => {
        const req = reqFn(chunk);
        const res = resFn(client, req);

        if (req.method === "GET" && req.path === "/") {
            res.sendFile("index.html");
        } else if (req.method === "GET" && req.path === "/list") {
            res.sendFile("list.html");
        } else if (req.method === "GET" && req.path === "/write") {
            res.sendFile("write.html");
        } else if (req.method === "GET" && req.path === "/modify") {
            res.sendFile("modify.html");
        } else if (req.method === "GET" && req.path === "/view") {
            res.sendFile("view.html");
        }
    });
});

server.on("connection", () => {
    console.log("server connected");
});

server.listen(PORT, HOST, () => {
    console.log("server start");
});
