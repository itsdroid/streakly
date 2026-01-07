import mongoose from 'mongoose';

const habitSchema = new mongoose.Schema({
    user: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User',
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

    records: [
        {
            date: {
                type: Date,
                required: true
            },
            status: {
                type: String,
                enum: ["Completed", "Missed", "Rest Day", "Untracked"],
                default: "Untracked",
            },
        },
    ],
});

export default mongoose.model('Habit', habitSchema);