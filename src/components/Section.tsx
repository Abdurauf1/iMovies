import { FC } from "react"
import { Loading } from "./"
import { MovieSlides } from "./"
import { useGetMoviesQuery } from "../features/MovieApiSlice"

interface PropType {
  title: string
  category: string
}

const Section: FC<PropType> = ({ title, category }) => {
  const { data, isLoading, error } = useGetMoviesQuery([])

  if (isLoading) return <Loading />

  if (error) {
    return <h1>Error fetching movies.</h1>
  }

  return (
    <section>
      <div className="flex justify-between">
        <h2 className="text-white text-2xl font-bold">{title}</h2>
      </div>
      <div>
        <MovieSlides movies={data.results.slice(0, 10)} category={category} />
      </div>
    </section>
  )
}

export default Section