import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='overflow-hidden pb-4'>
      <NavBar></NavBar>
      <Home></Home>
      <Footer></Footer>
      </div>
    </Router>
    
      
      
    
  );
}

export default App;
