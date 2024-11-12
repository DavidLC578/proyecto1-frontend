import "./App.css";
import { Routes, Route } from "react-router-dom";

// Pages
import { Login } from "./pages/Login";
import { Welcome } from "./pages/Welcome";
import { Home } from "./pages/Home";
import { UserPerfil } from "./pages/UserPerfil"

// Protected
import { Protected } from "./protected/protected";
import { Register } from "./pages/Register";
import { PerfilPersonal } from "./pages/PerfilPersonal";
import { AuthProvider } from "./pages/AuthContext";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/home"
          element={
            <Protected>
              <Home />
            </Protected>
          }
        />
        <Route
          path="/perfil"
          element={
            <Protected>
              <AuthProvider>
                <PerfilPersonal />
              </AuthProvider>
            </Protected>
          }
        />
        <Route path="/:userId"
          element={
            <AuthProvider>
              <UserPerfil />
            </AuthProvider>
          }
        />
      </Routes>
    </>
  );
}

export default App;
