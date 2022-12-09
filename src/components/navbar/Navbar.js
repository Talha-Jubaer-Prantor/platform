import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <div className="top-bar">
        <div>
          <a className="navbar-brand" href="/" style={{ color: "black" }}>
            <b>AppendIn</b>
          </a>
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
          <a href="/">Register</a>/<a href="/">My Account</a>
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
                <a
                  className="nav-link"
                  href="/"
                  style={{ fontWeight: "700", color: "#000000b0" }}
                >
                  Home
                </a>
              </li>
              <li className="nav-item ">
                {/* <a className="nav-link" href="/" style={{fontWeight:"700",color:"#000000b0"}}>
                Conect
              </a> */}
                <div className="dropdown show">
                  <a
                    className="btn  dropdown-toggle"
                    href="/"
                    role="button"
                    id="dropdownMenuLink"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    style={{ fontWeight: "700", color: "#000000b0",boxShadow:"none" }}
                  >
                    Connect
                  </a>

                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuLink"
                  >
                    <a className="dropdown-item" href="/">
                      Director/Management
                    </a>
                    <a className="dropdown-item" href="/">
                      HR
                    </a>
                    <a className="dropdown-item" href="/">
                      Finance
                    </a>
                    <a className="dropdown-item" href="/">
                      Marketing
                    </a>
                    <a className="dropdown-item" href="/">
                      Sales
                    </a>
                    <a className="dropdown-item" href="/">
                      Supply Chain
                    </a>
                    <a className="dropdown-item" href="/">
                      Engineer
                    </a>
                    <a className="dropdown-item" href="/">
                      Doctor
                    </a>
                    <a className="dropdown-item" href="/">
                      Technical
                    </a>
                  </div>
                </div>
              </li>
              <li className="nav-item ">
                {/* <a
                  className="nav-link"
                  href="/"
                  style={{ fontWeight: "700", color: "#000000b0" }}
                >
                  Post
                </a> */}

                <div className="dropdown show">
                  <a
                    className="btn  dropdown-toggle"
                    href="/"
                    role="button"
                    id="dropdownMenuLink"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    style={{ fontWeight: "700", color: "#000000b0",boxShadow:"none" }}
                  >
                    Post
                  </a>

                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuLink"
                  >
                    <a className="dropdown-item" href="/">
                      Normal Post
                    </a>
                    <a className="dropdown-item" href="/">
                      Paid Promotion
                    </a>
                  </div>
                </div>


              </li>
              <li className="nav-item">
                {/* <a
                  className="nav-link"
                  href="/"
                  style={{ fontWeight: "700", color: "#000000b0" }}
                >
                  Jobs
                </a> */}

                <div className="dropdown show">
                  <a
                    className="btn  dropdown-toggle"
                    href="/"
                    role="button"
                    id="dropdownMenuLink"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    style={{ fontWeight: "700", color: "#000000b0",boxShadow:"none" }}
                  >
                    Jobs
                  </a>

                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuLink"
                  >
                    <a className="dropdown-item" href="/">
                      National
                    </a>
                    <a className="dropdown-item" href="/">
                      International
                    </a>
                    <a className="dropdown-item" href="/">
                      Multinational
                    </a>
                  </div>
                </div>


              </li>
              <li className="nav-item">
                {/* <a
                  className="nav-link"
                  href="/"
                  style={{ fontWeight: "700", color: "#000000b0" }}
                >
                  Service
                </a> */}

                <div className="dropdown show">
                  <a
                    className="btn  dropdown-toggle"
                    href="/"
                    role="button"
                    id="dropdownMenuLink"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    style={{ fontWeight: "700", color: "#000000b0",boxShadow:"none" }}
                  >
                    Services
                  </a>

                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuLink"
                  >
                    <a className="dropdown-item" href="/">
                      Company
                    </a>
                    <a className="dropdown-item" href="/">
                    Individual
                    </a>
                    <a className="dropdown-item" href="/">
                      SME
                    </a>
                  </div>
                </div>


              </li>
              <li className="nav-item">
                <a
                  className="nav-link "
                  href="/"
                  style={{ fontWeight: "700", color: "#000000b0" }}
                >
                  Course
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link "
                  href="/"
                  style={{ fontWeight: "700", color: "#000000b0" }}
                >
                  ACCA
                </a>
              </li>
              <li className="nav-item">
                {/* <a
                  className="nav-link "
                  href="/"
                  style={{ fontWeight: "700", color: "#000000b0" }}
                >
                  Abroad
                </a> */}
                <div className="dropdown show">
                  <a
                    className="btn  dropdown-toggle"
                    href="/"
                    role="button"
                    id="dropdownMenuLink"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    style={{ fontWeight: "700", color: "#000000b0",boxShadow:"none" }}
                  >
                    Abroad
                  </a>

                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuLink"
                  >
                    <a className="dropdown-item" href="/">
                    Undergraduate
                    </a>
                    <a className="dropdown-item" href="/">
                    Masters
                    </a>
                    <a className="dropdown-item" href="/">
                      PHD
                    </a>
                    <a className="dropdown-item" href="/">
                    Professionals
                    </a>
                    <a className="dropdown-item" href="/">
                    Working
                    </a>
                    <a className="dropdown-item" href="/">
                    Travel
                    </a>
                  </div>
                </div>


              </li>
              <li className="nav-item">
                <a
                  className="nav-link "
                  href="/"
                  style={{ fontWeight: "700", color: "#000000b0" }}
                >
                  Notification
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link "
                  href="/"
                  style={{ fontWeight: "700", color: "#000000b0" }}
                >
                  Payment
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link "
                  href="/contact"
                  style={{ fontWeight: "700", color: "#000000b0" }}
                >
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
