const express = require("express");
const router = express.Router();
const boardcontroller = require("../controller/board.controller");

router.get("/list", boardcontroller.list);
router.get("/write", boardcontroller.getwrite);
router.post("/write", boardcontroller.postwrite);
router.get("/view", boardcontroller.view);
router.get("/modify", boardcontroller.getmodify);
router.post("/modify", boardcontroller.postmodify);

module.exports = router;

