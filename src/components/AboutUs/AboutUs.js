import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import "./AboutUs.css";

const AboutUs = () => {
  

  return (
    <div>
      <Navbar></Navbar>
      <section>
        <div id="page">
          <div id="about" class="pageControl"></div>
          <div class="experince-container-fluid">
            <div class="container">
              <div class="section-box-container">
                <div class="experince-header">
                  <span class="experince-header-set">About Us</span>
                </div>
                <div class="about-container">
                  <div class="about-me-section">
                    <div class="about-text">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Ut, odit voluptatem fugiat voluptas dolores eveniet
                      voluptatibus perferendis quasi asperiores voluptatum
                      ducimus tenetur nam sint quos?.about-textut vero
                      recusandae quidem culpa facilis architecto consequuntur
                      perferendis harum modi, similique iure nobis maxime ipsam
                      temporibus nostrum adipisci! Vel sapiente perspiciatis
                      ipsa distinctio.
                    </div>
                    <div class="about-text">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Ut, odit voluptatem fugiat voluptas dolores eveniet
                      voluptatibus perferendis quasi asperiores voluptatum
                      ducimus tenetur nam sint quos?
                    </div>
                    <div class="about-text">
                      voluptatibus perferendis quasi asperiores voluptatum
                      ducimus tenetur nam sint quos?
                      <div style={{ color: "#bfc0c4" }} class="about-text">
                        Social
                      </div>
                    </div>
                    <div class="skills-bar-about">
                      <Link to="/" class="social-links">
                        <i class="margin fa-brands fa-github"></i>
                      </Link>
                      <Link to="/" class="social-links">
                        <i class="fa-brands fa-linkedin-in"></i>
                      </Link>
                      <Link to="/" class="social-links">
                        <i class="insta fa-brands fa-instagram"></i>
                      </Link>
                      <Link to="/" class="social-links">
                        <i class="fa-brands fa-codepen"></i>
                      </Link>
                    </div>
                    <div style={{ color: "#bfc0c4" }} class="about-text">
                      My interests
                    </div>
                    <div class="skills-bar-about">
                      <i class="fa-brands fa-html5" title="HTML"></i>
                      <i class="fa-brands fa-css3-alt" title="CSS"></i>
                      <i class="fa-brands fa-bootstrap" title="Bootstrap"></i>
                      <i class="fa-brands fa-sass" title="Sass"></i>
                      <i class="fa-brands fa-js" title="JavaScript"></i>
                      <i class="fa-brands fa-react" title="React"></i>
                    </div>
                  </div>
                  <div class="img-section">
                    <img
                      // src="https://avatars.githubusercontent.com/u/77773407?v=4"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="comment-section-container">
              <div class="comment-section">
                
                


                
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default AboutUs;
