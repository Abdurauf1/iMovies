import PlayIcon from "../assets/icons/play.png"
import MoonIcon from "../assets/icons/moon.svg"
import { navLinks } from "../constants"
import { Link } from "react-router-dom"
import { FC } from "react"

const Navbar: FC = () => {
  return (
    <header className="w-full bg-transparent fixed top-0 z-50">
      <nav className="container py-5 flex justify-between items-center mx-auto">
        <a href="/" className="flex gap-1">
          <img className="w-8" src={PlayIcon} alt="play_icon" />
          <span className="font-bold text-2xl">iMovies</span>
        </a>
        <div className="flex items-center gap-8">
          <ul className="flex gap-5">
            {navLinks.map((navLink, index) => (
              <li key={index}>
                <Link className="hover:text-red-500 duration-200" to={navLink.path}>{navLink.title}</Link>
              </li>
            ))}
          </ul>
          <div className="cursor-pointer">
            <img className="w-7" src={MoonIcon} alt="moon_icon" />
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar