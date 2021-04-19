const quizAttemptsDAO = require('../../daos/quiz-attempts-dao');

const findAttemptsForQuiz = (qzid) => quizAttemptsDAO.findAttemptsForQuiz(qzid);

const createAttempt = (qzid, attemptedQuestions) => quizAttemptsDAO.createAttempt(qzid, attemptedQuestions);

module.exports = {
    findAttemptsForQuiz,
    createAttempt
}