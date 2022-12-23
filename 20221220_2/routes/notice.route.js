const express = require("express");
const router = express.Router();

router.get("list", (req, res) => {
    res.send("notice/ list 입니다");
});

router.get("/write", (req, res) => {
    res.send("notice/ write 입니다");
});

router.get("/modify", (req, res) => {
    res.send("notice/ modify");
});

router.get("/delete", (req, res) => {
    res.send("notice/ delete");
});

module.exports = router;
