import "./LoginBox.scss";

import { useNavigate } from "react-router";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase";
import { useState } from "react";

export default function LoginBox() {
  const nav = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const Login = () => {
  //   nav("/Dashboard");
  // };

  const onLogin = (e: any) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email + "@gmail.com", password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // navigate("/home");
        nav("/Dashboard");
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <div className="LoginBox">
      <div className="LoginTitle">Log in</div>
      <div className="InputBoxes">
        <input
          className="inputBox"
          type="text"
          placeholder="Username"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="inputBox"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="LoginBoxButtons">
        <button className="LoginButton" onClick={onLogin}>
          Login
        </button>
        <div id="or">or</div>
        <button className="LoginButton SignupColor">Signup</button>
      </div>
    </div>
  );
}
