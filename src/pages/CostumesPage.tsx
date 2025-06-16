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
import Card from "../components//cards/CostumeCard";

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
    <section id="costumes" className="min-h-screen pt-24 md:pt-40">
      <div className="flex space-x-4">
        <div className="min-w-[8px] rounded-full border bg-gradient lg:h-[170px] lg:min-w-[8px]"></div>
        <div className="max-w-3xl space-y-4 sm:space-y-6">
          <h1 className="flex flex-wrap gap-2 text-2xl font-bold text-primary sm:text-3xl sm:font-semibold md:text-4xl">
            Cool <span className="text-gradient">Costume</span> Collection!
          </h1>

          <p className="text-base font-normal leading-relaxed text-primary">
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

      <div className="mx-auto my-8 grid grid-cols-1 place-items-center gap-4 sm:my-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
        {costumes.map((costume) => (
          <Card key={costume.id} image={costume.image} />
        ))}
      </div>

      <p className="max-w-3xl text-center text-lg font-normal text-primary sm:text-left sm:text-xl md:text-2xl">
        Discover a wide variety of styles,{" "}
        <span className="block text-gradient sm:inline">
          from classic to contemporary,
        </span>{" "}
        ensuring the perfect fit for your event!!!
      </p>
    </section>
  );
}

export default Costume;
