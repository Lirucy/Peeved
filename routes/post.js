const { Router } = require("express");

const postController = require("../controllers/post");

const { restrict } = require("../utils");

const postRouter = new Router();

postRouter.get("/", postController.getAllPosts);
postRouter.post("/new-post", restrict, postController.newPost);
postRouter.put("/update-post/:id", restrict, postController.updatePost);
postRouter.delete("/delete-post/:id", restrict, postController.destroyPost);

module.exports = postRouter;