import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Sam Blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/posts">New Post</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;