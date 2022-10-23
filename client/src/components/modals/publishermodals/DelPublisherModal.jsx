import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { Col, Row, Form } from "react-bootstrap";
import axios from 'axios';
import swal from 'sweetalert'

export default function DelPublisherModal(props) {
    
    const [show, setShow] = useState(false);

    const [_id, setPublisherID] = useState("");
    const [company_name, setpucompany_name] = useState("");
    const [contact_person, setpucontact_person] = useState("");
    const [email, setpuemail] = useState("");
    const [contact_number, setpucontact_number] = useState("");
    const [address, setpuaddress] = useState("");

    const publisherData = {
        company_name,
        contact_person,
        email,
        contact_number,
        address,
      }

    const DeleteShow = () => {
        console.log(props._id)
        setPublisherID(props._id)
        axios.get("http://localhost:8090/api/publisher/" + props.puid).then(function (response) {
            setpucompany_name(response.data['company_name']);
            setpucontact_person(response.data['contact_person']);
            setpuemail(response.data['email']);
            setpucontact_number(response.data['contact_number']);
            setpuaddress(response.data['address']);
            setShow(true)


        }).catch(function (error) {
            console.log(error);
            alert('invalid')
        });


    };

    function submitForm(e) {
        e.preventDefault();
        axios.delete("http://localhost:8090/api/publisher/deletepublisher/" + props.puid)
            .then(function (response) {
                setShow(false);
                swal({ text: "Publisher Successfully Deleted", icon: "success", button: "Okay!" }).then((value) => {
                    window.location = '/viewpublisher';
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

          <Modal.Title id="contained-modal-title-vcenter">Delete Publisher</Modal.Title>

        </Modal.Header>


        <Form >
          <Modal.Body>
              <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                <Col sm={2}>
                  <Form.Label>
                    Company name:
                  </Form.Label>
                </Col>
                <Col sm={10}>
                    <Form.Control type="text" value={company_name} disabled />
                </Col>

              </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                <Col sm={2}>
                  <Form.Label>
                    Contact Person:
                  </Form.Label>
                </Col>
                <Col sm={10}>
                    <Form.Control type="text" value={contact_person} disabled />
                </Col>

              </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
              <Form.Label column sm="2">
                 Email:
              </Form.Label>
              <Col sm="5">
                <Form.Control type="text" value={email} disabled />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
              <Form.Label column sm="2">
                Contact Number:
              </Form.Label>
              <Col sm="5">
                <Form.Control type="text" value={contact_person} disabled />
              </Col>
            </Form.Group>

            
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
              <Form.Label column sm="2">
                 Address:
              </Form.Label>
              <Col sm="5">
                <Form.Control type="text" value={address} disabled />
              </Col>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="success" type="submit" onClick={submitForm}>
              Delete Publisher
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
