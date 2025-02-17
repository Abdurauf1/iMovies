import { FC } from "react"
import { PosterPropsType } from "../types"
import { useMotion } from "../hooks/useMotion"
import { motion } from "framer-motion"

const Poster: FC<PosterPropsType> = ({ posterPath, title, className }) => {
  const { zoomIn } = useMotion()

  return (
    <div className={`${className} mk:block`}>
      <motion.div
        variants={zoomIn(0.6, 0.8)}
        initial="hidden"
        animate="show"
        className="h-[380px] w-[254px]"
      >
        <img
          src={`https://image.tmdb.org/t/p/original/${posterPath}`}
          alt={title}
          className="object-cover rounded-xl shadow-lg"
        />
      </motion.div>
    </div>
  )
}

export default Poster