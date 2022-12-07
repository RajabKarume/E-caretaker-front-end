import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './components/HomePage';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage/>} />
        {/* <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<LogIn />} /> */}
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
