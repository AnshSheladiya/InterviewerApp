import React from 'react';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import QuestionList from './components/QuestionList';
import QuestionDetails from './components/QuestionDetails';
import QuestionForm from './components/QuestionForm';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route index element={<QuestionList />} />
          <Route path="/questions/:id" element={<QuestionDetails />} />
          <Route path="/create" element={<QuestionForm />} />
          <Route path="/edit/:id" element={<QuestionForm />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
