// questionController.js
const questionService = require('../services/questionServices');
const JoiValidationSchema = require('../utils/JoiValidationSchema');
const handleErrors = require('../utils/handleErrors');
const ResponseHelper = require('../utils/responseHelper');
const MSG = require('../utils/MSG');
const Question = require('../models/question');

exports.getAllQuestions = handleErrors(async (req, res, next) => {
  // Assume category name is passed in the request query parameter 'category'
  const categoryName = req.query.category;
  
  const questions = await questionService.getAllQuestions(categoryName);
  
  return res.status(200).json(ResponseHelper.success(200, MSG.FOUND_SUCCESS, questions));
});

exports.getQuestion = handleErrors(async (req, res, next) => {
  const questionId = req.params.questionId;
  const question = await questionService.getQuestionById(questionId);

  if (!question) {
    return res.status(400).json(ResponseHelper.error(400, MSG.NOT_FOUND));
  }

  return res.status(200).json(ResponseHelper.success(200, MSG.FOUND_SUCCESS, question));
});

exports.createQuestion = handleErrors(async (req, res, next) => {
  // const { error } = JoiValidationSchema.createQuestionSchema.validate(req.body);
  // if (error) {
  //   return res.status(400).json(ResponseHelper.error(400, error.message));
  // }

  const questionData = {
    category: req.body.category,
    difficulty: req.body.difficulty,
    questionText: req.body.questionText,
    answer: req.body.answer,
    examples: req.body.examples,
  };

  const question = await questionService.createQuestion(questionData);
  return res.status(200).json(ResponseHelper.success(200, MSG.CREATE_SUCCESS, question));
});

exports.updateQuestion = handleErrors(async (req, res, next) => {
  const questionId = req.params.questionId;
  // const { error } = JoiValidationSchema.updateQuestionSchema.validate(req.body);
  // if (error) {
  //   return res.status(400).json(ResponseHelper.error(400, error.message));
  // }
  const questionData = {
    category: req.body.category,
    difficulty: req.body.difficulty,
    questionText: req.body.questionText,
    answer: req.body.answer,
    examples: req.body.examples,
  };

  const updatedQuestion = await questionService.updateQuestion(questionId, req.body);

  if (!updatedQuestion) {
    return res.status(400).json(ResponseHelper.error(400, MSG.NOT_FOUND));
  }

  return res.status(200).json(ResponseHelper.success(200, MSG.UPDATED_SUCCESS, updatedQuestion));
});

exports.removeQuestion = handleErrors(async (req, res, next) => {
  const questionId = req.params.questionId;
  const question = await questionService.getQuestionById(questionId);

  if (!question) {
    return res.status(400).json(ResponseHelper.error(400, MSG.NOT_FOUND));
  }

  await questionService.removeQuestion(questionId);
  return res.status(200).json(ResponseHelper.success(200, MSG.DELETE_SUCCESS));
});

exports.updateExample = handleErrors(async (req, res, next) => {
  const {newFileName,newCode}=req.body
  const questionId=req.params.questionId
  const question = await Question.findById(questionId);
  console.log( req.body)

  if (!question) {
    throw new Error('Question not found');
  }

  // Find the example to update
  const exampleToUpdate = question.examples.find(example => example.fileName === newFileName);


  if (!exampleToUpdate) {
    question.examples.push( {
      "fileName":newFileName ,
      "codeLines":  Buffer.from(newCode, 'utf-8')
  });
     
  Buffer.from(req.body.newCode, 'utf-8')
  }else{
    if (newCode === undefined || newCode.trim() === "") {
      question.examples = question.examples.filter(example => example.fileName !== newFileName);
    }else{
      // Update the example properties
      exampleToUpdate.fileName = newFileName;
      exampleToUpdate.codeLines = newCode; // Assuming newCode is a string
    }

  }
  // Save the updated question
  await question.save();

  return res.status(200).json(ResponseHelper.success(200, MSG.UPDATED_SUCCESS, question));
});


exports.getQuestionsCounts = handleErrors(async (req, res, next) => {
  const questionsCount = await questionService.getQuestionsCounts();
  // Calculate the percentage completion
const percentageCompletion = (questionsCount / 50000) * 100;
  return res.status(200).json(ResponseHelper.success(200, MSG.FOUND_SUCCESS,{counts:questionsCount,percentageCompletion:`${percentageCompletion.toFixed(2)}%`} ));
});

module.exports = exports;
