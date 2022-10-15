import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer'; 
import HomePage from './pages/HomePage';
import MarketPlace from './pages/MarketPlace';
import RewardStudents from './pages/RewardStudents';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path = '/' element={<HomePage />} />
        <Route path = 'marketplace' element={<MarketPlace />} />
        <Route path = 'rewardstudents' element={<RewardStudents />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;