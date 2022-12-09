import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  // var swiper2 = new Swiper('.swiper2', {
  //     effect:"coverflow",
  //             direction: 'horizontal',
  //             loop: true,
  //             autoplay: {
  //             disableOnInteraction: false,
  //             pauseOnMouseEnter: true,
  //             },
  //             pagination: {
  //             el: ".swiper-pagination1",
  //             clickable:true,
  //             },
  //             coverflowEffect:{
  //                 slideShadows: false,
  //                 rotate:20,
  //                 scale:0.70,
  //             }

  //     });

  return (
    <div>
      <section>
        <div id="page">
          <div id="about" class="pageControl"></div>
          <div class="experince-container-fluid">
            <div class="container">
              <div class="section-box-container">
                <div class="experince-header">
                  <span class="experince-header-set">About me</span>
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
                      <a href="/" class="social-links">
                        <i class="margin fa-brands fa-github"></i>
                      </a>
                      <a href="/" class="social-links">
                        <i class="fa-brands fa-linkedin-in"></i>
                      </a>
                      <a href="/" class="social-links">
                        <i class="insta fa-brands fa-instagram"></i>
                      </a>
                      {/* <a href='/' class="social-links" href="https://open.spotify.com/user/21xbxidz623as32iw4r3u3uiq" target="_blank"><i class="fa-brands fa-spotify"></i></a> */}
                      <a href="/" class="social-links">
                        <i class="fa-brands fa-codepen"></i>
                      </a>
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
                      src="https://avatars.githubusercontent.com/u/77773407?v=4"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="comment-section-container">
              <div class="comment-section">
                
                {/* <marquee behavior="slide" direction="left">
                    <div className="marque-slide">
                        Lorem ipsum dolor, sit amet consectetur adip
                    </div>
                    <div className="marque-slide">
                        Lorem ipsum dolor, sit amet consectetur adip
                    </div>
                </marquee> */}

                
              </div>
            </div>
          </div>
        </div>
      </section>
      <script src="https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.js"></script>
      {/* <script> */}

      {/* </script> */}
    </div>
  );
};

export default AboutUs;
