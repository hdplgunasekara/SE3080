import React from "react";
import  "../Dashboard/styles.css";

import TopNav from "../../../components/user/topNav";
import SideNav from "../../../components/user/sideNav";
import Dashboard from "../../../components/user/dashBoard";

const UserDashboard = ()=>{

    return(
        <div>
        <TopNav/>
        <div className="layout">
        <SideNav/>
        <Dashboard/>


        </div>
        </div>
    )
}

export default UserDashboard;