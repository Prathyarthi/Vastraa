import Banner from "./components/Banner"
import Client_section from "./components/Client_section"
import Costume from "./components/Costume"
import Event from "./components/Event"
import Fashion from "./components/Fashion"
// import Clients from "./components/Clients"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Why from "./components/Why"

function App() {

  return (
    <>
      <Navbar />
      <div className="min-h-screen ml-[16px] mr-[16px] lg:ml-0 lg:mr-0 font-madeTommy lg:px-[74px] bg-[#FBFFFE] relative">
        <Hero />
        <div className="absolute inset-0 flex items-end">
          <Banner />
        </div>
      </div>
      <div className="min-h-screen ml-[16px] mr-[16px] lg:ml-0 lg:mr-0 font-madeTommy lg:px-[74px] bg-[#FBFFFE]">
        <Client_section />
        <Costume />
        <Fashion />
        <Event />
        <Why />
      </div>
      {/* <div className="-mt-16">
        <Clients />
      </div> */}
      <div className="">
      </div>
    </>
  )
}

export default App
