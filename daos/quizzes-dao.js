const quizzesModel = require('../models/quizzes/quizzes-model');

const findAllQuizzes = () => quizzesModel.find();

const findQuizById = (quizId) => quizzesModel.findById(quizId);

const quizzesDAO = {
    findAllQuizzes,
    findQuizById
}

module.exports = quizzesDAO;