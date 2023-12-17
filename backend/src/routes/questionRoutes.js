/**
 * File Name: questionRoutes.js
 */
const express = require('express');
const router = express.Router();
const questionController = require('../controllers/questionController');

router.get('/',  questionController.getAllQuestions);
router.get('/:questionId',  questionController.getQuestion);
router.post('/',  questionController.createQuestion);
router.put('/:questionId',  questionController.updateQuestion);
router.delete('/:questionId',  questionController.removeQuestion);
router.put('/:questionId/update-example', questionController.updateExample);

router.get('/questions/count',  questionController.getQuestionsCounts);

module.exports = router;
