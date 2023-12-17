const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  subtype:{
    type: String,
  },
  created_at: { type: Date, default: Date.now },
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
