import e from "cors";
import { Link, useHistory } from "react-router-dom";

const Nav = ({ user, setUser }) => {
  const history = useHistory();

  const logOut = async () => {
    localStorage.removeItem("token", user);
    window.localStorage.clear();
    setUser(null);
    history.push("/login");
  };

  return (
    <nav>
      {user ? (
        <>
          <Link to="/">Home</Link>
          <Link to="/new-post">New Post</Link>

          <Link id="user" to="/user-profile">
            <span>Hi, {user.username}!</span>{" "}
          </Link>
          <Link to="/login" onClick={logOut}>
            Log Out
          </Link>
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
