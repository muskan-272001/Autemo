const router = require('express').Router();
const Level3 = require('../models/level3'); // Imported a Class

// Get all questions
router.get('/', async (req, res) => {
    try {
        const questions = await Level3.find();
        res.send(questions);
    }
    catch (error) {
        res.send(error);
    }
});

// Get 1 question
router.get('/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const question = await Level3.findById(_id);

        if (!question) {
            res.send('Invalid Question ID');
        }
        else {
            res.send(question);
        }
    }
    catch (error) {
        res.send(error);
    }
});

// Create 1 question
router.post('/', async (req, res) => {
    try {
        let question = new Level3({
            question: req.body.question,
            hostedURL: req.body.hostedURL,
            correct_answer: req.body.correct_answer,
            incorrect_answers: req.body.incorrect_answers
        });
        question = await question.save();
        res.send(question);
    }
    catch (error) {
        res.send(error);
    }
});

// Update 1 question
router.put('/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        let ques = await Level3.findById(_id);

        let {
            question: newQuestion,
            correct_answer: newCorrectAnswer,
            incorrect_answers: newIncorrectAnswers
        } = req.body;

        ques.set({
            question: newQuestion,
            correct_answer: newCorrectAnswer,
            incorrect_answers: newIncorrectAnswers
        });

        ques = await ques.save();
        res.send(ques);
    }
    catch (error) {
        res.send(error);
    }
});

// Delete 1 question
router.delete('/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const question = await Level3.deleteOne({ _id });

        if (question.deletedCount === 0) {
            res.send('Invalid Question ID');
        } else {
            res.send('Deleted Successfully');
        }
    }
    catch (error) {
        res.send(error);
    }
});

module.exports = router;