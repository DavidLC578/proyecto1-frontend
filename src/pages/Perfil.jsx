import { useEffect, useState } from "react";
import { getCurrentUser, uploadProfilePic } from "../functions/functions";
import { PerfilPublicaciones } from "./PerfilPublicaciones";
import { Upload } from '../assets/Upload';

export function Perfil() {
  const [user, setUser] = useState({});

  useEffect(() => {
    getCurrentUser(setUser);
  }, []);

  const handleSumbitProfilePic = (event) => {
    const file = event.target.files[0]; // Captura el archivo seleccionado
    if (file) {
      // Subir al servidor
      uploadProfilePic(file)
    }
  };
  return (
    <>
      <div className="pt-4 ps-3 pb-2 border border-b-1 border-b-black">
        <div className="w-16 h-16 relative flex group">
          <img
            src={user.profileimg || "aa.jpg"} // Muestra la imagen seleccionada o una predeterminada
            alt="Profile picture"
            className="w-full h-full object-cover rounded-full transition-all duration-300"
          />
          <input
            id="profilepic"
            type="file"
            className="hidden inset-0 w-full h-full cursor-pointer"
            onChange={handleSumbitProfilePic} // Llama a la función al seleccionar una imagen
          />
          <label
            htmlFor="profilepic"
            className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
          >
            <Upload />
          </label>

          {/* Capa de oscurecimiento */}
          <div className="absolute inset-0 z-10 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300 rounded-full"></div>
        </div>



        <div className="pt-3 space-y-k">
          <h1>{user.name}</h1>
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

