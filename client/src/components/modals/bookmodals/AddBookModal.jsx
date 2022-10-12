import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { Col, Row, Form } from "react-bootstrap";
import axios from "axios";
import swal from "sweetalert";

export default function AddBookModal() {
  const [show, setShow] = useState(false);

  const [bkName, setBkName] = useState("");
  const [bkAuthor, setBkAuthor] = useState("");
  const [bkCategory, setBkCategory] = useState("");
  const [bkPublisher, setBkPublisher] = useState("");

  const bookData = {
    bkName,
    bkAuthor,
    bkCategory,
    bkPublisher,
  };

  function handleSubmit(e) {
    e.preventDefault();

    if (
      bkName.length === 0 ||
      bkAuthor.length === 0 ||
      bkCategory.length === 0 ||
      bkPublisher.length === 0
    ) {
      swal(" Fields Cannot be empty !", "Please enter all data !", "error");
    } else {
      console.log(bookData);
      axios
        .post("http://localhost:8090/api/book/addbook", bookData)
        .then(function (res) {
          // alert("Added Successfully");
          console.log(res);
          setBkName("");
          setBkAuthor("");
          setBkCategory("");
          setBkPublisher("");
        })
        .catch(function (error) {
          console.log(error);
        });
      swal({
        text: "Book Successfully Added",
        icon: "success",
        button: "Okay!",
      }).then((value) => {
        window.location = "/bookdash";
      });
    }
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="btn btn-primary btn-lg me-5" onClick={handleShow}>
        Add Book
      </Button>

      <Modal show={show} size="lg" centered>
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">Add Book</Modal.Title>
        </Modal.Header>

        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextEmail"
            >
              <Col sm={2}>
                <Form.Label>Book name:</Form.Label>
              </Col>
              <Col sm={10}>
                <Form.Control
                  type="text"
                  onChange={(e) => {
                    setBkName(e.target.value);
                  }}
                />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextEmail"
            >
              <Col sm={2}>
                <Form.Label>Author:</Form.Label>
              </Col>
              <Col sm={10}>
                <Form.Control
                  type="text"
                  onChange={(e) => {
                    setBkAuthor(e.target.value);
                  }}
                />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextPassword"
            >
              <Form.Label column sm="2">
                Category:
              </Form.Label>
              <Col sm="5">
                <select
                  className="Col-3"
                  aria-label="Default select example"
                  style={{ height: "35px", width: "500px" }}
                  onChange={(e) => {
                    setBkCategory(e.target.value);
                  }}
                >
                  <option selected>Select category</option>
                  <option value="Adventure">Adventure</option>
                  <option value="Sci-Fi">Sci-Fi</option>
                  <option value="Autobiography">Autobiography</option>
                  <option value="Fiction">Fiction</option>
                  <option value="Novel">Novel</option>
                  <option value="History">History</option>
                  <option value="Romance">Romance</option>
                </select>
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextPassword"
            >
              <Form.Label column sm="2">
                Publisher:
              </Form.Label>
              <Col sm="5">
                <select
                  className="Col-3"
                  aria-label="Default select example"
                  style={{ height: "35px", width: "500px" }}
                  onChange={(e) => {
                    setBkPublisher(e.target.value);
                  }}
                >
                  <option selected>Select category</option>
                  <option value="Global">Global</option>
                  <option value="Lankan">Lankan</option>
                </select>
              </Col>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" type="submit" onClick={handleClose}>
              Add Book
            </Button>
            <Button variant="danger" onClick={handleClose}>
              Exit
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}
