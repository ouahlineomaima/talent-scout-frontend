import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Footer from './components/Footer';
import Register from './pages/Register';
import Login from './pages/Login';
import Recruitments from './pages/Recruitments';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from './context/AuthContext';
import Profile from './pages/Profile';
import RecruitmentDetails from './pages/RecruitmentDetails';
import ApplicantDetails from './pages/ApplicantDetails';

function App() {
  
  
  
  
  
  
  return (
    <Router>
      <div className='overflow-hidden pb-4'>
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/recruitments" element={<Recruitments />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/recruitments/:id" element={<RecruitmentDetails />} />
          <Route path="/applicants/:id" element={<ApplicantDetails />} />
        </Routes>

        <Footer></Footer>
      </div>
    </Router>




  );
}

export default App;
