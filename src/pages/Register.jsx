/* eslint-disable no-unused-vars */
import { useNavigate } from "react-router-dom";
import "../App.css";
import { Input } from "../components/Input";
import { registrar } from "../functions/functions";
import { useState } from "react";

export function Register() {
  const [error, setError] = useState(null);
  const [user, setUser] = useState({ name: "", password: "" });
  const navigate = useNavigate();

  const manejarEnvio = (e) => {
    e.preventDefault();
    registrar(user, navigate, setError);
  };

  return (
    <>
      <section className="flex justify-center h-screen items-center ">
        <form
          className="space-y-4 bg-white pt-5 pb-10 px-10 rounded-sm"
          onSubmit={manejarEnvio}
        >
          <div className="text-center mb-5">
            <h1 className="text-md">Registro</h1>
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
            />
          </div>
          <div>
            <p className="text-sm text-red-500">{error}</p>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-[#65558F] text-white py-2 px-3 w-full rounded-sm hover:bg-[#7866ab] transition-colors"
            >
              Registrarse
            </button>
          </div>
        </form>
      </section>
    </>
  );
}
