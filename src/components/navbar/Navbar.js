import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div >
      
      <div className="top-bar">
      <div>
      <a class="navbar-brand" href="/" style={{color:"black"}}><b>AppendIn</b></a>

        </div>
        <div>
        <nav class="navbar navbar-light bg-light">
  <form class="form-inline">
    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  </form>
</nav>
        </div>
        
        <div>
          <a  href="/">Register</a>/
          <a href="/">My Account</a>

        </div>

      </div>

      <div style={{backgroundColor:"#dcdcdc"}}> 
      <nav class="navbar navbar-expand-lg  container">

        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          {/* <span class="navbar-toggler-icon"></span> */}
          Menu
        </button>
        <div class="collapse navbar-collapse" style={{}} id="navbarNav">
          <ul class="navbar-nav nav-list">
            <li class="nav-item  ">
              <a class="nav-link" href="/" style={{fontWeight:"700",color:"#000000b0"}}>
                Home
              </a>
            </li>
            <li class="nav-item ">
              <a class="nav-link" href="/" style={{fontWeight:"700",color:"#000000b0"}}>
                Conect
              </a>
            </li>
            <li class="nav-item ">
              <a class="nav-link" href="/" style={{fontWeight:"700",color:"#000000b0"}}>
                Post
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/" style={{fontWeight:"700",color:"#000000b0"}}>
                Jobs
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/" style={{fontWeight:"700",color:"#000000b0"}}>
                Service
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="/" style={{fontWeight:"700",color:"#000000b0"}}>
                Course
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="/" style={{fontWeight:"700",color:"#000000b0"}}>
                ACCA
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="/" style={{fontWeight:"700",color:"#000000b0"}}>
                Abroad
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="/" style={{fontWeight:"700",color:"#000000b0"}}>
                Notification
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="/" style={{fontWeight:"700",color:"#000000b0"}}>
                Payment
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="/contact" style={{fontWeight:"700",color:"#000000b0"}}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    </div>
  );
};

export default Navbar;
