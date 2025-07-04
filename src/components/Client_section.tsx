import img1 from "../assets/clientSectionImages/logo-1-3@1x.png";
import img2 from "../assets/clientSectionImages/cropped-vydehi_logo1@1x.png";
import img3 from "../assets/clientSectionImages/_image@1x.png";
import img4 from "../assets/clientSectionImages/wf-logo-150x150@1x.png";
import img5 from "../assets/clientSectionImages/Sanjay-Ghodawat-International-School-3-e1689178667639@1x.png";
import img6 from "../assets/clientSectionImages/snis-logo1@1x.png";
import img7 from "../assets/clientSectionImages/logo.png@1x.png";
import img8 from "../assets/clientSectionImages/logo@1x.png";
import { motion } from "motion/react";

const pics = [
  {
    id: 1,
    image: img1,
  },
  {
    id: 2,
    image: img2,
  },
  {
    id: 3,
    image: img3,
  },
  {
    id: 4,
    image: img4,
  },
  {
    id: 5,
    image: img5,
  },
  {
    id: 6,
    image: img6,
  },
  {
    id: 7,
    image: img7,
  },
  {
    id: 8,
    image: img8,
  },
  {
    id: 1,
    image: img1,
  },
  {
    id: 2,
    image: img2,
  },
  {
    id: 3,
    image: img3,
  },
  {
    id: 4,
    image: img4,
  },
  {
    id: 5,
    image: img5,
  },
  {
    id: 6,
    image: img6,
  },
  {
    id: 7,
    image: img7,
  },
  {
    id: 8,
    image: img8,
  },
];

function Client_section() {
  return (
    <section
      id="#clients"
      className="mt-16 flex-col lg:relative lg:mt-0 lg:w-full"
    >
      <div className="mt-20 w-full">
        <div className="flex flex-col justify-center space-y-2 text-center">
          <h1 className="text-3xl font-semibold text-primary lg:mt-32">
            Our Clients
          </h1>
          <p className="font-normal text-primary">
            Our clients are at the heart of everything we do. We pride ourselves
            on delivering personalized, top-notch service to meet their unique
            needs. <br />
            From individuals to organizations, our commitment to excellence
            ensures their events are truly unforgettable.
          </p>
        </div>
      </div>

      <div className="group mt-10 flex w-full overflow-hidden px-4 sm:px-0 lg:mx-[20px] lg:space-x-8">
        <div className="flex w-full animate-scroll gap-x-4 space-x-4 group-hover:paused sm:gap-x-8 sm:space-x-8 lg:items-center lg:justify-center lg:space-x-8">
          {pics.map((pic, index) => (
            <motion.img
              key={`${pic.id}-${index}`}
              src={pic.image}
              alt="client logo"
              className="h-8 w-auto flex-shrink-0 object-contain sm:h-auto sm:w-auto"
              whileHover={{
                scale: 1.1,
                filter: "brightness(1.1)",
              }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Client_section;
