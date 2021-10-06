import { useState } from "react";

const Change = (props) => {
    const blog=props.blog;
    const id =blog.id;
    const [title, setTitle]=useState(blog.title);
    const [body, setBody]=useState(blog.content);


    const handleSubmit=(e) =>{
        e.preventDefault();
        const blog={id, title, body};

       
        //fetch('http://localhost:8000/blogs', {
        fetch('https://geor-blog-backend.herokuapp.com/update', {
            method: 'PUT',
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(blog)
        }).then(()=>{
            
            console.log("entry updated");
            
            window.location.reload()
        })
        
        // console.log("entry updated");
        // window.location.reload();
    }

    
    
    
    return ( 
        <div className="create">
        {/* <h2>Add a New Blog</h2> */}

        <form onSubmit={handleSubmit}>
            <label >Blog Title:</label>
            <input type="text" required
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
            />
            <label >Body:</label>
            <textarea required rows="10"
            value={body}
            onChange={(e)=>setBody(e.target.value)}
            ></textarea>
            {/* <label >Author</label>
            <select>
                <option value="mario">mario</option>
                <option value="yoshi">yoshi</option>
            </select> */}
             <button>Save Changes</button>
             {/* <button disabled>Adding your post</button> */}
           
        </form>
    </div> 
     );
}
 
export default Change;