import express from 'express';
import PostModel from '../models/postModel.js';



const postRouter = express.Router();

postRouter.get('/get-posts', async (req, res) => {

    

    try {
        const response = await PostModel.find();

        res.status(200).json({
            message: 'Get All Post Success!',
            data: response
        })
    } catch (error) {
        res.status(500).json({
            message: 'Get All Post Failed!',
            error: error.message
        })
    }


})

export default postRouter;