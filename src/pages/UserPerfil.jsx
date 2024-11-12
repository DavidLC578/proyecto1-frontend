import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { followUser, getUserById } from "../functions/functions";
import { PerfilPublicaciones } from "./PerfilPublicaciones";

export function UserPerfil() {
    const { userId } = useParams();
    const [user, setUser] = useState({});

    useEffect(() => {
        getUserById(setUser, userId);
    }, []);

    const handleFollowUser = () => {
        followUser({seguidoId: userId})
    }

    return (
        <>
            <div className="pt-4 ps-3 pb-2 border border-b-1 border-b-black">
                <div className="w-full h-16 flex justify-between">
                    <img
                        src={user.profileimg || "aa.jpg"} // Muestra la imagen seleccionada o una predeterminada
                        alt="Profile picture"
                        className="w-16 h-full object-cover rounded-full"
                    />
                    <button className="h-10 w-20 rounded-lg me-3 bg-primary text-white hover:bg-primaryHover transition-colors duration-300"
                    onClick={handleFollowUser}>Seguir</button>
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

