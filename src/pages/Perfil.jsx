import { useEffect, useState } from "react";
import { PenIcon } from "../assets/penIcon";
import { getCurrentUser } from "../functions/functions";
import { PerfilPublicaciones } from "./PerfilPublicaciones";
export function Perfil() {
  const [user, setUser] = useState({})
  useEffect(() => {
    getCurrentUser(setUser)
  }, [])
  return (
    <>
      <div className="pt-4 ps-3 pb-2 border border-b-1 border-b-black">
        <div className="w-16 h-16 rounded-full bg-white"></div>
        <div className="pt-3 space-y-k">
          <h1>{user.name}</h1>
          <h1>{user.description}</h1>
          <div className="flex space-x-3 text-sm pt-1">
            <h1>0 siguiendo</h1>
            <h1>0 seguidores</h1>
          </div>
        </div>
      </div>
      <div className="ps-3 pt-2 flex space-x-4">
        <PerfilPublicaciones title={"Publicaciones"} />
        <PerfilPublicaciones title={"Me gusta"} />
      </div>
    </>
  );
}
