import React, { useRef } from "react";
import Button from "react-bootstrap/Button";
import { Modal } from "react-bootstrap";
import { Col, Row, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import swal from "sweetalert";

export default function SearchModal(props) {
  const [show, setShow] = useState(false);
  const [userid, setUserID] = useState([]);
  const [name, setname] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [phone_number, setNumber] = useState("");
  const [address, setAddress] = useState("");
  const [email_address, setEmail] = useState("");

  function nav() {
    window.location = "/userdash";
  }

  useEffect(() => {
    axios
      .get("http://localhost:8090/api/user/" + props.user)
      .then((response) => {
        if (response.data.length != 0) {
          setUserID(response.data["user_id"]);
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

  return (
    <>
      <Modal show={show} size="lg" centered>
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            User Details
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <fieldset>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextEmail"
              >
                <Col sm={2}>
                  <Form.Label>User ID:</Form.Label>
                </Col>
                <Col sm={10}>
                  <Form.Control type="text" value={userid} disabled />
                </Col>
              </Form.Group>
            </fieldset>

            <fieldset>
              <Form.Group
                as={Row}
                className="mb-3 "
                controlId="formPlaintextEmail"
              >
                <Col sm={2}>
                  <Form.Label>Name:</Form.Label>
                </Col>
                <Col sm={10}>
                  <Form.Control type="text" value={name} disabled />
                </Col>
              </Form.Group>
            </fieldset>

            <fieldset>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextEmail"
              >
                <Col sm={2}>
                  <Form.Label>Gender</Form.Label>
                </Col>
                <Col sm={10}>
                  <Form.Control type="text" value={gender} disabled />
                </Col>
              </Form.Group>
            </fieldset>

            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextPassword"
            >
              <Form.Label column sm="2">
                Date Of Birth
              </Form.Label>
              <Col sm="10">
                <Form.Control type="text" value={dob} disabled />
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
              <Col sm="10">
                <Form.Control type="text" value={phone_number} disabled />
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextEmail"
            >
              <Form.Label column sm="2">
                Email
              </Form.Label>
              <Col sm="10">
                <Form.Control type="text" value={email_address} disabled />
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
              <Col sm="10">
                <Form.Control type="text" value={address} disabled />
              </Col>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={nav}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
