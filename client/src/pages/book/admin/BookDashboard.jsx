import React from "react";
import { Link } from "react-router-dom";
import AddBookModal from "../../../components/modals/bookmodals/AddBookModal";
import SideNav from '../../../components/admin/sideNav'
import TopNav from '../../../components/admin/topNav'

export default function BookDashboard() {
  return (
    <div>
        <TopNav/>
        <SideNav/>
      <br />
      <br />
      <br />

      <div className="row text-center inline">
        <div className="col-md-2"></div>
        <div className="col-md-10 d-flex justify-content-center">
          <AddBookModal />
          <br />
          <Link to="/viewbook" className="btn btn-primary btn-lg">
            View All Books
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
