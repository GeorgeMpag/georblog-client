import { Link } from "react-router-dom";

const BlogList = (props) => {
    const blogs =props.blogs;
    const title=props.title;
   
    //test


    return ( 

        <div className="blog-list">
            <h3>{title}</h3>
             {blogs.map((blogitem) => (
                <div className="blog-preview" key={blogitem.id} >
                    <Link to={`/blogs/${blogitem.id}`}>
                        <h2>{blogitem.title}</h2>
                        <p>by {blogitem.author}</p>
                    </Link>
                    
                    
                </div>
            ))}

        </div>
     );
}
 
export default BlogList;