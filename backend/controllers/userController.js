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
