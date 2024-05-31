import PostModel from "../models/postModel.js";
import UserModel from "../models/userModel.js";



export  const verifyPostOnwer = async(req, res, next)=>{


    const response = await PostModel.findById(req.params.id);

    if(!response){
        return  res.status(404).json({
            message: 'Invalid Id!Find Post By ID  Failed!',
            
        })
    };

    // console.log(req.userId === String(response.userId));

    if(String(response.userId) !== req.userId){
        return  res.status(401).json({
            message: 'Not Authorize! Not Owner of this post!',
            
        })
    }

    next();
}

export const getPosts = async (req, res) => {

    // console.log(req.query);

    let query = !Object.keys(req.query).length ? '' : { ...req.query };

    let priceQuery;
    if(req.query.minPrice){
        priceQuery = { price: {$gte: req.query.minPrice }}
        query.minPrice = undefined;
    };
    
    if(req.query.maxPrice){
        priceQuery = { price: {...priceQuery.price, $lte: req.query.maxPrice} };
        query.maxPrice = undefined;
    }

    query = {...query, ...priceQuery};

    if(req.query.undefined === ''){
        query = {};
    }
    
    
    // console.log('IN', query)
    
    


    try {
        const response = await PostModel.find(query);

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


}

export const getUserPosts = async(req, res)=>{
    // console.log(req.userId);
   

    try{
        const response = await PostModel.find({userId: req.userId});
        // console.log(response);
        res.status(200).json({
            message: 'Get User Posts Success!',
            data: response
        })
    }catch(err){
        res.status(500).json({
            message: 'Get User Posts Failed!',
            data: response
        })
    }
}

export const addPost = async (req, res) => {

    const post = { ...req.body, userId: req.userId };

    try {
        const response = await PostModel.create(post);

        res.status(200).json({
            message: 'Create new post Success!',
            data: response
        })
    } catch (error) {
        res.status(500).json({
            message: 'Create new post Failed!',
            error: error.message
        })
    }

}

export const getPost = async (req, res) => {

    

    try {
        const response = await PostModel.findById(req.params.id);

        if(!response){
           return  res.status(404).json({
                message: 'Invalid Id!Find Post By ID  Failed!',
                error: error.message
            })
        }

       

        res.status(200).json({
            message: 'Find Post By ID  Success!',
            data: response,
            
        })
    } catch (error) {
        res.status(500).json({
            message: 'Find Post By ID  Failed!',
            error: error.message
        })
    }


}

export const updatePost = async (req, res) => {

    

    try {


        const response = await PostModel.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });

        res.status(200).json({
            message: 'Update Post By ID Post Success!',
            data: response
        })
    } catch (error) {
        res.status(500).json({
            message: 'Update Post By ID Post Failed!',
            error: error.message
        })
    }


}

export const deletePost = async (req, res) => {

    

    try {

        

        const response = await PostModel.findByIdAndDelete(req.params.id);

        res.status(204).json({
            message: 'Delete Post By ID Post Success!',
            data: response
        });
    } catch (error) {
        res.status(500).json({
            message: 'Delete Post By ID Post Failed!',
            error: error.message
        })
    }


}