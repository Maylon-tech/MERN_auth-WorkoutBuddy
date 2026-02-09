import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

import workoutRoutes from './models/workoutModel.js'

const app = express()
dotenv.config()

// Middelware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// Routes
app.use("/api/workout", workoutRoutes)

// Connect to DB
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        //listen for requests
        app.listen(proces.env.PORT, () => {
            console.log('connected to db & listening on port', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log("cannot do connection with DB.")
    })