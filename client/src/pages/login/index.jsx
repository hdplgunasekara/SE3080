import "mdb-react-ui-kit/dist/css/mdb.min.css";
import axios from "axios";
import React, { useRef } from "react";
import swal from "sweetalert";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput,
} from "mdb-react-ui-kit";

export default function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `http://localhost:8090/api/userAuth/login/`,
        {
          username: userRef.current.value,
          password: passwordRef.current.value,
        }
      );
      localStorage.setItem("id", res.data.id);
      swal({
        title: "Success!",
        text: "Login Successfull !",
        icon: "success",
        timer: 2000,
        button: false,
      });
      navigate("/dash", {
        state: {
          id: res.data._id,
        },
      });
    } catch (err) {
      console.log(err)
      swal({
        title: "Warning!",
        text: "Login Unsuccessfull !",
        icon: "error",
        timer: 2000,
        button: false,
      });
    }
  };
  return (
    <MDBContainer className="my-5">
      <MDBCard>
        <MDBRow className="g-0 d-flex align-items-center">
          <MDBCol md="4">
            <MDBCardImage
              src="https://images.unsplash.com/photo-1614849963640-9cc74b2a826f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
              alt="library"
              className="rounded-t-5 rounded-tr-lg-0"
              fluid
            />
          </MDBCol>

          <MDBCol md="8">
            <MDBCardBody>
              <h2>Login Now</h2>
              <br></br>
              <div className="regui">
              <div className="name">
                <label>Username</label>
                <input
                  type="text"
                  className="form-control"
                  id="formControlLg"
                  placeholder="Enter your username"
                  ref={userRef}
                ></input>
              </div>
              <div className="name">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="formControlLg"
                  placeholder="Enter your password"
                  ref={passwordRef}
                ></input>
              </div>
            </div>
              {/* <MDBInput
                wrapperClass="mb-4"
                label="Username"
                id="form1"
                type="text"
                refs={userRef}
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Password"
                id="form2"
                type="password"
                ref={passwordRef}
              /> */}
              <hr />
              <p className="bottm">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/register"
                >
                  Get Registered
                </Link>
              </p>

              <MDBBtn className="mb-4 w-100" onClick={handleSubmit}>
                Sign in
              </MDBBtn>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>
    </MDBContainer>
  );
}
