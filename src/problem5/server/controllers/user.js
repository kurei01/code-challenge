import mongoose from 'mongoose';
import User from '../models/user.js';

// create new user
export function createUser(req, res) {
  const user = new User({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    email: req.body.email,
  });

  return user
  .save()
  .then((newUser) => {
    return res.status(201).json({
      success: true,
      message: 'New user created successfully',
      User: newUser,
    });
  })
  .catch((error) => {
    res.status(500).json({
      success: false,
      message: 'Server error. Please try again.',
      error: error.message,
    });
  });
}  

// Get all user
export function getAllUser( req, res){
  User.find()
    .select('_id name email')
    .then((alluser) => {
      return res.status(200).json({
        success: true,
        message: 'A list of all user',
        User: alluser,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: 'Server error. Please try again.',
        error: err.message,
      });
    });
}

// Get single user
export function getUserById(req, res){
  const userId = req.params.userId;
  User.findById(userId).then((user) => {
    res.status(200).json({
      success: true,
      message: `get ${user.name}`,
      User: user,
    });
  })
  .catch((err) => {
    res.status(500).json({
      success: false,
      message: 'This User does not exist',
      error: err.message,
    });
 });
}

// update user
export function updateUser(req, res) {
  const userId = req.params.userId;
  const updateObject = req.body;
  User.update({ _id: userId }, { $set:updateObject })
    .exec()
    .then(() => {
      res.status(200).json({
        success: true,
        message: 'Course is updated',
        updateUser: updateObject,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: 'Server error. Please try again.'
      });
    });
}

// delete a user
export function deleteUser(req, res) {
  const userId = req.params.userId;
  User.findByIdAndDelete(userId)
    .exec()
    .then(()=> res.status(204).json({
      success: true,
    }))
    .catch((err) => res.status(500).json({
      success: false,
    }));
}