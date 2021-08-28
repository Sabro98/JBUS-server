import express from "express";
import { postJoin, postLogin } from "../controller/userController";

const userRouter = express.Router();

userRouter.route("/join").post(postJoin);
userRouter.route("/login").post(postLogin);

export default userRouter;
