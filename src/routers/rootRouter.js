import express from "express";

const rootRouter = express.Router();

rootRouter.get("/", (req, res) => res.send("HI"));

export default rootRouter;
