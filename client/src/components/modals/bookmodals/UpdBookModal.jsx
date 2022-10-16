import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { Col, Row, Form } from "react-bootstrap";
import axios from "axios";
import swal from "sweetalert";

export default function UpdBookModal(props) {
  const [show, setShow] = useState(false);

  const [bookID, setBookID] = useState("");
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

  const UpdateShow = () => {
    console.log(props.bkid);
    setBookID(props.bkid);
    axios
      .get("http://localhost:8090/api/book/" + props.bkid)
      .then(function (response) {
        setBkName(response.data["bkName"]);
        setBkAuthor(response.data["bkAuthor"]);
        setBkCategory(response.data["bkCategory"]);
        setBkPublisher(response.data["bkPublisher"]);
        setShow(true);
      })
      .catch(function (error) {
        console.log(error);
        alert("invalid");
      });
  };

  function submitForm(e) {
    e.preventDefault();
    axios
      .put("http://localhost:8090/api/book/updatebook/" + props.bkid, bookData)
      .then(function (response) {
        setBkName("");
        setBkAuthor("");
        setBkCategory("");
        setBkPublisher("");
        setShow(false);
        swal({
          text: "Book Successfully Updated",
          icon: "success",
          button: "Okay!",
        }).then((value) => {
          window.location = "/viewbook";
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="btn btn-success me-1" onClick={UpdateShow}>
        Update
      </Button>

      <Modal show={show} size="lg" centered>
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            Update Book
          </Modal.Title>
        </Modal.Header>

        <Form>
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
                  value={bkName}
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
                  value={bkAuthor}
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
                  <option selected>{bkCategory}</option>
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
                  <option selected>{bkPublisher}</option>
                  <option value="Global">Global</option>
                  <option value="Lankan">Lankan</option>
                </select>
              </Col>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="success" type="submit" onClick={submitForm}>
              Update Book
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
