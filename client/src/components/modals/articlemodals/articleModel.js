import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState} from 'react';




export default function ArticleModel(props) {
  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [Date,setDate] = useState(props.data)
 

  return (
    <>
      <Button className='btn btn-success' onClick={handleShow}>
      View
      </Button>

      <Modal show={show}        
        size="lg"
        centered
      >
        <Modal.Header>
      
          <Modal.Title id="contained-modal-title-vcenter">Single Article View</Modal.Title>
           
        </Modal.Header>
        <Modal.Body>

    
 <img style={{width:"250px",height:"auto",borderRadius: "10px"}} src={props.image} />

 
 <h4>{props.title}</h4>
<h6>{props.description} </h6>
<h6>{Date.substring(0,10)}</h6>

      

  </Modal.Body>
    <Modal.Footer>
   
      <Button variant="danger" onClick={handleClose}>
        Exit
      </Button>
     
    </Modal.Footer>
  </Modal>
</>
);
}