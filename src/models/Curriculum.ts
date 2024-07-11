import mongoose,{ Schema,model } from "mongoose"
import { UserDocument } from './User'

interface SkillsDocument {
    name: string
}

interface EmploymentHistoryDocument {
    position: string
    period: string
    responsibilities: string[]
}

interface EducationDocument {
    degree: string
    period: string
    description?: string
}

interface References {
    name: string
    contact: string
}

interface CurriculumDocument {
    _id: string
    user: UserDocument
    name: string
    jobTitle: string
    address: string
    city: string
    country: string
    phone: string
    email: string
    skills: SkillsDocument[]
    profileDescription: string
    employmentHistory: EmploymentHistoryDocument[]
    education: EducationDocument[]
    references: References[]
}

const CurriculumSchema = new Schema<CurriculumDocument>({
    name: {
        type: String,
        required: [true,"Name is required"]
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: [true,"User required"]
    },
    jobTitle: {
        type: String,
        required: [true,"Job Title is required"]
    },
    address: {
        type: String,
        required: [true,"Address is required"]
    },
    city: {
        type: String,
        required: [true,"City is required"]
    },
    country: {
        type: String,
        required: [true,"Country is required"]
    },
    phone: {
        type: String,
        required: [true,"Phone is required"]
    },
    email: {
        type: String,
        required: [true,"Email is required"]
    },
    skills: {
        type: [{
            name: {
                type: String,
                required: [true,"Name is required"]
            }
        }],
    },
    profileDescription: {
        type: String,
        required: [true,"Profile Description is required"]
    },
    employmentHistory: [{
            position: {
                type: String,
                required: [true,"Position is required"]
            },
            period: {
                type: String,
                required: [true,"Period is required"]
            },
            responsibilities: {
                type: [String],
                required: [true,"Responsibilities is required"]
            }
        }]
    ,
    education: [{
            degree: {
                type: String,
                required: [true,"Degree is required"]
            },
            period: {
                type: String,
                required: [true,"Period is required"]
            },
            description: {
                type: String,
            }
        }]
    ,
    references: 
        [{
            name: {
                type: String,
                required: [true,"Name is required"]
            },
            contact: {
                type: String,
                required: [true,"Contact is required"]
            }
        }]
    },
    {
        timestamps: true,
    }
)

const Curriculum = mongoose.models?.Curriculum || mongoose.model<CurriculumDocument>('Curriculum',CurriculumSchema)

export default Curriculum