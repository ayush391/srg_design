import logo from './logo.svg';
import './App.css';
import DesignForm from './components/designForm';
import SignUpForm from './components/signUpForm';
import { Route, Link, BrowserRouter as Router, Routes } from 'react-router-dom'  

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<DesignForm></DesignForm>}></Route>
          <Route path='/signup' element={<SignUpForm></SignUpForm>}></Route>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
