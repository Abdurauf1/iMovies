import { FC } from "react"
import { useGetMoviesQuery } from "../features/MovieApiSlice"

const Movies: FC = () => {
  const { data, error, isLoading } = useGetMoviesQuery([])

  if (isLoading) return <h1>Loading movies...</h1>
  
  if (error) {
    console.log(error);
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