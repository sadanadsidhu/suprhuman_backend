const Upgrade = require("../models/upgrade.model");
const mongoose = require("mongoose");

const createUpgrade =  async (req, res) => {
    try {
      const { userId, name, level, cost, coinsPerMinute,png } = req.body;
  
      // Create a new upgrade object using the Upgrade model
      const newUpgrade = new Upgrade({
        userId,
        name,
        level,
        cost,
        coinsPerMinute,
        png
      });
  
      // Save the upgrade to the database
      const savedUpgrade = await newUpgrade.save();
  
      // Send a success response
      res.status(201).json(savedUpgrade);
    } catch (error) {
      console.error('Error creating upgrade:', error);
      res.status(500).json({ error: 'Failed to create upgrade' });
    }
  }
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
  module.exports={
    createUpgrade,
    getAllUpgrades
  }
