import { Link } from "react-router-dom/cjs/react-router-dom.min";

const NotFound = () => {
    return ( 
        <div>
            <h1> 404</h1>
            <h3> The file you are looking for is NOT FOUND</h3>
            <Link to="/">
                 <p> GO BACK TO HOME PAGE</p>
            </Link>
            
        </div>
     );
}
 
export default NotFound;