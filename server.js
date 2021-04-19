const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const mongoose = require('mongoose');
mongoose.connect(
    'mongodb://localhost:27017/whiteboard',
    {useNewUrlParser: true, useUnifiedTopology: true});

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Configures CORS
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers',
        'Content-Type, X-Requested-With, Origin');
    res.header('Access-Control-Allow-Methods',
        'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    next();
});

require('./controllers/quizzes-controller')(app);
require('./controllers/question-controller')(app);
require('./controllers/quiz-attempts-controller')(app);

// app.listen(4000);
app.listen(process.env.PORT || 3001);