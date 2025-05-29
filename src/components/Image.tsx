import { FC, useState } from "react"
import { LazyLoadImage } from "react-lazy-load-image-component"
import { ImageProps } from "../types"
import { duration } from "../styles"

const Image: FC<ImageProps> = ({ src, alt, className, width, height, effect }) => {
  const [isImageLoaded, setIsImageLoaded] = useState<boolean>(false)

  const onLoad = () => {
    setIsImageLoaded(true)
  }

  return (
    <LazyLoadImage
      src={src}
      width={width}
      height={height}
      className={`
        ${duration}
        ${className}
        ${!isImageLoaded
          ? `opacity-0 ${effect === "zoomIn" ? "scale-95" : ""}`
          : `opacity-100 ${effect === "zoomIn" ? "scale-100" : ""}`
        }
      `}
      alt={alt}
      onLoad={onLoad}
    />
  )
}

export default Image