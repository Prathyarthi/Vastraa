import Client_section from "./Client_section"
import Costume from "./Costume"
import Event from "./Event"
import Fashion from "./Fashion"
import Features from "./Features"
import Hero from "./Hero"
import Why from "./Why"

function Home() {
    return (
        <div className="ml-[16px] mr-[16px] lg:ml-[150px] lg:mr-[150px] font-madeTommy bg-[#FBFFFE]">
            <Hero />
            <Client_section />
            <Costume />
            <Fashion />
            <Event />
            <Features />
            <Why />
        </div>
    )
}

export default Home