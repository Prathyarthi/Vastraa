
import krishna from "../assets/heroImages/Frame 127@1x.png";
import animal from "../assets/heroImages/Frame 125@1x.png";
import disco from "../assets/heroImages/Frame 126@1x.png";
import freedom from "../assets/heroImages/Frame 128@1x.png";
import superhero from "../assets/heroImages/Frame 129@1x.png";
import retero from "../assets/heroImages/Frame 130@1x.png";
import halloween from "../assets/heroImages/Frame 131@1x.png";
import dance from "../assets/heroImages/Frame 132@1x.png";
import doctor from "../assets/heroImages/Frame 133@1x.png";
import classical from "../assets/heroImages/Frame 136@1x.png";

import Banner from "../components/Banner";
import HeroSectionBgCarousel from "@/components/heroSectionBgCarousal";

const pics = [krishna,animal,disco,freedom,superhero,retero,halloween,dance,doctor,classical];

function Hero() {
  const handleClick = () => {
    const element = document.getElementById("costumes");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="lg:w-full lg:h-[80vh] lg:items-center lg:justify-center flex flex-col mt-5 lg:mt-0"
    >
      <div className="flex lg:justify-between lg:flex-row flex-col-reverse w-full">
        <div className="lg:w-1/2 flex flex-col lg:place-content-center space-y-4 font-normal lg:text-start text-center mt-5 lg:mt-0">
          <h1 className="text-3xl lg:text-[36px] leading-[120%] font-normal">
            Make Every Events <br /> Extraordinary with{" "}
            <span className="text-gradient md:font-medium font-bold">
              {" "}
              Vastraa's <br /> Costumes and Events!
            </span>
          </h1>
          <div>
            <p className="text-[#1B1B1E] text-[16px] leading-[150%] font-[24px]">
              Transform your celebrations with Vastraa's exceptional{" "}
              <br className="hidden lg:block" /> costumes and event services.
              From grand weddings and <br className="hidden lg:block" /> themed
              parties to school annual days, Vastraa makes{" "}
              <br className="hidden lg:block" />
              every occasion extraordinary.
            </p>
          </div>
          <div className="flex space-x-4 justify-center lg:justify-start">
            <button
              onClick={handleClick}
              className="bg-gradient font-normal text-white px-6 py-2 rounded-lg w-[156px]"
            >
              Costumes
            </button>
            <button className="font-bold md:font-semibold text-[#1B1B1E] border-black border-2 px-6 py-2 rounded-lg w-[156px] hidden">
              Bulk Order?
            </button>
          </div>
        </div>

        <div className="lg:w-1/2 flex lg:justify-end justify-center mb-[30px]">
<HeroSectionBgCarousel
            className="-z-10 h-[400px] w-full max-w-[565px] rounded-2xl md:h-[500px] lg:h-[600px]"
            images={pics}
            interval={4000}
          />
        </div>
      </div>
      <div className="w-full absolute bottom-0 hidden md:block">
        <Banner />
      </div>
    </section>
  );
}

export default Hero;
