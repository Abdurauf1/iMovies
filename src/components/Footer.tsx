import { FC } from "react"
import PlayIcon from "../assets/icons/play.png"
import { footerLinks } from "../constants"

const Footer: FC = () => {
  return (
    <footer className="w-full bg-[url(./assets/images/footer-bg.webp)] bg-cover py-15">
      <div className="container mx-auto">
        <a href="/" className="flex gap-1 items-center text-center w-fit mx-auto mb-7">
          <img className="w-8" src={PlayIcon} alt="play_icon" />
          <span className="font-bold text-2xl text-white">iMovies</span>
        </a>
        <ul className="grid grid-cols-2 justify-start">
          {footerLinks.map(link => (
            <li>
              <a className="text-white hover:underline" href={link.path}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}

export default Footer