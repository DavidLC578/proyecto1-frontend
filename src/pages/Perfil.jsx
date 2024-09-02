import { PenIcon } from "../assets/penIcon";
export function Perfil() {
  return (
    <>
      <div>
        <div className="w-16 h-16 rounded-full bg-white"></div>
        <div>
          <h1>Nombre</h1>
          <PenIcon width="12" height="12" fill="black" />
        </div>
      </div>
    </>
  );
}
