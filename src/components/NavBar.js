import React from "react";
// import {NavLink} from "react-router-dom"
import Login from "./LogIn";
import Logout from "./LogOut";

function NavBar(){
  
  return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid" style={{fontSize:"30px", paddingLeft:"20px"}}>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav" >
      <ul className="navbar-nav">
        <li className="nav-item">
          <Logout />
          {/* <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink> */}
        </li>
        {/* <li className="nav-item">
          <NavLink className="nav-link" to="/signup" >Sign Up</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/login" >Log In</NavLink>
        </li> */}
        <Login />
      </ul>
    </div>
  </div>
</nav>
  )
}

export default NavBar;