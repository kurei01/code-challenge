import mongoose from 'mongoose';
import User from '../models/user.js';

// create new user
export async function createUser(req, res) {
  const user = new User({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    email: req.body.email,
  });
  try {
    const newUser = await user
      .save();
    return res.status(201).json({
      success: true,
      message: 'New user created successfully',
      User: newUser,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error. Please try again.',
      error: error.message,
    });
  }
}  