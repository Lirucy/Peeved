import { useState } from "react";
import { useHistory } from "react-router-dom";
import { registerUser } from "../services";

const Register = (props) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const userInfo = {
        username,
        email,
        password,
      };
      const user = await registerUser(userInfo);
      props.setUser(user);
      history.push("/");
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <section id="reg-body">
      <form className="reg-form-box" onSubmit={handleSubmit}>
        <h1 className="register-text">Register for an Account</h1>
        <label htmlFor="username"></label>
        <input
          id="reg-username"
          placeholder="username"
          type="text"
          required
          autoFocus
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="email"></label>
        <input
          id="reg-email"
          placeholder="email"
          type="text"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password"></label>
        <input
          id="reg-password"
          placeholder="password"
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button id="reg-btn" type="submit">
          Sign up!
        </button>
      </form>
    </section>
  );
};

export default Register;
