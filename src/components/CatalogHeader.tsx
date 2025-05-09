import { FC } from "react"

const CatalogHeader: FC<{ category: string }> = ({ category }) => {
  const categoryTitles: any = {
    movie: "Movies",
    anime: "Anime",
    tv: "TV Series"
  }

  return (
    <>
      <h1
        className="text-white mb-8 text-2xl font-bold"
      >
        {categoryTitles[category]}
      </h1>
    </>
  )
}

export default CatalogHeader