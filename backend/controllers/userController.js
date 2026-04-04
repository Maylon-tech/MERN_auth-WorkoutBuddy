import User from "../models/userModel.js"
import jwt from "jsonwebtoken"

// Function to generate Token
const createToken = (_id) => {
    return jwt.sign({_id}, process.env.JWT_SECRET, { expiresIn: '3d' })
}

export const getUser = async (req, res) => {
    const user = await User.find()


    res.json({user,  message: "User Model found successfully."})
}

// LOGIN CONTROLLER
export const login = async (req, res) => {
    const { email, password } = req.body

    try {
        const user = await User.login(email, password)

        // create a token
        const token = createToken(user._id)


        res.status(200).json({ email, token })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

// SIGNUP CONTROLLER
export const register = async (req, res) => {
    const { name, email, password } = req.body

    const newUser = await User.create({
        name,
        email,
        password
    })

    res.json({newUser,  message: "Create New Account already." })
}

// signup user
export const signupUser = async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await User.signup(email, password)

        // create a token
        const token = createToken(user._id)


        res.status(200).json({ email, token })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}
