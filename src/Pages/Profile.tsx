import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { authService } from "../firebase/firebaseConfig";
import { signOut } from "firebase/auth/web-extension";

export const Profile = () => {
  const context = useContext(AuthContext);
  console.log(context?.user?.uid);

  return (
    <div>
      <h1>Profile of {context?.user?.email}</h1>
      <h4>UID: {context?.user?.uid}</h4>

      <button style={{ width: "250px" }} onClick={() => signOut(authService)}>
        Sign Out
      </button>
    </div>
  );
};
