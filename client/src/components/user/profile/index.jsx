import React from "react";
import "./styles.css";
import TopNav from "../../components/topNav";
import SideNav from "../../components/sideNav";
import Profile from "../../components/profile/profile";


const UserProfile = () => {
  return (
    <div>
      <TopNav />
      <div className="layout">
        <SideNav />
        <Profile/>
      </div>
    </div>
  );
};

export default UserProfile;
