import React, { useState } from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";

import "./Authorization.css";

export const Authorization = ({ setIsAuth, setUserData }) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [changePasswordEmail, setChangePasswordEmail] = useState("");
  const [changePasswordNew, setChangePasswordNew] = useState("");
  const [isPasswordChangeActive, setPasswordChangeActive] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false);

  const authorization = async () => {
    const response = await axios.post("http://localhost:8000/api/auth/login", {
      email,
      password,
    });
    if (response.status === 200) {
      setIsAuth(true);
      navigate("/");
      setUserData({
        email: response.data.user.email,
        username: response.data.user.username,
        id: response.data.user.id,
      });
    }
  };

  const openChangePasswordForm = () => {
    setPasswordChangeActive(true);
  };

  const changePassword = async () => {
    const response = await axios.post(
      "http://localhost:8000/api/auth/change-password",
      { email: changePasswordEmail, password: changePasswordNew }
    );
    setPasswordChangeActive(false);
  };

  return (
    <div className="authorization">
      {!isPasswordChangeActive ? (
        <div className="authorization-container">
          <h2>Authorization</h2>
          <div>
            <input
              type="text"
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
          <button onClick={authorization}>Log In</button>
          <button className="change-password" onClick={openChangePasswordForm}>
            Change password
          </button>
        </div>
      ) : (
        <div className="authorization-container">
          <h2>Change password</h2>
          <div>
            <input
              type="text"
              placeholder="Email:"
              value={changePasswordEmail}
              onChange={(e) => setChangePasswordEmail(e.target.value)}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password:"
              value={changePasswordNew}
              onChange={(e) => setChangePasswordNew(e.target.value)}
            />
          </div>
          <button className="change-password" onClick={changePassword}>
            Update password
          </button>
        </div>
      )}
    </div>
  );
};
