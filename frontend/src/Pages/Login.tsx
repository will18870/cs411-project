/// <reference types="@types/googlemaps" />
import {} from "googlemaps";
import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";

interface User {
  picture: string;
  name: string;
}

const Login: React.FC = (): JSX.Element => {
//   const [user, setUser] = useState<User>({ picture: "", name: "" });

//   function handleCallbackResponse(response: google.accounts.id.ResponseObject) {
//     console.log("Encoded JWT ID token " + response.credential);
//     const userObject: User = jwt_decode(response.credential);
//     console.log(userObject);
//     setUser(userObject);
//     document.getElementById("signInDiv")!.hidden = true;
//   }

//   function handleSignOut(event: React.MouseEvent<HTMLButtonElement>) {
//     setUser({ picture: "", name: "" });
//     document.getElementById("signInDiv")!.hidden = false;
//   }

//   useEffect(() => {
//     /* global google*/
//     google.accounts.id.initialize({
//       client_id: "988222729929-mqa8sdqasg9okmjt875g08bm87kd34e6.apps.googleusercontent.com",
//       callback: handleCallbackResponse,
//     });
//     google.accounts.id.renderButton(document.getElementById("signInDiv")!, {
//       theme: "outline",
//       size: "large",
//     });
//   }, []);

  return (
    <>
      {/* <div id={"signInDiv"}></div>
      {Object.keys(user).length !== 0 && (
        <button onClick={(e) => handleSignOut(e)}>Sign Out</button>
      )}
      {user && (
        <div>
          <img src={user.picture} alt="" />
          <h1>{user.name}</h1>
        </div>
      )} */}
      login!
    </>
  );
};

export default Login;
