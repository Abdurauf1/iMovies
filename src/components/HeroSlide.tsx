import { FC } from "react"
import { motion } from "framer-motion"
import { useMotion } from "../hooks/useMotion"
import { Poster } from "./"
import { MovieType } from "../types"
import { mainHeading, maxWidth, paragraph, watchBtn } from "../styles"
import { useNavigate } from "react-router-dom"

const HeroSlide: FC<{ movie: MovieType }> = ({ movie }) => {
  const { staggerContainer, fadeDown } = useMotion()
  const navigate = useNavigate()

  const { id, original_title, overview, title, poster_path } = movie

  const handleWatchNow = () => {
    navigate(`/movie/${id}`)
  }

  const showTrailer = () => {
    
  }

  return (
    <div className={`${maxWidth} mx-auto flex items-center h-full  flex-row lg:gap-32 sm:gap-20`}>
      <motion.div
        variants={staggerContainer(0.2, 0.3)}
        initial="hidden"
        animate="show"
        className="text-gray-300 sm:max-w-[80vw] max-w-[90vw] md:max-w-[420px] flex flex-col sm:gap-5 xs:gap-3 gap-[10px] sm:mb-8"
      >
        <motion.h2 variants={fadeDown} className={mainHeading}>
          {original_title}
        </motion.h2>
        <motion.p variants={fadeDown} className={paragraph}>
          {overview}
        </motion.p>
        <motion.div variants={fadeDown} className="flex flex-row items-center gap-4 sm:mt-6 xs:mt-5 mt-[18px]">
          <button
            onClick={handleWatchNow}
            className={`${watchBtn} bg-[#ff0000]`}
          >
            Watch now
          </button>
          <button
            onClick={showTrailer}
            className={`${watchBtn} border-1`}
          >
            Watch trailer
          </button>
        </motion.div>
      </motion.div>
      <Poster title={title} poster_path={poster_path} className="mr-auto" />
    </div >
  )
}

export default HeroSlide