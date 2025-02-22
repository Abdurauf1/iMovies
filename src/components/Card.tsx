import { FC } from "react"
import { Link } from "react-router-dom"
import { MovieType } from "../types"

interface PropType {
  movie: MovieType
  category: string
}

const Card: FC<PropType> = ({ movie, category }) => {
  const { id, poster_path, original_title } = movie

  return (
    <Link to={`/${category}/${id}`} className="w-[170px] h-[216px]">
      <img
        width={170}
        height={250}
        src={`https://image.tmdb.org/t/p/original/${poster_path}`}
        className="object-cover rounded-lg"
        alt={original_title}
      />
    </Link>
  )
}

export default Card