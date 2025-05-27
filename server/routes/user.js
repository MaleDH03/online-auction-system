import express from 'express';
import { handleSignup, handleLogin, handleDelete, handleUser, handleUserChange } from '../controllers/user.controller.js';
import upload from '../middleware/multer.js';

const userRouter = express.Router();

userRouter.post('/signup', handleSignup);
userRouter.post('/login', handleLogin);
userRouter.delete('/delete', handleDelete);
userRouter.get('/:userId', handleUser);
userRouter.put('/user/:userId', upload.single('itemPhoto'), handleUserChange);

export default userRouter;