import { Request, Response, NextFunction } from 'express';
import { LoginRequest, SignupRequest } from './auth.types';
import { logIn, signUp } from './auth.service';



export const signup = async (req: Request, res: Response, next: NextFunction) => {
  try{
    const userDetails= req.body;
    if (!userDetails?.name || !userDetails.email || !userDetails.password || !userDetails.role) {
        return res.status(400).json({ isSuccess: false, message: 'All fields are mandatory!' });
    }
    const data = await signUp(userDetails as SignupRequest);
    res.status(201).json({isSucess:true, data:data});
  }
  catch(err)
  {
    next(err);
  }
};

export const login = async (req:Request, res:Response, next:NextFunction)=>
{
    try{
        const loginData = req.body;
        if(!loginData?.email || !loginData?.password)
        {
            res.status(400).json({isSucess:false, message:'Username and password required.'});
        }
        const data = await logIn(loginData as LoginRequest);
        res.status(201).json({isSucess:true, data:data});
    }
    catch(err)
    {
        next(err);
    }
}
