import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const BASE_URL = 'http://localhost:8383';

const QuestionForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [question, setQuestion] = useState({ questionText: '', answer: '', difficulty: '', category: '' });
  const [categories, setCategories] = useState([]);
  
  useEffect(() => {
    // Fetch categories
    axios.get(`${BASE_URL}/api/categories`)
      .then(response => setCategories(response.data.data))
      .catch(error => console.error('Error fetching categories:', error));

    // Fetch question details if editing
    if (id) {
      axios.get(`${BASE_URL}/api/questions/${id}`)
        .then(response => setQuestion(response.data.data))
        .catch(error => console.error('Error fetching question details:', error));
    }
  }, [id]);

  const handleChange = (e) => {
    setQuestion({ ...question, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (id) {
        // Update existing question
        const response = await axios.put(`${BASE_URL}/api/questions/${id}`, question);
        console.log(response.data); // Log the response data
        navigate(`/questions/${id}`);
      } else {
        // Create new question
        const response = await axios.post(`${BASE_URL}/api/questions`, question);
        console.log(response.data); // Log the response data
      }
    } catch (error) {
      console.error('Error:', error);
      console.log('Response:', error.response); // Log the error response
    }
  };

  return (
    <div className="container mx-auto p-8 max-w-md bg-white rounded shadow-md ">
      <h1 className="text-3xl font-bold mb-6 text-center">{id ? 'Edit' : 'Create'} Question</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Question Text:</label>
          <input
            type="text"
            name="questionText"
            value={question.questionText}
            onChange={handleChange}
            className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Answer:</label>
          <textarea
            name="answer"
            value={question.answer}
            onChange={handleChange}
            className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Difficulty:</label>
          <select
            name="difficulty"
            value={question.difficulty}
            onChange={handleChange}
            className="form-select mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          >
            <option value="">Select Difficulty</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Category:</label>
          <select
            name="category"
            value={question.category}
            onChange={handleChange}
            className="form-select mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          >
            <option value="">Select Category</option>
            {categories.map(category => (
              <option key={category._id} value={category._id}>{category.name}</option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          {id ? 'Update' : 'Create'} Question
        </button>
      </form>
    </div>
  );
};

export default QuestionForm;
