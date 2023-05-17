import React, { useState } from "react";

import axios from "axios";

import "./AddPost.css";

export const AddPost = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [body, setBody] = useState("");
  const [messageVisible, setMessageVisible] = useState("none");

  const addPost = async () => {
    await axios.post("http://localhost:8000/api/posts/add-post", {
      title,
      description,
      body,
    });
    setTitle("");
    setDescription("");
    setBody("");
    setMessageVisible("block");
    setTimeout(() => {
      setMessageVisible("none");
    }, 3000);
  };

  return (
    <div className="post">
      <div className="post-container">
        <h2>Your new post:</h2>
        <input
          type="text"
          placeholder="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <textarea
          placeholder="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <button onClick={addPost}>Add</button>
        <div
          style={{ display: messageVisible, color: "green", fontSize: "18px" }}
        >
          Post was successfully added!
        </div>
      </div>
    </div>
  );
};
