import express from 'express'
import { getUser, login, register, signupUser } from '../controllers/userController.js'
const router = express.Router()

router.get("/profile", getUser)

// Login Route
router.post("/login", login)

// Signup Route (Register)
router.post("/register", register)


router.post("/signup", signupUser)

export default router