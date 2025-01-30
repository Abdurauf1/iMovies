import { Swiper, SwiperSlide } from "swiper/react"

const HeroSwiper = () => {
  return (
    <div className="w-full h-full bg-[url()]">

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
      >
        <SwiperSlide className="text-center">
          <HeroSwiper />
        </SwiperSlide>
        <SwiperSlide className="text-center">
          <HeroSwiper />
        </SwiperSlide>
        <SwiperSlide className="text-center">
          <HeroSwiper />
        </SwiperSlide>
        <SwiperSlide className="text-center">
          <HeroSwiper />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Hero