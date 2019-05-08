const express = require("express")
const helmet = require("helmet")
const cors = require("cors")

const authRouter = require("../auth/auth-router")
const userRouter = require("../users/user-router")

const server = express()

server.use(express.json())
server.use(helmet())
server.use(cors())

server.use("/api/auth",authRouter)
server.use("/api/users",userRouter)
server.use(cors({credentials:true, origin: "http://localhost:5000"}))

server.get("/",(req,res)=>{ res.send("Server working") })

module.exports = server;