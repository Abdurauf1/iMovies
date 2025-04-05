import { AnimatePresence } from "framer-motion"
import { FC } from "react"
import { useAppContext } from "../context/context"
import { motion } from "framer-motion"

const VideoModal: FC = () => {
  const { isModalOpen, closeModal } = useAppContext()

  return (
    <AnimatePresence>
      {isModalOpen && (
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/50 z-30">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            className="bg-white z-40 absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] w-full h-[300px] md:w-[500px]"
          >
            <button
              className="cursor-pointer"
              onClick={() => closeModal(false)}
            >
              Close
            </button>
            <div></div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

export default VideoModal