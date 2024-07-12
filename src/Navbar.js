import {Link} from "react-router-dom"


const Navbar = () => {
    // <a href="/create" style={{
    //     color: "white",
    //     backgroundColor : "red"
    // }}>new blog</a>

    //adding inline styles in react
    return ( 
        <nav className="navbar">
            <h1>The Dojo Blog</h1>
            <div className="links">
            <Link to="/">home</Link>
            <Link to="/create">new blog</Link>
            </div>
            
        </nav>
     );
}
 
export default Navbar;


//link tag is used like <a href> tag 
//this is used to prevent the req going to the server
//instead react takes care of the server