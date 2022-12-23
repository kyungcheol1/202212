const pool = require("./db.js");

exports.findAll = async () => {
    const [result, field] = await pool.query(`SELECT * FROM board;`);
    return result;
};

exports.insert = async (write) => {
    const [ins] = await pool.query(`INSERT INTO board(subject, writer, content) value("${write.subject}", "${write.writer}", "${write.content}")`);
    const idx = ins.insertId;
    return idx;
};

//view 할 때 필요한거
exports.findOne = async (idx) => {
    const [sql, field] = await pool.query(`SELECT * FROM board WHERE idx=${idx}`);
    return sql;
};

exports.update = async (modify) => {
    await pool.query(`UPDATE board SET subject='${modify.subject}', writer='${modify.writer}', content='${modify.content}' WHERE idx='${modify.idx}'`);
};

//return promise 객체로 담아서 배열 result를 담아서 줌
//실제 데이터는 여기에 저장이 되어 있다. 여기서부터 async를 쓰기 때문에 async를 다 써야한다.

