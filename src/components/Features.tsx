import { BadgePercent, Shapes, Sparkles, Star } from "lucide-react";
import FeatureCard from "./FeatureCard";

const features = [
  {
    icon: <BadgePercent />,
    title: "Cost Effective",
    description:
      "Vastraa offers premium costumes for rent at affordable prices, providing high value without compromising on quality.",
  },
  {
    icon: <Sparkles />,
    title: "Easy Rentals",
    description:
      "Experience a seamless and straightforward rental process with Vastraa, making it easy to get the costume you need.",
  },
  {
    icon: <Star />,
    title: "Selection",
    description:
      "Vastraa provides a curated collection of top-quality costumes, ensuring the ideal choice for every special event and occasion.",
  },
  {
    icon: <Shapes />,
    title: "Collections",
    description:
      "Vastraa's extensive costume selection caters to diverse themes and events, offering something perfect for every unique requirement.",
  },
];

function Features() {
  return (
    <section id="whyVastraa" className="min-h-[80vh] pt-24 md:mt-2 md:pt-40">
      <div className="">
        <div className="flex space-x-4">
          <div className="h-36 min-w-[8px] rounded-full border bg-gradient lg:h-[110px] lg:min-w-[8px]"></div>
          <div className="flex flex-col">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold text-primary md:text-4xl md:font-semibold">
                Why Vastraa?
              </h1>
              <p className="text-base font-normal leading-[140%] text-primary">
                Vastraa is more than just a costume provider; we are your
                partners in creating unforgettable experiences. <br /> Our
                extensive collection and personalized service ensure you find
                the perfect attire for any event.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-12 items-center gap-10 space-y-5 md:mx-auto lg:flex lg:space-y-0">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
