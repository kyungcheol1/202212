const express = require("express");
const router = express.Router();

router.get("list");

router.get("/write", (req, res) => {
    res.send("gallery/ write 입니다");
});

router.get("/modify", (req, res) => {
    res.send("gallery/ modify");
});

router.get("/delete", (req, res) => {
    res.send("gallery/ delete");
});

module.exports = router;
