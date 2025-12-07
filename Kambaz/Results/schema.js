import mongoose from "mongoose";


const resultSchema = new mongoose.Schema({
   _id: String,
   user: { type: String, ref: "UserModel" },
   course: { type: String, ref: "CourseModel" },
   quiz: { type: String, ref: "QuizModel" },
   answers: [{ _id: String, answer: String }]
 },
 { collection: "results" }
);
export default resultSchema;