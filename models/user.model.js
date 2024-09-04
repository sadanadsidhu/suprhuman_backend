const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  uniqueId: {
    type: String,
    required: false,
  },
  signupCoin: {
    type: Number,
    require: false,
  },
  userToken: {
    type: String,
    required: false,
  },
  characterImage: {
    type: String,
    required: false,
  },
  characterId: {
    type: String,
    required: false,
  },
  level: {
    type: Number,
    default: 1,
  },
  coinsPerMinute: {
    type: Number,
    default: 0,
  },
  coinsEarnToday: {
    type: Number,
    default: 0,
  },
  energy: {
    current: {
      type: Number,
      default: 1000,
    },

    max: {
      type: Number,
      default: 1000,
    },
  },
});

module.exports = mongoose.model("User", userSchema);
