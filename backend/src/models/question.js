const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
  },
  difficulty: {
    type: String,
    enum: ['easy', 'medium', 'hard'],
    default: 'easy',
    required: true,
  },
  questionText: {
    type: String,
    required: true,
  },
  answer: {
    type: String, // The correct answer
    required: true,
  },
  examples: [
    {
      fileName: {
        type: String,
        default: null,
      },
      codeLines: {
        type:Buffer,
        required: true,
      },
    },
  ],  created_at: { type: Date, default: Date.now },
});

// Remove the 'options' and 'correctOption' fields

const Question = mongoose.model('Question', questionSchema);

module.exports = Question;