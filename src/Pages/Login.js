import React, {useState} from "react";
import NavBar from "../components/NavBar";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // TODO: Implement login logic here
    };

    return (
        <div>
            <NavBar/>
            <div className={"logwrap"}>
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <label>
                        Username:
                        <input type="text" value={username} onChange={handleUsernameChange}/>
                    </label>
                    <br/>
                    <label>
                        Password:
                        <input type="password" value={password} onChange={handlePasswordChange}/>
                    </label>
                    <br/>
                    <input type="submit" value="Login"/>
                </form>
                <button>Spotify</button>
                <button>Google</button>
                <button>Songkick</button>
            </div>
        </div>

    );
}

export default Login;