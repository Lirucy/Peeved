
const Register = () => {
    return (
        <div>
            <h3>This is the register page!</h3>
        </div>

import{ useState } from "react";
import {useHistory} from "react-router-dom";
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
      }
    return (
        <section>
            <h1>Register for an Account</h1>
            <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username: </label>
            <input id="username" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            <label htmlFor="email">Email:</label>
            <input id="email" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
            <label htmlFor="password">Password:</label>
            <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Sign up!</button>
            </form>
        </section>

    );
};

export default Register;