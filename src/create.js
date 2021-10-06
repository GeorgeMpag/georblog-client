import { useState } from "react";
import { useHistory} from "react-router-dom";

const Create = () => {
    const [title, setTitle]=useState('');
    const [body, setBody]=useState('');
    //const [author, setAuthor]=useState('mario');
    const [isPending, setIsPending]=useState(false);
    const history=useHistory();
    if (sessionStorage.getItem('user')===null)
    {
        history.push('/login')
        //<Redirect to='/login'/> 
    }else{
      
    }
    const authorName= JSON.parse(sessionStorage.getItem('user')).user_name
    const author=JSON.parse(sessionStorage.getItem('user')).id

    //console.log(author);
    const handleSubmit=(e) =>{
        e.preventDefault();
        const blog={title, body, author};

        setIsPending(true);
        //fetch('http://localhost:8000/blogs', {
        fetch('http://localhost:3001/blogs', {
            method: 'POST',
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(blog)
        }).then(()=>{
            
            console.log("new entry added");
            setIsPending(false);
            history.push('/');
        })
       
    }

    
    return (
        <div className="create">
        <h2>Add a New Blog</h2>

        <form onSubmit={handleSubmit}>
            <label >Blog Title:</label>
            <input type="text" required
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
            />
            <label >Body:</label>
            <textarea required
            value={body}
            onChange={(e)=>setBody(e.target.value)}></textarea>
            <label >Author</label>
            {/* <select value={author}
            onChange={(e)=>setAuthor(e.target.value)}>
                <option value="mario">mario</option>
                <option value="yoshi">yoshi</option>
            </select> */}
            <p >{authorName}</p>
            {!isPending && <button>Add</button>}
            {isPending && <button disabled>Adding your post</button>}
           
        </form>
    </div> );
}
 
export default Create;