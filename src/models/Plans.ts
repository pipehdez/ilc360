import mongoose,{ Schema,model } from "mongoose" 

export interface PlanDocument {
    _id: string
    name: string
    price: number
    duration: number
    type: string
    createdAt: Date
    updatedAt: Date
}

const PlanSchema = new Schema<PlanDocument>({
    name: {
        type: String,
        required: [true,"Name is required"]
    },
    price: {
        type: Number,
        required: [true,"Price is required"]
    },
    duration: {
        type: Number,
        required: [true,"Duration is required"]
    },
    type: {
        type: String,
        required: [true,"Type is required"]
        
    },
},
    {
        timestamps: true,
    }
)

const Plan = mongoose.models?.Plan || model<PlanDocument>('Plan',PlanSchema)

export default Plan