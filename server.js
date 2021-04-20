const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const uri = process.env.MONGODB_URI;
const app = express();

const mongoose = require('mongoose');
mongoose.connect(
    uri,
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
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});

require('./controllers/quizzes-controller')(app);
require('./controllers/question-controller')(app);
require('./controllers/quiz-attempts-controller')(app);

// app.listen(4000);
app.listen(process.env.PORT || 3001);
// app.listen(process.env.MONGODB_URI || 4000);