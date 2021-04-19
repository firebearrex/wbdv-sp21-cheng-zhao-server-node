const quizAttemptsModel = require('../models/quiz-attempts/quiz-attempts-model');

const scoreQuiz = (questions) => {
    let numberOfCorrectQuestions = 0;
    questions.forEach(question => question.answer === question.correct ?
        numberOfCorrectQuestions++ : numberOfCorrectQuestions);
    return 100 * numberOfCorrectQuestions / questions.length;
};

const findAttemptsForQuiz = (qzid) =>
    quizAttemptsModel.find({quiz: qzid}).populate('quiz');

const createAttempt = (qzid, attemptedQuestions) =>
    quizAttemptsModel.create({
        quiz: qzid,
        answers: attemptedQuestions,
        score: scoreQuiz(attemptedQuestions)
    });

const quizAttemptsDAO = {
    findAttemptsForQuiz,
    createAttempt
};

module.exports = quizAttemptsDAO;