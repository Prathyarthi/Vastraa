import img1 from "../assets/teamImages/Frame 171@1x.png";
import img2 from "../assets/teamImages/Frame 175@1x.png";
import img3 from "../assets/teamImages/Frame 174@1x.png";
import img4 from "../assets/teamImages/Frame 172@1x.png";
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
];

function Team() {
  return (
    <section id="#team" className="min-h-[80vh] pt-24 md:pt-24">
      <div className="lg:grid lg:grid-cols-2 lg:gap-20">
        <div className="flex space-x-4">
          <div className="h-[98px] min-w-[8px] rounded-full border bg-gradient lg:h-[120px] lg:min-w-[8px]"></div>
          <div className="flex flex-col">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold text-primary md:text-4xl md:font-semibold">
                Team
              </h1>
              <p className="text-base font-normal leading-[140%] text-primary">
                Expert Team with Dance and Art Backgrounds{" "}
                <br className="hidden lg:block" />
                Crafting Unique Costumes
              </p>
            </div>

            <div className="mt-10 space-y-6 font-normal">
              <p>
                Vastraa's team is composed of talented individuals with diverse
                backgrounds in dance and art. Our experts bring a unique
                perspective to costume design, blending their extensive
                experience in performance with artistic flair. This combination
                ensures that every costume we offer is not only visually
                striking but also thoughtfully crafted to enhance your
                experience.
              </p>
              <p>
                From intricate details to creative concepts, our team's passion
                and expertise drive our commitment to delivering exceptional
                costumes that make every event memorable. Discover the talent
                behind Vastraa and see how their background elevates your
                costume rental experience.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 flex place-content-end lg:mt-0">
          <div className="grid grid-cols-2 gap-8">
            {pics.map((pic, index) => (
              <motion.img
                key={pic.id}
                src={pic.image}
                alt={`Team member ${index + 1}`}
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="overflow-hidden rounded-lg"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
