import mongoose from "mongoose"
const { MONGODB_URI } = process.env
export const connectDB = async () => {
    try {
        const { connection } = await mongoose.connect('mongodb+srv://dev:941001@cluster0.yqorpme.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
        if (connection.readyState === 1) {
            return Promise.resolve(true)
        }
    } catch (error) {
        console.error(error)
        return Promise.reject(error)
    }
}