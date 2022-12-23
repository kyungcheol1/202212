const repository = require("../repository/board.repository");

exports.getList = async () => {
    const result = await repository.findAll(); // [{}{}{}]
    return result;
};

exports.getview = async (index) => {
    const idx = await repository.findOne(index);
    return idx;
};

exports.insert = async (write) => {
    const result = await repository.insert(write);
    return result;
};

exports.update = async (modify) => {
    await repository.update(modify);
};
// 다시 promise 객체로 반환

