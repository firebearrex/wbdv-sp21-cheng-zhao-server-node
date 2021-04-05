const questions = require('./questions.json');

const findAllQuestions = () => questions;

const findQuestionsForQuiz = (quizId) =>
    questions.filter(question => question.quizId === quizId);

const findQuestionById = (quid) =>
    questions.find(question => question._id === quid);

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