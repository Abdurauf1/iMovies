import { FC } from "react"
import { PosterPropsType } from "../types"
import { useMotion } from "../hooks/useMotion"
import { motion } from "framer-motion"
import { Image } from "./"

const Poster: FC<PosterPropsType> = ({ poster_path, title, className }) => {
  const { zoomIn } = useMotion()

  return (
    <div className={`${className} md:block hidden`}>
      <motion.div
        variants={zoomIn(0.6, 0.8)}
        initial="hidden"
        animate="show"
        className="h-[380px] w-[254px]"
      >
        <Image
          width={254}
          height={380}
          src={`https://image.tmdb.org/t/p/original/${poster_path}`}
          alt={title}
          className="object-cover rounded-xl shadow-lg"
        />
      </motion.div>
    </div>
  )
}

export default Poster