import { FC } from "react"
import { Loading } from "./"
import { MovieSlides } from "./"
import { useGetShowsQuery } from "../features/GetShowsApiSlice"
import { Link } from "react-router-dom"

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
        <Link to={`/${category}?type=${type}`} className="text-white text-2xl font-bold hover:text-red-500 duration-200">
          <span>{title} &gt;</span>
        </Link>
      </div>
      <div>
        <MovieSlides movies={data.results.slice(0, 10)} category={category} />
      </div>
    </section>
  )
}

export default Section