import express from "express"
import userRouter from "./user/userRouter";

const hostName: string = "127.0.0.1"
const app: express.Application = express();

app.get("/", (req, res) => {
    res.json({ msg: "inside server" })
})

app.use("/user", userRouter);

const port = 8000;
app.listen(port, hostName, () => {
    console.log(`server start at http://${hostName}:${port}`);
})