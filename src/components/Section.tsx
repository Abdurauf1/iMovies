import { FC } from "react"
import { Loading } from "./"
import { MovieSlides } from "./"
import { useGetShowsQuery } from "../features/GetShowsApiSlice"

interface PropType {
  title: string
  category: string
  type: string
}

const Section: FC<PropType> = ({ title, category, type }) => {
  const { data, isLoading, error } = useGetShowsQuery({
    category: category,
    type: type,
    page: 1
  })

  if (isLoading) return <Loading />

  if (error) {
    return <h1>Error fetching {title}.</h1>
  }

  return (
    <section>
      <div className="flex justify-between">
        <h2 className="text-white text-2xl font-bold">
          <span>{title}</span>
        </h2>
      </div>
      <div>
        <MovieSlides movies={data.results.slice(0, 10)} category={category} />
      </div>
    </section>
  )
}

export default Section