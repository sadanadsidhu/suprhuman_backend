const express = require("express");
const router = express.Router();
const {
    createRestrint,
    getAllRestrint,
    updateCoinsPerMinute
} = require("../controller/restrint.controller");

router.post("/create/restrint", createRestrint);
router.get("/get/all/restrint",getAllRestrint);
router.put("/user/update/coin",updateCoinsPerMinute);

module.exports = router;
