const quizService = require('../services/quizzes/quiz-service');

module.exports = app => {
    const findAllQuizzes = (req, res) => {
        // res.send(quizService.findAllQuizzes());
        quizService.findAllQuizzes().then(allQuizzes => res.json(allQuizzes));
    };

    const findQuizById = async (req, res) => {
        let quizId = req.params.qid;
        const quiz = await quizService.findQuizById(quizId);
        res.json(quiz);

        // if (quiz != null) {
        //     console.log('Quiz is sent.');
        // } else {
        //     console.log('No such quiz is found.')
        //     alert("No such quiz is found.");
        // }
    };

    app.get('/api/quizzes', findAllQuizzes);
    app.get('/api/quizzes/:qid', findQuizById);
}