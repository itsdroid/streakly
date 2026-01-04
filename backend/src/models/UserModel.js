import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    title: {
        type: String,
        default: "New User"
    },
    frequency: {
        type: String,
        enum: ["Daily", "Weekly", "Monthly"],
        default: "Daily"
    },
},
    {
        timestamps: true
    },
);

export default mongoose.model("User", userSchema);

