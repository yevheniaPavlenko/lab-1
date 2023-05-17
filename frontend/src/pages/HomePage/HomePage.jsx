import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./HomePage.css";

export const HomePage = ({ isAuth }) => {
  const [posts, setPosts] = useState([]);

  const getAllPosts = async () => {
    const response = await axios.get(
      "http://localhost:8000/api/posts/fetch-all-posts"
    );
    setPosts(response.data.posts);
  };

  useEffect(() => {
    getAllPosts();
    console.log(posts);
  }, []);

  return (
    <div className="home-posts">
      {posts &&
        posts.map((post) => (
          <div className="home-post" key={post._id}>
            <h3 className="home-posts-title">{post.title}</h3>
            <p className="home-posts-description">{post.description}</p>
            <p className="home-posts-body">{post.body}</p>
            <Link
              to={isAuth ? `/posts/${post._id}` : "/authorization"}
              className="home-leave-comment"
            >
              Leave a comment
            </Link>
          </div>
        ))}
    </div>
  );
};
