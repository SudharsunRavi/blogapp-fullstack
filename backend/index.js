const express = require('express');
const dbConnect = require('./dbConfig');
const dotenv = require('dotenv').config();
const cookieParser = require('cookie-parser');
const multer = require('multer');
const cors=require('cors');
const path = require('path');
const bodyParser = require('body-parser');

const blogRoutes = require('./routes/blogRoutes');
const auth = require('./routes/auth');
const userRoutes = require('./routes/userRoutes');


const app=express();
dbConnect();

const corsOptions = {
    origin: 'http://localhost:3000', // Replace with the actual origin of your frontend
    credentials: 'include',
};

app.use(bodyParser.json());
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, '../client/public/uploads/')); 
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      cb(null, uniqueSuffix + path.extname(file.originalname));
    },
  });

const upload=multer({storage});
app.post('/api/v1/upload', upload.single('file'), (req, res)=>{
    const file = req.file;
    res.send(file.filename);
})

app.use("/api/v1/auth", auth);
app.use("/api/v1/users", userRoutes)
app.use("/api/v1/blogs", blogRoutes)

app.listen(5001, ()=>{
    console.log('Server is running on port 5001');
})