import React, { useRef } from "react";
import { Modal } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import swal from "sweetalert";

export default function SearchModal(props) {
  const [show, setShow] = useState(false);
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8090/api/user/" + props.user)
      .then((response) => {
        if (response.data.length != 0) {
          setUser(response.data);
          console.log(response.data);
        } else {
          swal({
            text: "No user available.PLease recheck  ",
            button: "Done!",
          }).then((value) => {
            window.location = "/";
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Modal.Header>
        <div class="col-md-12 text-center">
          <Modal.Title id="contained-modal-title-vcenter">
            Search Users
          </Modal.Title>
        </div>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <fieldset>
            <center>
              <h2>User Details</h2>
            </center>
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
                {user.map((us) => (
                  <tr key={us.user_id}>
                    <td>{us.user_id}</td>
                    <td>{us.name}</td>
                    <td>{us.dob}</td>
                    <td>{us.email_address}</td>
                    <td>{us.gender}</td>
                    <td>{us.address}</td>
                    <td>{us.phone_number}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </fieldset>
        </Form>
      </Modal.Body>
    </>
  );
}
