const quizzes = require('./quizzes.json');
const quizzesDAO = require('../../daos/quizzes-dao');

// const findAllQuizzes = () => quizzes;
const findAllQuizzes = () => quizzesDAO.findAllQuizzes();

// const findQuizById = (quizId) =>
//     quizzes.find(quiz => quiz._id === quizId);
const findQuizById = (quizId) => quizzesDAO.findQuizById(quizId);

// TODO: MongoDB Assignment next week
const createQuiz = () => {};
const updateQuiz = () => {};
const deleteQuiz = () => {};

module.exports = {
    findAllQuizzes,
    findQuizById,
    createQuiz,
    updateQuiz,
    deleteQuiz
}
