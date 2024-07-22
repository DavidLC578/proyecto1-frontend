import { Link } from "react-router-dom";
export function Welcome() {
  return (
    <>
      <h1>Welcome</h1>
      <button>
        <Link to="login">Iniciar sesión</Link>
      </button>
    </>
  );
}
