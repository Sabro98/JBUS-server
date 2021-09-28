import express from "express";
import { postMove } from "../controller/warpController";

const warpRouter = express.Router();

warpRouter.route("/move").post(postMove);

export default warpRouter;
