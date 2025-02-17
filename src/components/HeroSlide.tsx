import { FC } from "react"
import { motion } from "framer-motion"
import { useMotion } from "../hooks/useMotion"
import { mainHeading, maxWidth, paragraph, watchBtn } from "../styles"
import { Poster } from "./"
import { MovieType } from "../types"

const HeroSlide: FC<{ movie: MovieType }> = ({ movie }) => {
  const { staggerContainer, fadeDown } = useMotion()
  return (
    <div className={`${maxWidth} mx-auto flex items-center h-full flex-row lg:gap-32 sm:gap-20`}>
      <motion.div
        variants={staggerContainer(0.2, 0.3)}
        initial="hidden"
        animate="show"
        className="text-gray-300 sm:max-w-[80vw] max-w-[90vw] md:max-w-[420px] flex flex-col sm:gap-5 xs:gap-3 gap-[10px] sm:mb-8"
      >
        <motion.h2 variants={fadeDown} className={mainHeading}>
          {movie.original_title}
        </motion.h2>
        <motion.p variants={fadeDown} className={paragraph}>
          {movie.overview}
        </motion.p>
        <motion.div variants={fadeDown} className="flex flex-row items-center gap-4 sm:mt-6 xs:mt-5 mt-[18px]">
          <button
            className={`${watchBtn} bg-[#ff0000] border-[#ff0000] border-2 text-white cursor-pointer`}
          >
            Watch now
          </button>
          <button
            className={`${watchBtn} text-white cursor-pointer border-white border-2`}
          >
            Watch trailer
          </button>
        </motion.div>
      </motion.div>
      <Poster title={movie.title} posterPath={movie.poster_path} className="mr-auto" />
    </div >
  )
}

export default HeroSlide