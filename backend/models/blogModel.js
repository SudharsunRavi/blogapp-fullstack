const mongoose = require('mongoose');

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
    },
    category:{
        type:String
    },
    date:{
        type:Date,        
    },
    image:{
        type:String,
        required:true
    },
    uid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
    }
})

module.exports=mongoose.model('Blog',blogModel);