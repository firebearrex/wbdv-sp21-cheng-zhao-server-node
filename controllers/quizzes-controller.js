const quizService = require('../services/quizzes/quiz-service');

module.exports = app => {
    const findAllQuizzes = (req, res) => {
        res.send(quizService.findAllQuizzes());
    };

    const findQuizById = (req, res) => {
        let quizId = req.params.qid;
        const quiz = quizService.findQuizById(quizId);
        if (quiz != undefined) {
            res.send(quiz);
        } else {
            console.log("No such quiz ID found.")
        }
    };

    app.get('/api/quizzes', findAllQuizzes);
    app.get('/api/quizzes/:qid', findQuizById);
}