import { FC, useEffect, useState } from "react"
import { useGetShowsQuery } from "../features/GetShowsApiSlice"
import { Card, CatalogHeader, Search } from "../components"
import { useParams, useSearchParams } from "react-router-dom"
import { MovieType } from "../types"
import { maxWidth } from "../styles"

const Catalog: FC = () => {
  const [shows, setShows] = useState<MovieType[]>([])
  const [page, setPage] = useState<number>(1)
  const [query, _setQuery] = useSearchParams()
  const { category } = useParams()

  const type = query.get("type") || "popular";
  const searchQuery = query.get("search") || "";

  const { data, isLoading } = useGetShowsQuery({
    category,
    page,
    searchQuery,
    type
  })

  useEffect(() => {
    setPage(1)
  }, [category, searchQuery])

  useEffect(() => {
    if (isLoading) return;

    if (data?.results) {
      if (page > 1) {
        setShows((prev) => [...prev, ...data.results])
      } else {
        setShows([...data.results])
      }
    }
  }, [data, isLoading, page])

  return (
    <div className="h-screen bg-gray-900 py-20">
      <div className={`${maxWidth}`}>
        <Search />
        <CatalogHeader category={String(category)} />
        <section className="h-full">
          {!isLoading && (
            <div className="flex flex-wrap justify-between gap-y-6">
              {shows.map((movie) => (
                <div key={movie.id} className="rounded-lg overflow-hidden">
                  <Card movie={movie} category={String(category)} />
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  )
}

export default Catalog