import { FC } from "react"
import { Loading } from "./"
import { watchBtn } from "../styles"
import { MovieSlides } from "./"
import { useGetMoviesQuery } from "../features/MovieApiSlice"

interface PropType {
  title: string
}

const Section: FC<PropType> = ({ title }) => {
  const { data, isLoading, error } = useGetMoviesQuery([])

  if (isLoading) return <Loading />

  if (error) {
    return <h1>Error fetching movies.</h1>
  }

  return (
    <section>
      <div className="flex justify-between">
        <h2 className="text-white text-2xl font-bold">{title}</h2>
        <button className={`${watchBtn} border-1 border-white cursor-pointer`}>View all</button>
      </div>
      <div>
        <MovieSlides movies={data.results.slice(0, 10)} category="" />
      </div>
    </section>
  )
}

export default Section