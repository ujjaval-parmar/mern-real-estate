import express from 'express';
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import multer from 'multer';
import postRouter from './routes/postRoute.js';
import authRouter from './routes/AuthRoute.js';
import verifyUser from './middlewares/varifyUser.js';
import userRouter from './routes/userRoute.js';



dotenv.config();

const app = express();

app.use('/', express.static('public/images'));

app.use(express.json());

app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
    // 'Access-Control-Allow-Credentials': true

}));



app.use(cookieParser());





// Connect DD:
mongoose.connect(process.env.DATABASE)
    .then(() => console.log('DB connected!'))
    .catch(err => console.log('DB connect Failed!: ', err));

app.use('/test', (req, res)=>{
     res.status(200).json({
            message: 'Register User Failed!',
            error: error.message
        })
    
})
app.use('/api/posts', verifyUser, postRouter);
app.use('/api/auth', authRouter);
app.use('/api/user', userRouter);




app.listen(5000, () => {
    console.log('Server running on http://localhost:5000');
})