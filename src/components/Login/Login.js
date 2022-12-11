import React from "react";
import Navbar from "../navbar/Navbar"
import "./Login.css";

const Login = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="login-container">
        <div class="login-box">
          <h2>Login</h2>
          <form>
            <div class="user-box">
              <input type="text" name="" required="" />
              <label style={{ color: "white" }}>Email adress/Username</label>
            </div>
            <div class="user-box">
              <input type="password" name="" required="" />
              <label style={{ color: "white" }}>Password</label>
            </div>
            <a href="/">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Log in
            </a>
            <a href="/">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Create
            </a>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
