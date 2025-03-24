import { FC } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { MovieType } from "../types"
import { Autoplay } from "swiper/modules"
import { HeroSlide, Loading, Error } from "./"
import { useGetShowsQuery } from "../features/GetShowsApiSlice"

const Hero: FC = () => {
  const { data, isLoading, error } = useGetShowsQuery({
    category: "movie",
    type: "popular",
    page: 1
  })

  if (isLoading) return <Loading />

  if (error) return <Error />

  return (
    <Swiper
      loop
      className="lg:h-screen sm:h-[640px] xs:h-[520px] h-[460px] w-full"
      slidesPerView={1}
      autoplay={{
        delay: 10000,
        disableOnInteraction: false
      }}
      modules={[Autoplay]}
    >
      {data.results.map((movie: MovieType) => (
        <SwiperSlide
          key={movie.id}
          className="h-full w-full"
          style={{
            backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0.5)),url('https://image.tmdb.org/t/p/original/${movie.backdrop_path}'`,
            backgroundPosition: "center",
            backgroundSize: "cover"
          }}
        >
          {({ isActive }) => (isActive ? <HeroSlide movie={movie} /> : null)}
        </SwiperSlide>
      ))}
    </Swiper>
  )
}


export default Hero