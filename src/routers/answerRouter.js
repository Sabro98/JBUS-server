import express from "express";
import { getSubmit, postSubmit } from "../controller/answerController";

const answerRouter = express.Router();

answerRouter.route("/submit").post(postSubmit).get(getSubmit);

export default answerRouter;
