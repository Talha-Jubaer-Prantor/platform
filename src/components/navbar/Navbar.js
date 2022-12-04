import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div style={{backgroundColor:"purple"}}> 
      <nav class="navbar navbar-expand-lg navbar-light container">
        <a class="navbar-brand" href="/" style={{color:"white"}}> 
          Navbar
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" style={{paddingLeft:"70%"}} id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="/" style={{color:"white"}}>
                Conect
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/" style={{color:"white"}}>
                Jobs
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/" style={{color:"white"}}>
                Service
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="/" style={{color:"white"}}>
                Course
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="/" style={{color:"white"}}>
                Payment
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
