const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "Qjel216!",
    database: "cheol",
});

connection.connect((err) => {
    if (err) throw err;
    console.log("socket open...");
});
