import { NavLink, useNavigate } from "react-router-dom";

import "./Header.css";

export const Header = ({ isAuth, setIsAuth }) => {
  const navigate = useNavigate();

  const logout = () => {
    setIsAuth(false);
    navigate("/");
  };
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <NavLink to="/">Lazorenko Blog</NavLink>
        </div>
        <div className="navbar">
          <ul className="list">
            {isAuth ? (
              <>
                <li className="item">
                  <NavLink to="/profile">Profile</NavLink>
                </li>
                <li className="item">
                  <NavLink to="/add-post">Add Post</NavLink>
                </li>
                <li className="item">
                  <button onClick={logout}>Log Out</button>
                </li>
              </>
            ) : (
              <>
                <li className="item">
                  <NavLink to="/registration">Registration</NavLink>
                </li>
                <li className="item">
                  <NavLink to="/authorization">Authorization</NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </header>
  );
};
