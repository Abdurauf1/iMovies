import React, { FC } from "react"
import { Hero, Section } from "../components/"
import { sections } from "../constants"
import { maxWidth } from "../styles"

const Home: FC = () => {
  return (
    <React.Fragment>
      <Hero />
      <main className="bg-gray-900 py-20">
        <div className={`${maxWidth} lg:mt-12 md:mt-8 sm:mt-6 xs:mt-4 mt-2`}>
          {sections.map(({ title, category, type }) => (
            <Section key={title} title={title} category={category} type={type} />
          ))}
        </div>
      </main>
    </React.Fragment>
  )
}

export default Home