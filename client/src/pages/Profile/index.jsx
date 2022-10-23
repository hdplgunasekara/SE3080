import React from "react";
import "./styles.css";
import TopNav from "../../components/user/topNav";
import SideNav from "../../components/user/sideNav";
import Profile from "../../components/user/profile";

const UserProfile = () => {
  return (
    <div>
      <TopNav />
      <div className="layout">
        <SideNav />
        <Profile />
      </div>
    </div>
  );
};

export default UserProfile;
