import { FC } from "react"
import { IoSearch } from "react-icons/io5";

const Search: FC = () => {
  return (
    <div className="w-[300px] flex items-center mx-auto mb-7 relative">
      <input
        type="text"
        placeholder="Search"
        className="bg-gray-200 py-2 px-4 rounded-3xl w-full"
      />
      <button className="cursor-pointer absolute right-0">
        <IoSearch className="text-[#ff0000] font-bold mr-2 text-xl" />
      </button>
    </div>
  )
}

export default Search