const express = require("express");
const router = express.Router();
const {
    createUpgrade,
    getAllUpgrades
} = require("../controller/upgrade.controller");

router.post("/create/upgrade", createUpgrade);
router.get("/get/all/upgrade", getAllUpgrades);

module.exports = router;
