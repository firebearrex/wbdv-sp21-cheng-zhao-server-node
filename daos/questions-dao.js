const questionsModel = require('../models/questions/questions-model');
const quizzesModel = require('../models/quizzes/quizzes-model');

const findAllQuestions = () => questionsModel.find();

const findQuestionById = (qid) => questionsModel.findById(qid);

// export const findQuestionsForQuiz = (quizId) => quizzesModel.findById(quizId)
//     .populate('questions').then(quiz => quiz.questions);
const findQuestionsForQuiz = (quizId) => questionsModel.find({quizId});

const questionsDAO = {
    findAllQuestions,
    findQuestionById,
    findQuestionsForQuiz
};

module.exports = questionsDAO;