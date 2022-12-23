const mysql = require("mysql2");

const pool = mysql
    .createPool({
        host: "127.0.0.1",
        port: "3306",
        user: "root",
        password: "Qjel216!",
        database: "cheol",
        connectionLimit: 5, //최소 5명 정도 동시 접속이 가능하게 만들어둔것
    })
    .promise();

// pool.getConnection((err, conn) => {
//     if (err) throw err;
//     //sql 구문
//     //callback
//     // 1. error
//     // 2. result
//     conn.query(`SELECT * FROM board`, (error, result) => {
//         console.log(result);
//     }); // query를 전송을 하겠다는 의미

//     conn.release();
// });

//getquery가 내부적으로 실행이 되고 실행이 되는것
pool.query("SELECT * FROM board").then((data) => {});

(async () => {
    const [result, field] = await pool.query("SELECT * FROM board");
    console.log(result);
})();

//사용을 다 하고 pool로 다시 넣어주는거 release가 그 작업을 해준다. 5명이 사용중일 때 1명이 작업을 마친다면 6명째가 들어와도 작업이 된다.
//pool
// err 은 에러일 때 err를 던져주는것 conn > 논리적 연결이 된 부분, conn이 끝나면 release로 반환. 반환 하기 전에 써야한다.
// promise를 쓰면 colum에 대한 정보도 같이 던져준다.

