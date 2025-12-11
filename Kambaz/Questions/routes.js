import QuestionsDao from "./dao.js";


export default function QuestionsRoutes(app) {
  const dao = QuestionsDao();

  const createQuestionForQuiz = async (req, res) => {
    const { quizId } = req.params;
    const newQuestion = await dao.createQuestion(quizId, req.body);
    res.send(newQuestion);
  }

  const findQuestionById = async (req, res) => {
    const { quizId, questionId } = req.params;
    const question = await dao.findQuestionById(quizId, questionId);
    res.json(question);
  };

  const updateQuestion = async (req, res) => {
    const { quizId, questionId } = req.params;
    const questionUpdates = req.body;
    const updatedQuestion = await dao.updateQuestion(quizId, questionId, questionUpdates);
    res.send(updatedQuestion);
  }

  const findQuestionsForQuiz = async (req, res) => {
    const { quizId } = req.params;
    const { type } = req.query;
    if (type) {
      const questions = await dao.findQuestionsByType(quizId, type);
      res.json(questions);
      return;
    }

    const questions = await dao.findQuestionsForQuiz(quizId);
    res.json(questions);
  };

  const deleteQuestion = async (req, res) => {
    const { quizId, questionId } = req.params;
    const status = await dao.deleteQuestion(quizId, questionId);
    res.send(status);
  }


  app.post("/api/quizzes/:quizId/questions", createQuestionForQuiz);
  app.get("/api/quizzes/:quizId/questions/:questionId", findQuestionById);
  app.put("/api/quizzes/:quizId/questions/:questionId", updateQuestion);
  app.get("/api/quizzes/:quizId/questions", findQuestionsForQuiz);
  app.delete("/api/quizzes/:quizId/questions/:questionId", deleteQuestion);
}