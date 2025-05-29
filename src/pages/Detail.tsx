import { FC } from "react"
import { useGetShowQuery } from "../features/GetShowsApiSlice";
import { useParams } from "react-router-dom";
import { Error, Loader, Poster } from "../components";
import { maxWidth } from "../styles";

const Detail: FC = () => {
  const { category, id } = useParams()
  const {
    data: movie,
    isLoading,
    isFetching,
    isError
  } = useGetShowQuery({
    category: String(category),
    id: Number(id)
  })

  if (isLoading || isFetching) {
    return <Loader />
  }

  if (isError) {
    return <Error error="Something went wrong!" />
  }

  const {
    name: title,
    poster_path,
    backdrop_path
  } = movie

  console.log(movie);


  const backgroundStyle = {
    backgroundImage: `linear-gradient(to top, rgba(0,0,0), rgba(0,0,0,0.98),rgba(0,0,0,0.8) ,rgba(0,0,0,0.4)),url('https://image.tmdb.org/t/p/original/${backdrop_path}'`,
    backgroundPosition: "top",
    backgroundSize: "cover",
  };
  return (
    <section className={`w-full bg-gray-900 pb-20`} style={backgroundStyle}>
      <div className={`${maxWidth}`}>
        <Poster title={title} poster_path={poster_path} />
      </div>
    </section>
  )
}

export default Detail