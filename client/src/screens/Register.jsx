import{ useState } from "react";
import {useHistory} from "react-router-dom";
import { registerUser } from "../services";
import "./Register.css"

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
      }
    return (
        <section>
        <form onSubmit={handleSubmit} className="form-box">
          <h1 className="register-text">Register for an Account</h1>
            <label htmlFor="username"></label>
            <input placeholder="Username" id="reg-username" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            <label htmlFor="email"></label>
            <input placeholder="Email" id="reg-email" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
            <label htmlFor="password"></label>
            <input id="reg-password" placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button id="reg-btn" type="submit">Sign up!</button>
            </form>
        </section>

    );
};


export default Register;