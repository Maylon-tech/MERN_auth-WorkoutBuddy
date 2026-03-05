import express from 'express'
import { loginUser, signupUser } from '../controllers/userController.js'
const router = express.Router()

// Login Route
router.post("/login", loginUser)

// Signup Route (Register)
router.post("/signup", signupUser)


export default router