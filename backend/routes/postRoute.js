import express from 'express';
import { addPost, deletePost, getPost, getPosts, updatePost, verifyPostOnwer, getUserPosts } from '../controllers/postControllers.js';
import { verifyUser } from '../middlewares/varifyUser.js';



const postRouter = express.Router();

postRouter.get('/', getPosts);
postRouter.get('/user-posts', verifyUser, getUserPosts);
postRouter.post('/', verifyUser, addPost);
postRouter.get('/:id', getPost);
postRouter.patch('/:id', verifyUser, verifyPostOnwer, updatePost);
postRouter.delete('/:id', verifyUser, verifyPostOnwer, deletePost);

export default postRouter;