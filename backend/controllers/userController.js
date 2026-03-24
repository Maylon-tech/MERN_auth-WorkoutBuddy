import User from "../models/userModel.js"

export const getUser = async (req, res) => {
    res.json({ message: "Getting the user profile Data."})
}

// LOGIN CONTROLLER

export const login = async (req, res) => {
    res.json({ message: "SignIn into User Profile" })
}

// SIGNUP CONTROLLER

export const register = async (req, res) => {
    const { name, email, password } = req.body

    res.json({ message: "Create New Account." })
}

// signup user
    
export const signupUser = async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await User.signup(email, password)

        res.status(200).json({ email, user })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}
