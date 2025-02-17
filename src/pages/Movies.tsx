import { FC } from "react"
import { useGetMoviesQuery } from "../features/MovieApiSlice"
import { Loading } from "../components"

const Movies: FC = () => {
  const { data, error, isLoading } = useGetMoviesQuery([])

  if (isLoading) return <Loading />

  if (error) {
    return <h1>Error fetching movies.</h1>
  }

  return (
    <div className="w-full">
      <ul>
        {data.results.map((movie: any) => (
          <div key={movie.id}>
            <img src={movie.poster_path} alt="" />
            <li>{movie.original_title}</li>
          </div>
        ))}
      </ul>
    </div>
  )
}

export default Movies