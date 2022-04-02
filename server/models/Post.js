import mongoose from "mongoose";
const postSchema=mongoose.Schema({
    title:{type:String,required:true},
    message:{type:String,required:true},
    tags:{type:[String],required:true},
    image:{type:String,required:true},
    createdAT:{
        default:new Date(),
        type:Date
    },
    likeCount:{
        default:0,
        type:Number
    }
})

export default mongoose.model('Post',postSchema)