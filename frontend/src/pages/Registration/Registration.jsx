import React, { useState } from "react";

import axios from "axios";

import { useNavigate } from "react-router-dom";

import "./Registration.css";

export const Registration = ({ setIsAuth }) => {
  const navigate = useNavigate();

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const registration = async () => {
    const response = await axios.post(
      `http://localhost:8000/api/auth/registration`,
      {
        email,
        password,
        username: userName,
      }
    );
    alert("Successfully registered. You can auth now in login page");
  };
  return (
    <div className="registration">
      <div className="registration-container">
        <h2>Registration</h2>
        <div>
          <input
            type="text"
            placeholder="UserName:"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Email:"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password:"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Confirm password:"
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
          />
        </div>
        <button onClick={registration}>Register Now</button>
      </div>
    </div>
  );
};
