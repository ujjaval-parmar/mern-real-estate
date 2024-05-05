import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import UserModel from "../models/userModel.js"


export const register = async (req, res) => {

    // console.log(req.body);

    try {


        const response = await UserModel.find({
            $or: [
                { email: req.body.email },
                { username: req.body.username }
            ]
        })

        // console.log(response);
        if (response.length > 0) {
            throw new Error('Username or Email already in Use!')
        }

        // const hasedPassword = await bcrypt.hash(String(req.body.password), 10);

        // console.log({...req.body, paasword: hasedPassword})

        // const newUser = await UserModel.create({...req.body, paasword: hasedPassword});

        const newUser = await UserModel.create(req.body);


        newUser.password = undefined;


        res.status(201).json({
            message: 'Auth Register Success!',
            data: newUser

        })


    } catch (error) {
        res.status(500).json({
            message: 'Register User Failed!',
            error: error.message
        })
    }


}

export const login = async (req, res) => {

    

    try{
        const {username, password} = req.body;

        const findUser = await UserModel.findOne({
            $and: [
                { username, password}
            ]
        })
    
        // console.log(findUser)

        if(!findUser){
            throw new Error('Invalid Username or Password!');
        }

        
        // console.log(token)
        
        // res.setHeader('Set-Cookie', 'test=myValue');
        
        const age = 1000 * 60 * 60 * 24 * 7;
        
        const token = jwt.sign({ 
            id: findUser._id,
            isAdmin: true
        }, process.env.JWT_SECRET, {expiresIn: age});
        
        res.cookie('token', token, {
            httpOnly: true,
            maxAge: age,
            SameSite: 'none',
            secure: true
        })

        // sameSite: 'None',secure: true

        // console.log(token, findUser);

        const user = {...findUser._doc, password: undefined, token}

        // console.log(user);

        

        res.status(200).json({
            message: 'Login User Success!',
            user
    
        })
    }catch(error){
        res.status(500).json({
            message: 'Login User Failed!',
            error: error.message
        })
    }

}

export const logout = (req, res) => {

    res.clearCookie('token');
    res.status(200).json({
        message: 'Logout User Seccess!',

    })
}

