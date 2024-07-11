"use server"
import { connectDB } from "@/lib/mongodb"
import User from "@/models/User"
import bcrypt from "bcryptjs"

export const register = async (values: any) => {
    const { email,password,name, plan } = values

    try {
        await connectDB()
        const userFound = await User.findOne({ email })
        if (userFound) {
            return {
                error: 'Email already exists!'
            }
        }
        const hashedPassword = await bcrypt.hash(password,10)
        const user = new User({
            name,
            email,
            password: hashedPassword,
            plan
        })
        const savedUser = await user.save()

    } catch (e) {
        console.log(e)
    }
}

export const getUserInfo = async (email: string) => {
    console.log('getUserInfo', {email})
    try {
        await connectDB()
        const user = await User
            .findOne({ email })
            .exec()
        return user
    } catch (e) {
        console.log(e)
    }
}