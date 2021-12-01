import express from "express";
import morgan from "morgan";
import userRouter from "./routers/userRouter";
import rootRouter from "./routers/rootRouter";
import chatRouter from "./routers/chatRouter";
import warpRouter from "./routers/warpRouter";
import answerRouter from "./routers/answerRouter";

const app = express();
const logger = morgan("dev");

//middlewares
app.use(logger);
app.use(express.urlencoded({ extended: true }));

//routers
app.use("/", rootRouter);
app.use("/user", userRouter);
app.use("/chat", chatRouter);
app.use("/warp", warpRouter);
app.use("/answer", answerRouter);

export default app;
