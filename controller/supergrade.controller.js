const Supergrade = require("../models/supergrade.model");
const mongoose = require("mongoose");

const createSupergrade = async (req, res) => {
  try {
    const { userId, name, level, cost, coinMin, icon, quote } = req.body;

    // Find the existing upgrade document or create a new one
    let upgrade = await Supergrade.findOne();
    if (!upgrade) {
      // If no upgrade document exists, create a new one
      upgrade = new Supergrade({
        SUPRUPGRADE: [],
      });
    }

    // Create a new supergrade object
    const newSupergrade = {
      userId,
      name,
      level,
      cost,
      coinMin,
      icon,
      quote,
    };

    // Add the new supergrade to the SUPRUPGRADE array
    upgrade.SUPRUPGRADE.push(newSupergrade);

    // Save the updated upgrade document to the database
    const savedUpgrade = await upgrade.save();

    // Send a success response
    res.status(201).json(savedUpgrade);
  } catch (error) {
    console.error("Error creating supergrade:", error);
    res.status(500).json({ error: "Failed to create supergrade" });
  }
};

// Get all Supergrades
const getAllSupergrades = async (req, res) => {
  try {
    // Fetch all documents from the Supergrade collection
    const upgrades = await Supergrade.find();

    // Send a success response with the fetched upgrades
    res.status(200).json(upgrades);
  } catch (error) {
    console.error("Error fetching supergrades:", error);
    res.status(500).json({ error: "Failed to fetch supergrades" });
  }
};

module.exports = {
  createSupergrade,
  getAllSupergrades,
};
