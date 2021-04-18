const questionService = require("../services/questions/questions-service");

module.exports = (app) => {
    const findAllQuestions = (req, res) => {
        // const questions = questionService.findAllQuestions();
        // res.send(questions);
        questionService.findAllQuestions()
            .then(allQuestions => res.json(allQuestions));
    }

    const findQuestionsForQuiz = async (req, res) => {
        const quizId = req.params.qzid;
        const questions = await questionService.findQuestionsForQuiz(quizId);
        res.json(questions);

        // if (questions != undefined) {
        // } else {
        //     alert('No question for this quiz is found.');
        // }
    }

    const findQuestionById = (req, res) => {
        const qtId = req.params.qtid;
        questionService.findQuestionById(qtId)
            .then(question => {
                res.json(question);
                // if (question != undefined) {
                // } else {
                //     alert('No such question is found.');
                // }
            })
    }


    app.get("/api/questions", findAllQuestions);
    app.get("/api/quizzes/:qzid/questions", findQuestionsForQuiz);
    app.get("/api/questions/:qtid", findQuestionById);
}