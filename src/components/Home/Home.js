import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Chat from "../Chat/Chat";
import Navbar from "../navbar/Navbar";
import "./Home.css";
const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  console.log(posts);
  return (
    <div>
      <Navbar></Navbar>
      <div className="home-container">
        <div className="profile-sec">
          <div style={{ textAlign: "center" }}>
            <img
              className="profile-img"
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
              alt=""
            />
            <h4>MR. Name</h4>
            <br />
            <span style={{ lineHeight: "2", textAlign:"left" }}>
              <Link className="side-options"
                to="/professionaldashboard"
                style={{
                  textDecoration: "none",
                  borderBottom: "1px solid",
                }}
              >
              <i style={{textAlign:"center"}} class="fa-solid fa-list"></i>  Professional Dashboard
              </Link>
              <br />
              <Link className="side-options"
                to="/"
                style={{
                  textDecoration: "none",
                  borderBottom: "1px solid",
                }}
              >
               <i style={{textAlign:"center"}} class="fa-solid fa-thumbs-up"></i> Liked
              </Link>
              <br />
              <Link className="side-options"
                to="/"
                style={{
                  textDecoration: "none",
                  borderBottom: "1px solid",
                }}
              >
               <i style={{textAlign:"center"}} class="fa-solid fa-floppy-disk"></i> Saved
              </Link>
              <br />
              <Link className="side-options"
                to="/"
                style={{
                  textDecoration: "none",
                  borderBottom: "1px solid",
                }}
              >
               <i style={{textAlign:"center"}} class="fa-solid fa-calendar-days"></i> Event
              </Link>
              <br />
              <Link className="side-options"
                to="/"
                style={{
                  textDecoration: "none",
                  borderBottom: "1px solid",
                }}
              >
               <i style={{textAlign:"center"}} class="fa-solid fa-store"></i> Workshop
              </Link>
              <br />
              <Link className="side-options"
                to="/"
                style={{
                  textDecoration: "none",
                  borderBottom: "1px solid",
                }}
              >
               <i style={{textAlign:"center"}} class="fa-solid fa-person"></i> Explore People
              </Link>
              <br />
              <Link className="side-options"
                to="/"
                style={{
                  textDecoration: "none",
                  borderBottom: "1px solid",
                }}
              >
              <i style={{textAlign:"center"}} class="fa-solid fa-layer-group"></i> Groups
              </Link>
            </span>
          </div>
        </div>
        {/* Post Body */}
        <div className="post-sec">
          {posts.map((post) => (
            <div className="post-box">
              <img
                style={{ width: "50px", borderRadius: "50%" }}
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                alt=""
              />
              Name
              <br />
              <h5>{post.title}</h5>
              <p>{post.body}</p>
              <div className="like-comment-save">
                <span style={{marginRight:"5px",marginLeft:"5px",boxShadow:" 3px 3px 10px #00000099, -3px -3px 10px white",borderRadius:"5px"}}>Like</span>
                <span style={{marginRight:"5px",marginLeft:"5px",boxShadow:" 3px 3px 10px #00000099, -3px -3px 10px white",borderRadius:"5px"}}>Comment</span>
                <span style={{marginRight:"5px",marginLeft:"5px",boxShadow:" 3px 3px 10px #00000099, -3px -3px 10px white",borderRadius:"5px"}}>Save</span>
              </div>
            </div>
          ))}
        </div>
        <div className="chat-sec">
          {/* Chat box */}
          <div className="chat">
              <div className="chat-box">

                <Chat></Chat>

              </div>





          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
