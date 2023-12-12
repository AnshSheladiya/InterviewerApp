import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import QuestionDetailsComponent from './QuestionDetailsComponent';
const BASE_URL = 'http://localhost:8383';

const QuestionDetails = () => {
  const { id } = useParams();
  const [question, setQuestion] = useState(null);
  const [loading, setLoading] = useState(true);
  const [updateCollaps, setUpdateCollaps] = useState(false);

  useEffect(() => {
    axios.get(`${BASE_URL}/api/questions/${id}`)
      .then(response => {
        setQuestion(response.data.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching question details:', error);
        setLoading(false);
      });
  }, [id]);

  const handleUpdateExample = async (newFileName, newCode) => {
    // Update the example in your backend
    try {
      const response = await axios.put(`${BASE_URL}/api/questions/${id}/update-example`, {
        newFileName,
        newCode,
      });

      // Update the state if needed
      setQuestion(response.data.data);
    } catch (error) {
      console.error('Error updating example:', error);
    }
  };

  return (
    <div className='bg-gradient-to-r from-gray-700 via-gray-900 to-black h-screen flex justify-center'>
    <div className="container mx-auto p-4 ">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className='flex flex-col items-center'>
          <h1 className="text-3xl font-bold mb-6 text-white mt-20">Question Details</h1>
          {question && (
            <>
              <QuestionDetailsComponent question={question} onUpdate={handleUpdateExample} />
            </>
          )}
        </div>
      )}
    </div>
    </div>

  );
};

export default QuestionDetails;
