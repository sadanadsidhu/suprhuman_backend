const mongoose = require("mongoose");

const enhancementSchema = new mongoose.Schema({
  userId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
  },
  name: {
    type: String,
    required: true,
  },
  level: {
    type: Number,
    required: true,
  },
  cost: {
    type: String,
    required: true,
  },
  coinMin: {
    type: Number,
    required: true,
    set: (value) => Math.floor(value),
  },
  icon: {
    type: String,
    required: true,
  },
  quote: {
    type: String,
    required: true,
  },
});

const upgradeSchema = new mongoose.Schema({
  ENHANCEMENT: [enhancementSchema],
});

module.exports = mongoose.model("Upgrade", upgradeSchema);
