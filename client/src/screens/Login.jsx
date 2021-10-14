import { useState } from "react";
import { useHistory } from "react-router-dom";
import { loginUser } from "../services";
import "./Login.css"


const Login = (props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

    const handelSubmit = async (e) => {
        try {
            e.preventDefault();
            const userInfo = {
                username,
                password
            }
            const user = await loginUser(userInfo)
            props.setUser(user)
            history.push("/user-profile")
        } catch (error) {
            console.error(error.message)
        }
    }
    return (
        <section className="body">
        <form onSubmit={handelSubmit} className="form-box">
        <h3 className="Login-text">Login to your account!</h3>
                <label htmlFor="username"> </label>
                <input id="username" type="text" placeholder='username' value={username} onChange={(e) => setUsername(e.target.value)} />
                <label htmlFor="password"></label>
                <input id="password" type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button id="btn" type="submit">Sign in!</button>
            </form>
        </section>

    );
};

export default Login;