import model from "../Quizzes/model.js";
import { v4 as uuidv4 } from "uuid";


export default function QuestionsDao() {

    async function createQuestion(quizId, question) {
      const newQuestion = { _id: uuidv4(), ...question };
      const status = await model.updateOne({ _id: quizId },
                                           { $push: { questions: newQuestion } });                           
      return newQuestion;
    }

    const findQuestionById = async (quizId, questionId) => { 
      const quiz =  await model.findById({_id: quizId});
      const question = quiz.questions.id(questionId);
      return question;
    }  

    async function updateQuestion(quizId, questionId, questionUpdates) {
        const quiz = await model.findById(quizId);
        const question = quiz.questions.id(questionId);
        Object.assign(question, questionUpdates);
        await quiz.save();
        return question;
    }

    async function findQuestionsForQuiz(quizId) {
        const quiz = await model.findById(quizId);
        return quiz.questions;
    }

    async function findQuestionsByType(quizId, type) {
        const quiz = await model.findById(quizId);
        return quiz.questions.filter((question) => (question.type === type));
    }

    function deleteQuestion(quizId, questionId) {
      const status = model.updateOne({ _id: quizId },
                                     { $pull: { questions: { _id: questionId } } });
      return status;
    }


    return { createQuestion, findQuestionById, updateQuestion, 
             findQuestionsForQuiz, findQuestionsByType, deleteQuestion };
}