import React from "react";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import { useRef } from "react";
import axios from "axios";
import "./login.css";
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from "mdb-react-ui-kit";
// import Logo from "../../images/Group 1.png";

function Login() {
  const userRef = useRef();
  const passwordRef = useRef();

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
      localStorage.setItem("accesstoken", res.data.accesstoken);
      alert("sucess");
    } catch (err) {
      alert("0000");
    }
  };
  return (
    <MDBContainer fluid>
      <MDBRow>
        <MDBCol sm="6">
          <div className="d-flex flex-row ps-8 pt-4">
            <img
              // src={Logo}
              alt="image"
              style={{ height: "75px", width: "75px" }}
            ></img>
            <MDBIcon fas icon="crow fa-3x me-4" style={{ color: "#709085" }} />
            <span className="h1 fw-bold mb-0">
              <strong>Welcome !</strong>
            </span>
          </div>

          <div className="d-flex flex-column justify-content-center  h-custom-2 w-75 pt-0">
            <h3
              className="fw-normal mb-3 ps-4 pb-3"
              style={{ letterSpacing: "2px" }}
            >
              Login
            </h3>

            <form className="loginForm" onSubmit={handleSubmit}>
              <div className="form group">
                <label for=""> Username </label>
                <input
                  type="text"
                  className="form-control"
                  id="formControlLg"
                  placeholder="Enter your username"
                  ref={userRef}
                />
              </div>
              <div className="form group">
                <label for=""> Password </label>
                <input
                  type="password"
                  className="form-control"
                  id="formControlLg"
                  placeholder="Enter your password"
                  ref={passwordRef}
                />
              </div>
              <p className="small mb-4 pb-lg-3 ms-5">
                <a className="text-mute" href="#!">
                  Forgot password?
                </a>
              </p>
              <input
                type="submit"
                value="Login"
                className="btn btn-primary btn-rounded"
                role="button"
                style={{ width: "100%" }}
              />
            </form>

            <p className="ms-5">
              Don't have an account?{" "}
              <a href="/register" className="link-primary">
                Register here
              </a>
            </p>
          </div>
        </MDBCol>

        <MDBCol sm="6" className="d-none d-sm-block px-0">
          <img
            src="https://images.unsplash.com/photo-1580537659466-0a9bfa916a54?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
            alt="Login image"
            className="w-100"
            style={{ objectFit: "cover", objectPosition: "left" }}
          />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Login;
