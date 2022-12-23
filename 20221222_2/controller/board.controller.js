const service = require("../services/board.service");

exports.list = async (req, res) => {
    const list = await service.getList(); // pomise {[{},{},{},{},{}]}
    res.render("board/list.html", { list });
};

exports.view = async (req, res) => {
    const idx = req.query.index;
    const [list] = await service.getview(idx);
    res.render(`board/view.html`, { list });
};

exports.getwrite = (req, res) => {
    res.render("board/write");
};

exports.postwrite = async (req, res) => {
    const writevalue = req.body;
    const idx = await service.insert(writevalue);
    res.redirect(`view?index=${idx}`);
};

exports.getmodify = async (req, res) => {
    const idx = req.query.index;
    const [list] = await service.getview(idx);
    res.render(`board/modify`, { list });
};

exports.postmodify = async (req, res) => {
    const modifyvalue = req.body;
    const idx = modifyvalue.idx;
    await service.update(modifyvalue);
    res.redirect(`view?index=${idx}`);
};

//controller 는 리턴이 없다. 바로 render를 시키고 끝나는 함수다.

