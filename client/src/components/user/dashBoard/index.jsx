import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import '../dashBoard/styles.css'



const Dashboard= ()=>{
 
return(
<>
     
<div className="container-fluid row-user">
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-8">
                    <div className="row">
                            <div className="col-md-3 col-sm-6 col-xs-12">
                                <div className="mini-stat clearfix bg-books rounded">
                                    <div className="mini-stat-info">
                                        <span>5,762</span>
                                        <div className="boxtext">Books</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 col-xs-12">
                                <div className="mini-stat clearfix bg-members rounded">
                                    <div className="mini-stat-info">
                                        <span>7,153</span>
                                        <div className="boxtext">Members</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 col-xs-12">
                                <div className="mini-stat clearfix bg-articles rounded">
                                    <div className="mini-stat-info">
                                        <span>793</span>
                                        <div className="boxtext">Articles</div>
                                    </div>
                                </div>
                            </div>    
                        </div>
                    </div>
                    

                   
                   
                </div>
            </div>

            </>
    )
}

export default Dashboard;