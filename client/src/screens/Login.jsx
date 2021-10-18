import { useState } from "react";
import { useHistory } from "react-router-dom";
import { loginUser } from "../services";

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handelSubmit = async (e) => {
    try {
      e.preventDefault();
      const userInfo = { 
        username,
        password,
      };
      const user = await loginUser(userInfo);
      props.setUser(user);
      history.push("/user-profile");
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <section className="login-body">
      <form className="log-form-box box-shadow" onSubmit={handelSubmit}>
        <h3 className="login-text">Login to your account!</h3>
        <label htmlFor="username"> </label>
        <input
          id="username"
          className="box-shadow"
          placeholder="username"
          type="text"
          required
          autoFocus
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password"></label>
        <input
          id="password"
          className="box-shadow"
          placeholder="password"
          required
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button id="btn" className="box-shadow" type="submit">
          Sign in!
        </button>
      </form>
    </section>
  );
};

export default Login;
