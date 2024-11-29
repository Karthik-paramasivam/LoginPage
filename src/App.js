import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Pages/Login';
import Signup from './Pages/Signup'; 
import { HashRouter as Router, Route, Routes } from 'react-router-dom'; 



function App() {
  return (
<Router> 
      <Routes>
     
        <Route path="/" element={<Login />} /> 
        <Route path="/signup" element={<Signup />} /> 
      </Routes>
    </Router>
  );
}

export default App;
