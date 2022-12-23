exports.list = (req, res) => {
    res.send("list page.");
};

exports.write = (req, res) => {
    res.render("board/write.html");
};

exports.modify = (req, res) => {
    res.send("modify page");
};
