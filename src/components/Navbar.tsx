import PlayIcon from "../assets/icons/play.png"
import { navLinks } from "../constants"
import { Link } from "react-router-dom"
import { FC, useEffect, useState } from "react"
import { FaMoon } from "react-icons/fa"

const Navbar: FC = () => {
  const [scroll, setScroll] = useState<number>(window.scrollY)

  const handleScroll = () => {
    setScroll(window.scrollY)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])


  return (
    <header className={`${scroll > 20 ? "backdrop-blur-xl" : "bg-transparent"} w-full fixed top-0 z-50`}>
      <nav className="container py-5 flex justify-between items-center mx-auto">
        <a href="/" className="flex gap-1">
          <img className="w-8" src={PlayIcon} alt="play_icon" />
          <span className="font-bold text-2xl text-white">iMovies</span>
        </a>
        <div className="flex items-center gap-8">
          <ul className="flex gap-5">
            {navLinks.map((navLink, index) => (
              <li key={index}>
                <Link className="hover:text-red-500 duration-200 text-white" to={navLink.path}>{navLink.title}</Link>
              </li>
            ))}
          </ul>
          <div className="cursor-pointer">
            <FaMoon className="text-white" />
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar