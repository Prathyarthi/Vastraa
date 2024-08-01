import Client_section from "./components/Client_section"
import Costume from "./components/Costume"
import Event from "./components/Event"
import Fashion from "./components/Fashion"
// import Clients from "./components/Clients"
import Hero from "./components/Hero"
import Independence_Banner from "./components/Independence_Banner"
import Navbar from "./components/Navbar"
import Why from "./components/Why"

function App() {

  return (
    <>
      <Navbar />
      <div className="min-h-screen ml-[16px] mr-[16px] lg:ml-[150px] lg:mr-[150px] font-madeTommy bg-[#FBFFFE]">
        <Hero />
      </div>
      <div className="ml-[16px] mr-[16px] lg:ml-[150px] lg:mr-[150px] font-madeTommy bg-[#FBFFFE]">
        <Client_section />
        <Costume />
        <Fashion />
      </div>
      <div className="mb-32">
        <Independence_Banner />
      </div>
      <div className="ml-[16px] mr-[16px] lg:ml-[150px] lg:mr-[150px] font-madeTommy bg-[#FBFFFE]">
        <Event />
        <Why />
      </div>
    </>
  )
}

export default App
