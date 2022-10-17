import React from "react";
import { Col, Row, Form } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCheckbox,
} from "mdb-react-ui-kit";

function Register() {
  const [name, setname] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [phone_number, setNumber] = useState("");
  const [address, setAddress] = useState("");
  const [email_address, setEmail] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [profile_pic, setProfilepic] = useState("");
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const UserData = {
    name,
    dob,
    gender,
    address,
    email_address,
    phone_number,
    username,
    password,
    profile_pic,
  };
  if (file) {
    const data = new FormData();
    const filename = Date.now() + file.name;
    data.append("name", filename);
    data.append("file", file);
    UserData.profile_pic = filename;
    try {
      axios.post("/upload", data);
    } catch (err) {}
  }

  function submitForm(e) {
    e.preventDefault();
      console.log(UserData);
      axios
        .post("http://localhost:8090/api/userAuth/register", UserData)
        .then(function (response) {
          console.log(response);
          setname("");
          setDob("");
          setGender("");
          setNumber("");
          setAddress("");
          setEmail("");
          setUserName("");
          setPassword("");
          setProfilepic("");
          swal({
            text: "Successfully Added !",
            icon: "success",
            button: "Okay!",
          }).then((result) => {
              navigate("/login");
          });
        })
        .catch(function (error) {
          console.log(error);
          swal({
            text: "Oops!Check And Retry!",
            icon: "error",
            button: "Okay!",
          });
        });
    
  }

  return (
    <MDBContainer
      fluid
      className="d-flex p-2 felx align-items-center justify-content-center bg-image"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1491841573634-28140fc7ced7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80)",
        width: "100vw",
        height: "100vh",
      }}
    >
      <MDBCard className="m-4" style={{ maxWidth: "1500px" }}>
        <MDBCardBody className="px-5">
          <h2 className="text-uppercase text-center mb-4">Register</h2>
          <Form onSubmit={submitForm}>
            <Form.Group as={Row} className="mb-2">
              <Form.Label column sm="3">
                Upload Image
              </Form.Label>
              <Col sm="7">
                <Form.Control
                  type="file"
                  id="fileInput"
                  onChange={(e) => setFile(e.target.files[0])}
                  required
                />
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-2"
              controlId="formPlaintextEmail"
            >
              <Form.Label column sm="3">
                Full Name
              </Form.Label>
              <Col sm="7">
                <Form.Control
                  type="text"
                  placeholder="Enter your full name "
                  value={name}
                  onChange={(e) => {
                    setname(e.target.value);
                  }}
                  required
                />
              </Col>
            </Form.Group>

            <Form>
              {["radio"].map((type) => (
                <div key={`inline-${type}`} className="mb-2">
                  <Form.Label
                    as="legend"
                    className="align-items-left "
                    column
                    sm={3}
                  >
                    Gender
                  </Form.Label>
                  <Form.Check
                    inline
                    label="Male"
                    name="group1"
                    type={type}
                    id={`inline-${type}-1`}
                    value="Male"
                    onChange={(e) => {
                      setGender(e.target.value);
                    }}
                  />
                  <Form.Check
                    inline
                    label="Female"
                    name="group1"
                    type={type}
                    id={`inline-${type}-2`}
                    value="Female"
                    onChange={(e) => {
                      setGender(e.target.value);
                    }}
                  />
                </div>
              ))}
            </Form>

            <Form.Group
              as={Row}
              className="mb-2"
              controlId="formPlaintextPassword"
            >
              <Form.Label column sm="3">
                Date Of Birth
              </Form.Label>
              <Col sm="7">
                <Form.Control
                  type="date"
                  value={dob}
                  onChange={(e) => {
                    setDob(e.target.value);
                  }}
                  required
                />
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-2"
              controlId="formPlaintextPassword"
            >
              <Form.Label column sm="3">
                Email Address
              </Form.Label>
              <Col sm="7">
                <Form.Control
                  type="Email"
                  placeholder="Enter your email address"
                  value={email_address}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-2"
              controlId="formPlaintextEmail"
            >
              <Form.Label column sm="3">
                Address
              </Form.Label>
              <Col sm="7">
                <Form.Control
                  type="textarea"
                  placeholder="Enter your address "
                  value={address}
                  onChange={(e) => {
                    setAddress(e.target.value);
                  }}
                  required
                />
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-2"
              controlId="formPlaintextPassword"
            >
              <Form.Label column sm="3">
                Phone Number
              </Form.Label>
              <Col sm="7">
                <Form.Control
                  type="tel"
                  placeholder="+94777123456"
                  maxLength="12"
                  value={phone_number}
                  onChange={(e) => {
                    setNumber(e.target.value);
                  }}
                  required
                />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-2"
              controlId="formPlaintextEmail"
            >
              <Form.Label column sm="3">
                Username
              </Form.Label>
              <Col sm="7">
                <Form.Control
                  type="text"
                  placeholder="Enter a username"
                  value={username}
                  onChange={(e) => {
                    setUserName(e.target.value);
                  }}
                  required
                />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-2"
              controlId="formPlaintextEmail"
            >
              <Form.Label column sm="3">
                Password
              </Form.Label>
              <Col sm="7">
                <Form.Control
                  type="password"
                  placeholder="Enter a password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  required
                />
              </Col>
            </Form.Group>

            <div className="d-flex flex-row justify-content-center mb-4">
              <MDBCheckbox
                name="flexCheck"
                id="flexCheckDefault"
                label="I agree all statements in Terms of service"
              />
            </div>
            <MDBBtn
              type="submit"
              className="mb-3 w-100 gradient-custom-4"
              size="lg"
            >
              Register
            </MDBBtn>
          </Form>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default Register;
