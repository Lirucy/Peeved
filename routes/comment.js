const { Router } = require("express");

const commentController = require("../controllers/comment");

const { restrict } = require("../utils");

const commentRouter = new Router();

commentRouter.get("/", commentController.getAllComments);
commentRouter.get("/:id", restrict, commentController.getCommentById);
commentRouter.post("/new-comment", restrict, commentController.newComment);
commentRouter.delete("/delete-comment/:id", restrict, commentController.destroyComment);

module.exports = commentRouter;