/**
 * File Name: categoryRoutes.js
 */
const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/',  categoryController.getAllCategories);
router.get('/:categoryId',  categoryController.getCategory);
router.post('/',  categoryController.createCategory);
router.put('/:categoryId',  categoryController.updateCategory);
router.delete('/:categoryId',  categoryController.removeCategory);

module.exports = router;
