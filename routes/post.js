const { Router } = require("express");

const postController = require("../controllers/post");

const { restrict } = require("../utils");

const postRouter = new Router();

postRouter.get("/", restrict, postController.getAllPosts);
postRouter.post("/new-post", restrict, postController.newPost);

module.exports = postRouter;