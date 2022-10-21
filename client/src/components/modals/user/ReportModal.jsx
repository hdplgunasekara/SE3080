import React, { useRef } from "react";
import { Modal } from "react-bootstrap";
import { useReactToPrint } from "react-to-print";
import Button from "react-bootstrap/Button";
import { Col, Row, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";

export default function ReportModal(props) {
  const [user, setuser] = useState([]);
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  useEffect(() => {
    axios
      .get("http://localhost:8090/api/user/")
      .then((res) => {
        setuser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <>
      <Button className="btn btn-light" onClick={handleShow}>
        Generate
      </Button>

      <Modal show={show} size="xl" centered>
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">Report</Modal.Title>
        </Modal.Header>

        <Form>
          <Modal.Body>
          <div ref={componentRef} >
          <center><h2>All User Details</h2></center>
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
            </div>
            <br />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="danger" onClick={handlePrint}>
              Print Report
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}
