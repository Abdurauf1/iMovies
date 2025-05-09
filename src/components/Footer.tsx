import { FC } from "react"
import PlayIcon from "../assets/icons/play.png"
import { footerLinks } from "../constants"

const Footer: FC = () => {
  return (
    <footer className="w-full bg-[url(./assets/images/footer-bg.webp)] bg-cover pt-15 pb-5">
      <div className="container mx-auto">
        <a href="/" className="flex gap-1 items-center text-center w-fit mx-auto mb-15">
          <img className="w-8" src={PlayIcon} alt="play_icon" />
          <span className="font-bold text-2xl text-white">iMovies</span>
        </a>
        <ul className="grid grid-cols-3 justify-start w-fit mx-auto gap-x-20">
          {footerLinks.map((link, index) => (
            <li key={index}>
              <a className="text-white hover:text-[#ff0000] duration-500" href={link.path}>{link.title}</a>
            </li>
          ))}
        </ul>
        <p className="text-gray-400 text-xs">© 2025 by Abdurauf Ashurov</p>
      </div>
    </footer>
  )
}

export default Footer