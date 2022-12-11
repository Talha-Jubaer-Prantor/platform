import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <div className="top-bar">
        <div>
          <Link className="navbar-brand" to="/" style={{ color: "black" }}>
            <b>AppendIn</b>
          </Link>
        </div>
        <div>
          <nav className="navbar navbar-light bg-light">
            <form className="form-inline">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </nav>
        </div>

        <div>
            <Link to="/">
            <i style={{fontSize:"25px"}} class="fa-solid fa-bell"></i>
            </Link>
        </div>
        <div>
            <Link to="/register" style={{color:"black"}}>Register</Link>/<Link style={{color:"black"}} to="/login">My Account</Link>

        </div>
      </div>

      <div style={{ backgroundColor: "#dcdcdc" }}>
        <nav className="navbar navbar-expand-lg  container">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            {/* <span className="navbar-toggler-icon"></span> */}
            Menu
          </button>
          <div className="collapse navbar-collapse" style={{}} id="navbarNav">
            <ul className="navbar-nav nav-list">
              <li className="nav-item  ">
                <Link
                  className="nav-link"
                  to="/"
                  style={{ fontWeight: "700", color: "#000000b0" }}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item ">
                {/* <Link className="nav-link" to="/" style={{fontWeight:"700",color:"#000000b0"}}>
                Conect
              </Link> */}
                <div className="dropdown show">
                  <Link
                    className="btn  dropdown-toggle"
                    to="/"
                    role="button"
                    id="dropdownMenuLink"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    style={{ fontWeight: "700", color: "#000000b0",boxShadow:"none",paddingBottom:"9px" }}
                  >
                    Connect
                  </Link>

                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuLink"
                    style={{backgroundColor:"white"}}
                  >
                    <Link className="dropdown-item" to="/">
                      Director/Management
                    </Link>
                    <Link className="dropdown-item" to="/">
                      HR
                    </Link>
                    <Link className="dropdown-item" to="/">
                      Finance
                    </Link>
                    <Link className="dropdown-item" to="/">
                      Marketing
                    </Link>
                    <Link className="dropdown-item" to="/">
                      Sales
                    </Link>
                    <Link className="dropdown-item" to="/">
                      Supply Chain
                    </Link>
                    <Link className="dropdown-item" to="/">
                      Engineer
                    </Link>
                    <Link className="dropdown-item" to="/">
                      Doctor
                    </Link>
                    <Link className="dropdown-item" to="/">
                      Technical
                    </Link>
                  </div>
                </div>
              </li>
              <li className="nav-item ">
                {/* <Link
                  className="nav-link"
                  to="/"
                  style={{ fontWeight: "700", color: "#000000b0" }}
                >
                  Post
                </Link> */}

                <div className="dropdown show">
                  <Link
                    className="btn  dropdown-toggle"
                    to="/"
                    role="button"
                    id="dropdownMenuLink"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    style={{ fontWeight: "700", color: "#000000b0",boxShadow:"none",paddingBottom:"9px"  }}
                  >
                    Post
                  </Link>

                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuLink"
                    style={{backgroundColor:"white"}}
                  >
                    <Link className="dropdown-item" to="/">
                      Normal Post
                    </Link>
                    <Link className="dropdown-item" to="/">
                      Paid Promotion
                    </Link>
                  </div>
                </div>


              </li>
              <li className="nav-item">
                {/* <Link
                  className="nav-link"
                  to="/"
                  style={{ fontWeight: "700", color: "#000000b0" }}
                >
                  Jobs
                </Link> */}

                <div className="dropdown show">
                  <Link
                    className="btn  dropdown-toggle"
                    to="/"
                    role="button"
                    id="dropdownMenuLink"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    style={{ fontWeight: "700", color: "#000000b0",boxShadow:"none",paddingBottom:"9px"  }}
                  >
                    Jobs
                  </Link>

                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuLink"
                    style={{backgroundColor:"white"}}

                  >
                    <Link className="dropdown-item" to="/">
                      National
                    </Link>
                    <Link className="dropdown-item" to="/">
                      International
                    </Link>
                    <Link className="dropdown-item" to="/">
                      Multinational
                    </Link>
                  </div>
                </div>


              </li>
              <li className="nav-item">
                {/* <Link
                  className="nav-link"
                  to="/"
                  style={{ fontWeight: "700", color: "#000000b0" }}
                >
                  Service
                </Link> */}

                <div className="dropdown show">
                  <Link
                    className="btn  dropdown-toggle"
                    to="/"
                    role="button"
                    id="dropdownMenuLink"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    style={{ fontWeight: "700", color: "#000000b0",boxShadow:"none",paddingBottom:"9px"  }}
                  >
                    Services
                  </Link>

                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuLink"
                    style={{backgroundColor:"white"}}

                  >
                    <Link className="dropdown-item" to="/">
                      Company
                    </Link>
                    <Link className="dropdown-item" to="/">
                    Individual
                    </Link>
                    <Link className="dropdown-item" to="/">
                      SME
                    </Link>
                  </div>
                </div>


              </li>
              <li className="nav-item">
                <Link
                  className="nav-link "
                  to="/"
                  style={{ fontWeight: "700", color: "#000000b0" }}
                >
                  Course
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link "
                  to="/"
                  style={{ fontWeight: "700", color: "#000000b0" }}
                >
                  Aptitude
                </Link>
              </li>
              <li className="nav-item">
                {/* <Link
                  className="nav-link "
                  to="/"
                  style={{ fontWeight: "700", color: "#000000b0" }}
                >
                  Abroad
                </Link> */}
                <div className="dropdown show">
                  <Link
                    className="btn  dropdown-toggle"
                    to="/"
                    role="button"
                    id="dropdownMenuLink"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    style={{ fontWeight: "700", color: "#000000b0",boxShadow:"none",paddingBottom:"9px"  }}
                  >
                    Abroad
                  </Link>

                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuLink"
                    style={{backgroundColor:"white"}}

                  >
                    <Link className="dropdown-item" to="/">
                    Undergraduate
                    </Link>
                    <Link className="dropdown-item" to="/">
                    Masters
                    </Link>
                    <Link className="dropdown-item" to="/">
                      PHD
                    </Link>
                    <Link className="dropdown-item" to="/">
                    Professionals
                    </Link>
                    <Link className="dropdown-item" to="/">
                    Working
                    </Link>
                    <Link className="dropdown-item" to="/">
                    Travel
                    </Link>
                  </div>
                </div>


              </li>
              <li className="nav-item">
                <Link
                  className="nav-link "
                  to="/"
                  style={{ fontWeight: "700", color: "#000000b0" }}
                >
                  Payment
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link "
                  to="/contact"
                  style={{ fontWeight: "700", color: "#000000b0" }}
                >
                  Contact
                </Link>
              </li>
              <li className="nav-item  ">
                <Link
                  className="nav-link"
                  to="/aboutus"
                  style={{ fontWeight: "700", color: "#000000b0" }}
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
