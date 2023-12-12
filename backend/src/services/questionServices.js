// questionServices.js
const Question = require('../models/question');
const handleErrors = require('../utils/handleErrors');

exports.getAllQuestions = handleErrors(async () => {
  const questions = await Question.find().populate('category','name -_id').select('');
  return questions;
});

exports.getQuestionById = handleErrors(async (questionId) => {
  const question = await Question.findById(questionId);
  return question;
});

exports.createQuestion = handleErrors(async (questionData) => {
  const question = new Question(questionData);
  await question.save();
  return question;
});

exports.updateQuestion = handleErrors(async (questionId, questionData) => {
  const question = await Question.findByIdAndUpdate(questionId, { $set: questionData }, { new: true });
  return question;
});

exports.removeQuestion = handleErrors(async (questionId) => {
  const question = await Question.findByIdAndRemove(questionId);
  return question;
});


exports.getQuestionsCounts = handleErrors(async () => {
  const questions = await Question.find().count();
  return questions;
});


module.exports = exports;
