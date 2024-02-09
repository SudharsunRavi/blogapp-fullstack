const mongoose = require('mongoose');

const userModel=new mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true,
            unique:true
        },
        password:{
            type:String,
            required:true
        },
        image:{
            type:String,
        },
    },
    {
        timestamps:true
    }
)

module.exports=mongoose.model('User',userModel);