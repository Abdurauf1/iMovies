import { Route, Routes } from "react-router-dom"
import { Footer, Loader, Navbar, VideoModal } from "./components"
import { lazy, Suspense } from "react"

const Home = lazy(() => import("./pages/Home"))
const Catalog = lazy(() => import("./pages/Catalog"))
const Detail = lazy(() => import("./pages/Detail"))
const NotFound = lazy(() => import("./pages/NotFound"))

function App() {
  return (
    <>
      <Navbar />
      <VideoModal />
      <main>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:category" element={<Catalog />} />
            <Route path="/:category/:id" element={<Detail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </>
  )
}

export default App
