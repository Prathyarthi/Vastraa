import img1 from "../assets/costumes/Frame 181@1x.png";
import img2 from "../assets/costumes/Frame 182@1x.png";
import img3 from "../assets/costumes/Frame 183@1x.png";
import img4 from "../assets/costumes/Frame 184@1x.png";
import img5 from "../assets/costumes/Frame 185@1x.png";
import img6 from "../assets/costumes/Frame 186@1x.png";
import img7 from "../assets/costumes/Frame 188@1x.png";
import img8 from "../assets/costumes/Frame 190@1x.png";
import img9 from "../assets/costumes/Frame 104.png";
import img10 from "../assets/costumes/Frame 105.png";
import img11 from "../assets/costumes/Frame 106.png";
import img12 from "../assets/costumes/Frame 194@1x.png";
import img13 from "../assets/costumes/Frame 191@1x.png";
import img14 from "../assets/costumes/Frame 193@1x.png";
import img15 from "../assets/costumes/Frame 189@1x.png";
import img16 from "../assets/costumes/Frame 192@1x.png";
import Card from "./Card";

const costumes = [
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
    id: 9,
    image: img9,
  },
  {
    id: 10,
    image: img10,
  },
  {
    id: 11,
    image: img11,
  },
  {
    id: 12,
    image: img12,
  },
  {
    id: 13,
    image: img13,
  },
  {
    id: 14,
    image: img14,
  },
  {
    id: 15,
    image: img15,
  },
  {
    id: 16,
    image: img16,
  },
];

function Costume() {
  return (
    <section
      id="costumes"
      className="min-h-screen py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8"
    >
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
        <div className="bg-gradient h-24 sm:h-32 w-2 sm:min-w-[8px] rounded-full self-start"></div>

        <div className="space-y-4 sm:space-y-6 max-w-3xl">
          <h1 className="flex flex-wrap gap-2 text-2xl sm:text-3xl md:text-4xl font-bold sm:font-semibold text-primary">
            Cool <span className="text-gradient">Costume</span> Collection!
          </h1>

          <p className="text-base text-primary font-normal leading-relaxed">
            Our clients are at the heart of everything we do. We pride ourselves
            on delivering personalized, top-notch service to meet their unique
            needs.
            <span className="hidden sm:inline">
              <br />
            </span>
            From individuals to organizations, our commitment to excellence
            ensures their events are truly unforgettable.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 my-8 sm:my-12">
        {costumes.map((costume) => (
          <Card key={costume.id} image={costume.image} />
        ))}
      </div>

      <p className="text-primary font-normal text-lg sm:text-xl md:text-2xl text-center sm:text-left max-w-3xl">
        Discover a wide variety of styles,{" "}
        <span className="text-gradient block sm:inline">
          from classic to contemporary,
        </span>{" "}
        ensuring the perfect fit for your event!!!
      </p>
    </section>
  );
}

export default Costume;
