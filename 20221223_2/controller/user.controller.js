const userService = require("../services/user.service");

exports.getLogin = (req, res, next) => {
    res.render("user/login");
};

exports.postLogin = async (req, res, next) => {
    const { user_id, user_pw } = req.body;
    const user = await userService.getUser({ user_id, user_pw });
    if (user === undefined) return next(new Error("넌 입장 할 수 없다"));

    res.setHeader("Set-cookie", `token=${user.user_id}; Path=/;`);
    res.redirect("/");
};

exports.getLogout = (req, res, next) => {
    res.setHeader("Set-cookie", `token=; Path=/;`);
    res.redirect("/");
};

exports.getjoin = (req, res) => {
    res.send("/user/join");
};

