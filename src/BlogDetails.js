import { useHistory, useParams} from "react-router-dom";
import { useState } from "react";
import Change from "./change";
import useFetch from "./usefetch";

const BlogDetails = () => {

    const {id} = useParams(); 
    const {data:blog, error, isPending,belongToUser} =  useFetch( 'http://localhost:3001/blogs/'+id )
    const history=useHistory();
    const [wantToModify, setWantToModify ]=useState(false);


    //console.log(blog)
    const deletePost =() => {
        fetch('https://geor-blog-backend.herokuapp.com//blogs/'+id, {
        method: 'DELETE'
        }).then(()=> {
            history.push('/');
        })  
    }


    const changePost=()=>{
        
            setWantToModify(true)
    
        }    
    

    return ( 
         <div className="blog-details">
            {!wantToModify && isPending && <div>Loading...</div> }
            {!wantToModify && error && <div>{ error }</div> }
            {!wantToModify && blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>by {blog.author}</p>
                    <div>{blog.content}</div>
                    <div  className="bd-buttons">
                    {belongToUser && <button onClick={deletePost}>Delete</button>}
                        
                    {belongToUser&&       <button onClick={changePost}>
                            Modify
                            </button>}
                        

                    </div>
                </article>
            )}
            {wantToModify &&  <Change blog={blog}/> }
        </div>
     );
}
 
export default BlogDetails;