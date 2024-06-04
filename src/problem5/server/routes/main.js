import express from 'express';
import { createUser, deleteUser, getAllUser, getUserById, updateUser } from '../controllers/user.js';

const router = express.Router();
router.post('/user', createUser);
router.get('/users', getAllUser);
router.get('/user/:userId', getUserById);
router.patch('/user/:userId', updateUser);
router.delete('/user/:userId', deleteUser);

export default router;
