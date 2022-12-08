import './App.css';
// import NavBar from './components/NavBar';
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import HomePage from './components/HomePage';
import React from 'react';
import LogIn from './components/LogIn';
import Apartments from './components/Apartment';
// import { BrowserRouter, Route, Routes } from "react-router-dom";
import Tenant from './components/Tenant';
import Logout from './components/LogOut';


function App() {
  
 
  return (
    <div className="App">
     <BrowserRouter>
     <Logout />
      <Routes>
        <Route path='/' element={<LogIn />} />
        <Route path='/tenant' element={<Tenant />} />
        <Route path='/apartment' element={<Apartments />} />

      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
