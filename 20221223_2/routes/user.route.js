const express = require("express");
const router = express.Router();
const usercontroller = require("../controller/user.controller");

router.get("/login", usercontroller.getLogin);
router.post("/login", usercontroller.postLogin);
router.get("/logout", usercontroller.getLogout);
router.get("/join", usercontroller.getjoin);

module.exports = router;

