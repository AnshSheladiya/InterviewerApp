// questionServices.js
const Question = require('../models/question');
const handleErrors = require('../utils/handleErrors');


exports.getAllQuestions = handleErrors(async (categories) => {
  // Use aggregation to filter questions based on the category names
  let aggregationPipeline = [
    {
      $lookup: {
        from: 'categories', // Assuming the category collection name is 'categories'
        localField: 'category',
        foreignField: '_id',
        as: 'category',
      },
    },
    { $unwind: { path: "$category", preserveNullAndEmptyArrays: true } },
  ];

  // Add a $match stage only if categories are provided
  if (categories && Array.isArray(categories) && categories.length > 0) {
    aggregationPipeline.push({
      $match: {
        'category.name': { $in: categories },
      },
    });
  }else if(categories){
    aggregationPipeline.push({
      $match: {
        'category.name': categories
      },
    });
  }

  const questions = await Question.aggregate(aggregationPipeline);

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


exports.getQuestionsByCategories = async (categories) => {
  try {
    const questions = await Question.aggregate([
      {
        $match: {
          'category.name': { $in: categories },
        },
      },
      {
        $lookup: {
          from: 'categories', // Assuming the category model is named 'Category'
          localField: 'category',
          foreignField: '_id',
          as: 'categoryInfo',
        },
      },
      {
        $unwind: '$categoryInfo',
      },
      {
        $project: {
          _id: 1,
          category: '$categoryInfo',
          difficulty: 1,
          questionText: 1,
          answer: 1,
          examples: 1,
          __v: 1,
          created_at: 1,
        },
      },
    ]);

    return questions;
  } catch (error) {
    throw error;
  }
};
module.exports = exports;
