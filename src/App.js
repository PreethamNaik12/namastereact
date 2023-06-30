import logo from './logo.svg';
import './App.css';
import Home from './Home';
import About from './About';
import Signup from './Signup';
import Login from './Login';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    
    <Router>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
