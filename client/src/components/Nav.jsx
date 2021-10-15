import { Link } from "react-router-dom";

const Nav = ({ user }) => {
  return (
    <nav>
      {user ? (
        <>
          <Link to="/">Home</Link>
          <Link to="/new-post">New Post</Link>
          <Link id="user" to="/user-profile"><span>Hi, {user.username}!</span> </Link>    
        </>
      ) : (
        <>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </>
      )}
    </nav>
  );
};

export default Nav;