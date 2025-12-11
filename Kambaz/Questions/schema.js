import mongoose from "mongoose";


const questionSchema = new mongoose.Schema({
   _id: String,
   title: String,
   description: String,
   type: { type: String, 
           enum: ["T/F", "MULTIPLE", "FILLINBLANK"] },
   points: Number, 
   answers: { type: String, default: ""},
   correctAnswer: String     
 }
);
export default questionSchema;