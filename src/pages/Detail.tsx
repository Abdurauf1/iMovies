import { FC } from "react"
import { useParams } from "react-router-dom"
import { useGetShowQuery } from "../features/GetShowsApiSlice"

const Detail: FC = () => {
  const { category, id } = useParams()

  const { data, isLoading, isError } = useGetShowQuery({
    category: String(category),
    id: Number(id)
  })

  const { title } = data.movies;

  return (
    <>
      {title}
    </>
  )
}

export default Detail