import mongoose from "mongoose";


const assignmentSchema = new mongoose.Schema({
   _id: String,
   title: String,
   course: { type: String, ref: "CourseModel" },
   availableDate: Date,
   due: Date,
   points: Number,
   des: String,
   availableUntilDate: Date
 },
 { collection: "assignments" }
);
export default assignmentSchema;