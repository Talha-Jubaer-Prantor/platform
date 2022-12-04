import React, { useState } from "react";
import { useEffect } from "react";
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
            <h3>MR. Name</h3>
            <br />
            <span style={{ lineHeight: "2" }}>
              <a
                href="/"
                style={{
                  textDecoration: "none",
                  color: "purple",
                  borderBottom: "1px solid",
                }}
              >
                Professional Dashboard
              </a>
              <br />
              <a
                href="/"
                style={{
                  textDecoration: "none",
                  color: "purple",
                  borderBottom: "1px solid",
                }}
              >
                Liked
              </a>
              <br />
              <a
                href="/"
                style={{
                  textDecoration: "none",
                  color: "purple",
                  borderBottom: "1px solid",
                }}
              >
                Saved
              </a>
              <br />
              <a
                href="/"
                style={{
                  textDecoration: "none",
                  color: "purple",
                  borderBottom: "1px solid",
                }}
              >
                Event
              </a>
              <br />
              <a
                href="/"
                style={{
                  textDecoration: "none",
                  color: "purple",
                  borderBottom: "1px solid",
                }}
              >
                Workshop
              </a>
              <br />
              <a
                href="/"
                style={{
                  textDecoration: "none",
                  color: "purple",
                  borderBottom: "1px solid",
                }}
              >
                Explore People
              </a>
              <br />
              <a
                href="/"
                style={{
                  textDecoration: "none",
                  color: "purple",
                  borderBottom: "1px solid",
                }}
              >
                Groups
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
          <div className="chat"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
