import React, { useEffect, useState } from "react";
import axios from "axios";
import SideNav from "../../../components/admin/sideNav";
import TopNav from "../../../components/admin/topNav";

export default function ViewUsers() {
  const [user, setuser] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8090/api/user/")
      .then((res) => {
        setuser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <div>
      <TopNav />
      <SideNav />
      <br />

      <br />
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-8">
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">User ID</th>
                <th scope="col">Name</th>
                <th scope="col">DOB</th>
                <th scope="col">Email</th>
                <th scope="col">Gender</th>
                <th scope="col">Address</th>
                <th scope="col">Phone Number</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {
              user.map(us => 
                <tr key={us.user_id}>
                  <td>{us.user_id}</td>
                  <td>{us.name}</td>
                  <td>{us.dob}</td>
                  <td>{us.email_address}</td>
                  <td>{us.gender}</td>
                  <td>{us.address}</td>
                  <td>{us.phone_number}</td>
                </tr>
              )}
            </tbody>
          </table>
          <br />
        </div>
      </div>
    </div>
  );
}
