import express from 'express'
import dotenv from "dotenv"
import cors from "cors"


const port = process.env.PORT || 3000;


const app = express()
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.get("/", (req, res) => {
    res.send("API is running")
})


app.listen(port, () => console.log(`Server is running on port ${port}`))
