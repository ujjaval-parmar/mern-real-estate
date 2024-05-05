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
        default: []
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
    latLong:{
        type: [String],
        required: true
    },
    type:{
        type: String,
        required: true
    },
    property:{
        type: String,
        required: true
    },
    utilities:{
        type: String,
        required: true
    },
    pet:{
        type: String,
        required: true
    },
    income:{
        type: String,
        required: true
    },
    size:{
        type: Number,
        required: true
    },
    school:{
        type: Number,
        required: true
    },
    hospital:{
        type: Number,
        required: true
    },
    restarant:{
        type: Number,
        required: true
    },
    createdAt:{
        type: Date,
        default: new Date()
    }
    

}, { timestamps: true });

const PostModel =   mongoose.model('Post', PostSchema);

export default PostModel;