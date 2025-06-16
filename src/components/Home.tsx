import Client_section from "./Client_section";
import Costume from "../pages/CostumesPage";
import Event from "./Event";
import Fashion from "../pages/FashionPage";
import Features from "./Features";
import Hero from "../pages/HeroPage";
import Team from "./Team";

function Home() {
  return (
    <div className="ml-[16px] mr-[16px] bg-[#FBFFFE] font-madeTommy lg:ml-[150px] lg:mr-[150px]">
      <Hero />
      <Client_section />
      <Costume />
      <Fashion />
      <Event />
      <Features />
      <Team />
    </div>
  );
}

export default Home;
