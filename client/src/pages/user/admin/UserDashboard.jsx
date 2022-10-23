import React from "react";
import { Link } from "react-router-dom";
import SideNav from "../../../components/admin/sideNav";
import TopNav from "../../../components/admin/topNav";
import Search from "../../../components/user/admin/Search";

export default function UserDashboard() {
  return (
    <div>
      <TopNav />
      <SideNav />
      <br />
      <br />
      <br />

      <div className="row text-center inline">
        <div className="col-md-2"></div>

        <Search />
        <br />
        <br />

        <div className="col-md-2"></div>
        <div className="col-md-9 d-flex justify-content-center">
          <Link to="/viewuser" className="btn btn-primary btn-lg">
            View All Users
          </Link>
          <br />
          <br />
        </div>
      </div>
      <br />
      {/* <div class="col-md-8 d-flex justify-content-center">
          <div className="col-md-4"><ReportModal/></div></div> */}
    </div>
  );
}
