const User = require('../models/user.model');
//////////////////////////////////////////////////////// CREATE USER ////////////////////////////////////////////////////////////////////////////////
const createUser = async (req, res) => {
  try {
    const { name, gender, country, email } = req.body;
    const newUser = new User({ name, gender, country, email });
    await newUser.save();
    res.status(201).json({
      message: 'User created successfully',
      user: newUser,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
module.exports={
    createUser
}