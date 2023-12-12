import React, { useState } from 'react';
import { CopyBlock } from 'react-code-blocks';

const QuestionDetailsComponent = ({ question, onUpdate }) => {
    const [newFileName, setNewFileName] = useState('');
    const [newCode, setNewCode] = useState('');
    const [showUpdateSection, setShowUpdateSection] = useState(false);
  
    const handleUpdate = () => {
      onUpdate(newFileName, newCode);
      setNewFileName('');
      setNewCode('');
      setShowUpdateSection(false);
    };
  
  return (
    <div className="flex flex-col items-center max-w-xl mx-auto p-4  mt-32 bg-gray-100 border rounded-md shadow-md">
      <h2 className="text-xl font-bold mb-4">{question.questionText}</h2>
      <p className="text-gray-600 mb-2 text-xl"> {question.answer}</p>
    </div>
  );
};

export default QuestionDetailsComponent;