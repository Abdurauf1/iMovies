import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css'
import { Footer, Navbar } from "./components"
import { Anime, Home, Movies, NotFound, Series } from "./pages"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/series" element={<Series />} />
        <Route path="/anime" element={<Anime />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
