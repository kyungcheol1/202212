const express = require("express");
const router = express.Router();
const user = require("./user.route");
const board = require("../../20221222_2/routes/board.route");

router.get("/", (req, res) => {
    const { token } = req.cookies;
    res.render("index.html", { token });
});

router.use("/user", user);
router.use("/board", board);

module.exports = router;

