import { useState } from "react";
import { useHistory } from "react-router-dom";
import { loginUser } from "../services";

const Login = (props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

    const handelSubmit = async (e) => {
        try {
            e.preventDefaul();
            const userInfo = {
                username,
                password
            }
            const user = await loginUser(userInfo)
            props.setUser(user)
            history.push("/")
        } catch (error) {
            console.error(error.message)
        }
    }

    return (
        <section>
            <h3>Login to your account!</h3>
            <form onSubmit={handelSubmit}>
                <label htmlFor="username">Username: </label>
                <input id="username" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                <label htmlFor="password">Password:</label>
                <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Sign in!</button>
            </form>
        </section>
    );
};

export default Login;