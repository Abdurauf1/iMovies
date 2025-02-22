import { FC } from "react"
import { Loading } from "../components"
import { useGetAnimesQuery } from "../features/AnimeApiSlice"

const Anime: FC = () => {
  const { data, error, isLoading } = useGetAnimesQuery([])

  if (isLoading) return <Loading />

  if (error) {
    return <h1>Error fetching animes.</h1>
  }
  return (
    <div className="w-full">
      <ul>
        {data.results.map((anime: any) => (
          <div key={anime.id}>
            <img src={anime.poster_path} alt="" />
            <li>{anime.original_title}</li>
          </div>
        ))}
      </ul>
    </div>
  )
}

export default Anime