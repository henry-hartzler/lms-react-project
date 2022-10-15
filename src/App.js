import React from 'react';
import './App.css';
import MarketPlace from './pages/MarketPlace';
import CoursesPage from './pages/CoursesPage';
import RewardStudents from './pages/RewardStudents';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<h1>Welcome to home. Empty at the moment</h1>} />
        <Route path='rewards' element={<RewardStudents />} />
        <Route path='courses' element={<CoursesPage />} />
        <Route path='marketplace' element={<MarketPlace />} />
      </Routes>
      
    </div>
  );
}

export default App;