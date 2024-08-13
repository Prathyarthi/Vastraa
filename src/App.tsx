import { BrowserRouter } from "react-router-dom"
import Client_section from "./components/Client_section"
import Costume from "./components/Costume"
import Event from "./components/Event"
import Fashion from "./components/Fashion"
import Features from "./components/Features"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Why from "./components/Why"

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="ml-[16px] mr-[16px] lg:ml-[150px] lg:mr-[150px] font-madeTommy bg-[#FBFFFE]">
          <Hero />
          <Client_section />
          <Costume />
          <Fashion />
          <Event />
          <Features />
          <Why />
        </div>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
