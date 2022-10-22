import Header from './components/Header';
import Footer from './components/Footer'; 
import HomePage from './pages/HomePage';
import MarketPlace from './pages/MarketPlace';
import CoursesPage from './pages/CoursesPage';
import RewardStudents from './pages/RewardStudents';
import { Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import './App.css';
import {Row, Col} from 'reactstrap';

function App() {
  return (
    <div className="App">
      <Header />
      <Row noGutters>
        <Col sm="2">
          <Sidebar />
        </Col>
        <Col>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='courses' element={<CoursesPage />} />
            <Route path='marketplace' element={<MarketPlace />} />
            <Route path='students' element={<RewardStudents />} />
          </Routes>     
        </Col>
      </Row>
      <Footer />
    </div>
  );
}

export default App;