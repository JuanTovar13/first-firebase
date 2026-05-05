import { createUserWithEmailAndPassword } from "firebase/auth";
import { authService } from "../firebase/firebaseConfig";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    createUserWithEmailAndPassword(authService, email, password)
      .then(
        () => navigate("/profile")
      )
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Error registering user:", errorCode, errorMessage);
        // ..
      });
  };
  return (
    <div>
    <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={(e: any) => e.preventDefault}>Register</button>
      </form>
        <button onClick={() => navigate("/login")}>Go to Login</button>
    </div>
  );
};
