import express from 'express'
import { getUser, login, register } from '../controllers/userController.js'
const router = express.Router()

router.get("/profile", getUser)

// Login Route
router.post("/login", login)

// Signup Route (Register)
router.post("/register", register)


export default router