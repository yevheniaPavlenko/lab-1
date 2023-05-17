import { useState } from "react";

import { Route, Routes } from "react-router-dom";

import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";

import { Registration } from "../../pages/Registration/Registration";
import { Authorization } from "../../pages/Authorization/Authorization";
import { AddPost } from "../../pages/AddPost/AddPost";
import { HomePage } from "../../pages/HomePage/HomePage";
import { Profile } from "../../pages/Profile/Profile";
import { PostPage } from "../../pages/PostPage/PostPage";

import "./App.css";

export const App = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [userData, setUserData] = useState({
    email: "",
    passoword: "",
    id: "",
  });
  return (
    <div className="wrapper">
      <Header isAuth={isAuth} setIsAuth={setIsAuth} />
      <main className="main">
        <Routes>
          <Route path="/" element={<HomePage isAuth={isAuth} />} />
          <Route
            path="profile"
            element={<Profile userData={userData} setUserData={setUserData} />}
          />
          <Route path="add-post" element={<AddPost />} />
          <Route
            path="registration"
            element={<Registration setIsAuth={setIsAuth} />}
          />
          <Route
            path="authorization"
            element={
              <Authorization setIsAuth={setIsAuth} setUserData={setUserData} />
            }
          />
          <Route path="/posts/:id" element={<PostPage userData={userData} />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};
