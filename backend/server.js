import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'

import workoutRoutes from './routes/workouts.js'
import userRoutes from './routes/userRoutes.js'

const app = express()
dotenv.config()
connectDB()

app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// Routes
app.use("/api/workouts", workoutRoutes)
app.use("/api/user", userRoutes)

