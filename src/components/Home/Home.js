import React, { useState } from "react";
import { useEffect } from "react";
import Chat from "../Chat/Chat";
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
              <a className="side-options"
                href="/"
                style={{
                  textDecoration: "none",
                  borderBottom: "1px solid",
                }}
              >
              <i style={{textAlign:"center"}} class="fa-solid fa-list"></i>  Professional Dashboard
              </a>
              <br />
              <a className="side-options"
                href="/"
                style={{
                  textDecoration: "none",
                  borderBottom: "1px solid",
                }}
              >
               <i style={{textAlign:"center"}} class="fa-solid fa-thumbs-up"></i> Liked
              </a>
              <br />
              <a className="side-options"
                href="/"
                style={{
                  textDecoration: "none",
                  borderBottom: "1px solid",
                }}
              >
               <i style={{textAlign:"center"}} class="fa-solid fa-floppy-disk"></i> Saved
              </a>
              <br />
              <a className="side-options"
                href="/"
                style={{
                  textDecoration: "none",
                  borderBottom: "1px solid",
                }}
              >
               <i style={{textAlign:"center"}} class="fa-solid fa-calendar-days"></i> Event
              </a>
              <br />
              <a className="side-options"
                href="/"
                style={{
                  textDecoration: "none",
                  borderBottom: "1px solid",
                }}
              >
               <i style={{textAlign:"center"}} class="fa-solid fa-store"></i> Workshop
              </a>
              <br />
              <a className="side-options"
                href="/"
                style={{
                  textDecoration: "none",
                  borderBottom: "1px solid",
                }}
              >
               <i style={{textAlign:"center"}} class="fa-solid fa-person"></i> Explore People
              </a>
              <br />
              <a className="side-options"
                href="/"
                style={{
                  textDecoration: "none",
                  borderBottom: "1px solid",
                }}
              >
              <i style={{textAlign:"center"}} class="fa-solid fa-layer-group"></i> Groups
              </a>
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
                <span style={{borderRight:"1px solid purple"}}>Like</span>
                <span style={{borderRight:"1px solid purple"}}>Comment</span>
                <span>Save</span>
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
