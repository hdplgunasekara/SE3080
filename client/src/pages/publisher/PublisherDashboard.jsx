import React from 'react'
import { Link } from 'react-router-dom'
import SideNav from '../../components/admin/sideNav'
import TopNav from '../../components/admin/topNav'
import AddPublisherModal from '../../components/modals/publishermodals/AddPublisherModal'


export default function PublisherDashboard() {
  return (
    <div>
     <TopNav/>
     <SideNav/>
     <br/><br/><br/>
     
            <div className="row text-center inline">
                <div className="col-md-2"></div>
                <div className="col-md-10 d-flex justify-content-center">

                    <AddPublisherModal/><br/>
                    <br></br>
                        <Link to="/viewpublisher" className="btn btn-primary btn-lg">
                            View All Publishers
                        </Link><br/><br/>
                </div>
            </div>
            <br/>
            {/* <div class="col-md-8 d-flex justify-content-center">
          <div className="col-md-4"><ReportModal/></div></div> */}
           
    </div>
  )
}
