import "./App.css";
import { Routes, Route } from "react-router-dom";

// Pages
import { Login } from "./pages/Login";
import { Welcome } from "./pages/Welcome";
import { Home } from "./pages/Home";

// Protected
import { Protected } from "./protected/protected";
import { Register } from "./pages/Register";

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
      </Routes>
    </>
  );
}

export default App;
