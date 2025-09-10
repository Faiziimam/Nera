import { Request, Response } from 'express';
export const errorHandler = (err:Error,req:Request,res:Response)=>{
    console.log("[ERROR]", err?.stack);
    res.status(500).json({name:err?.name,message:err?.message})

}
