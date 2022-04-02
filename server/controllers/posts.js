 
 import Post from "../models/Post.js"

 export const getPosts=async(req,res)=>{
    try{
     const posts=await Post.find()
     res.status(200).json({message:posts})
    }
    catch({message}){
          res.status(401).json({message})
    }

}
export const createPost =async(req,res)=>{
      const newPost=new Post({
        title:"new",
        message:"message",
        tags:"#tag",
        image:"uel-img"
    })
    
    try{
       await newPost.save()
    res.status(200).json({message:newPost})

}
catch({message}){
    res.status(404).json({message})
}
}