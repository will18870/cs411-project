import {useEffect, useState} from "react";
// import NavBar from "../components/NavBar";
import jwt_decode from "jwt-decode"

function Login() {
    const [user, setUser] = useState({});

    function handleCallbackResponse(response) {
        console.log("Encoded JWT ID token " + response.credential)
        const userObject = jwt_decode(response.credential);
        console.log(userObject);
        setUser(userObject);
        document.getElementById("signInDiv").hidden = true;
    }

    function handleSignOut(event) {
        setUser({});
        document.getElementById("signInDiv").hidden = false;
    }

    useEffect(() => {
        /* global google*/
        google.accounts.id.initialize({
            client_id: "988222729929-mqa8sdqasg9okmjt875g08bm87kd34e6.apps.googleusercontent.com",
            callback: handleCallbackResponse
        });
        google.accounts.id.renderButton(
            document.getElementById("signInDiv"),
            {theme: "outline", size: "large"}
        )
    }, []);
    return (
        <>
            {/*<NavBar/>*/}
            <div id={"signInDiv"}></div>
            {
                Object.keys(user).length !== 0 &&
                <button onClick={(e) => handleSignOut(e)}>Sign Out</button>
            }
            {user &&
                <div>
                    <img src={user.picture} alt=""/>
                    <h1>{user.name}</h1>
                </div>
            }
        </>
    )
}

export default Login;


