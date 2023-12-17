import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const BASE_URL = 'http://localhost:8383';

const QuestionList = () => {
  const [questions, setQuestions] = useState([]);
  const [counts, setCounts] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`${BASE_URL}/api/questions`)
      .then(response => {
        setQuestions(response.data.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching questions:', error);
        setLoading(false);
      });
    axios.get(`${BASE_URL}/api/questions/questions/count`)
      .then(response => {
        console.log(response)
        setCounts(Number(response.data.data.counts));
        setPercentage(response.data.data.percentageCompletion);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching questions:', error);
        setLoading(false);
      });
  }, []);

  const columns = [
    { id: 'index', label: 'Index', minWidth: 50 },
    { id: 'questionText', label: 'Question', minWidth: 200 },
    { id: 'details', label: 'Details', minWidth: 100 },
    { id: 'remove', label: 'Remove', minWidth: 100 },
  ];

  const createData = (index, questionText, questionId) => ({
    index,
    questionText,
    questionId,
  });

  const rows = questions.map((question, index) =>
    createData(index + 1, question.questionText, question._id)
  );

  const handleRemove = async (questionId) => {
    try {
      // Remove the question
      await axios.delete(`${BASE_URL}/api/questions/${questionId}`);
      // Update the state to reflect the removal
      setQuestions(questions.filter(question => question._id !== questionId));
    } catch (error) {
      console.error('Error removing question:', error);
    }
  };

  return (
    <div className='bg-gradient-to-r from-green-300 via-blue-500 to-purple-600'>
    <div className="container mx-auto p-6 ">
      <div className=' m-16 p-4 rounded-3xl shadow-md shadow-black/80 bg-gradient-to-r from-rose-700 to-pink-600'>
        <h1 className=' font-mono text-3xl font-semibold text-black'> Counts: {counts}</h1>
        <h1 className=' font-mono text-3xl font-semibold text-black'> Remaining: {50000-counts}</h1>
        <h1 className=' font-mono text-3xl font-semibold text-black'> Percantage: {percentage}</h1>
      </div>
      <h1 className="text-4xl font-bold mb-8 text-center ">Question List</h1>
      <div className="flex justify-center my-8 ">
        <Link
          to="/create"
          className="bg-gradient-to-r from-gray-700 via-gray-900 to-black text-white px-6 py-3 rounded-full hover:bg-blue-700"
        >
          Create New Question
        </Link>
      </div>
      {loading ? (
        <p className="text-center text-gray-600">Loading...</p>
      ) : (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell key={column.id} align="center" style={{ minWidth: column.minWidth }}>
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.index}>
                  <TableCell align="center">{row.index}</TableCell>
                  <TableCell align="center">{row.questionText}</TableCell>
                  <TableCell align="center">
                    <Link
                      to={`/questions/${row.questionId}`}
                      className="text-blue-500 hover:underline"
                    >
                      View Details
                    </Link>
                  </TableCell>
                  <TableCell align="center">
                    <button
                      onClick={() => handleRemove(row.questionId)}
                      className="text-red-500 hover:underline cursor-pointer"
                    >
                      Remove
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}

    
    </div>
    </div>

  );
};

export default QuestionList;
