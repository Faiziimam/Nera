import { Router } from "express";
import { authRouter } from "../modules/auth/auth.router";

const globalRouter = Router();

globalRouter.use('/auth', authRouter);


export default globalRouter;