import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import axios from "axios";

import "./Profile.css";

export const Profile = ({ userData }) => {
  const navigate = useNavigate();

  const [isEditModeEnabled, setIsEditModeEnabled] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [website, setWebsite] = useState("");
  const [fullUserData, setFullUserData] = useState({});
  const changeUserData = () => {
    setIsEditModeEnabled(!isEditModeEnabled);
    if (isEditModeEnabled) {
      const response = axios.post("http://localhost:8000/api/profile/edit", {
        firstname: firstName || fullUserData.firstname,
        lastname: lastName || fullUserData.lastname,
        age: age || fullUserData.age,
        gender: gender || fullUserData.gender,
        address: address || fullUserData.address,
        website: website || fullUserData.website,
        id: userData.id,
      });
      navigate("/");
    }
  };
  const showData = async () => {
    const response = await axios.post(
      "http://localhost:8000/api/profile/show",
      {
        email: userData.email,
      }
    );
    setFullUserData(response.data.userData.user);
  };
  useEffect(() => {
    showData();
    if (fullUserData) {
      setFirstName(fullUserData.firstname);
      setLastName(fullUserData.lastname);
      setAge(fullUserData.age);
      setGender(fullUserData.gender);
      setAddress(fullUserData.address);
      setWebsite(fullUserData.website);
    }
    console.log(firstName);
  }, []);
  return (
    <div className="profile">
      <div className="profile-wrapper">
        <h2>Your Profile</h2>
        <div className="profile-read-only">
          <div className="profile-username">
            UserName: {userData.username || ""}
          </div>
          <div className="profile-email">Email: {userData.email || ""}</div>
        </div>
        <div className="profile-data">
          <div className="profile-data-fields">
            <div className="profile-firsname">
              Firsname: {fullUserData.firstname || "< >"}
            </div>
            <div className="profile-lastname">
              Lastname: {fullUserData.lastname || "< >"}
            </div>
            <div className="profile-age">Age: {fullUserData.age || "< >"}</div>
            <div className="profile-gender">
              Gender: {fullUserData.gender || "< >"}
            </div>
            <div className="profile-address">
              Address: {fullUserData.address || "< >"}
            </div>
            <div className="profile-website">
              Website: {fullUserData.website || "< >"}
            </div>
            <button className="profile-edit" onClick={changeUserData}>
              {isEditModeEnabled ? "Save" : "Edit profile"}
            </button>
          </div>
          {isEditModeEnabled && (
            <div className="profile-data-form">
              <form>
                <input
                  type="text"
                  placeholder="Firstname"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="LastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
                <input
                  type="number"
                  placeholder="Age"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Gender"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
                <input
                  type="url"
                  placeholder="Website"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                />
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
