import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'

import workoutRoutes from './routes/workouts.js'
import userRoutes from './routes/userRoutes.js'

dotenv.config()
const app = express()
app.use(express.json())
connectDB()


app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// Routes
app.use("/api/user", userRoutes)
app.use("/api/workouts", workoutRoutes)

const PORT  = process.env.PORT || 4000

app.listen(PORT, () => console.log("Server is running now...!!"))