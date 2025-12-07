import mongoose from "mongoose";


const quizSchema = new mongoose.Schema({
   _id: String,
   course: { type: String, ref: "CourseModel" },
   status: { type: String, enum: ["PUBLISHED", "UNPUBLISHED"], default: "UNPUBLISHED" },
   title: { type: String, default: "Unnamed Quiz"},
   description: String,
   availableDate: { type: Date, default: new Date('2025-01-01')},
   availableUntilDate: { type: Date, default: new Date('2025-01-01')},
   due: { type: Date, default: new Date('2025-01-01')},
   points: Number,
   numOfQs: Number,
   quizType: { type: String, 
               enum: ["GRADED QUIZ", "PRACTICE QUIZ", "GRADED SURVEY", "UNGRADED SURVEY"], 
               default: "GRADED QUIZ" },
   assignmentGroup: { type: String, 
                      enum: ["QUIZZES", "EXAMS", "ASSIGNMENTS", "PROJECT"], 
                      default: "QUIZZES" },     
   shuffleAnswers: { type: Boolean, default: true},
   timeLimit: { type: Number, default: 20}, 
   multipleAttempts: { type: Boolean, default: false},   
   numOfAttempts: { type: Number, default: 1},                       
   showCorrectAnswers: Date,
   accessCode: { type: String, default: ""},
   oneQuestionAtATime: { type: Boolean, default: true}, 
   webcamRequired: { type: Boolean, default: false}, 
   lockQuestionAfterAnswering: { type: Boolean, default: false},
   questions: [],
   answers: [],
 },
 { collection: "quizzes" }
);
export default quizSchema;