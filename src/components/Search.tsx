import { FC } from "react"

const Search: FC = () => {
  return (
    <div className="flex">
      <input
        type="text"
        placeholder="Search"
      />
      <button className="cursor-pointer">
        search
      </button>
    </div>
  )
}

export default Search