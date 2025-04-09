import { FC } from "react"

const CatalogHeader: FC<{ category: string }> = ({ category }) => {
  const categoryTitles: any = {
    movie: "Movies",
    anime: "Anime",
    series: "TV Series"
  }

  return (
    <>
      <h1 className="text-white">{categoryTitles[category]}</h1>
    </>
  )
}

export default CatalogHeader