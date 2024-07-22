import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../App.css";
import { Input } from "../components/Input";
import { Link } from "react-router-dom";
import { login } from "../functions/functions";

export function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState({ name: "", password: "" });
  const [error, setError] = useState(null);
  const handleLogin = () => {
    login(user, navigate, setError);
  };
  return (
    <>
      <section className="flex justify-center h-screen items-center ">
        <div className="space-y-4 bg-white pt-5 pb-10 px-10 rounded-sm">
          <div className="text-center mb-5">
            <h1 className="text-md">Iniciar sesión</h1>
          </div>
          <div>
            <h1>Username</h1>
            <Input
              value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
            />
          </div>
          <div>
            <h1>Password</h1>
            <Input
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              tipo="password"
            />
          </div>
          <div>
            <p className="text-sm text-red-500">{error}</p>
          </div>
          <div className="text-center">
            <button
              onClick={handleLogin}
              className="bg-[#65558F] text-white py-2 px-3 w-full rounded-sm hover:bg-[#7866ab] transition-colors"
            >
              Iniciar sesión
            </button>
          </div>
          <div>
            <Link to={"/register"}>
              ¿No tienes cuenta? <b>Regístrate</b>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
