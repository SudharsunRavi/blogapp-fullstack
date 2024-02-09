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
    date:{
        type:Date,
        required:true
    },
    image:{
        type:String,
        required:true
    },
})

module.exports=mongoose.model('Blog',blogModel);