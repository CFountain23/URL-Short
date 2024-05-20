import express from 'express'
import dotenv from "dotenv"
import url from "url"
import cors from "cors"

import links from "./api/link.route.js";

const app = express()

app.use(cors())
app.use(express.json())

app.use('/home', (req,res)=>{
    res.status(200).send("Welcome to the Homepage")
})

app.use('/api/v1/links', links)

app.use('*', (req, res) => {
    res.status(404).json({error: "not found"})
})



export default app