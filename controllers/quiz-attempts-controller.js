const quizAttemptsDAO = require('../daos/quiz-attempts-dao');

module.exports = app => {
    const findAttemptsForQuiz = (req, res) => {
        let qzid = req.params.qzid;
        quizAttemptsDAO.findAttemptsForQuiz(qzid)
            .then(attempts => res.json(attempts));
    };

    const createAttempt = (req, res) => {
        let qzid = req.params.qzid;
        let attempt = req.body;
        quizAttemptsDAO.createAttempt(qzid, attempt)
            .then(attempt => res.json(attempt));
    };

    app.get('/api/quizzes/:qzid/attempts', findAttemptsForQuiz);
    app.post('/api/quizzes/:qzid/attempts', createAttempt);
}