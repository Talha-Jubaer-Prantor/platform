import React from 'react';
import image from "../../img/signup-background.png"; 
import Navbar from '../navbar/Navbar';
import "./SignUp.css"

const SignUp = () => {
    return (
        <div>
            <Navbar></Navbar>
<div className='signup-container' >
      <div id="container">
         <header>Register new account</header>
         <form method="post">
            <fieldset>
               <br/>
               <input type="text" name="username" id="username" placeholder="Username" required autofocus/>
               <br/><br/>
               <input type="email" name="email" id="email" placeholder="E-mail" required/>
               <br/><br/>
               <input type="password" name="password" id="password" placeholder="Password" required/>
               <br/><br/>
               <input type="password" name="confirm-password" id="confirm-password" placeholder="Confirm Password" required/>
               <br/> <br/> <br/>
               <label for="submit"></label>
               <input type="submit" name="submit" id="submit" value="REGISTER"/>
            </fieldset>
         </form>
      </div>
        </div>
        </div>
    );
};

export default SignUp;