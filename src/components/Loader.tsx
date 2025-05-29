import { FC } from "react"
import { CircularProgress } from "@mui/material"

const Loader: FC = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gray-900">
      <CircularProgress color="error" />
    </div>
  )
}

export default Loader