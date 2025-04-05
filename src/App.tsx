import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Footer, Navbar, VideoModal } from "./components"
import { Home, NotFound } from "./pages"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <VideoModal />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
