"use server"
import { connectDB } from "@/lib/mongodb"
import Curriculum from '@/models/Curriculum'
import User from "@/models/User"

export const saveCurriculum = async  (values: any, email: string) => {
    
    try {
        await connectDB()
        const user = await User.findOne({ email })
        if (!user) {
            return {
                error: 'User not found'
            }
        }

        values.user = user._id

        const curriculum = new Curriculum(values)
        const savedCurriculum = curriculum.save()
        return { status: 'ok'}
    } catch (e) {
        console.log(e)
        return { error: 'Error saving curriculum' }
        
    }
}

export const updateCurriculum = async (values: any, email: string) => {
        
        try {
            await connectDB()
            const user = await User.findOne({ email })
            if (!user) {
                return {
                    error: 'User not found'
                }
            }
            const curriculum = await Curriculum.findOne({ user: user._id })
            if (!curriculum) {
                return {
                    error: 'Curriculum not found'
                }
            }
            curriculum.name = values.name
            curriculum.jobTitle = values.jobTitle
            curriculum.address = values.address
            curriculum.city = values.city
            curriculum.country = values.country
            curriculum.phone = values.phone
            curriculum.email = values.email
            curriculum.skills = values.skills
            curriculum.profileDescription = values.profileDescription
            curriculum.employmentHistory = values.employmentHistory
            curriculum.education = values.education
            curriculum.references = values.references
            const savedCurriculum = curriculum.save()
            return { status: 'ok' }
        } catch (e) {
            console.log(e)
            return { error: 'Error updating curriculum' }
        }
}

export const getCurriculum = async (email: string ) => {
    
    const myEmail = email.toString()

    try {
        await connectDB()
        const user = await User.findOne({ email: myEmail })
        // console.log('user',user)
        if (!user) {
            return {
                error: 'User not found'
            }
        }

        const curriculum = await Curriculum.findOne({ user: user._id })
        console.log('curriculum', curriculum)
        if (!curriculum) {
            return []
        }
        
        return curriculum.toObject() 
    } catch (e) {
        console.log(e)
    }
}