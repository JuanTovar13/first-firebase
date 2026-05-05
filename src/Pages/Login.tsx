import { authService } from "../firebase/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
const [email, setEmail] = useState<string>("");
const [password, setPassword] = useState<string>("");
const navigate = useNavigate();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Login submitted");
    signInWithEmailAndPassword(authService, email, password)
  .then(() => {
    navigate("/home");
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error("Error logging in:", errorCode, errorMessage);
  });
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={(e: any) => e.preventDefault}>Login</button>
      </form>
      
    </div>
  );
}