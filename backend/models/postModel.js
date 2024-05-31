import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true
    },
    title: {
        type: String,
        required: true,
        min: 4
    },
    desc: {
        type: String,
        required: true,
        min: 12
    },
    images:{
        type: [String],
        required: true,
        default: [ "https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://images.pexels.com/photos/1428348/pexels-photo-1428348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://images.pexels.com/photos/2467285/pexels-photo-2467285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"]
    },
    price:{
        type: Number,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    city:{
        type: String,
        required: true
    },
    bedroom:{
        type: Number,
        required: true
    },
    bathroom:{
        type: Number,
        required: true
    },
    latitude:{
        type: String,
        required: true
    },
    longitude:{
        type: String,
        required: true
    },
    type:{
        type: String,
        required: true,
        enum: ['buy', 'rent'],
        enum: {
            values: ['buy', 'rent'],
            message: 'Type is either: buy or rent',
        },
    },
    property:{
        type: String,
        required: true,
        enum: {
            values: ['apartment', 'house', 'condo', 'land'],
            message: 'Type is either: apartment,  house, condo or land',
        },
    },
    utilities:{
        type: String,
        // required: true
    },
    pet:{
        type: String,
        // required: true
    },
    income:{
        type: String,
        // required: true
    },
    size:{
        type: Number,
        required: true
    },
    school:{
        type: Number,
        // required: true
    },
    hospital:{
        type: Number,
        // required: true
    },
    restaurant:{
        type: Number,
        // required: true
    },
    createdAt:{
        type: Date,
        default: new Date()
    }
    

}, { timestamps: true });

const PostModel =   mongoose.model('Post', PostSchema);

export default PostModel;