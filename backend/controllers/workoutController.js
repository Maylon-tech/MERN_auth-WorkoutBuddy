import Workout from '../models/workoutModel.js'
import mongoose from 'mongoose'



// Get all Workouts

export const getWorkouts = async (req, res) => {
    const workouts = await Workout.find({}).sort({ createAt: -1 })
    res.status(200).json(workouts)

    res.status(200).json(workouts)
}

// Get all Workouts

export const getWorkout = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such workout' })
    }
   
    const workout = await Workout.fondById(id)
    if (!workout) {
        return res.status(404).json({ error: 'No Such Workout '})
    }
}

export const createWorkout = async (req, res) => {
    const { title, load, reps } = req.body

    let emptyFields = []

    if (!title) { emptyFields.push('title') }
    if (!load) { emptyFields.push('load') }
    if (!reps) { emptyFields.push('reps') }
    if (emptyFields.length > 0) {
        return res.status(400).json({ 
            error: 'Please fill in all the fields', emptyFields
        })
    }
}

// Try doc to DB
try {
    const workout = await Workout.create({ title, load, reps })
    res.status(200).json(workout)
} catch (error) {
    res.status(400).json({ error: error.message })
}

// Delete a workout