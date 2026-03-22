import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
})

// static signup method
userSchema.statics.signup = async (email, password) => {

    const exits = await User.findOne({ email })
    if (exists) {
        throw new Error("Email already in use....")
    }
}



const User = mongoose.model("User", userSchema)

export default User