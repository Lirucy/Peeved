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

const updatePost = async (req, res) => {
    try {
        const { id } = req.params;

        Post.findByIdAndUpdate(id, req.body, { new: true }, (e, post) => {
            if (e) {
                return res.status(500).json({ error: e.message });
            }
            if (!post) {
                return res.status(404).json({ error: `Post, id: ${id} not found` });
            }
            res.status(200).json(post);
        })
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
}

const destroyPost = async (req, res) => {
    try {
        const { id } = req.params;
        Post.findByIdAndDelete(id, (e, post) => {
            if (e) {
                return res.status(500).json({ error: e.message })
            }
            if (!post) {
                return res.status(404).json({ error: `Post, id: ${id} not found`})
            }
            res.status(200).json({ message: `Post, id: ${id} successfully deleted!`})
         })
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
}

module.exports = {
    getAllPosts,
    newPost,
    updatePost,
    destroyPost
}