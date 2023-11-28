import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <NavBar></NavBar>
      <Home></Home>
    </Router>
    
      
      
    
  );
}

export default App;
