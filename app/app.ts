import express, { Request, Response } from "express";

const PORT = 3000;

const app = express();

app.get('/health-check',(req:Request,res:Response)=>{
    res.status(200).json({isSucess:true, message:'Server is healthy!!'})
})


app.listen(PORT, ()=>{console.log(`Server is running on ${PORT}`)})