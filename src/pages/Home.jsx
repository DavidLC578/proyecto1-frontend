import { LogoutBTN } from "../components/LogoutBTN";
import { Publicaciones } from "../components/Publicaciones";
import { Plus } from "../assets/plus";
export function Home() {
  return (
    <>
      <div>
        <div className="flex justify-between px-3 pt-4 pb-3 border border-black border-b-1">
          <div className="w-8 h-8 rounded-full bg-white"></div>
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
