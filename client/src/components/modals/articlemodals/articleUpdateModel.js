import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState} from 'react';
import axios from "axios";
import swal from "sweetalert";
import FileBase64 from 'react-file-base64';




export default function ArticleUpdateModel(props) {
  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [title,setTitle]= useState(props.title);
  const [description,setDescription]= useState(props.description);
  const [id,setId] = useState(props.id);
  const [image,setImage]= useState(null);
  const [imageView,setImageView]= useState(props.image);
  const [error, setError] = useState("");
	const [msg, setMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

const titleHandle = (event)=>{
    setError("");
    setMsg("");
    setTitle(event.target.value);
}

const descriptionHandle = (event)=> {
    setError("");
    setMsg("");
    setDescription(event.target.value);
}

const UpdateData =async (e)=>{

		e.preventDefault();
		try {
  
			const url = `http://127.0.0.1:8090/article/update/${id}`;
			const { data: res } = await axios.put(url,{title,description,image})
      swal({
        title: "Success!",
        text: "Article Updated Successfully",
        icon: 'success',
        timer: 2000,
        button: false,
      }).then(()=>{
        window.location = '/article/list'
      })
      
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
        setMsg("");
				setError(error.response.data.message);
       
       
			}
		}
      

  }
 

  return (
    <>
      <Button className='btn btn-primary' onClick={handleShow}>
      Update
      </Button>

      <Modal show={show}        
        size="lg"
        centered
      >
        <Modal.Header>

          <Modal.Title id="contained-modal-title-vcenter">Update Article</Modal.Title>
           
        </Modal.Header>
        <Modal.Body>

        <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Article Title:</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
    onChange={titleHandle}
    value={title}
    />
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Article Description:</label>
    <textarea type="text" class="form-control wd" id="exampleInputPassword1"
     onChange={descriptionHandle}
     value={description}
    />
  </div>
  <div class="mb-3">
  <img style={{width:"250px",height:"auto",borderRadius: "10px"}} src={imageView} />
  </div>


  <FileBase64
          type="file"
          multiple={false}
          onDone={({ base64 }) => setImage({ base64 })
          
        }
        />
        <br></br>
    
    {error &&
            <div className="alert alert-danger" role="alert">
            {error}
          </div>}
            {msg && 
            <div className="alert alert-success" role="alert">
            {msg}
          </div>}


</form>

      

  </Modal.Body>
    <Modal.Footer>
   
      <Button variant="danger" onClick={handleClose}>
        Exit
      </Button>
      <Button variant="primary" onClick={UpdateData}>
        Update
      </Button>
 
    </Modal.Footer>
  </Modal>
</>
);
}