import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer'; 
import HomePage from './pages/HomePage';
import MarketPlace from './pages/MarketPlace';
import CoursesPage from './pages/CoursesPage';
import RewardStudents from './pages/RewardStudents';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path = '/' element={<HomePage />} />
        <Route path='courses' element={<CoursesPage />} />
        <Route path = 'marketplace' element={<MarketPlace />} />
        <Route path = 'rewardstudents' element={<RewardStudents />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;