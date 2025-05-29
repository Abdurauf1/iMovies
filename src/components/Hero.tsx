import { FC } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { MovieType } from "../types"
import { Autoplay } from "swiper/modules"
import { HeroSlide, Error, Loader } from "./"
import { useGetShowsQuery } from "../features/GetShowsApiSlice"

const Hero: FC = () => {
  const { data, isLoading, error } = useGetShowsQuery({
    category: "movie",
    type: "popular",
    page: 1
  })

  if (isLoading) return <Loader />

  if (error) return <Error error="Error fetching movies" />

  return (
    <Swiper
      autoplay={{
        delay: 10000,
        disableOnInteraction: false
      }}
      slidesPerView={1}
      modules={[Autoplay]}
      className="lg:h-screen sm:h-[640px] xs:h-[520px] h-[460px] w-full"
      loop
    >
      {data.results.map((movie: MovieType) => (
        <SwiperSlide
          key={movie.id}
          className="h-full w-full bg-center bg-cover"
          style={{
            backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.5)), url('https://image.tmdb.org/t/p/original/${movie.backdrop_path}'`,
          }}
        >
          {({ isActive }) => (isActive ? <HeroSlide movie={movie} /> : null)}
        </SwiperSlide>
      ))}
    </Swiper>
  )
}


export default Hero