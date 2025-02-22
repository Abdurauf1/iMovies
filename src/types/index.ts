export interface NavLinksType {
  title: string
  path: string
}

export interface FooterLinksType {
  title: string
  path: string
}

export interface PosterPropsType {
  className?: string
  posterPath: string
  title: string
}

export interface MovieType {
  id: number
  poster_path: string
  original_title: string
  title: string
  name: string
  overview: string
  backdrop_path: string
}

export interface ImageProps {
  src: string
  className: string
  alt: string
  width: string | number
  height: string | number
  effect?: "zoomIn"
}