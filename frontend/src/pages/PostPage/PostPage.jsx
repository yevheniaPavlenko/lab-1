import React, { useEffect, useState } from "react";
import { useHref, useNavigate } from "react-router-dom";

import "./PostPage.css";
import axios from "axios";

export const PostPage = ({ userData }) => {
  const url = useHref();
  const id = url.split("/").at(-1);
  const date = new Date().toLocaleString("en-US");
  const navigate = useNavigate();
  const [post, setPost] = useState([]);
  const [comment, setComment] = useState("");
  const fetchPost = async () => {
    const response = await axios.get(
      "http://localhost:8000/api/posts/fetch-post",
      {
        params: { params: id },
      }
    );
    setPost([response.data.post]);
  };
  useEffect(() => {
    fetchPost();
  }, []);

  const addComment = async () => {
    const response = await axios.post(
      "http://localhost:8000/api/posts/add-comment",
      {
        comment,
        postId: post[0]._id,
        userId: userData.id,
      }
    );
    setComment("");
    navigate("/");
  };
  return (
    <>
      <div className="home-posts">
        {post &&
          post.map((currentPost) => (
            <div className="home-post" key={currentPost._id}>
              <h3 className="home-posts-title">
                Comments for: "{currentPost.title}" post
              </h3>
            </div>
          ))}
      </div>
      <div className="add-comments">
        <input
          type="text"
          placeholder="Your comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button onClick={addComment}>Add comment</button>
      </div>
      <div className="comments-list">
        {post &&
          post.map((currentPost) => (
            <>
              {currentPost.comments.map((comment) => (
                <div className="comment" key={comment._id}>
                  <div>{comment.author}</div>
                  <div>{comment.comment}</div>
                  <div>{date}</div>
                </div>
              ))}
            </>
          ))}
      </div>
    </>
  );
};
