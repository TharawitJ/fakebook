import express from 'express'
import authRouter from "./routes/auth.route.js"
import postRouter from "./routes/post.route.js"
// import errorMiddleWare from "/middlewares/error.middleware.js"


const app = express()
app.use(express.json())

app.use("/auth",authRouter)
app.use("/post",postRouter)


// app.use(errorMiddleWare)
export default app