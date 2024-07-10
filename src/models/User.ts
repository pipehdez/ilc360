import mongoose,{ Schema,model } from "mongoose"; 
import { PlanDocument } from './Plans'

export interface UserDocument {
    _id: string
    email: string
    password: string
    name: string
    phone: string
    image: string
    plan: PlanDocument
    createdAt: Date
    updatedAt: Date
}

const UserSchema = new Schema<UserDocument>({
    email: {
        type: String,
        unique: true,
        required: [true,"Email is required"],
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            "Email is invalid",
        ],
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: [true,"Name is required"]
    },
    plan: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Plan",
        required: [true,"Plan is required"],
    },
},
    {
        timestamps: true,
    }
)


const User = mongoose.models?.User || model<UserDocument>('User',UserSchema)
export default User