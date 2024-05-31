import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    
    username: {
        type: String,
        required: true,
        min: 4
    },
    email: {
        type: String,
        required: true,
        min: 12
    },
    avatar:{
        type: String,
        default:"https://avatars.githubusercontent.com/u/154329143?v=4"
        
    },
    password:{
        type: String,
        required: true,
        
    },
    createdAt:{
        type: Date,
        default: new Date()
    }
    

}, { timestamps: true });

const UserModel =   mongoose.model('User', UserSchema);

export default UserModel;