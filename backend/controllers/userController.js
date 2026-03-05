import User from "../models/userModel.js"



// LOGIN CONTROLLER

export const loginUser = async (req, res) => {
    res.json({ msg: "Login request DONE.." })

    res.send("Login request DONE..")
}



// SIGNUP CONTROLLER

export const signupUser = async (req, res) => {
    res.json({ msg: "Signup into system.." })
}
