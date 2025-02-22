import { FC } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { MovieType } from "../types"
import { Card } from "./"

interface PropType {
  movies: MovieType[]
  category: string
}

const MovieSlides: FC<PropType> = ({ movies, category }) => {
  return (
    <Swiper slidesPerView="auto" spaceBetween={15}>
      {movies.map((movie) => (
        <SwiperSlide key={movie.id} className="flex mt-1 flex-col gap-2 max-w-[170px] rounded-lg">
          <Card movie={movie} category={category} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default MovieSlides