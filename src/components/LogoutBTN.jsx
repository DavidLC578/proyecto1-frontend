export function LogoutBTN() {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };
  return (
    <>
      <button onClick={handleLogout}>Cerrar sesión</button>
    </>
  );
}
