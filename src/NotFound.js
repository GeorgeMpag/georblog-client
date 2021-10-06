import { Link } from "react-router-dom";
const notFound = () => {
    return ( <div className="not-found">
        <h2>Ooops page not Found</h2>
        <Link to="/">Back to home</Link>
    </div> );
}
 
export default notFound;