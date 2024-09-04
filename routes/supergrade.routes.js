const express = require("express");
const router = express.Router();
const {
  createSupergrade,
  getAllSupergrades,
} = require("../controller/supergrade.controller");

router.post("/create/supergrade", createSupergrade);
router.get("/get/all/supergrade", getAllSupergrades);

module.exports = router;
