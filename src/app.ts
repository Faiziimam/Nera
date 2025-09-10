import dotenv from 'dotenv';
dotenv.config()
import express, { Request, Response } from "express";
import globalRouter from './router/global.router';
import morgan from 'morgan';
import { errorHandler } from './middleware/errorHandler';
import { limitter } from './middleware/rateLimitter';


const PORT = 3000;
const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(limitter)
app.use('/api',globalRouter);

app.get('/health-check',(req:Request,res:Response)=>{
    res.status(200).json({isSucess:true, message:'Server is healthy!!'})
})


app.use(errorHandler);
app.listen(PORT, ()=>{console.log(`Server is running on ${PORT}`)})