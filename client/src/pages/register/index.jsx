import React from "react";
import { useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBRadio,
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
  };

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
          text: "Empty Fields Try Again!",
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
      <MDBRow className="justify-content-center align-items-center m-5">
        <MDBCard>
          <MDBCardBody className="px-4">
            <h3 className="fw-bold mb-4 pb-2 pb-md-0 mb-md-5">
              Registration Form
            </h3>

            <MDBRow>
              <MDBCol md="6">
                <MDBInput
                  wrapperClass="mb-4"
                  label="First Name"
                  size="lg"
                  id="form1"
                  type="text"
                  placeholder="Enter your full name "
                  value={name}
                  onChange={(e) => {
                    setname(e.target.value);
                  }}
                  required
                />
              </MDBCol>

              <MDBCol md="6">
                <MDBInput
                  wrapperClass="mb-4"
                  label="Date"
                  size="lg"
                  id="form4"
                  type="date"
                  value={dob}
                  onChange={(e) => {
                    setDob(e.target.value);
                  }}
                />
              </MDBCol>
            </MDBRow>

            <MDBRow>
              <MDBCol md="6">
                <MDBInput
                  wrapperClass="mb-4"
                  label="Enter Address"
                  size="lg"
                  id="form1"
                  type="text"
                  value={address}
                  onChange={(e) => {
                    setAddress(e.target.value);
                  }}
                  required
                />
              </MDBCol>

              <MDBCol md="6">
                <MDBInput
                  wrapperClass="mb-4"
                  label="Enter Email"
                  size="lg"
                  id="form4"
                  type="email"
                  value={email_address}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  required
                />
              </MDBCol>
            </MDBRow>

            <MDBRow>
              <MDBCol md="6">
                <MDBInput
                  wrapperClass="mb-4"
                  label="Phone Number"
                  size="lg"
                  id="form5"
                  type="tel"
                  placeholder="+94777123456"
                  maxLength="12"
                  value={phone_number}
                  onChange={(e) => {
                    setNumber(e.target.value);
                  }}
                  required
                />
              </MDBCol>

              <MDBCol md="6" className="mb-4">
                <h6 className="fw-bold">Gender: </h6>
                <MDBRadio
                  name="inlineRadio"
                  id="inlineRadio2"
                  value="Male"
                  label="Male"
                  inline
                  onChange={(e) => {
                    setGender(e.target.value);
                  }}
                  required
                />
                <MDBRadio
                  name="inlineRadio"
                  id="inlineRadio3"
                  value="Female"
                  label="Female"
                  inline
                  onChange={(e) => {
                    setGender(e.target.value);
                  }}
                  required
                />

              </MDBCol>
            </MDBRow>

            <MDBRow>
              <MDBCol md="6">
                <MDBInput
                  wrapperClass="mb-4"
                  label="Enter A Username"
                  size="lg"
                  id="form4"
                  type="text"
                  value={username}
                  onChange={(e) => {
                    setUserName(e.target.value);
                  }}
                  required
                />
              </MDBCol>
              <MDBCol md="6">
                <MDBInput
                  wrapperClass="mb-4"
                  label="Enter A Password"
                  size="lg"
                  id="form4"
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  required
                />
              </MDBCol>
            </MDBRow>

            <MDBBtn className="mb-4" size="lg" onClick={submitForm}>
              Submit
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBRow>
    </MDBContainer>
  );
}

export default Register;
