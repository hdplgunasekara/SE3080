import React, { useEffect, useState } from 'react'
import axios from'axios';
import SideNav from "../../../src/components/admin/sideNav";
import TopNav from '../../../src/components/admin/topNav';
import DelPublisherModal from '../../../src/components/modals/publishermodals/DelPublisherModal';
import UpdPublisherModal from '../../../src/components/modals/publishermodals/UpdPublisherModal';
import SearchReport from '../../components/publisher/admin/SearchPublisher';


export default function ViewPublishers() {

    const[publisher,setpublisher] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8090/api/publisher/').then(res=> {
            setpublisher(res.data);

        })
            .catch(err => {
                console.log(err);
            })
    })

  return (
    <div>
        <TopNav/>
        <SideNav/>
        <br />
            {/* <SearchExamModal/> */}
            {/* <SearchEs/> */}
            <br/>

   


            
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-8">
                    <SearchReport/>
                    <br/>
                    <table className="table">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">Company Name</th>
                                <th scope="col">Contact Person</th>
                                <th scope="col">Email</th>
                                <th scope="col">Contact Number</th>
                                <th scope="col">Address</th>

                                <th className="text-center" scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {publisher.map(pu=>
                            <tr key={pu._id}>
                                {/* <th scope="row">{x}</th> */}
                                <td>{pu.company_name}</td>
                                <td>{pu.contact_person}</td>
                                <td>{pu.email}</td>
                                <td>{pu.contact_number}</td>
                                <td>{pu.address}</td>
                                <td className="text-center">
                                    <UpdPublisherModal puid={pu._id}/>
                                    <DelPublisherModal puid={pu._id}/>
                                </td>
                            </tr>
                            )}
                        </tbody>
                    </table>
                    <br />
                    

                </div>
            </div>
    </div>
  )
}
