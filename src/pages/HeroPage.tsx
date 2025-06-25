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
import Carousel from "@/components/Carousel";
import { FlipWords } from "@/components/ui/flip-words";
import { motion } from "motion/react";

const pics = [
  { id: 1, image: krishna, alt: "Krishna Costume" },
  { id: 2, image: animal, alt: "Animal Costume" },
  { id: 3, image: disco, alt: "Disco Costume" },
  { id: 4, image: freedom, alt: "Freedom Costume" },
  { id: 5, image: superhero, alt: "Superhero Costume" },
  { id: 6, image: retero, alt: "Retro Costume" },
  { id: 7, image: halloween, alt: "Halloween Costume" },
  { id: 8, image: dance, alt: "Dance Costume" },
  { id: 9, image: doctor, alt: "Doctor Costume" },
  { id: 10, image: classical, alt: "Classical Costume" },
];

function Hero() {
  const handleClick = () => {
    const element = document.getElementById("costumes");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  // const words = [
  //   "Celebration",
  //   "Occasion",
  //   "Festivity",
  //   "Gathering",
  //   "Wedding",
  //   "Ceremony",
  //   "Party",
  //   "Function",
  //   "Festive Moment",
  //   "Graduation Day",
  //   "Theme Party",
  //   "Cultural Festival",
  //   "School Event",
  // ];

  const words = [
    "Wedding",
    "Birthday Party",
    "Graduation Day",
    "Cultural Festival",
    "School Event",
    "Theme Party",
  ];
  return (
    <section
      id="hero"
      className="mt-5 flex flex-col lg:mt-0 lg:h-[80vh] lg:w-full lg:items-center lg:justify-center"
    >
      <div className="flex w-full flex-col-reverse lg:flex-row lg:justify-between">
        <div className="mt-5 flex flex-col space-y-4 text-center font-normal lg:mt-0 lg:w-1/2 lg:place-content-center lg:text-start">
          <h1 className="text-3xl font-normal leading-[120%] lg:text-[36px]">
            Make Every
            <FlipWords words={words} /> <br /> Memorable with{" "}
            <span className="font-bold text-gradient md:font-medium">
              {" "}
              Vastraa's <br /> Costumes and Events!
            </span>
          </h1>
          <div>
            <p className="text-[16px] font-[24px] leading-[150%] text-[#1B1B1E]">
              Transform your celebrations with Vastraa's exceptional{" "}
              <br className="hidden lg:block" /> costumes and event services.
              From grand weddings and <br className="hidden lg:block" /> themed
              parties to school annual days, Vastraa makes{" "}
              <br className="hidden lg:block" />
              every occasion extraordinary.
            </p>
          </div>
          <div className="flex justify-center space-x-4 lg:justify-start">
            <motion.button
              onClick={handleClick}
              className="w-[156px] rounded-lg bg-gradient px-6 py-2 font-normal text-white"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 8px 25px rgba(147, 51, 234, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Costumes
            </motion.button>
            <motion.button
              className="hidden w-[156px] rounded-lg border-2 border-black px-6 py-2 font-bold text-[#1B1B1E] md:font-semibold"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Bulk Order?
            </motion.button>
          </div>
        </div>

        <div className="mb-[30px] flex justify-center lg:w-1/2 lg:justify-end">
          <Carousel images={pics} delay={3000} />
        </div>
      </div>
      <div className="absolute bottom-0 hidden w-full md:block">
        <Banner />
      </div>
    </section>
  );
}

export default Hero;
