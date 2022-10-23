import React, { useRef } from 'react'
import { Modal } from 'react-bootstrap';
import { useReactToPrint } from 'react-to-print';
import Button from 'react-bootstrap/Button';
import { Col, Row, Form } from "react-bootstrap";
import { useState, useEffect } from 'react';
import axios from 'axios';
import swal from 'sweetalert'

export default function SearchPublisherModal(props) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [publisher, setpublisher] = useState([]);



    useEffect(() => {
        axios.get("http://localhost:8090/api/publisher/grpub/" + props.publisher).then(response => {
            console.log(response.data);
            if (response.data.length != 0) {
                setpublisher(response.data);
            }
            else {
                swal({ text: "Not found", button: "Okay!" }).then((value) => {
                    window.location = "/viewpublisher";
                });
            }

        })
            .catch(err => {
                console.log(err);
            })

    },[])


    return (
        <>
            <Modal.Header>
                <div class="col-md-12 text-center">
                    <Modal.Title id="contained-modal-title-vcenter">Search Publisher</Modal.Title>
                </div>
            </Modal.Header>
            <Modal.Body>



                <Form>
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
                </Form>

            </Modal.Body>




        </>
    )
}
