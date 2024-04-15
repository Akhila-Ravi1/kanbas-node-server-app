import mongoose from "mongoose";

const lessonSchema = new mongoose.Schema({
    _id: String,
    name: { type: String },
    description: { type: String },
    module: { type: String, ref: 'modules' },
});

const moduleSchema = new mongoose.Schema({
    _id: String,
    name: { type: String, required: true },
    description: { type: String, required: true },
    course: { type: String, required: true },
    lessons: [lessonSchema],
},
    { collection: "modules" });

export default moduleSchema;