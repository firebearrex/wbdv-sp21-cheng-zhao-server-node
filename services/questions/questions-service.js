const questions = require("./questions.json");
const questionsDAO = require('../../daos/questions-dao');

// const findAllQuestions = () => questions;
const findAllQuestions = () => questionsDAO.findAllQuestions();

// const findQuestionsForQuiz = (quizId) =>
//     questions.filter(question => question.quizId === quizId);
const findQuestionsForQuiz = (quizId) => questionsDAO.findQuestionsForQuiz(quizId);

// const findQuestionById = (quid) =>
//     questions.find(question => question._id === quid);
const findQuestionById = (qid) => questionsDAO.findQuestionById(qid);

// TODO: MongoDB Assignment next week
const createQuestion = () => {}
const createQuestionForQuiz = () => {}
const updateQuestion = () => {}
const deleteQuestion = () => {}

module.exports = {
    findAllQuestions,
    findQuestionsForQuiz,
    findQuestionById,
    createQuestion,
    createQuestionForQuiz,
    updateQuestion,
    deleteQuestion
}