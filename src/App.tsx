import "./App.css";
import { AuthProvider } from "./context/AuthContext";
import { Home } from "./Pages/Home";
import { Login } from "./Pages/Login";
import { Register } from "./Pages/Register";
import { Routes, Route } from "react-router-dom";
import { ProtectedRoute } from "./utils/ProtectedRoute";
import { Profile } from "./Pages/Profile";

function App() {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
