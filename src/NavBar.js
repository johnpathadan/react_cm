import {Link} from 'react-router-dom';
const NavBar = () => {
    return (
        <nav className="navbar">
            <h2>News Blog</h2>
            <div className="links">
                {/* <a href="/">Home</a> */}
                <Link to='/'>Home</Link>
                <Link to='/create'>New Blog</Link>
                {/* <a href="/create">New Blog</a> */}
            </div>
        </nav>
    );
}
 
export default NavBar;