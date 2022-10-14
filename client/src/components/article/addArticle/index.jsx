import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import '../addArticle/styles.css'
import {useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import FileBase64 from 'react-file-base64';
import { LoadingOverlay } from '@mantine/core';


const AddArticle= ()=>{
  const [title,setTitle]= useState("");
  const [description,setDescription]= useState("");
  const [image,setImage]= useState(null);
  const [username,setUsername]= useState("test");
  const [error, setError] = useState("");
	const [msg, setMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

 
  


  const sendData=async(e)=>{

		e.preventDefault();
		try {
      setIsLoading(true);
			const url = "http://127.0.0.1:8090/article/add";
			const { data: res } = await axios.post(url,{username,title,description,image})
      setTitle("")
      setDescription("")
      setError("")
      setIsLoading(false);
      swal({
        title: "Success!",
        text: "Article Added Successfully",
        icon: 'success',
        timer: 2000,
        button: false,
      }).then(()=>{
        window.location.reload()
      })

      
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
        setMsg("");
				setError(error.response.data.message);
        setIsLoading(false);
       
			}
		}
      
  }

  const titleHandle  = (event) =>{
    setTitle(event.target.value)
    setError("")
    setMsg("")
  }

  const descriptionHandle  = (event) =>{
    setDescription(event.target.value) 
    setError("")
    setMsg("")  
  }


return(
<div className="main-container">
<LoadingOverlay visible={isLoading} overlayBlur={2} />
    <h2>Add New Article</h2>
    <br/>
    <div>
    <form>
    <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Username:</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value="pasindu" Readonly/>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Article Title:</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
    onChange={titleHandle}
    />
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Article Description:</label>
    <textarea type="text" class="form-control wd" id="exampleInputPassword1"
     onChange={descriptionHandle}
    />
  </div>

  {/* <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Article Image:</label>
    <input type="file" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
    accept=".png, .jpg, .jpeg"
     onChange={(e) => setImage(e.target.files[0])}
    />
  </div> */}
  <FileBase64
          type="file"
          multiple={false}
          onDone={({ base64 }) => setImage({ base64 })
          
        }
        />
  

  <div className="button-container">
  <button onClick={sendData} class="btn btn-success">Add Article</button>
  <button type="reset" class="btn btn-danger">Clear</button>
  </div>
  {error &&
            <div className="alert alert-danger" role="alert">
            {error}
          </div>}
            {msg && 
            <div className="alert alert-success" role="alert">
            {msg}
          </div>}
</form>
</div>
  
</div>
    )
}

export default AddArticle;