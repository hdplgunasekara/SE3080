
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useReactToPrint } from 'react-to-print';
import { useState, useEffect } from 'react';
import { Col, Row, Form } from "react-bootstrap";
import axios from 'axios';
import React, { useRef } from 'react'



export default function ArticleReportModal() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [article, setArticle] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8090/article/all').then(res => {
            setArticle(res.data);

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
                        <div ref={componentRef} >
                        <center><h2>Article Report</h2></center>
                        <table className="table">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">Article Title</th>
                                <th scope="col">Status</th>
                                <th scope="col">Created Date</th>
                               
                            </tr>
                        </thead>
                        <tbody>
                            {article.map(a=>(
                            <tr key={a._id}>
                                {/* <th scope="row">{x}</th> */}
                                <td>{a.title}</td>
                                <td>{a.status}</td>
                                <td>{a.createdAt.substring(0,10)}</td>
                               
                            </tr>
                            ))}
                        </tbody>
                    </table>
                    </div>
                        <br />

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger" onClick={handleClose}>
                            Cancel
                        </Button>

                        <Button variant="success" onClick={handlePrint}>
                            Print Report
                        </Button>

                    </Modal.Footer>

                </Form>
            </Modal>

        </>
    )
}



