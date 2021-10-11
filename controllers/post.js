const Post = require("../models/post");

const getAllPosts = async (req,res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (e) {
        res.status(500).json({ error: e.message })
    }
}

const newPost = async (req, res) => {
    try {
        const post = new Post(req.body);

        await post.save();
        res.status(201).json(post);
    } catch (e) {
        res.status(500).json({ message: e.message })
    }
}

module.exports = {
    getAllPosts,
    newPost,
}