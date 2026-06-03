const express = require("express")
const cookieParser = require("cookie-parser")
const cors = require("cors")
const app = express()
app.use(cookieParser())
app.use(express.json())
app.use(cors({
    origin:[
        "http://localhost:5173",
        "https://ai-interview-helper-topaz.vercel.app"
    ],
    credentials:true
}))
// require all the route here
const authRouter = require("./router/auth.routes.js")
const interviewRouter = require("./router/interview.routes.js")

// using all the route here
app.use("/api/auth", authRouter)
app.use("/api/interview",interviewRouter)
module.exports = app