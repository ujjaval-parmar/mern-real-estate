import express from 'express';
import { getUsers, getUser, updateUser, deleteUser } from '../controllers/userControllter.js';
import verifyUser from '../middlewares/varifyUser.js';



const userRouter = express.Router();

userRouter.get('/', getUsers);
userRouter.get('/:id', getUser);
userRouter.put('/:id', verifyUser, updateUser);
userRouter.delete('/:id', verifyUser, deleteUser);

export default userRouter;