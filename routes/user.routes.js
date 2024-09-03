const express = require("express");
const router = express.Router();
const {
  createUser,
  getAllUsers,
  getUserById,
  updateUserById,
  updateCoin,
  increaseCoinsPerMinute,
} = require("../controller/user.controller");

router.post("/user/register", createUser);
router.get("/get/all/user", getAllUsers);
router.get("/get/user/:id", getUserById);
router.put("/update/user/:id", updateUserById);
router.put("/update/coin/:id", updateCoin);
router.put("/update/coins/minute/:userId", increaseCoinsPerMinute);

module.exports = router;
