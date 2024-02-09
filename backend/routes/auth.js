const router = require('express').Router();
const bcrypt = require('bcrypt');
const User = require('../models/userModel');
const asyncHandler = require('express-async-handler');

router.post('/register', asyncHandler(async (req, res) => {
    // Check if user exists
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) return res.status(400).send('Email already exists!');

    // Create user
    const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: await bcrypt.hash(req.body.password, 10),
    });

    try {
        //save user to db
        const saveUser = await newUser.save();
        res.status(201).json(saveUser);
    } catch (error) {
        res.status(400).send(error);
    }
}));

module.exports = router;
