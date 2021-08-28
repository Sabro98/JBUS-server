import express from "express";
import morgan from "morgan";
import MongoStore from "connect-mongo";
import userRouter from "./routers/userRouter";
import rootRouter from "./routers/rootRouter";

const app = express();
const logger = morgan("dev");

//middlewares
app.use(logger);
app.use(express.urlencoded({ extended: true }));

//routers
app.use("/", rootRouter);
app.use("/user", userRouter);

export default app;
