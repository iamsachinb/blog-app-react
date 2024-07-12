import { Link } from "react-router-dom/";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>sorry that page cannot be found</h2>
            <Link to="/">go back to home</Link>
        </div>
     );
}
 
export default NotFound;