import { FC } from "react"
import { Link } from "react-router-dom"
import { MovieType } from "../types"
import { Image } from "./"

interface PropType {
  movie: MovieType
  category: string
}

const Card: FC<PropType> = ({ movie, category }) => {
  const { id, poster_path, original_title } = movie

  return (
    <Link to={`/${category}/${id}`} className="w-[170px] h-[216px] rounded-lg overflow-hidden">
      <Image
        width={170}
        height={250}
        src={`https://image.tmdb.org/t/p/original/${poster_path}`}
        className="object-cover rounded-lg transition-all duration-300 ease-in-out"
        alt={original_title}
        effect="zoomIn"
      />
    </Link>
  )
}

export default Card