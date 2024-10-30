import { Link } from "react-router-dom/cjs/react-router-dom.min";

const NotFound = () => {
    return ( 
        <div className="notfound">
            <h2>Sorry</h2>
            <p>The page content does not exist !</p>
            <Link to="/">Go to the home page...</Link>
        </div>
     );
}
 
export default NotFound;