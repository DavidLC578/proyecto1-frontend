import { useEffect, useState } from "react";
import { getCurrentUser } from "../functions/functions";
import { LogoutBTN } from "../components/LogoutBTN";
import { Publicaciones } from "../components/Publicaciones";
import { Plus } from "../assets/plus";
export function Home() {
  const [user, setUser] = useState({});

  useEffect(() => {
    getCurrentUser(setUser);
  }, []);
  return (
    <>
      <div>
        <div className="flex justify-between px-3 pt-4 pb-3 border border-black border-b-1">
          <a className="size-8" href="perfil">
            <img src={user.profileimg || "aa.jpg"} alt="" className="w-full h-full rounded-full object-cover" />
          </a>
          <div>X</div>
          <div>C</div>
        </div>
        {/* <Publicaciones / */}
      </div>
      <div className="absolute bottom-3 right-4">
        <Plus />
      </div>
      {/* <LogoutBTN /> */}
    </>
  );
}
