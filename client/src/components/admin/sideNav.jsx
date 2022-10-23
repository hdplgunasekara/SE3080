import React from "react";
import "../../assets/css/style.css";
import propic from "../../assets/images/propic.png";
import { Navbar, NavDropdown, Container, Nav } from "react-bootstrap";

const SideNav = () => {
  return (
    <div>
      <Navbar
        variant="dark"
        bg="dark"
        expand="lg"
        className="sidenav navbar navbar-vertical fixed-left navbar-expand-xs navbar-dark bg-dark navbar-expand-lg"
      >
        <Navbar.Toggle aria-controls="navbar-dark-example" />
        <div className="text-center">
          <a className="brand" href="/dashboard">
            <img
              src={propic}
              style={{ width: "75px", height: "75px" }}
              alt="image"
            />
          </a>
          <br />
        </div>
        <Container fluid>
          <Navbar.Collapse id="navbar-dark-example">
            <div className="navbar-collapse row m-auto ">
              <div className="navbar-nav col-md-10">
                <a
                  href="/"
                  className="nav-item dash-link nav-link active bg-secondary"
                >
                  {" "}
                  Dashboard
                </a>
                <a href="#" className="nav-item nav-link dash-link ">
                  {" "}
                  User Management{" "}
                </a>
                <a href="/publisherdash" className="nav-item nav-link dash-link">
                  {" "}
                  Publisher Management{" "}
                </a>
                <a href="/bookdash" className="nav-item nav-link dash-link">
                  {" "}
                  Book Management{" "}
                </a>
                <a href="#" className="nav-item nav-link dash-link">
                  {" "}
                  Article Management{" "}
                </a>
              </div>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default SideNav;
