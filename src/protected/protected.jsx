import { Navigate } from "react-router-dom";

export function Protected({ children }) {
  const bool = true;
  if (!bool) {
    return <Navigate to="/" />;
  }
  return children;
}
