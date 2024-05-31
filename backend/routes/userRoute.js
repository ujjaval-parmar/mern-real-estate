import express from 'express';
import { getUsers, getUser, updateUser, deleteUser } from '../controllers/userControllter.js';
import { verifyUser, shouldBeAdmin } from '../middlewares/varifyUser.js';



const userRouter = express.Router();

userRouter.get('/', verifyUser, getUsers);
userRouter.get('/:id', verifyUser, getUser);
userRouter.put('/:id', verifyUser, updateUser);
userRouter.delete('/:id', verifyUser, deleteUser);

export default userRouter;