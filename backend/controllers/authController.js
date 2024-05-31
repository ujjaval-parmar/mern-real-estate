import bcrypt from "bcryptjs"
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

        if (response.length > 0) {
            throw new Error('Username or Email already in Use!')
        }

        const hasedPassword = await bcrypt.hash(req.body.password, 12);

        // console.log(hasedPassword);
        // console.log({...req.body, paasword: hasedPassword})

        const newUser = await UserModel.create({...req.body, password: hasedPassword});

        // console.log(newUser)

        newUser.password = undefined;

        res.status(201).json({
            message: 'Auth: User Register Success!',
            data: newUser
        })

 
    } catch (error) {
        res.status(500).json({
            message: 'Auth: Register User Failed!',
            error: error.message
        })
    }


}

export const login = async (req, res) => {

    
    try {
        const { username, password } = req.body;
        
        
        const findUser = await UserModel.findOne({username});
        
        // console.log(req.body)
        

        if (!findUser) {
            throw new Error('Invalid Username!');
        }

        // console.log(findUser)
        
        const checkPassword = await bcrypt.compare(req.body.password, findUser.password);


        if (!checkPassword) {
            throw new Error('Invalid password!');
        }


        // console.log(token)

        // res.setHeader('Set-Cookie', 'test=myValue');

        const age = 1000 * 60 * 60 * 24 * 7;

        const token = jwt.sign({
            id: findUser._id,
            isAdmin: true
        }, process.env.JWT_SECRET, { expiresIn: age });

       

        // res.setHeader('Set-Cookie', 'myCookie=exampleValue; HttpOnly');



        res.cookie('token', token, {
            httpOnly: true,
            maxAge: age,
            SameSite: 'lax',
            // domain: "localhost",
            // secure: true
        });

        // sameSite: 'None',secure: true

        // console.log(token, findUser);

        const user = { ...findUser._doc, password: undefined }

        // console.log(user);



        res.status(200).json({
            message: 'Login User Success!',
            user

        })
    } catch (error) {
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

