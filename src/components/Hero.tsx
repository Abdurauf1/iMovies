import { FC } from "react"
import { Swiper, SwiperSlide } from "swiper/react"

type Props = {
  num: number
}

const Hero: FC = () => {
  return (
    <div className="w-screen h-screen">
      <Swiper
        className="h-full w-full"
        spaceBetween={0}
        slidesPerView={1}
        autoplay
        loop
      >
        <SwiperSlide>
          <HeroSwiper num={1} />
        </SwiperSlide>
        <SwiperSlide>
          <HeroSwiper num={2} />
        </SwiperSlide>
        <SwiperSlide>
          <HeroSwiper num={3} />
        </SwiperSlide>
        <SwiperSlide>
          <HeroSwiper num={4} />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

const HeroSwiper = ({ num }: Props) => {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <h1>Slide {num}</h1>
    </div>
  )
}

export default Hero