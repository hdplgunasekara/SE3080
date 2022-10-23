import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import '../articleList/styles.css'
import ReactPaginate from 'react-paginate';
import { useEffect,useState } from "react";
import Articlemodal from '../../modals/articlemodals/articleModel'
import ArticleUpdatemodal from '../../modals/articlemodals/articleUpdateModel'
import swal from 'sweetalert'
import axios from 'axios';
import { LoadingOverlay } from '@mantine/core';
import { useParams } from "react-router-dom";

const ArticleList= ()=>{
    const [items,setItems]= useState([]);
    const [pageCount,setpageCount]= useState(0);
    const [count , setCount]=useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [search , setSearch]=useState();
    const param = useParams();

    

    useEffect(()=>{
      
       
        const getArticles = async()=>{
            setIsLoading(true);
        const res= await fetch(
            `http://127.0.0.1:8090/article/search?search=${param.id}` );
        const data = await res.json();

        if(data.length===0){
            swal({
                title: "No Result Found",
                icon: 'error',
                timer: 2000,
                button: false,
              }).then(()=>{
                window.location.href=`/article/list`;
              })


        }else{
        setpageCount(2);
        setItems(data);
        setCount(data.length)
        setIsLoading(false)
        }
        
        };

        getArticles();
       
        },[]);


        //search
        const fetchArticles = async  (currentPage)=>{ 
            setIsLoading(true)
            const res = await fetch(
                `http://127.0.0.1:8090/article/search?page=${currentPage}&limit=1&search=${param.id}`);
            const data = await res.json();
            setIsLoading(false)
            return data;
        };
    
        const handlePageClick = async (data)=>{
            let currentPage = data.selected+1;
            const userFormServer = await fetchArticles(currentPage);
            setItems(userFormServer);
        }
    
        const handleChangeSearch = async (event) => {
            setSearch(event.target.value);  
          }

          const searchTrigger = async () => {
            window.location.href=`/article/search/${search}`;
          }
          

        const articleDelete=async(id)=>{
            try {
           const url = `http://127.0.0.1:8090/article/delete/${id}`;

                swal({
                    title: "Are you sure?",
                    text: "You will not be able to recover this article!",
                    type: "warning",
                    buttons:true,
                    dangerMode:true,
                }).then((isOkay)=>{

                    if (isOkay) {
                        axios.put(url).then(()=>{
                            swal("Deleted!", "Your article has been deleted.", "success").then(()=>{
                                window.location.reload()
                            })
                          
                        })
                    } else {
                        // swal("Cancelled", "Your imaginary file is safe :)", "error");
                    }

                })
    
            } catch (error) {
                alert("Failed")
            }
          };



return(
<div >
<h2 className="heading">My Article List</h2>
<LoadingOverlay visible={isLoading} overlayBlur={2} />
    <br/>
   {/* search */}
   <div className="Search-container">
 
    <form className="d-flex" >
     <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" 
     required
     onChange={handleChangeSearch}
     />
    <input type="button" value="Search" onClick={searchTrigger} />
    </form>
    
      </div>
  
{/* search end */}

<div class="card-deck">
{items.map(article => <div key={article._id}>
<div class="card">
<img className="thumb-img" src={article.image} />
<h1>{article.title.toString().substring(0,50)}</h1>
<h6>{article.description.toString().substring(0,50)}</h6>
<div className="buuton-group"> 
    <Articlemodal title={article.title} description={article.description} id={article._id} image={article.image} data={article.createdAt}/>  
    <ArticleUpdatemodal title={article.title} description={article.description} id={article._id} image={article.image} />                             
    <button type="button" class="btn btn-danger" onClick={() => { articleDelete(article._id) }}>Delete</button>
    </div>
</div>
</div>
)}


</div>
<div className="paginator" >
<center>
{count>2 ?  
<ReactPaginate
           breakLabel={'...'}
           pageCount={pageCount}
           onPageChange={handlePageClick}
           containerClassName={'pagination justify-content-center'}
           pageClassName={'page-item'}
           pageLinkClassName={'page-link'}
           previousClassName={'page-item'}
           nextClassName={'page-item'}
           previousLinkClassName={'page-link'}
           nextLinkClassName={'page-link'}
           breakClassName={'page-item'}
           breakLinkClassName={'page-link'}
           activeClassName={'page-item active'}

           />
        : <></>}
</center>
</div>

</div>
    )
}

export default ArticleList;