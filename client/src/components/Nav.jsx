
import { Link } from 'react-router-dom';

const Nav = ({ user }) => {
    return (
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/register'>Register</Link>
            <Link to='/login'>Login</Link>
            <Link to='/new-post'>New Post</Link>


export default Nav;