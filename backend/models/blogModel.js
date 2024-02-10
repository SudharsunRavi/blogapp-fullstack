const mongoose=require('mongoose');

const blogModel=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    category:{
        type:String
    },
    date:{
        type:Date,
        required:true,
        default:Date.now
    },
    image:{
        type:String,
        required:true
    },
    uid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    }
})

module.exports=mongoose.model('Blog',blogModel);