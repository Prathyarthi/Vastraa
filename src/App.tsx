import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./components/Home"
import BlogPage from "./components/BlogPage"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="" element={<Home />} />
            <Route path="blogs" element={<BlogPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
