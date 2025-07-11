import frame1 from "../assets/eventSectionImages/Frame 69@1x.png";
import frame2 from "../assets/eventSectionImages/Frame 75@1x.png";
import frame3 from "../assets/eventSectionImages/Frame 76@1x.png";
import frame4 from "../assets/eventSectionImages/Frame 77@1x.png";
import frame5 from "../assets/eventSectionImages/Frame 73@1x.png";
import CarouselComponent from "./CarouselComponent";
import { motion } from "motion/react";

const pics = [
  {
    id: 1,
    image: frame1,
  },
  {
    id: 2,
    image: frame2,
  },
  {
    id: 3,
    image: frame3,
  },
  {
    id: 4,
    image: frame4,
  },
  {
    id: 5,
    image: frame5,
  },
];

function Event() {
  return (
    <section id="events" className="min-h-[80vh] pt-24 md:pt-40">
      <div className="flex space-x-6">
        <div className="min-w-[8px] rounded-full border bg-gradient lg:h-[130px] lg:min-w-[8px]"></div>
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-primary md:text-4xl md:font-semibold">
            Event Management
          </h1>
          <p className="text-base font-normal leading-[140%] text-primary">
            Make your event unforgettable with our comprehensive management
            services. <br /> From sound and lighting to wedding planning,
            choreography, LED walls, and carnival events, we handle every detail
            with precision and creativity. Let us bring your vision to life!
          </p>
        </div>
      </div>

      <div className="mt-[30px] flex flex-col-reverse px-5 md:flex-col lg:grid lg:grid-cols-2 lg:justify-between lg:p-0">
        <div className="mt-4 flex">
          <ul className="list-disc space-y-4 text-base font-normal text-primary marker:text-gradient lg:ml-5 lg:mr-10">
            <motion.li
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <span className="text-gradient">Sound and Lighting:</span>{" "}
              Professional audio and visual setups for an immersive experience.
            </motion.li>
            <motion.li
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <span className="text-gradient">Wedding Planning:</span> From
              venue selection to decor, we handle every detail of your big day.
            </motion.li>
            <motion.li
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <span className="text-gradient">Choreography:</span> Expert
              choreography services to make your events lively and entertaining.
            </motion.li>
            <motion.li
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <span className="text-gradient">LED Walls:</span> High - quality
              LED walls for dynamic and engaging displays.
            </motion.li>
            <motion.li
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <span className="text-gradient">Carnival Events:</span> Fun -
              filled carnival setups to create a festive atmosphere.
            </motion.li>
            <motion.li
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <span className="text-gradient">School Annual Day:</span> Fun -
              filled carnival setups to create a festive atmosphere.
            </motion.li>
            <motion.h2
              className="-ml-5"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Our expert team ensures a seamless and spectacular experience,
              turning your vision into reality and creating lasting memories.
            </motion.h2>
          </ul>
        </div>

        <div className="mb-[10px]">
          <CarouselComponent images={pics} />
        </div>
      </div>
    </section>
  );
}

export default Event;
