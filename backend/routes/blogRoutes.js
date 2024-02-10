const router = require('express').Router();
const asyncHandler = require('express-async-handler');

const Blog = require('../models/blogModel');
const User = require('../models/userModel');


//get all blogs
router.get('/', asyncHandler(async(req, res) => {
    try {
        const categoryFilter = req.query.category ? { cat: req.query.category } : {};
        const blogs = await Post.find(categoryFilter);
        res.status(200).json(blogs);
    } catch (error) {
        res.status(500).json(error);
    }
}))

//get a particular blog
router.get('/:id', asyncHandler(async(req, res) => {
    try {
        const blog = await Blog.findById(req.params.id)
          .populate({
            path: 'uid',
            model: 'User',
            select: 'name image',
          })
          .select('title desc image category date uid');

        if (!blog) {
          return res.status(404).json({ message: 'Blog not found' });
        }
        res.status(200).json(blog);
      } catch (error) {
        res.status(500).json(error);
      }
}))


//create new blog
router.post('/', (req, res) => {
})

//update blog
router.put('/:id', (req, res) => {
})

//delete blog
router.delete('/:id', (req, res) => {
    const token = req.cookies.access_token;
    if (!token) return res.status(401).json("Not authenticated!");

    jwt.verify(token, process.env.JWT_SECRET, async (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    try {
        const BlogID = req.params.id;
        const result = await Post.deleteOne({ _id: BlogID, uid: userInfo.id });

        if (result.deletedCount === 0) return res.status(403).json("You can delete only your post!");

        res.json("BlogID has been deleted!");
    } catch (error) {
        res.status(500).json(error);
    }
    });
})

module.exports = router;