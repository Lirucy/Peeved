const { Router } = require("express");
const userRouter = require("./user");
const postRouter = require("./post");

const apiRouter = new Router();

apiRouter.use("/posts", postRouter);
apiRouter.use("/auth", userRouter);

module.exports = apiRouter;