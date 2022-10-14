import React from 'react';
import './App.css';
import CoursesPage from './pages/CoursesPage';
import RewardStudents from './pages/RewardStudents';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<h1>Welcome to home. Empty at the moment</h1>} />
        <Route path='rewards' element={<RewardStudents />} />
        <Route path='courses' element={<CoursesPage />} />
      </Routes>
      
    </div>
  );
}

export default App;