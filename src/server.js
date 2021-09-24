import express from "express";
import morgan from "morgan";
import userRouter from "./routers/userRouter";
import rootRouter from "./routers/rootRouter";
import chatRouter from "./routers/chatRouter";

const app = express();
const logger = morgan("dev");

//middlewares
app.use(logger);
app.use(express.urlencoded({ extended: true }));

//routers
app.use("/", rootRouter);
app.use("/user", userRouter);
app.use("/chat", chatRouter);

export default app;
