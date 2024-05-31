import bcrypt from "bcryptjs"


import UserModel from "../models/userModel.js";

export const getUsers = async (req, res) => {

    // console.log(req.cookies);
    // console.log(req.userId);

    try {
        const response = await UserModel.find();

        res.status(200).json({
            message: 'Get All User Success!',
            data: response
        })
    } catch (error) {
        res.status(500).json({
            message: 'Get All User Failed!',
            error: error.message
        })
    }

}

export const getUser = async (req, res) => {

    try {

        // console.log(req.params)        

        const response = await UserModel.findById(req.params.id);

        res.status(200).json({
            message: 'Get  User Success!',
            data: response
        })
    } catch (error) {
        res.status(500).json({
            message: 'Get User Failed!',
            error: error.message
        })
    }

}

export const updateUser = async (req, res) => {

    if(req.params.id !== req.userId){
        return res.status(403).json({
            status: 'Failed',
            message: 'Auth Error: Not authorize!',
        })
    }
    try {

        //   console.log(req.body) 

        const hasedPassword = await bcrypt.hash(req.body.password, 12);


        const response = await UserModel.findByIdAndUpdate(req.params.id, {...req.body, password: hasedPassword }, {new: true});

        res.status(200).json({
            message: 'Update User Success!',
            data: response 
        })
    } catch (error) {
        res.status(500).json({
            message: 'Update User Failed!',
            error: error.message
        })
    }

}

export const deleteUser = async (req, res) => {

    if(req.params.id !== req.userId){
        return res.status(403).json({
            status: 'Failed',
            message: 'Auth Error: Not authorize!',
        })
    }

    try {


        const response = await UserModel.findByIdAndDelete(req.params.id);

        res.status(204).json({
            message: 'Deleting User Success!',
            data: response
        })
    } catch (error) {
        res.status(500).json({
            message: 'Deleting User Failed!',
            error: error.message
        })
    }

}