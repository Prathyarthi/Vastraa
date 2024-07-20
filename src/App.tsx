import Clients from "./components/Clients"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"

function App() {

  return (
    <>
      <Navbar />
      <div className="min-h-screen ml-[16px] mr-[16px] lg:ml-0 lg:mr-0 font-madeTommy lg:px-[74px] bg-[#FBFFFE]">
        <Hero />
      </div>
      <div className="-mt-16">
        <Clients />
      </div>
    </>
  )
}

export default App
