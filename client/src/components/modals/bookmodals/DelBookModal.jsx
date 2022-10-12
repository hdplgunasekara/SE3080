import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { Col, Row, Form } from "react-bootstrap";
import axios from 'axios';
import swal from 'sweetalert'

export default function DelBookModal(props) {
    
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
      }

    const DeleteShow = () => {
        console.log(props.bkid)
        setBookID(props.bkid)
        axios.get("http://localhost:8090/api/book/" + props.bkid).then(function (response) {
            setBkName(response.data['bkName']);
            setBkAuthor(response.data['bkAuthor']);
            setBkCategory(response.data['bkCategory']);
            setBkPublisher(response.data['bkPublisher']);
            setShow(true)


        }).catch(function (error) {
            console.log(error);
            alert('invalid')
        });


    };

    function submitForm(e) {
        e.preventDefault();
        axios.delete("http://localhost:8090/api/book/deletebook/" + props.bkid)
            .then(function (response) {
                setShow(false);
                swal({ text: "Book Successfully Deleted", icon: "success", button: "Okay!" }).then((value) => {
                    window.location = '/viewbook';
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

      <Button className='btn btn-danger' onClick={DeleteShow}>
        Delete
      </Button>

      <Modal show={show}
        size="lg"
        centered
      >
        <Modal.Header>

          <Modal.Title id="contained-modal-title-vcenter">Delete Book</Modal.Title>

        </Modal.Header>


        <Form >
          <Modal.Body>
              <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                <Col sm={2}>
                  <Form.Label>
                    Book name:
                  </Form.Label>
                </Col>
                <Col sm={10}>
                    <Form.Control type="text" value={bkName} disabled />
                </Col>

              </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                <Col sm={2}>
                  <Form.Label>
                    Author:
                  </Form.Label>
                </Col>
                <Col sm={10}>
                    <Form.Control type="text" value={bkAuthor} disabled />
                </Col>

              </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
              <Form.Label column sm="2">
                Category:
              </Form.Label>
              <Col sm="5">
                <Form.Control type="text" value={bkCategory} disabled />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
              <Form.Label column sm="2">
                Publisher:
              </Form.Label>
              <Col sm="5">
                <Form.Control type="text" value={bkPublisher} disabled />
              </Col>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="success" type="submit" onClick={submitForm}>
              Delete Book
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
