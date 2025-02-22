import { FC, useState } from "react"
import { LazyLoadImage } from "react-lazy-load-image-component"
import { ImageProps } from "../types"

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
      className={"transition-all duration-300 ease-in" + className + isImageLoaded ? "" : ""}
      alt={alt}
      onLoad={onLoad}
    />
  )
}

export default Image