import { Comment } from "../assets/Comment"
import { Like } from "../assets/like"
export function Publicaciones() {
    return (
        <>
            <div className="flex ps-4 pt-5">
                <div className="w-10 h-10 rounded-full bg-white flex-shrink-0"></div>
                <div className="ps-3 space-y-1">
                    <h1>Nombre</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias voluptatum laboriosam repudiandae.</p>
                    <div className="flex space-x-16 pt-2">
                        <Comment />
                        <Like />
                    </div>
                </div>
            </div>
        </>
    )
}
