import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './configs/db.js'
dotenv.config()

const app = express();
await connectDB()
// Middlewares
app.use(cors())
app.use(express.json())

//Routes
app.get('/', (req, res) => {
   res.send("API is running") 
})
const PORT= process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

export default app

