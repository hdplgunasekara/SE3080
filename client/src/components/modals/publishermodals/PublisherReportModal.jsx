import React, { useRef } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useReactToPrint } from 'react-to-print';
import { useState, useEffect } from 'react';
import { Col, Row, Form } from "react-bootstrap";
import axios from 'axios';


export default function PublisherReportModal() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [publisher, setpublisher] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8090/api/publisher/').then(res => {
            setpublisher(res.data);

        })
            .catch(err => {
                console.log(err);
            })
    })

    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    return (
        <>

            <Button className='btn btn-light' onClick={handleShow}>
                Generate
            </Button>

            <Modal show={show}
                size="lg"
                centered
            >
                <Modal.Header>

                    <Modal.Title id="contained-modal-title-vcenter">Report</Modal.Title>

                </Modal.Header>


                <Form>
                    <Modal.Body>

                        <br />
                        <fieldset>
                        <div ref={componentRef} >
                            {/* <input placeholder="Search" /> */}
                            <center><h2>All Publishers</h2></center>
                        <table className="table">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">Company Name</th>
                                <th scope="col">Contact Person</th>
                                <th scope="col">Email</th>
                                <th scope="col">Contact Number</th>
                                <th scope="col">Address</th>
                            </tr>
                        </thead>
                        <tbody>
                            {publisher.map(pu=>
                            <tr key={pu._id}>
                                {/* <th scope="row">{x}</th> */}
                                <td>{pu.company_name}</td>
                                <td>{pu.contact_person}</td>
                                <td>{pu.email}</td>
                                <td>{pu.contact_number}</td>
                                <td>{pu.address}</td>
                            </tr>
                            )}
                        </tbody>
                    </table>
                    </div>
                    </fieldset>
                    <div className="float-left">
                        <Button variant="success" onClick={handlePrint}>
                            Print Report
                        </Button>
                    </div>
                        <br />

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger" onClick={handleClose}>
                            Cancel
                        </Button>

                    </Modal.Footer>

                </Form>
            </Modal>

        </>
    )
}
