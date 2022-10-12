import React, { useRef } from 'react'
import { Modal } from 'react-bootstrap';
import { useReactToPrint } from 'react-to-print';
import Button from 'react-bootstrap/Button';
import { Col, Row, Form } from "react-bootstrap";
import { useState, useEffect } from 'react';
import axios from 'axios';
import swal from 'sweetalert'

export default function PrintReportModal(props) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [book, setbook] = useState([]);



    useEffect(() => {
        axios.get("http://localhost:8090/api/book/grbk/" + props.book).then(response => {
            console.log(response.data);
            if (response.data.length != 0) {
                setbook(response.data);
            }
            else {
                swal({ text: "No books in that category", button: "Okay!" }).then((value) => {
                    window.location = "/";
                });
            }

        })
            .catch(err => {
                console.log(err);
            })

    },[])

    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });


    return (
        <>
            <Modal.Header>
                <div class="col-md-12 text-center">
                    <Modal.Title id="contained-modal-title-vcenter">Search Book</Modal.Title>
                </div>
            </Modal.Header>
            <Modal.Body>



                <Form>
                    <fieldset>
                        <div ref={componentRef} >
                            {/* <input placeholder="Search" /> */}
                            <center><h2>All Books in this category</h2></center>
                            <table className="table">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">Book Name</th>
                                <th scope="col">Author</th>
                                <th scope="col">Category</th>
                                <th scope="col">Publisher</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                book.map(bk => 
                                <tr key={bk.bookID} >
                                    {/* <th scope="row">{x}</th> */}
                                    <td>{bk.bkName}</td>
                                    <td>{bk.bkAuthor}</td>
                                    <td>{bk.bkCategory}</td>
                                    <td>{bk.bkPublisher}</td>
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
                </Form>

            </Modal.Body>




        </>
    )
}
