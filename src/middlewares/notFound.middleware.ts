import type { RequestHandler } from "express";

export const notFoundError:RequestHandler=(req,res,next)=>{
    res.status(404).json({
        message:"Path not Found"
    })
}

