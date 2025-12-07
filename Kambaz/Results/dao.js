import model from "./model.js";
import { v4 as uuidv4 } from "uuid";


export default function ResultsDao() {
    function deleteAllResultsFromQuiz(quizId) {
      return model.deleteMany({ quiz: quizId });
    }


    return { deleteAllResultsFromQuiz };
}