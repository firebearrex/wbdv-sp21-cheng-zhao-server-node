const quizzes = require('./quizzes.json');

const findAllQuizzes = () => quizzes;

const findQuizById = (quizId) =>
    quizzes.find(quiz => quiz._id === quizId);

// TODO: MongoDB Assignment next week
const creatQuiz = () => {};
const updateQuiz = () => {};
const deleteQuiz = () => {};

module.exports = {
    findAllQuizzes,
    findQuizById,
    creatQuiz,
    updateQuiz,
    deleteQuiz
}
