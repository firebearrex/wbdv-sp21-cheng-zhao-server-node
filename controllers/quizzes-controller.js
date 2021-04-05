module.exports = app => {
    const quizService = require('../services/quizzes/quiz-service');

    const findAllQuizzes = (req, res) => {
        res.send(quizService.findAllQuizzes());
    };

    const findQuizById = (req, res) => {
        const qid = req.params['qid'];
        const quiz = quizService.findQuizById(qid);
        res.send(quiz);
    };

    app.get('/api/quizzes', findAllQuizzes);
    app.get('/api/quizzes/:qid', findQuizById);
}