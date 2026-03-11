import type { ErrorRequestHandler } from "express"

export const errorMiddleWare:ErrorRequestHandler = (err,req,res,next)=>{
    console.error(err)
    res.status(err.status||500)
    res.json({
        status:err.status||500,
        message: err.message
    })
}