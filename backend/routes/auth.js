const router = require('express').Router();
const bcrypt = require('bcrypt');
const User = require('../models/userModel');
const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');

router.post('/register', asyncHandler(async (req, res) => {
    //check if user exists
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) return res.status(400).send('Email already exists!');

    //create user
    const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: await bcrypt.hash(req.body.password, 10),
    });

    try {
        const saveUser = await newUser.save();
        res.status(201).json(saveUser);
    } catch (error) {
        res.status(400).send(error);
    }
}));

router.post('/login', asyncHandler(async(req,res)=>{
    //check if user exists
    const user=await User.findOne({email:req.body.email});
    if(!user) return res.status(400).send('User doesnot exist!');

    //check if password is correct
    const validPass=await bcrypt.compare(req.body.password, user.password);
    if(!validPass) return res.status(400).send('Invalid password!');

    const token=jwt.sign({_id:user._id}, process.env.JWT_SECRET);
    const {password, ...others}=user._doc; //removes password from user
    res.cookie("access_token", token, {httpOnly:true}).status(200).json(others);
}))

router.post('/logout', (req, res) => {
    res.clearCookie('access_token', {
        sameSite: 'none',
        secure: true,
    }).send('Logged out!');
});

module.exports = router;
