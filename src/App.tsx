import "./App.css";
import { AuthProvider } from "./context/AuthContext";
import { Home } from "./Pages/Home";
import { Login } from "./Pages/Login";
import { Register } from "./Pages/Register";
import { Routes, Route } from "react-router-dom";
import { ProtectedRoute } from "./utils/ProtectedRoute";

function App() {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Login />} />
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
