import React from 'react'
import { Link } from 'react-router-dom'
import TopNav from '../../components/admin/topNav'
import SideNav from '../../components/admin/sideNav'
import BookReportModal from '../../components/modals/bookmodals/BookReportModal'

import PublisherReportModal from '../../components/modals/publishermodals/PublisherReportModal'

import ArticleReportModal from '../../components/modals/articlemodals/articleReportModel'


export default function Dashboard() {
  return (
    <div>
        <TopNav/>
        <SideNav/>
            <br/><br/>

            <div className="container-fluid ">
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
                    

                    <div className="row">
                        <div className="col-md-4"></div>
                        <div className="col-md-3 rounded dashbook">
                        <p style={{fontSize: "20px"}}>Books</p>  
                            <BookReportModal/>
                        </div>
                        {/* <div className="col-md-1"></div> */}
                        <div className="col-md-3 rounded dashpublisher">
                        <p style={{fontSize: "20px"}}>Publishers</p> 
                            <PublisherReportModal/>
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-4"></div>
                        <div className="col-md-3 rounded dasharticle">
                        <p style={{fontSize: "20px"}}>Articles</p> 
                          <ArticleReportModal/>
                        </div>
                        {/* <div className="col-md-1"></div> */}
                        <div className="col-md-3 rounded dashmember">
                        <p style={{fontSize: "20px"}}>Members</p> 
                            <button className="btn btn-light btn-sm">Generate</button>
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                </div>
            </div>
    </div>
  )
}
