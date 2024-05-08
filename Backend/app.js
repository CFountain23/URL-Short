import express from 'express'
import dotenv from "dotenv"

const app = express()

app.use(express.json())

app.use('/home', (req,res)=>{
    res.status(200).send("Welcome to the Homepage")
})

app.use('*', (req, res) => {
    res.status(404).json({error: "not found"})
})

export default app