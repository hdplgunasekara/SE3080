import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { Col, Row, Form } from "react-bootstrap";
import axios from 'axios';
import swal from 'sweetalert'

export default function UpdPublisherModal(props) {

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

    const UpdateShow = () => {
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
        if (company_name.length === 0 ||  contact_person.length === 0 ||   email.length === 0 ||    contact_number.length === 0||address .length === 0) {
          swal(" Fields Cannot be empty !", "Please fill all the data!", "error");
        }
        else{
        axios.put("http://localhost:8090/api/publisher/updatepublisher/" +  props.puid,publisherData)
            .then(function (response) {
                setpucompany_name('');
                setpucontact_person('');
                setpuemail('');
                setpucontact_number('');
                setpuaddress('');
                setShow(false);
                swal({ text: "Publisher Successfully Updated", icon: "success", button: "Okay!" }).then((value) => {
                    window.location = '/viewpublisher';
                });

            })
            .catch(function (error) {
                console.log(error);
            });
          }
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
    
          <Button className='btn btn-success' onClick={UpdateShow}>
            Update
          </Button>
    
          <Modal show={show}
            size="lg"
            centered
          >
            <Modal.Header>
    
              <Modal.Title id="contained-modal-title-vcenter">Update Publisher</Modal.Title>
    
            </Modal.Header>
    
    
            <Form>
              <Modal.Body>
                  <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Col sm={2}>
                      <Form.Label>
                        Company name:
                      </Form.Label>
                    </Col>
                    <Col sm={10}>
                        <Form.Control type="text" value={company_name} onChange={(e) => { setpucompany_name(e.target.value) }} />
                    </Col>
    
                  </Form.Group>
                  <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Col sm={2}>
                      <Form.Label>
                        Contact Person:
                      </Form.Label>
                    </Col>
                    <Col sm={10}>
                        <Form.Control type="text" value={contact_person} onChange={(e) => { setpucontact_person(e.target.value) }} />
                    </Col>
    
                  </Form.Group>
                
                  <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Col sm={2}>
                      <Form.Label>
                        Email:
                      </Form.Label>
                    </Col>
                    <Col sm={10}>
                        <Form.Control type="text" value={email} onChange={(e) => { setpuemail(e.target.value) }} />
                    </Col>
    
                  </Form.Group>

                  <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Col sm={2}>
                      <Form.Label>
                        Contact Number:
                      </Form.Label>
                    </Col>
                    <Col sm={10}>
                        <Form.Control type="text" value={contact_number} onChange={(e) => { setpucontact_number(e.target.value) }} />
                    </Col>
    
                  </Form.Group>

                  <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Col sm={2}>
                      <Form.Label>
                        Address:
                      </Form.Label>
                    </Col>
                    <Col sm={10}>
                        <Form.Control type="text" value={address} onChange={(e) => { setpuaddress(e.target.value) }} />
                    </Col>
    
                  </Form.Group>
               
              </Modal.Body>
              <Modal.Footer>
                <Button variant="success" type="submit" onClick={submitForm}>
                  Update Publisher
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
