import express, { Router, Request, Response } from 'express'
import { UserUtil } from '../utils/UserUtil';

const userRouter: Router = Router();

userRouter.get("/", async (req: Request, res: Response) => {
    res.status(200).json({
        msg: "inside user get req"
    })
});



export default userRouter;