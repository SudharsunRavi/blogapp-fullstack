const express = require('express');
const dbConnect = require('./dbConfig');
const dotenv = require('dotenv').config();
const cookieParser = require('cookie-parser');

const blogRoutes = require('./routes/blogRoutes');
const auth = require('./routes/auth');

const app=express();
dbConnect();

app.use(express.json());
app.use(cookieParser());

app.use("/api/v1/auth", auth);
app.use("/api/v1/blogs", blogRoutes)

app.listen(5001, ()=>{
    console.log('Server is running on port 5001');
})