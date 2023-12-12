// categoryServices.js
const Category = require('../models/category');
const handleErrors = require('../utils/handleErrors');

exports.getAllCategories = handleErrors(async () => {
  const categories = await Category.find();
  return categories;
});

exports.getCategoryById = handleErrors(async (categoryId) => {
  const category = await Category.findById(categoryId);
  return category;
});

exports.createCategory = handleErrors(async (categoryData) => {
  const category = new Category(categoryData);
  await category.save();
  return category;
});

exports.updateCategory = handleErrors(async (categoryId, categoryData) => {
  const category = await Category.findByIdAndUpdate(categoryId, { $set: categoryData }, { new: true });
  return category;
});

exports.removeCategory = handleErrors(async (categoryId) => {
  const category = await Category.findByIdAndRemove(categoryId);
  return category;
});
