import rateLimit from "express-rate-limit";

export const limitter = rateLimit({
    windowMs:10 * 60 * 1000, 
    limit:30,
    message:'To many requests, Please try again.'
})