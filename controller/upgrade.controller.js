const Upgrade = require("../models/upgrade.model");
const mongoose = require("mongoose");

const createUpgrade = async (req, res) => {
  try {
    const { userId, name, level, cost, coinMin, icon, quote } = req.body;

    // Find the existing upgrade document or create a new one
    let upgrade = await Upgrade.findOne();
    if (!upgrade) {
      // If no upgrade document exists, create a new one
      upgrade = new Upgrade({
        ENHANCEMENT: [],
      });
    }

    // Create a new enhancement object
    const newEnhancement = {
      userId,
      name,
      level,
      cost,
      coinMin,
      icon,
      quote,
    };

    // Add the new enhancement to the ENHANCEMENT array
    upgrade.ENHANCEMENT.push(newEnhancement);

    // Save the updated upgrade document to the database
    const savedUpgrade = await upgrade.save();

    // Send a success response
    res.status(201).json(savedUpgrade);
  } catch (error) {
    console.error("Error creating upgrade:", error);
    res.status(500).json({ error: "Failed to create upgrade" });
  }
};
// Get all upgrades
const getAllUpgrades = async (req, res) => {
  try {
    // Fetch all upgrades from the database
    const upgrades = await Upgrade.find();

    // Send a success response with the list of upgrades
    res.status(200).json(upgrades);
  } catch (error) {
    console.error("Error fetching upgrades:", error);
    res.status(500).json({ error: "Failed to fetch upgrades" });
  }
};

const updateUpgrade = async (req, res) => {
  try {
    const { _id, enhancementId } = req.params;

    // Validate the parameters
    if (
      !mongoose.Types.ObjectId.isValid(_id) ||
      !mongoose.Types.ObjectId.isValid(enhancementId)
    ) {
      return res.status(400).json({ error: "Invalid ID format" });
    }

    // Find the upgrade document by its _id
    const upgrade = await Upgrade.findById(_id);

    if (!upgrade) {
      return res.status(404).json({ error: "Upgrade not found" });
    }

    // Find the specific enhancement by its _id within the ENHANCEMENT array
    const enhancement = upgrade.ENHANCEMENT.id(enhancementId);

    if (!enhancement) {
      return res.status(404).json({ error: "Enhancement not found" });
    }

    // Update the enhancement fields
    enhancement.level += 1;
    enhancement.cost = parseFloat(enhancement.cost.replace(/k/i, "")) * 2 + "k"; // Doubling the cost
    enhancement.coinMin += enhancement.coinMin * 0.2;

    // Save the updated upgrade document to the database
    const savedUpgrade = await upgrade.save();

    // Send a success response
    res.status(200).json(savedUpgrade);
  } catch (error) {
    console.error("Error updating upgrade:", error);
    res.status(500).json({ error: "Failed to update upgrade" });
  }
};

module.exports = {
  createUpgrade,
  getAllUpgrades,
  updateUpgrade,
};
