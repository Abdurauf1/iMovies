import { FC } from "react"

const Error: FC = () => {
  return (
    <div
      className="w-full h-screen bg-gray-900 flex items-center justify-center text-white"
    >
      <span className="text-xl">Error fetching movies</span>
    </div>
  )
}

export default Error