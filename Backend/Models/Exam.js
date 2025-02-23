import mongoose from "mongoose";

const examSchema = new mongoose.Schema({
    examName: {
        type: String, 
        required: true
    },
    questions: {
        type: Array,
        required: true
    }
});

export const Exam = new mongoose.model("Exam", examSchema);