// categoryController.js
const categoryService = require('../services/categoryServices');
const JoiValidationSchema = require('../utils/JoiValidationSchema');
const handleErrors = require('../utils/handleErrors');
const ResponseHelper = require('../utils/responseHelper');
const MSG = require('../utils/MSG');
const Question = require('../models/question');

exports.getAllCategories = handleErrors(async (req, res, next) => {
  const categories = await categoryService.getAllCategories();
  return res.status(200).json(ResponseHelper.success(200, MSG.FOUND_SUCCESS, categories));
});

exports.getCategory = handleErrors(async (req, res, next) => {
  const categoryId = req.params.categoryId;
  const category = await categoryService.getCategoryById(categoryId);

  if (!category) {
    return res.status(400).json(ResponseHelper.error(400, MSG.NOT_FOUND));
  }

  return res.status(200).json(ResponseHelper.success(200, MSG.FOUND_SUCCESS, category));
});

exports.createCategory = handleErrors(async (req, res, next) => {
  const { error } = JoiValidationSchema.createCategorySchema.validate(req.body);
  if (error) {
    return res.status(400).json(ResponseHelper.error(400, error.message));
  }
  
  const categoryData = {
    name: req.body.name,
    description: req.body.description,
  };

  const category = await categoryService.createCategory(categoryData);
  return res.status(200).json(ResponseHelper.success(200, MSG.CREATE_SUCCESS, category));
});

exports.updateCategory = handleErrors(async (req, res, next) => {
  const categoryId = req.params.categoryId;
  const { error } = JoiValidationSchema.updateCategorySchema.validate(req.body);
  if (error) {
    return res.status(400).json(ResponseHelper.error(400, error.message));
  }

  const categoryData = {
    name: req.body.name,
    description: req.body.description,
  };

  const updatedCategory = await categoryService.updateCategory(categoryId, categoryData);

  if (!updatedCategory) {
    return res.status(400).json(ResponseHelper.error(400, MSG.NOT_FOUND));
  }

  return res.status(200).json(ResponseHelper.success(200, MSG.UPDATED_SUCCESS, updatedCategory));
});


exports.removeCategory = handleErrors(async (req, res, next) => {
  const categoryId = req.params.categoryId;
  const category = await categoryService.getCategoryById(categoryId);

  if (!category) {
    return res.status(400).json(ResponseHelper.error(400, MSG.NOT_FOUND));
  }

  await categoryService.removeCategory(categoryId);
  return res.status(200).json(ResponseHelper.success(200, MSG.DELETE_SUCCESS));
});


