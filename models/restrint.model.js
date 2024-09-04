const mongoose = require("mongoose");

const restrintSchema = new mongoose.Schema({
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
  RESTRAINTS: [restrintSchema],
});

module.exports = mongoose.model("Restrint", upgradeSchema);
