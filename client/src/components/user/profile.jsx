import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { Col, Row, Form } from "react-bootstrap";
import { MDBCol } from "mdb-react-ui-kit";
import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

export default function Profile() {
  const [show, setShow] = useState(false);
  const [name, setname] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [phone_number, setNumber] = useState("");
  const [address, setAddress] = useState("");
  const [email_address, setEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8090/api/user/" + localStorage.getItem("id"))
      .then((response) => {
        if (response.data.length != 0) {
          setname(response.data["name"]);
          setDob(response.data["dob"]);
          setGender(response.data["gender"]);
          setNumber(response.data["phone_number"]);
          setAddress(response.data["address"]);
          setEmail(response.data["email_address"]);
          setShow("true");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function onDelete() {
    // console.log(studentData);
    axios
      .delete(
        `http://localhost:8090/api/user/deleteuser/` +
          localStorage.getItem("id")
      )
      .then(function (response) {
        // console.log(response);
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire("Deleted!", "Your file has been deleted.", navigate("/home"));
          }
        });
        setShow(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div>
      <div class="row">
        <div class="col-sm-3"></div>
        <div class="col-sm-9  ">
          <Form>
            <fieldset>
              <Form.Group as={Col} className="p-2 bd-highlight">
                <Col sm={7}>
                  <MDBCol lg="4" md="12" className="mb-4">
                    <img
                      src="https://cdn.pixabay.com/photo/2016/11/14/17/39/person-1824144_960_720.png"
                      className="img-fluid rounded"
                      alt=""
                    />
                  </MDBCol>
                </Col>
                <Col sm={7}></Col>
              </Form.Group>
            </fieldset>

            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextEmail"
            >
              <Form.Label column sm="2">
                Full Name
              </Form.Label>
              <Col sm="7">
                <Form.Control type="text" value={name} />
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextPassword"
            >
              <Form.Label column sm="2">
                Date of birth
              </Form.Label>
              <Col sm="5">
                <Form.Control type="text" value={dob} />
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextEmail"
            >
              <Form.Label column sm="2">
                Email Address
              </Form.Label>
              <Col sm="7">
                <Form.Control type="text" value={email_address} />
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextEmail"
            >
              <Form.Label column sm="2">
                Address
              </Form.Label>
              <Col sm="7">
                <Form.Control type="textarea" value={address} />
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextEmail"
            >
              <Form.Label column sm="2">
                Gender
              </Form.Label>
              <Col sm="7">
                <Form.Control type="textarea" value={gender} />
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextPassword"
            >
              <Form.Label column sm="2">
                Phone Number
              </Form.Label>
              <Col sm="7">
                <Form.Control type="text" value={phone_number} />
              </Col>
            </Form.Group>
            <Button onClick={onDelete}>Delete Account</Button>
          </Form>
        </div>
      </div>
    </div>
  );
}
