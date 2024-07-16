import { useNavigate } from "react-router-dom";
import "../App.css";
import { Input } from "../components/Input";

export function Login() {
  const navigate = useNavigate();
  const handleLogin = () => {
    // Temporal
    const bool = true;
    if (bool) navigate("/home");
  };
  return (
    <>
      <section className="flex justify-center h-screen items-center ">
        <div className="space-y-4 bg-white pt-5 pb-10 px-10 rounded-sm">
          <div className="text-center mb-5">
            <h1 className="text-md">Welcome</h1>
          </div>
          <div>
            <h1>Username</h1>
            <Input />
          </div>
          <div>
            <h1>Password</h1>
            <Input />
          </div>
          <div className="text-center">
            <button
              onClick={handleLogin}
              className="bg-[#65558F] text-white py-2 px-3 w-full rounded-sm hover:bg-[#7866ab] transition-colors"
            >
              Iniciar sesión
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
