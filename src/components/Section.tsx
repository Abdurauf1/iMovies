import { FC } from "react"
import { MovieSlides } from "./"
import { useGetShowsQuery } from "../features/GetShowsApiSlice"
import { Link } from "react-router-dom"
import { Skeleton } from "@mui/material"

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

  if (error) {
    return <h1>Error fetching {title}.</h1>
  }

  return (
    <section>
      <div className="flex justify-between">
        <Link
          to={`/${category}?type=${type}`}
          className="text-white text-2xl font-bold flex items-center gap-1 group"
        >
          <span className="text-[#ff0000]">|</span>
          <span>{title}</span>
          <span className="group-hover:text-[#ff0000] duration-200">{">"}</span>
        </Link>
      </div>
      <div>
        {!isLoading ? (
          <MovieSlides movies={data.results.slice(0, 10)} category={category} />
        ) : (
          <Skeleton className="mt-6 mb-14" variant="rectangular" width={170} height={250} />
        )}
      </div>
    </section>
  )
}

export default Section