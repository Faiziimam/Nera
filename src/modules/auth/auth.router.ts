import { Router } from "express";
import { authRouterV1 } from "./v1/auth.router";

const authRouter = Router();

authRouter.use('/v1', authRouterV1);


export { authRouter}