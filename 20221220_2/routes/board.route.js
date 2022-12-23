const express = require("express");
const router = express.Router();
const controller = require("../controllers/board.controllers");

// router.get("list", (req, res) => {
//     res.send("board/ list 입니다");
// });

// router.get("/write", (req, res) => {
//     res.send("board/ write 입니다");
// });

// router.get("/modify", (req, res) => {
//     res.send("board/ modify");
// });

// router.get("/delete", (req, res) => {
//     res.send("board/ delete");
// });g

router.get("/list", controller.list);
router.get("/write", controller.write);
router.get("/modify", controller.modify);

module.exports = router;
