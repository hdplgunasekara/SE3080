import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';
import { Col, Row, Form } from "react-bootstrap";
import axios from 'axios';
import SearchBookReport from '../../book/admin/SearchBookReport';


export default function BookReportModal() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [book, setBook] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8090/api/book/').then(res => {
            setBook(res.data);

        })
            .catch(err => {
                console.log(err);
            })
    })

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

                        <SearchBookReport />
                        <br />
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
                            {book.map(bk=>(
                            <tr key={bk.bookID}>
                                {/* <th scope="row">{x}</th> */}
                                <td>{bk.bkName}</td>
                                <td>{bk.bkAuthor}</td>
                                <td>{bk.bkCategory}</td>
                                <td>{bk.bkPublisher}</td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
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
