const express = require('express')
const router = express.Router()
const Question = require('../models/Question')
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()

router.post('/', async(req, res) => {
    try {
        const questions = await Question.find();
        res.json(questions)
    } catch (err) {
        res.json({ message: err })
    }
})

router.get('/addQuestion', function(req, res) {
    res.render('addQuestion')
})

router.post('/addQuestion', jsonParser, async function(req, res) {
    const question = new Question({
        questionOne: req.body.questionOne,
        questionTwo: req.body.questionTwo,
        valueOne: req.body.valueOne,
        valueTwo: req.body.valueTwo
    });
    try {
        const savedQuestion = await question.save();
        res.json()
    } catch (err) {
        console.log(err);
    }
})

module.exports = router;