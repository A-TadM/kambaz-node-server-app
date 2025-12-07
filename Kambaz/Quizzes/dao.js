import model from "./model.js";
import { v4 as uuidv4 } from "uuid";


export default function QuizzesDao() {
  function findQuizzesForCourse(courseId) {
    return model.find({ course: courseId });
  }

  function updateQuiz(quizId, quizUpdates) {
    return model.updateOne({ _id: quizId }, { $set: quizUpdates });
  }

  function deleteQuiz(quizId) {
    return model.deleteOne({ _id: quizId });
  }

  function createQuiz(quiz) {
    const newQuiz = { ...quiz, _id: uuidv4() };
    return model.create(newQuiz);
  }

  const findQuizById = (quizId) => model.findById({_id: quizId});

  
  return { findQuizzesForCourse, updateQuiz, deleteQuiz, createQuiz, findQuizById };
}