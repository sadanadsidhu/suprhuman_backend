const Restrint = require("../models/restrint.model");
const mongoose = require("mongoose");

const User = require("../models/user.model");
const createRestrint = async (req, res) => {
  try {
    const { userId, name, level, cost, coinMin, icon, quote } = req.body;

    // Find the existing upgrade document or create a new one
    let upgrade = await Restrint.findOne();
    if (!upgrade) {
      // If no upgrade document exists, create a new one
      upgrade = new Restrint({
        RESTRAINTS: [],
      });
    }

    // Create a new restraint object
    const newRestraint = {
      userId,
      name,
      level,
      cost,
      coinMin,
      icon,
      quote,
    };

    // Add the new restraint to the RESTRAINTS array
    upgrade.RESTRAINTS.push(newRestraint);

    // Save the updated upgrade document to the database
    const savedUpgrade = await upgrade.save();

    // Send a success response
    res.status(201).json(savedUpgrade);
  } catch (error) {
    console.error("Error creating upgrade:", error);
    res.status(500).json({ error: "Failed to create upgrade" });
  }
};

const getAllRestrint = async (req, res) => {
  try {
    // Fetch all documents from the Restrint collection
    const upgrades = await Restrint.find();

    // Send a success response with the fetched upgrades
    res.status(200).json(upgrades);
  } catch (error) {
    console.error("Error fetching upgrades:", error);
    res.status(500).json({ error: "Failed to fetch upgrades" });
  }
};

const updateCoinsPerMinute = async (req, res) => {
  try {
    const { userId, coinMin } = req.body;

    if (!userId || coinMin === undefined) {
      return res.status(400).json({ error: "userId and coinMin are required" });
    }

    // Fetch the current user's coinsPerMinute value
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Calculate the new coinsPerMinute value
    const newCoinsPerMinute = (user.coinsPerMinute || 0) + coinMin;

    // Update the user's coinsPerMinute value in the database
    await User.findByIdAndUpdate(userId, { coinsPerMinute: newCoinsPerMinute });

    res.status(200).json({ message: "coinsPerMinute updated successfully" });
  } catch (error) {
    console.error("Error updating coinsPerMinute:", error);
    res.status(500).json({ error: "Failed to update coinsPerMinute" });
  }
};

module.exports = {
  createRestrint,
  getAllRestrint,
  updateCoinsPerMinute,
};
