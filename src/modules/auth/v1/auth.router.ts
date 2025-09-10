import { Router } from "express";
import { login, signup } from "./auth.controller";

const authRouter = Router();

authRouter.post('/signup', signup)
authRouter.post('/login', login)

export {authRouter as authRouterV1};

