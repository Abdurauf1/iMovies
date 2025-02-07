import { Swiper, SwiperSlide } from "swiper/react"

type Props = {
  num: number
}

const HeroSwiper = ({ num }: Props) => {
  return (
    <div className="w-full h-full bg-[url()]">
      <h1>hello {num} </h1>
    </div>
  )
}

const Hero = () => {
  return (
    <div className="w-screen h-screen">
      <Swiper
        className="h-full w-full"
        spaceBetween={0}
        slidesPerView={1}
        autoplay={true}
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

export default Hero