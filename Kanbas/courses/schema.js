import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
    _id: String,
    name: { type: String, required: true },
    number: { type: String, required: true },
    semester: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    image: String,
},
    { collection: "courses" });

export default courseSchema;