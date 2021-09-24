import express from "express";
import { postChat } from "../controller/chatController";

const chatRouter = express.Router();

chatRouter.route("/save").post(postChat);

export default chatRouter;
