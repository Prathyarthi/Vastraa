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
    <section id="costumes" className="min-h-screen md:pt-40 pt-24 md:mt-12">
      <div className="flex space-x-6">
        <div className="bg-gradient lg:h-[104px] lg:min-w-[8px] min-w-[8px] border rounded-full"></div>
        <div className="space-y-4">
          <h1 className="font-bold flex gap-2 md:font-semibold md:text-4xl text-3xl text-primary">
            Cool <p className="text-gradient">Costume</p> Collection!
          </h1>
          <p className="text-base text-primary font-normal leading-[140%]">
            Our clients are at the heart of everything we do. We pride ourselves
            on delivering personalized, top-notch service to meet their unique
            needs. <br />
            From individuals to organizations, our commitment to excellence
            ensures their events are truly unforgettable.
          </p>
        </div>
      </div>

      <div className="lg:grid lg:grid-cols-3 grid grid-cols-1 mt-12 md:gap-6 mb-10">
        {costumes.map((costume) => (
          <Card key={costume.id} image={costume.image} />
        ))}
      </div>
      <p className="text-primary font-normal text-2xl">
        Discover a wide variety of styles,{" "}
        <span className="text-gradient">
          from classic to contemporary,
          <br />{" "}
        </span>
        ensuring the perfect fit for your event!!!
      </p>
    </section>
  );
}

export default Costume;
