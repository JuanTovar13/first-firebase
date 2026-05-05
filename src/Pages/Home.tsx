import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { authService } from "../firebase/firebaseConfig";
import { signOut } from "firebase/auth/web-extension";

export const Home = () => {
    const context = useContext(AuthContext);
    console.log(context?.user?.uid);

  return (
    <div>
      <h1>Home</h1>
      <button style={{width: '250px'}} onClick={() => signOut(authService)}>
        Sign Out
      </button>
    </div>
  );
}