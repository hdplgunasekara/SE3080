import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { Col, Row, Form } from "react-bootstrap";
import axios from 'axios';
import swal from 'sweetalert'

export default function AddPublisherModal() {

    const [show, setShow] = useState(false);

  const [company_name, setPUName] = useState("");
  const [contact_person, setPUPerson] = useState("");
  const [email, setPUEmail] = useState("");
  const [contact_number, setPUNumber] = useState("");
  const [address , setPUAddress] = useState("");

  const publisherData = {
    company_name,
    contact_person,
    email,
    contact_number,
    address ,
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (company_name.length === 0 ||  contact_person.length === 0 ||   email.length === 0 ||    contact_number.length === 0||address .length === 0) {
      swal(" Fields Cannot be empty !", "Please fill all the data!", "error");
    }

    else if(contact_number.length>10){
      swal(" Please enter a valid contact number !", "error");
    }
    else{
    console.log(publisherData);
    axios.post('http://localhost:8090/api/publisher/addpublisher', publisherData).then(function (res) {
      
      console.log(res);
      setPUName("");
      setPUPerson("");
      setPUEmail("");
      setPUNumber("");
      setPUAddress("");
      swal({ text: "Publisher Successfully Added", icon: "success", button: "Okay!"}).then((value) => {
        window.location = '/publisherdash'; 
     });
    })
      .catch(function (error) {
        console.log(error);
      })
     
    }
  }


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <>

      <Button className='btn btn-primary btn-lg me-5' onClick={handleShow}>
        Add Publisher
      </Button>

      <Modal show={show}
        size="lg"
        centered
      >
        <Modal.Header>

          <Modal.Title id="contained-modal-title-vcenter">Add Publisher</Modal.Title>

        </Modal.Header>


        <Form onSubmit={handleSubmit}>
          <Modal.Body>
              <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                <Col sm={2}>
                  <Form.Label>
                    Company Name:
                  </Form.Label>
                </Col>
                <Col sm={10}>
                    <Form.Control type="text" onChange={(e) => { setPUName(e.target.value) }} />
                </Col>

              </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                <Col sm={2}>
                  <Form.Label>
                    Contact Person:
                  </Form.Label>
                </Col>
                <Col sm={10}>
                    <Form.Control type="text" onChange={(e) => { setPUPerson(e.target.value) }} />
                </Col>

              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                <Col sm={2}>
                  <Form.Label>
                    Email:
                  </Form.Label>
                </Col>
                <Col sm={10}>
                    <Form.Control type="text" onChange={(e) => { setPUEmail(e.target.value) }} />
                </Col>

              </Form.Group>
            

              <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                <Col sm={2}>
                  <Form.Label>
                    Contact Number:
                  </Form.Label>
                </Col>
                <Col sm={10}>
                    <Form.Control type="number" onChange={(e) => { setPUNumber(e.target.value) }} />
                </Col>

              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                <Col sm={2}>
                  <Form.Label>
                    Address:
                  </Form.Label>
                </Col>
                <Col sm={10}>
                    <Form.Control type="text" onChange={(e) => { setPUAddress(e.target.value) }} />
                </Col>

              </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" type="submit" onClick={handleClose}>
              Add Publisher
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
