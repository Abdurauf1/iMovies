import { FC } from "react"
import { Hero, Section } from "../components/"
import { sectionTitle } from "../constants"

const Home: FC = () => {
  return (
    <>
      <Hero />
      <main className="bg-gray-900 py-20">
        <div className="mx-auto container">
          {sectionTitle.map((title, index) => (
            <Section key={index} title={title} />
          ))}
        </div>
      </main>
    </>
  )
}

export default Home